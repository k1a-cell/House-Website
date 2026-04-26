// script.js

// Sample property data
const properties = [
    {
        id: 1,
        price: 500000,
        beds: 3,
        baths: 2,
        image: 'https://via.placeholder.com/300x200',
        address: '123 Main St, Anytown'
    },
    {
        id: 2,
        price: 600000,
        beds: 4,
        baths: 3,
        image: 'https://via.placeholder.com/300x200',
        address: '456 Elm St, Anytown'
    },
    {
        id: 3,
        price: 450000,
        beds: 2,
        baths: 1,
        image: 'https://via.placeholder.com/300x200',
        address: '789 Oak St, Anytown'
    },
    {
        id: 4,
        price: 700000,
        beds: 5,
        baths: 4,
        image: 'https://via.placeholder.com/300x200',
        address: '101 Pine St, Anytown'
    }
];

// Function to render properties
function renderProperties(props) {
    const container = document.querySelector('.carousel-container');
    if (container) {
        container.innerHTML = '';
        props.forEach(prop => {
            const card = document.createElement('div');
            card.className = 'home-card';
            card.innerHTML = `
                <img src="${prop.image}" alt="Home">
                <p>$${prop.price.toLocaleString()}</p>
                <p>${prop.beds} beds, ${prop.baths} baths</p>
                <p>${prop.address}</p>
            `;
            container.appendChild(card);
        });
    }
}

// Initial render
renderProperties(properties);

// Search functionality
const searchBtn = document.getElementById('search-btn');
if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        const query = document.getElementById('search-input').value.toLowerCase();
        const filtered = properties.filter(prop =>
            prop.address.toLowerCase().includes(query) ||
            prop.price.toString().includes(query) ||
            prop.beds.toString().includes(query)
        );
        renderProperties(filtered);
    });
}

// BuyAbility calculator (simple simulation)
const buyAbilityBtn = document.querySelector('.buyability button');
if (buyAbilityBtn) {
    buyAbilityBtn.addEventListener('click', () => {
        alert('BuyAbility calculator would open here. For demo, entering sample values.');
        // In a real app, this would calculate based on inputs
    });
}

// Service buttons
document.querySelectorAll('.service button').forEach(btn => {
    btn.addEventListener('click', () => {
        alert(`${btn.previousElementSibling.textContent} feature would be implemented here.`);
    });
});

// Sign in link
const signInLink = document.querySelector('a[href="#signin"]');
if (signInLink) {
    signInLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Sign in modal would open here.');
    });
}

// Join button
const joinBtn = document.querySelector('.nav-right button');
if (joinBtn) {
    joinBtn.addEventListener('click', () => {
        alert('Join modal would open here.');
    });
};