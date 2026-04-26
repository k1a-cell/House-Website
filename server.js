const express = require('express');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Database setup
const db = new sqlite3.Database('./database.db');
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        email TEXT UNIQUE,
        password TEXT
    )`);
    db.run(`CREATE TABLE IF NOT EXISTS properties (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        type TEXT,
        price REAL,
        location TEXT,
        bedrooms INTEGER,
        bathrooms INTEGER,
        home_type TEXT,
        description TEXT,
        image TEXT,
        lat REAL,
        lng REAL
    )`);
    db.run(`CREATE TABLE IF NOT EXISTS favorites (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        property_id INTEGER,
        FOREIGN KEY(user_id) REFERENCES users(id),
        FOREIGN KEY(property_id) REFERENCES properties(id)
    )`);
    // Insert sample properties
    const sampleProperties = [
        { title: 'Beautiful House', type: 'buy', price: 500000, location: 'Anytown, USA', bedrooms: 3, bathrooms: 2, home_type: 'house', description: 'A lovely home.', image: 'https://via.placeholder.com/300x200', lat: 40.7128, lng: -74.0060 },
        { title: 'Modern Apartment', type: 'rent', price: 2000, location: 'Cityville, USA', bedrooms: 2, bathrooms: 1, home_type: 'apartment', description: 'Urban living.', image: 'https://via.placeholder.com/300x200', lat: 40.7589, lng: -73.9851 },
        { title: 'Land for Sale', type: 'sell', price: 100000, location: 'Countryside, USA', bedrooms: 0, bathrooms: 0, home_type: 'land', description: 'Build your dream.', image: 'https://via.placeholder.com/300x200', lat: 40.6501, lng: -73.9496 }
    ];
    sampleProperties.forEach(prop => {
        db.run(`INSERT OR IGNORE INTO properties (title, type, price, location, bedrooms, bathrooms, home_type, description, image, lat, lng) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [prop.title, prop.type, prop.price, prop.location, prop.bedrooms, prop.bathrooms, prop.home_type, prop.description, prop.image, prop.lat, prop.lng]);
    });
});

// Routes
app.get('/', (req, res) => {
    res.render('index', { user: req.session.user });
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    db.get('SELECT * FROM users WHERE email = ?', [email], (err, user) => {
        if (err) return res.status(500).send('Error');
        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.render('login', { error: 'Invalid credentials' });
        }
        req.session.user = user;
        res.redirect('/');
    });
});

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    db.run('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword], function(err) {
        if (err) return res.render('signup', { error: 'User already exists' });
        req.session.user = { id: this.lastID, username, email };
        res.redirect('/');
    });
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

app.get('/api/properties', (req, res) => {
    const { type, minPrice, maxPrice, location, bedrooms, bathrooms, homeType } = req.query;
    let query = 'SELECT * FROM properties WHERE 1=1';
    const params = [];
    if (type) { query += ' AND type = ?'; params.push(type); }
    if (minPrice) { query += ' AND price >= ?'; params.push(minPrice); }
    if (maxPrice) { query += ' AND price <= ?'; params.push(maxPrice); }
    if (location) { query += ' AND location LIKE ?'; params.push(`%${location}%`); }
    if (bedrooms) { query += ' AND bedrooms >= ?'; params.push(bedrooms); }
    if (bathrooms) { query += ' AND bathrooms >= ?'; params.push(bathrooms); }
    if (homeType) { query += ' AND home_type = ?'; params.push(homeType); }
    db.all(query, params, (err, properties) => {
        if (err) return res.status(500).json({ error: 'Error' });
        res.json(properties);
    });
});

app.get('/property/:id', (req, res) => {
    const id = req.params.id;
    db.get('SELECT * FROM properties WHERE id = ?', [id], (err, property) => {
        if (err) return res.status(500).send('Error');
        res.render('property', { property, user: req.session.user });
    });
});

app.post('/api/favorite/:id', (req, res) => {
    if (!req.session.user) return res.status(401).json({ error: 'Not logged in' });
    const propertyId = req.params.id;
    const userId = req.session.user.id;
    db.run('INSERT OR IGNORE INTO favorites (user_id, property_id) VALUES (?, ?)', [userId, propertyId], function(err) {
        if (err) return res.status(500).json({ error: 'Error' });
        res.json({ success: true });
    });
});

app.get('/favorites', (req, res) => {
    if (!req.session.user) return res.redirect('/login');
    const userId = req.session.user.id;
    db.all(`SELECT p.* FROM properties p JOIN favorites f ON p.id = f.property_id WHERE f.user_id = ?`, [userId], (err, properties) => {
        if (err) return res.status(500).send('Error');
        res.render('favorites', { properties, user: req.session.user });
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', { user: req.session.user });
});

app.post('/contact', (req, res) => {
    // Handle contact form, e.g., send email
    res.render('contact', { success: 'Message sent!', user: req.session.user });
});

app.get('/mortgage', (req, res) => {
    res.render('mortgage', { user: req.session.user });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});