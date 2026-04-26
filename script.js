// script.js

// Sample property data
const properties = [
    {
        id: 1,
        title: 'Beautiful House',
        type: 'buy',
        price: 500000,
        location: 'Texas, USA',
        bedrooms: 5,
        bathrooms: 6,
        home_type: 'house',
        description: 'A lovely home with modern amenities.',
        image: 'https://i.ytimg.com/vi/jm2v-L8om1o/maxresdefault.jpg',
        lat: 40.7128,
        lng: -74.0060,
        virtualTour: 'https://my.matterport.com/show/?m=example1',
        interiorImages: [
            'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1584622781564-1d987fa99f95?w=400&h=300&fit=crop'
        ]
    },
    {
        id: 2,
        title: 'Modern Apartment',
        type: 'rent',
        price: 2000,
        location: 'Cityville, USA',
        bedrooms: 4,
        bathrooms: 7,
        home_type: 'apartment',
        description: 'Urban living at its best.',
        image: 'https://www.souciehorner.com/wp-content/uploads/2017/04/Kitchen3-1536.jpg',
        lat: 40.7589,
        lng: -73.9851,
    },
    /*     virtualTour: 'https://my.matterport.com/show/?m=demo',
        interiorImages: ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop','https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop','https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=400&h=300&fit=crop','https://images.unsplash.com/photo-1584622781564-1d987fa99f95?w=400&h=300&fit=crop']
    }, */
    {
        id: 3,
        title: 'Land for Sale',
        type: 'sell',
        price: 100000,
        location: 'Countryside, USA',
        bedrooms: 0,
        bathrooms: 0,
        home_type: 'land',
        description: 'Build your dream home here.',
        image: 'https://assets.land.com/resizedimages/10000/0/h/80/w/1-5264153745',
        lat: 40.6501,
        lng: -73.9496,
    },
/*         virtualTour: 'https://my.matterport.com/show/?m=demo',
        interiorImages: ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop','https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop','https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=400&h=300&fit=crop','https://images.unsplash.com/photo-1584622781564-1d987fa99f95?w=400&h=300&fit=crop']
    }, */
    {
        id: 4,
        title: 'Luxury Villa',
        type: 'buy',
        price: 1200000,
        location: 'Hillside, USA',
        bedrooms: 8,
        bathrooms: 5,
        home_type: 'house',
        description: 'Stunning views and luxury finishes.',
        image: 'https://mldvwwasb8tu.i.optimole.com/w:1155/h:770/q:90/f:best/ig:avif/https://veebrant.com/wp-content/uploads/2023/06/golden-mile-villa.jpg',
        lat: 40.7282,
        lng: -73.7949,
    },
/*         virtualTour: 'https://my.matterport.com/show/?m=demo',
        interiorImages: ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop','https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop','https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=400&h=300&fit=crop','https://images.unsplash.com/photo-1584622781564-1d987fa99f95?w=400&h=300&fit=crop']
    }, */
    {
        id: 5,
        title: 'Cozy House in Florida',
        type: 'buy',
        price: 350000,
        location: 'Florida, USA',
        bedrooms: 4,
        bathrooms: 4,
        home_type: 'house',
        description: 'Perfect starter home with great potential.',
        image: 'https://a0.muscache.com/im/pictures/7d575c3e-9b99-4b38-9aa9-279d37c950c5.jpg',
        lat: 40.7180,
        lng: -74.0060,
       /*  virtualTour: 'https://my.matterport.com/show/?m=demo',
        interiorImages: ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop','https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop','https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=400&h=300&fit=crop','https://images.unsplash.com/photo-1584622781564-1d987fa99f95?w=400&h=300&fit=crop'] */
    },
    {
        id: 6,
        title: 'Studio Apartment in Cityville',
        type: 'rent',
        price: 1500,
        location: 'Cityville, USA',
        bedrooms: 3,
        bathrooms: 3,
        home_type: 'apartment',
        description: 'Downtown studio with parking.',
        image: 'https://tse2.mm.bing.net/th/id/OIP.O2av6rF9Yuc33LwidJESwAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3',
        lat: 40.7589,
        lng: -73.9851,
        virtualTour: ''
    },
    {
        id: 7,
        title: 'Spacious Lot in Hillside',
        type: 'sell',
        price: 250000,
        location: 'Hillside, USA',
        bedrooms: 5,
        bathrooms: 5,
        home_type: 'land',
        description: '2 acres of prime real estate.',
        image: 'https://buildgreennh.com/wp-content/uploads/2024/08/4-modern-luxury-hillside-mansions-estate-with-wine-cellar-built-into-a-hill-in-lush-green-mossy-scenery-3-683x1024.jpg',
        lat: 40.7320,
        lng: -73.7900,
        virtualTour: ''
    },
    {
        id: 8,
        title: 'Modern Townhouse in Anytown',
        type: 'rent',
        price: 2500,
        location: 'Anytown, USA',
        bedrooms: 3,
        bathrooms: 2,
        home_type: 'house',
        description: 'Contemporary design with updated kitchen.',
        image: 'https://assets.architecturaldesigns.com/cdn-cgi/image/width=3840,quality=85,format=auto/plan_assets/362571794/original/52354WM_Render006_1712844477.jpg',
        lat: 40.7100,
        lng: -74.0120,
        virtualTour: ''
    },
    {
        id: 9,
        title: 'Penthouse in Cityville',
        type: 'buy',
        price: 950000,
        location: 'Cityville, USA',
        bedrooms: 6,
        bathrooms: 7,
        home_type: 'apartment',
        description: 'Luxury penthouse with rooftop terrace.',
        image: 'https://sgluxuryhomes.com.sg/wp-content/uploads/Singapore-penthouse.jpeg',
        lat: 40.7650,
        lng: -73.9800,
        virtualTour: ''
    },
    {
        id: 10,
        title: 'Ranch Home in Countryside',
        type: 'buy',
        price: 450000,
        location: 'Countryside, USA',
        bedrooms: 4,
        bathrooms: 3,
        home_type: 'house',
        description: 'Beautiful ranch with acres of land.',
        image: 'https://assets.architecturaldesigns.com/plan_assets/344962896/large/444363GDN_Photo16_1669470952.jpg',
        lat: 40.6450,
        lng: -73.9550,
        virtualTour: ''
    },
    // International Properties - 20 Cities
    {
        id: 11,
        title: 'Manhattan Penthouse',
        type: 'buy',
        price: 3500000,
        location: 'New York, USA',
        bedrooms: 8,
        bathrooms: 9,
        home_type: 'apartment',
        description: 'Luxury penthouse with Central Park views.',
        image: 'https://media.cnn.com/api/v1/images/stellar/prod/111-west-57th-street-quadplex-80-2-credit-to-hayes-davidson.jpg?q=w_2000,c_fill',
        lat: 40.7580,
        lng: -73.9855,
        virtualTour: ''
    },
    {
        id: 12,
        title: 'Beverly Hills Mansion',
        type: 'buy',
        price: 5000000,
        location: 'Los Angeles, USA',
        bedrooms: 10,
        bathrooms: 12,
        home_type: 'house',
        description: 'Gorgeous mansion with pool and guest house.',
        image: 'https://nimvo.com/wp-content/uploads/2017/06/North-Whittier-Drive-mansion.jpg',
        lat: 34.0901,
        lng: -118.4065,
        virtualTour: ''
    },
    {
        id: 13,
        title: 'Downtown Toronto Condo',
        type: 'rent',
        price: 2800,
        location: 'Toronto, Canada',
        bedrooms: 5,
        bathrooms: 9,
        home_type: 'apartment',
        description: 'Modern condo with city view and gym.',
        image: 'https://tse1.mm.bing.net/th/id/OIP.kaAkEAzsiLGSfugm6NZE0gHaFj?rs=1&pid=ImgDetMain&o=7&rm=3',
        lat: 43.6629,
        lng: -79.3957,
        virtualTour: ''
    },
    {
        id: 14,
        title: 'Historic London Townhouse',
        type: 'buy',
        price: 2200000,
        location: 'London, UK',
        bedrooms: 4,
        bathrooms: 3,
        home_type: 'house',
        description: 'Elegant Victorian townhouse in Kensington.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/ed/08/8e/guests-entrance.jpg?w=700&h=-1&s=1',
        lat: 51.5074,
        lng: -0.1278,
        virtualTour: ''
    },
    {
        id: 15,
        title: 'Parisian Apartment',
        type: 'buy',
        price: 1800000,
        location: 'Paris, France',
        bedrooms: 7,
        bathrooms: 6,
        home_type: 'apartment',
        description: 'Charming apartment in Le Marais district.',
        image: 'https://i.insider.com/511d4d0b69bedd1f13000011?width=600&format=jpeg&auto=webp',
        lat: 48.8566,
        lng: 2.3522,
        virtualTour: ''
    },
    {
        id: 16,
        title: 'Berlin Modern Loft',
        type: 'rent',
        price: 1200,
        location: 'Berlin, Germany',
        bedrooms: 5,
        bathrooms: 3,
        home_type: 'apartment',
        description: 'Contemporary loft in Kreuzberg neighborhood.',
        image: 'https://i.pinimg.com/736x/7b/bb/10/7bbb103fcd89b9c5295416c3229956c4.jpg',
        lat: 52.5200,
        lng: 13.4050,
        virtualTour: ''
    },
    {
        id: 17,
        title: 'Barcelona Beach House',
        type: 'buy',
        price: 1500000,
        location: 'Barcelona, Spain',
        bedrooms: 7,
        bathrooms: 7,
        home_type: 'house',
        description: 'Beachfront property with Mediterranean views.',
        image: 'https://img.jamesedition.com/listing_images/2024/05/29/09/06/12/572c2b70-8fef-497d-b227-011075000773/je/1040x620xc.jpg',
        lat: 41.3851,
        lng: 2.1734,
        virtualTour: ''
    },
    {
        id: 18,
        title: 'Amsterdam Canal House',
        type: 'buy',
        price: 1950000,
        location: 'Amsterdam, Netherlands',
        bedrooms: 6,
        bathrooms: 9,
        home_type: 'house',
        description: 'Traditional canal house with period features.',
        image: 'https://whatsupwithamsterdam.com/cms/wp-content/uploads/2014/02/Amsterdam-Canal-Houses.jpg',
        lat: 52.3676,
        lng: 4.9041,
        virtualTour: ''
    },
    {
        id: 19,
        title: 'Tokyo Modern Apartment',
        type: 'rent',
        price: 3500,
        location: 'Tokyo, Japan',
        bedrooms: 5,
        bathrooms: 5,
        home_type: 'apartment',
        description: 'Stylish apartment in Shibuya with high-speed internet.',
        image: 'https://www.e-architect.com/wp-content/uploads/2024/01/cuadro-nakano-north-tokyo-japan-apartments-r060124-s1.jpg',
        lat: 35.6762,
        lng: 139.6503,
        virtualTour: ''
    },
    {
        id: 20,
        title: 'Singapore Luxury Condo',
        type: 'buy',
        price: 2800000,
        location: 'Singapore',
        bedrooms: 9,
        bathrooms: 9,
        home_type: 'apartment',
        description: 'Upscale condominium with resort facilities.',
        image: 'https://img.iproperty.com.my/angel-legacy/1110x624-crop/static/2021/08/traits-that-make-your-condo-more-appealing.jpg',
        lat: 1.3521,
        lng: 103.8198,
        virtualTour: ''
    },
    {
        id: 21,
        title: 'Dubai Waterfront Villa',
        type: 'buy',
        price: 4200000,
        location: 'Dubai, UAE',
        bedrooms: 7,
        bathrooms: 7,
        home_type: 'house',
        description: 'Stunning villa on Palm Jumeirah with beach access.',
        image: 'https://dubai-property.investments/uploads/images/2024-03/the-waterside-villas-ext-14.jpg',
        lat: 25.2048,
        lng: 55.2708,
        virtualTour: ''
    },
    {
        id: 22,
        title: 'Bangkok Riverside Apartment',
        type: 'rent',
        price: 1800,
        location: 'Bangkok, Thailand',
        bedrooms: 5,
        bathrooms: 5,
        home_type: 'apartment',
        description: 'Luxury riverside apartment with maid service.',
        image: 'https://thumbs.dreamstime.com/z/riverside-apartments-bangkok-overlooking-wide-chao-phraya-river-centre-thailand-36669583.jpg',
        lat: 13.7563,
        lng: 100.5018,
        virtualTour: ''
    },
    {
        id: 23,
        title: 'Sydney Opera House View Apartment',
        type: 'buy',
        price: 1650000,
        location: 'Sydney, Australia',
        bedrooms: 5,
        bathrooms: 5,
        home_type: 'apartment',
        description: 'Modern apartment with iconic Opera House views.',
        image: 'https://media.istockphoto.com/id/928803942/photo/sydney-opera-house-in-the-afternoon-sun.jpg?s=170667a&w=0&k=20&c=fd8fIaysgYqqpE_LdpkCx14Cs-FHxwEyqsip83lo7Cw=',
        lat: -33.8688,
        lng: 151.2093,
        virtualTour: ''
    },
    {
        id: 24,
        title: 'Melbourne Boutique House',
        type: 'rent',
        price: 2200,
        location: 'Melbourne, Australia',
        bedrooms: 3,
        bathrooms: 2,
        home_type: 'house',
        description: 'Charming Victorian house in trendy inner suburb.',
        image: 'https://metricon.imgix.net/home-designs/mantra/facades/MantraLuxe_1.jpg?auto=format%2Ccompress&fit=crop&ar=16:9&w=1024',
        lat: -37.8136,
        lng: 144.9631,
        virtualTour: ''
    },
    {
        id: 25,
        title: 'São Paulo Luxury Apartment',
        type: 'buy',
        price: 1200000,
        location: 'São Paulo, Brazil',
        bedrooms: 7,
        bathrooms: 5,
        home_type: 'apartment',
        description: 'High-rise apartment in prestigious Ibirapuera area.',
        image: 'https://i.ytimg.com/vi/ERfgePFstWg/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGEMgZSgoMA8=&rs=AOn4CLAiAS1Qm9welOSvQ20pRct8mJsYFw',
        lat: -23.5505,
        lng: -46.6333,
        virtualTour: ''
    },
    {
        id: 26,
        title: 'Buenos Aires Colonial Home',
        type: 'buy',
        price: 850000,
        location: 'Buenos Aires, Argentina',
        bedrooms: 9,
        bathrooms: 9,
        home_type: 'house',
        description: 'Beautiful colonial-style home in La Boca.',
        image: 'https://i.pinimg.com/originals/79/e6/bc/79e6bcd590f694c669a9965da0868e28.jpg',
        lat: -34.6037,
        lng: -58.3816,
        virtualTour: ''
    },
    {
        id: 27,
        title: 'Mumbai Coastal Apartment',
        type: 'buy',
        price: 950000,
        location: 'Mumbai, India',
        bedrooms: 9,
        bathrooms: 10,
        home_type: 'apartment',
        description: 'Modern apartment with Arabian Sea view.',
        image: 'https://tse3.mm.bing.net/th/id/OIP.AogQArJS4ZpEoL6w9l7J_gHaFh?rs=1&pid=ImgDetMain&o=7&rm=3',
        lat: 19.0760,
        lng: 72.8777,
        virtualTour: ''
    },
    {
        id: 28,
        title: 'Seoul Gangnam Penthouse',
        type: 'buy',
        price: 2100000,
        location: 'Seoul, South Korea',
        bedrooms: 7,
        bathrooms: 5,
        home_type: 'apartment',
        description: 'Luxury penthouse in exclusive Gangnam district.',
        image: 'https://tse1.mm.bing.net/th/id/OIP.ezrSFhYCf5lW2ll2DBSEnwHaE7?rs=1&pid=ImgDetMain&o=7&rm=3',
        lat: 37.4979,
        lng: 127.0276,
        virtualTour: ''
    },
    {
        id: 29,
        title: 'Cairo Nile View Villa',
        type: 'buy',
        price: 1100000,
        location: 'Cairo, Egypt',
        bedrooms: 5,
        bathrooms: 3,
        home_type: 'house',
        description: 'Elegant villa with stunning Nile River views.',
        image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/592428928.jpg?k=e9a5ca021977fbbd5ed7a31e892aef00a856b01a3ac8aab78fec8f35da578ee2&o=&hp=1',
        lat: 30.0444,
        lng: 31.2357,
        virtualTour: ''
    },
    {
        id: 30,
        title: 'Cape Town Table Mountain Home',
        type: 'buy',
        price: 1350000,
        location: 'Cape Town, South Africa',
        bedrooms: 4,
        bathrooms: 3,
        home_type: 'house',
        description: 'Spectacular home with Table Mountain backdrop.',
        image: 'https://th.bing.com/th/id/R.77ab921f8a5d58bae418d64b5f296445?rik=LHrW4bVlFsMIGA&riu=http%3a%2f%2fwww.roxannereid.co.za%2fuploads%2f3%2f7%2f7%2f8%2f3778676%2f1943157_orig.jpg&ehk=HLtc1lziwyZtMih61YIcTdomOpjXmrUe3MuTcqSdynA%3d&risl=&pid=ImgRaw&r=0',
        lat: -33.9249,
        lng: 18.4241,
        virtualTour: ''
    },
    {
        id: 31,
        title: 'Mexico City Penthouse',
        type: 'buy',
        price: 1400000,
        location: 'Mexico City, Mexico',
        bedrooms: 5,
        bathrooms: 5,
        home_type: 'apartment',
        description: 'Modern penthouse in upscale Polanco district.',
        image: 'https://img.freepik.com/premium-photo/modern-luxury-penthouse-terrace-mexico-city_1015255-232664.jpg',
        lat: 19.4326,
        lng: -99.1332,
        virtualTour: ''
    },
    {
        id: 32,
        title: 'Vancouver Waterfront Condo',
        type: 'rent',
        price: 3200,
        location: 'Vancouver, Canada',
        bedrooms: 4,
        bathrooms: 4,
        home_type: 'apartment',
        description: 'Luxury condo overlooking Burrard Inlet.',
        image: 'https://thumbs.dreamstime.com/b/waterfront-residential-condominiums-vancouver-wa-modern-58500683.jpg',
        lat: 49.2827,
        lng: -123.1207,
        virtualTour: ''
    },
    {
        id: 33,
        title: 'Rome Historic Apartment',
        type: 'buy',
        price: 1750000,
        location: 'Rome, Italy',
        bedrooms: 6,
        bathrooms: 5,
        home_type: 'apartment',
        description: 'Charming apartment near Spanish Steps.',
        image: 'https://tse3.mm.bing.net/th/id/OIP.WPJGl60Rb25C9jf9bnZOdwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
        lat: 41.9028,
        lng: 12.4964,
        virtualTour: ''
    },
    {
        id: 34,
        title: 'Hong Kong Harbor View',
        type: 'buy',
        price: 3800000,
        location: 'Hong Kong',
        bedrooms: 7,
        bathrooms: 7,
        home_type: 'apartment',
        description: 'Compact but luxurious apartment with harbor views.',
        image: 'https://cdn.tatlerasia.com/tatlerasia/i/2022/04/27140713-mg-0209_cover_1500x1000.jpg',
        lat: 22.3193,
        lng: 114.1694,
        virtualTour: ''
    },
    {
        id: 35,
        title: 'Miami Beach Villa',
        type: 'buy',
        price: 2750000,
        location: 'Miami, USA',
        bedrooms: 9,
        bathrooms: 9,
        home_type: 'house',
        description: 'Beachfront villa with pool and ocean access.',
        image: 'https://photos.zillowstatic.com/fp/437b77bff37fc9c782d0e8c1846ed62a-cc_ft_1536.jpg',
        lat: 25.7617,
        lng: -80.1918,
        virtualTour: ''
    },
    {
        id: 36,
        title: 'San Francisco Bay View Condo',
        type: 'buy',
        price: 2200000,
        location: 'San Francisco, USA',
        bedrooms: 14,
        bathrooms:12,
        home_type: 'apartment',
        description: 'Modern condo with Golden Gate Bridge views.',
        image: 'https://th.bing.com/th/id/R.3ecb2fcbb14af35980aadac8ebeae066?rik=lSOFnW0TJ%2bFARw&riu=http%3a%2f%2fmirasf.com%2fuploads%2fimages%2fmira-building-2.jpg&ehk=21fjercmKnt1Vmkwr5MX4AG0pEoS83CHh7zeBHFAYqg%3d&risl=&pid=ImgRaw&r=0',
        lat: 37.7749,
        lng: -122.4194,
        virtualTour: ''
    },
    {
        id: 37,
        title: 'Stockholm Modern Villa',
        type: 'buy',
        price: 1650000,
        location: 'Stockholm, Sweden',
        bedrooms: 7,
        bathrooms: 5,
        home_type: 'house',
        description: 'Contemporary villa with lake views.',
        image: 'https://img.jamesedition.com/listing_images/2023/10/30/12/02/57/88842451-36fc-4917-a075-6dbdcf99a4f5/je/1040x620xc.jpg',
        lat: 59.3293,
        lng: 18.0686,
        virtualTour: ''
    },
    {
        id: 38,
        title: 'Prague Historic House',
        type: 'buy',
        price: 1100000,
        location: 'Prague, Czech Republic',
        bedrooms: 8,
        bathrooms: 8,
        home_type: 'house',
        description: 'Charming Czech house in Old Town.',
        image: 'https://thumbs.dreamstime.com/b/historical-house-facade-wenzel-storch-house-old-town-square-prague-czech-republic-prague-czech-republic-june-120643895.jpg',
        lat: 50.0755,
        lng: 14.4378,
        virtualTour: ''
    },
    {
        id: 39,
        title: 'Istanbul Bosphorus Apartment',
        type: 'buy',
        price: 1280000,
        location: 'Istanbul, Turkey',
        bedrooms: 6,
        bathrooms: 6,
        home_type: 'apartment',
        description: 'Luxury apartment overlooking the Bosphorus.',
        image: 'https://istanbulapartmentsforsale.com/wp-content/uploads/2024/07/Luxury-apartments-to-buy-in-Istanbul-Beskitas-Bosphorus-views1.jpeg?v=1720094952',
        lat: 41.0082,
        lng: 28.9784,
        virtualTour: ''
    },
    {
        id: 40,
        title: 'Auckland Harbourside House',
        type: 'buy',
        price: 1580000,
        location: 'Auckland, New Zealand',
        bedrooms: 5,
        bathrooms: 4,
        home_type: 'house',
        description: 'Beautiful house near Auckland Harbour.',
        image: 'https://img.jamesedition.com/listing_images/2024/10/11/16/03/13/d2d2a573-b640-477a-8ad9-a85659243dbd/je/1100xxs.jpg',
        lat: -37.0082,
        lng: 174.7850,
        virtualTour: ''
    },
    {
        id: 41,
        title: 'Lisbon Hilltop Apartment',
        type: 'buy',
        price: 950000,
        location: 'Lisbon, Portugal',
        bedrooms: 7,
        bathrooms: 5,
        home_type: 'apartment',
        description: 'Charming apartment with Tagus River views.',
        image: 'https://onyxp.com/wp-content/uploads/2022/08/1-9.jpg',
        lat: 38.7223,
        lng: -9.1393,
        virtualTour: ''
    }
];

// Local storage for favorites and user
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// Extract unique cities from properties
function getCities() {
    const cities = {};
    properties.forEach(prop => {
        const city = prop.location.split(',')[0].trim();
        if (!cities[city]) {
            cities[city] = [];
        }
        cities[city].push(prop);
    });
    return cities;
}

// Search functionality for homepage
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const searchDropdown = document.getElementById('search-dropdown');

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (query.length < 1) {
            searchDropdown.style.display = 'none';
            return;
        }
        
        const cities = getCities();
        const matchingCities = Object.keys(cities).filter(city => 
            city.toLowerCase().includes(query)
        );
        
        let resultsHTML = '';
        matchingCities.forEach(city => {
            const propsInCity = cities[city];
            resultsHTML += `
                <div style="padding: 10px; border-bottom: 1px solid #eee; cursor: pointer;" onclick="selectCity('${city}')">
                    <strong style="color: #007bff;">${city}</strong>
                    <div style="font-size: 0.85rem; color: #666;">
                        ${propsInCity.length} property(ies) available
                        <br>
                        ${propsInCity.slice(0, 3).map(p => `<span style="display: inline-block; background: #f0f0f0; padding: 2px 6px; margin: 2px 2px 2px 0; border-radius: 3px; font-size: 0.8rem;">$${p.price.toLocaleString()}</span>`).join('')}
                        ${propsInCity.length > 3 ? `<span style="color: #999;">+${propsInCity.length - 3} more</span>` : ''}
                    </div>
                </div>
            `;
        });
        
        if (resultsHTML) {
            searchDropdown.innerHTML = resultsHTML;
            searchDropdown.style.display = 'block';
        } else {
            searchDropdown.innerHTML = '<div style="padding: 10px; color: #999;">No cities found</div>';
            searchDropdown.style.display = 'block';
        }
    });

    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase().trim();
        if (query) {
            searchForLocation(query);
        }
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.toLowerCase().trim();
            if (query) {
                searchForLocation(query);
            }
        }
    });
}

// Search for location and navigate
function searchForLocation(query) {
    window.location.href = `search-results.html?q=${encodeURIComponent(query)}`;
}

// Select city from dropdown
function selectCity(city) {
    window.location.href = `search-results.html?q=${encodeURIComponent(city)}`;
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (searchDropdown && !searchDropdown.contains(e.target) && e.target !== searchInput) {
        searchDropdown.style.display = 'none';
    }
});

// Function to render properties
function renderProperties(props, containerId = 'recommended-properties') {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = '';
        props.forEach(prop => {
            const col = document.createElement('div');
            col.className = 'col-md-4 mb-4';
            col.innerHTML = `
                <div class="card">
                    <img src="${prop.image}" class="card-img-top" alt="Property">
                    <div class="card-body">
                        <h5 class="card-title">${prop.title} - $${prop.price.toLocaleString()}</h5>
                        <p class="card-text">${prop.bedrooms} beds, ${prop.bathrooms} baths</p>
                        <p>${prop.location}</p>
                        <a href="property.html?id=${prop.id}" class="btn btn-primary">View Details</a>
                        <button class="btn btn-outline-secondary ms-2" onclick="toggleFavorite(${prop.id})">${favorites.includes(prop.id) ? 'Unsave' : 'Save'}</button>
                    </div>
                </div>
            `;
            container.appendChild(col);
        });
    }
}

// Toggle favorite
function toggleFavorite(id) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(fav => fav !== id);
    } else {
        favorites.push(id);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderProperties(properties); // Re-render
}

// Load recommended properties on index
if (document.getElementById('recommended-properties')) {
    renderProperties(properties.slice(0, 3));
}

// Mortgage Calculator
function calculateMortgage() {
    console.log('Mortgage calculator called');
    const price = parseFloat(document.getElementById('homePrice').value);
    const downPaymentPercent = parseFloat(document.getElementById('downPayment').value) / 100;
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
    const loanTerm = parseInt(document.getElementById('loanTerm').value) * 12;

    console.log('Calculator inputs:', { price, downPaymentPercent, interestRate, loanTerm });

    if (isNaN(price) || isNaN(downPaymentPercent) || isNaN(interestRate) || isNaN(loanTerm)) {
        console.error('Invalid input values');
        return;
    }

    const downPayment = price * downPaymentPercent;
    const loanAmount = price - downPayment;
    const monthlyPayment = loanAmount * (interestRate * Math.pow(1 + interestRate, loanTerm)) / (Math.pow(1 + interestRate, loanTerm) - 1);
    const resultsDiv = document.getElementById('results');

    console.log('Calculation results:', { downPayment, loanAmount, monthlyPayment });

    if (resultsDiv) {
        resultsDiv.innerHTML = `
            <div class="alert alert-success">
                <h4>Results</h4>
                <p>Down Payment: $${downPayment.toLocaleString()}</p>
                <p>Loan Amount: $${loanAmount.toLocaleString()}</p>
                <p>Monthly Payment: $${monthlyPayment.toFixed(2)}</p>
                <p>Total Interest: $${((monthlyPayment * loanTerm) - loanAmount).toFixed(2)}</p>
            </div>
        `;
    } else {
        console.error('Results div not found');
    }
}

// For mortgage calculator page
if (window.location.pathname.includes('mortgage.html')) {
    document.addEventListener('DOMContentLoaded', function() {
        const calcBtn = document.getElementById('calculate');
        if (calcBtn) {
            calcBtn.addEventListener('click', calculateMortgage);
            console.log('Mortgage calculator event listener attached for mortgage.html');
        }
    });
}

// For properties page
if (window.location.pathname.includes('properties.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    let filtered = properties;
    if (urlParams.get('type')) {
        filtered = filtered.filter(p => p.type === urlParams.get('type'));
    }
    if (urlParams.get('location')) {
        filtered = filtered.filter(p => p.location.toLowerCase().includes(urlParams.get('location').toLowerCase()));
    }
    renderProperties(filtered, 'properties-list');
}

// For property detail
if (window.location.pathname.includes('property.html')) {
    console.log('Property page detected, pathname:', window.location.pathname);

    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {
        const urlParams = new URLSearchParams(window.location.search);
        const id = parseInt(urlParams.get('id'));
        console.log('Property ID from URL:', id);
        const prop = properties.find(p => p.id === id);
        console.log('Property found:', prop);

        if (prop) {
            document.getElementById('property-title').textContent = prop.title;
            document.getElementById('property-details').innerHTML = `
                <p><strong>Price:</strong> $${prop.price.toLocaleString()}</p>
                <p><strong>Location:</strong> ${prop.location}</p>
                <p><strong>Bedrooms:</strong> ${prop.bedrooms}</p>
                <p><strong>Bathrooms:</strong> ${prop.bathrooms}</p>
                <p><strong>Type:</strong> ${prop.home_type}</p>
                <p>${prop.description}</p>
            `;
            document.getElementById('property-image').src = prop.image;

            // Populate mortgage calculator with property price
            const homePriceInput = document.getElementById('homePrice');
            if (homePriceInput) {
                homePriceInput.value = prop.price;
            }

            // Attach mortgage calculator event for this page
            const calcBtn = document.getElementById('calculate');
            if (calcBtn) {
                calcBtn.addEventListener('click', calculateMortgage);
            }

            // Map
            try {
                const mapElement = document.getElementById('map');
                if (mapElement) {
                    console.log('Initializing map with coordinates:', prop.lat, prop.lng);
                    const map = L.map('map').setView([prop.lat, prop.lng], 13);
                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution: '© OpenStreetMap contributors'
                    }).addTo(map);
                    L.marker([prop.lat, prop.lng]).addTo(map)
                        .bindPopup(prop.title)
                        .openPopup();
                    console.log('Map initialized successfully for property:', prop.title);
                } else {
                    console.error('Map element not found');
                }
            } catch (error) {
                console.error('Error initializing map:', error);
            }

            // Virtual tour
            if (prop.virtualTour) {
                document.getElementById('virtual-tour').innerHTML = `<iframe src="${prop.virtualTour}" width="100%" height="400" frameborder="0" allowfullscreen></iframe>`;
            } else {
                // Keep the placeholder text from HTML
                document.getElementById('virtual-tour').innerHTML = '[Virtual Tour Placeholder - Integrate Matterport or similar]';
            }

            // Price history - show mock data
            const priceHistoryDiv = document.querySelector('#property-details + h3 + p');
            if (priceHistoryDiv && priceHistoryDiv.textContent.includes('Price changes tracked here')) {
                const currentPrice = prop.price;
                const sixMonthsAgo = Math.round(currentPrice * 0.95); // 5% decrease
                const oneYearAgo = Math.round(currentPrice * 0.92); // 8% decrease
                const twoYearsAgo = Math.round(currentPrice * 0.88); // 12% decrease

                priceHistoryDiv.innerHTML = `
                    <strong>Price History:</strong><br>
                    • 2 years ago: $${twoYearsAgo.toLocaleString()}<br>
                    • 1 year ago: $${oneYearAgo.toLocaleString()}<br>
                    • 6 months ago: $${sixMonthsAgo.toLocaleString()}<br>
                    • Current: $${currentPrice.toLocaleString()}
                `;
            }
        } else {
            console.error('Property not found with ID:', id);
        }
    });
}

// Contact form
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent! We will get back to you soon.');
        contactForm.reset();
    });
}

// Rental application
const rentalForm = document.getElementById('rental-form');
if (rentalForm) {
    rentalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Application submitted! We will review it shortly.');
        rentalForm.reset();
    });
}

// Compare functionality (simple)
let compareList = [];
function addToCompare(id) {
    if (!compareList.includes(id)) {
        compareList.push(id);
        renderCompare();
    }
}
function renderCompare() {
    const container = document.getElementById('compare-container');
    if (container) {
        container.innerHTML = '';
        compareList.forEach(id => {
            const prop = properties.find(p => p.id === id);
            container.innerHTML += `<div class="col-md-3"><div class="card"><img src="${prop.image}" class="card-img-top"><div class="card-body"><h5>${prop.title}</h5><p>$${prop.price.toLocaleString()}</p></div></div></div>`;
        });
    }
}
