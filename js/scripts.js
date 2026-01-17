// ==================== PRODUCT DATA ====================
// Define your products here - Add as many as you need
const products = [
    // HOODIES
    { id: 1, name: 'Classic White Hoodie', category: 'hoodies', image: 'assets/hoodies/hoodie1.jpeg', featured: true },
    { id: 2, name: 'Sleeved Hoodie', category: 'hoodies', image: 'assets/hoodies/hoodie2.jpeg', featured: false },
    { id: 3, name: 'White Pullover Hoodie', category: 'hoodies', image: 'assets/hoodies/hoodie3.jpeg', featured: false },
    { id: 4, name: ' Pullover Hoodie', category: 'hoodies', image: 'assets/hoodies/hoodie4.jpeg', featured: false },
    { id: 5, name: 'Orange-sleeved Pullover Hoodie', category: 'hoodies', image: 'assets/hoodies/hoodie5.jpeg', featured: false },
    { id: 7, name: 'Gray Pullover Hoodie', category: 'hoodies', image: 'assets/hoodies/hoodie7.jpeg', featured: false },
    { id: 8, name: 'Mint On Black Hoodie', category: 'hoodies', image: 'assets/hoodies/hoodie17.jpeg', featured: false },
    { id: 9, name: 'Orange-sleeved Hoodie', category: 'hoodies', image: 'assets/hoodies/hoodie9.jpeg', featured: false },
    { id: 10, name: 'Multi-designed Pullover Hoodie', category: 'hoodies', image: 'assets/hoodies/hoodie10.jpeg', featured: false },
    { id: 11, name: 'Blue On Black Hoodie', category: 'hoodies', image: 'assets/hoodies/hoodie11.jpeg', featured: false },
    { id: 12, name: 'Green On Black Hoodie', category: 'hoodies', image: 'assets/hoodies/hoodie16.jpeg', featured: false },
    { id: 12, name: 'Orange On Black  Hoodie', category: 'hoodies', image: 'assets/hoodies/hoodie13.jpeg', featured: false },
    // T-SHIRTS
    { id: 15, name: 'White Logo Tee', category: 'tshirts', image: 'assets/tshirts/shirt1.jpeg', featured: true },
    { id: 16, name: 'Light Pink  Tee', category: 'tshirts', image: 'assets/tshirts/shirt2.jpeg', featured: false },
    { id: 6, name: 'Omniacs White Tee', category: 'tshirts', image: 'assets/tshirts/shirt3.jpeg', featured: false },
    
    // BACKPACKS
    { id: 7, name: 'Red Backpack', category: 'backpacks', image: 'assets/backpacks/bag1.jpeg', featured: true },
    { id: 8, name: 'Blue Backpack', category: 'backpacks', image: 'assets/backpacks/bag2.jpeg', featured: false },
    { id: 8, name: 'Omniacs Red Backpack', category: 'backpacks', image: 'assets/backpacks/bag3.jpeg', featured: false },
    { id: 8, name: 'Yellow Backpack', category: 'backpacks', image: 'assets/backpacks/bag4.jpeg', featured: false },
    { id: 8, name: 'Cute Pink Backpack', category: 'backpacks', image: 'assets/backpacks/bag5.jpeg', featured: false },
    
    // BAGS
    { id: 9, name: 'Blue Duffel Bag', category: 'bags', image: 'assets/bags/bag6.jpeg', featured: false },
    { id: 10, name: 'Orange Duffel Bag', category: 'bags', image: 'assets/bags/bag7.jpeg', featured: false },
    
    // BUCKET HATS
    { id: 11, name: 'Blue Bucket Hat', category: 'bucket-hats', image: 'assets/bucket-hats/hat1.jpeg', featured: true },
    { id: 12, name: 'Purple Bucket Hat', category: 'bucket-hats', image: 'assets/bucket-hats/hat2.jpeg', featured: false },
    { id: 12, name: 'Orange Bucket Hat', category: 'bucket-hats', image: 'assets/bucket-hats/hat3.jpeg', featured: false },
    
    // GIFTS
    { id: 13, name: 'Gaming Cards', category: 'gifts', image: 'assets/gifts/cards.jpeg', featured: false },
    { id: 14, name: 'Baby Puppets', category: 'gifts', image: 'assets/gifts/puppet.jpeg', featured: false },
    
    // SOCKS
    { id: 15, name: 'Patterned Socks', category: 'socks', image: 'assets/socks/sock1.jpeg', featured: false },
    { id: 16, name: 'Anime Socks', category: 'socks', image: 'assets/socks/sock2.jpeg', featured: false },
    { id: 16, name: 'Comfort Socks', category: 'socks', image: 'assets/socks/sock4.jpeg', featured: false },
   
    // ONESIES
    { id: 17, name: 'Cozy Onesie', category: 'onesies', image: 'assets/onesies/onesies3.jpeg', featured: false },
    
    // TROUSERS
    { id: 18, name: 'Gray SweatPants', category: 'trousers', image: 'assets/trousers/pant4.jpeg', featured: false },
    { id: 19, name: 'Brown Sweatpants', category: 'trousers', image: 'assets/trousers/pant5.jpeg', featured: true },
    { id: 19, name: 'Beige Pants', category: 'trousers', image: 'assets/trousers/pant6.jpeg', featured: false },
    { id: 19, name: 'Yellow Pants', category: 'trousers', image: 'assets/trousers/pant7.jpeg', featured: false },
    { id: 19, name: 'Dull-blue SweatPants', category: 'trousers', image: 'assets/trousers/pant8.jpeg', featured: false },
    
    // HOME
    { id: 20, name: 'Omniac-themed Mugs and Cups', category: 'home', image: 'assets/home/drinkware.jpeg', featured: false },
    { id: 21, name: 'Omniac-themed Mugs and Cups', category: 'home', image: 'assets/home/drinkware1.jpeg', featured: false },
    { id: 21, name: 'Omniac-themed Mugs and Cups', category: 'home', image: 'assets/home/drinkware2.jpeg', featured: false },
    { id: 21, name: 'Omniac-themed Mugs and Cups', category: 'home', image: 'assets/home/drinkware3.jpeg', featured: false },
    { id: 21, name: 'Omniac-themed Mugs and Cups', category: 'home', image: 'assets/home/drinkware7.jpeg', featured: false },
    { id: 21, name: 'Omniac-themed Mugs and Cups', category: 'home', image: 'assets/home/drinkware9.jpeg', featured: false },
    { id: 21, name: 'Omniac Teapot', category: 'home', image: 'assets/home/teapot1.jpeg', featured: false },
    { id: 21, name: 'Teapot', category: 'home', image: 'assets/home/teapot4.jpeg', featured: true },
   
    // NECKLACES
    { id: 22, name: 'Chain Necklace', category: 'necklaces', image: 'assets/necklaces/necklace1.jpeg', featured: true },
    { id: 22, name: 'Chain Necklace', category: 'necklaces', image: 'assets/necklaces/necklace2.jpeg', featured: false },
    { id: 22, name: 'Chain Necklace', category: 'necklaces', image: 'assets/necklaces/necklase3.jpeg', featured: false },
    { id: 22, name: 'Chain Necklace', category: 'necklaces', image: 'assets/necklaces/necklase4.jpeg', featured: false },
    { id: 22, name: 'Chain Necklace', category: 'necklaces', image: 'assets/necklaces/necklase5.jpeg', featured: false },
    
    // SPECIAL BAG
    { id: 23, name: 'Limited Edition Tote-Bag', category: 'special-bag', image: 'assets/special-bag/totebag1.jpeg', featured: true },
    { id: 23, name: 'Limited Edition Tote-Bag', category: 'special-bag', image: 'assets/special-bag/totebag2.jpeg', featured: false },
    { id: 23, name: 'Limited Edition Tote-Bag', category: 'special-bag', image: 'assets/special-bag/totebag3.jpeg', featured: false },

    // OFFICE
    { id: 24, name: 'Binder', category: 'office', image: 'assets/office/binder.jpeg', featured: false },
    { id: 25, name: 'Envelope', category: 'office', image: 'assets/office/envelope3.jpeg', featured: false },
    { id: 25, name: 'Marker', category: 'office', image: 'assets/office/markers2.jpeg', featured: false },
    { id: 25, name: 'Mousepad', category: 'office', image: 'assets/office/mousepad.jpeg', featured: false },
    { id: 25, name: 'Paperweights', category: 'office', image: 'assets/office/paperweights2.jpeg', featured: false },
    { id: 25, name: 'Paper Puncher', category: 'office', image: 'assets/office/puncher1.jpeg', featured: false },
    { id: 25, name: 'Scissors', category: 'office', image: 'assets/office/scissors.jpeg', featured: false },
    { id: 25, name: 'Sharpener', category: 'office', image: 'assets/office/sharpener.jpeg', featured: false },
    { id: 25, name: 'Stamper', category: 'office', image: 'assets/office/stamper1.jpeg', featured: false },
    { id: 25, name: 'Stapler', category: 'office', image: 'assets/office/stapler2.jpeg', featured: false },
    { id: 25, name: 'Sticky Notes', category: 'office', image: 'assets/office/stickynotes.jpeg', featured: false },
    { id: 25, name: 'Tape Dispenser', category: 'office', image: 'assets/office/tapedispenser1.jpeg', featured: false },
    { id: 25, name: 'Trasher', category: 'office', image: 'assets/office/papertrasher.jpeg', featured: false },
    
    // Add more products here following the same format
    // { id: X, name: 'Product Name', category: 'category-name', image: 'assets/category/imageX.jpeg', featured: false },
];



// ==================== NAVIGATION SCROLL EFFECT ====================
window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// ==================== SMOOTH SCROLLING ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== CREATE PRODUCT CARD ====================
function createProductCard(product) {
    return `
        <div class="product-card" data-category="${product.category}">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <div class="product-info">
                <p class="product-name">${product.name}</p>
            </div>
        </div>
    `;
}



// ==================== LOAD FEATURED PRODUCTS ====================
function loadFeaturedProducts() {
    const featuredGrid = document.getElementById('featuredGrid');
    const featuredProducts = products.filter(p => p.featured);
    
    featuredGrid.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
}

// ==================== LOAD ALL PRODUCTS ====================
function loadAllProducts() {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = products.map(product => createProductCard(product)).join('');
}

// ==================== FILTER PRODUCTS ====================
function filterProducts(category) {
    const productCards = document.querySelectorAll('#productsGrid .product-card');
    
    productCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// ==================== FILTER BUTTON CLICK ====================
document.addEventListener('DOMContentLoaded', () => {
    // Load content
    loadFeaturedProducts();
    loadAllProducts();
    
    // Filter button functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            // Filter products
            const category = button.dataset.category;
            filterProducts(category);
        });
    });
});

// ==================== SCROLL TO TOP BUTTON ====================
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==================== IMAGE ERROR HANDLING ====================
document.addEventListener('DOMContentLoaded', () => {
    // Add error handling for images
    setTimeout(() => {
        document.querySelectorAll('.product-card img').forEach(img => {
            img.addEventListener('error', function() {
                this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect width="400" height="400" fill="%23f0f0f0"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="18" fill="%23999"%3EImage Not Found%3C/text%3E%3C/svg%3E';
            });
        });
    }, 100);
});