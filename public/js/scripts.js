// ==================== PRODUCT DATA ====================
const products = [
    // HOODIES
    { id: 1, name: 'Classic White Hoodie', category: 'hoodies', image: '/assets/hoodies/hoodie1.jpeg', featured: true },
    { id: 2, name: 'Sleeved Hoodie', category: 'hoodies', image: '/assets/hoodies/hoodie2.jpeg', featured: false },
    { id: 3, name: 'White Pullover Hoodie', category: 'hoodies', image: '/assets/hoodies/hoodie3.jpeg', featured: false },
    { id: 4, name: 'Pullover Hoodie', category: 'hoodies', image: '/assets/hoodies/hoodie4.jpeg', featured: false },
    { id: 5, name: 'Orange-sleeved Pullover Hoodie', category: 'hoodies', image: '/assets/hoodies/hoodie5.jpeg', featured: false },
    { id: 7, name: 'Gray Pullover Hoodie', category: 'hoodies', image: '/assets/hoodies/hoodie7.jpeg', featured: false },
    { id: 8, name: 'Mint On Black Hoodie', category: 'hoodies', image: '/assets/hoodies/hoodie17.jpeg', featured: false },
    { id: 9, name: 'Orange-sleeved Hoodie', category: 'hoodies', image: '/assets/hoodies/hoodie9.jpeg', featured: false },
    { id: 10, name: 'Multi-designed Pullover Hoodie', category: 'hoodies', image: '/assets/hoodies/hoodie10.jpeg', featured: false },
    { id: 11, name: 'Blue On Black Hoodie', category: 'hoodies', image: '/assets/hoodies/hoodie11.jpeg', featured: false },
    { id: 12, name: 'Green On Black Hoodie', category: 'hoodies', image: '/assets/hoodies/hoodie16.jpeg', featured: false },
    { id: 13, name: 'Orange On Black Hoodie', category: 'hoodies', image: '/assets/hoodies/hoodie13.jpeg', featured: false },
    
    // T-SHIRTS
    { id: 15, name: 'White Logo Tee', category: 'tshirts', image: '/assets/tshirts/shirt1.jpeg', featured: true },
    { id: 16, name: 'Light Pink Tee', category: 'tshirts', image: '/assets/tshirts/shirt2.jpeg', featured: false },
    { id: 17, name: 'Omniacs White Tee', category: 'tshirts', image: '/assets/tshirts/shirt3.jpeg', featured: false },
    
    // BACKPACKS
    { id: 18, name: 'Red Backpack', category: 'backpacks', image: '/assets/backpacks/bag1.jpeg', featured: true },
    { id: 19, name: 'Blue Backpack', category: 'backpacks', image: '/assets/backpacks/bag2.jpeg', featured: false },
    { id: 20, name: 'Omniacs Red Backpack', category: 'backpacks', image: '/assets/backpacks/bag3.jpeg', featured: false },
    { id: 21, name: 'Yellow Backpack', category: 'backpacks', image: '/assets/backpacks/bag4.jpeg', featured: false },
    { id: 22, name: 'Cute Pink Backpack', category: 'backpacks', image: '/assets/backpacks/bag5.jpeg', featured: false },
    
    // BAGS
    { id: 23, name: 'Blue Duffel Bag', category: 'bags', image: '/assets/bags/bag6.jpeg', featured: false },
    { id: 24, name: 'Orange Duffel Bag', category: 'bags', image: '/assets/bags/bag7.jpeg', featured: false },
    
    // SPECIAL BAGS - CAROUSEL ITEM (Multiple images for one product)
    { 
        id: 25, 
        name: 'Tote Bag Collection', 
        category: 'special-bags', 
        image: '/assets/special-bag/totebag1.jpeg',
        images: [
            '/assets/special-bag/totebag1.jpeg',
            '/assets/special-bag/totebag2.jpeg',
            '/assets/special-bag/totebag3.jpeg'
        ],
        hasCarousel: true,
        featured: true 
    },
    
    // BUCKET HATS - CAROUSEL ITEM (Multiple images for one product)
    { 
        id: 28, 
        name: 'Bucket Hat Collection', 
        category: 'bucket-hats', 
        image: '/assets/bucket-hats/hat1.jpeg',
        images: [
            '/assets/bucket-hats/hat1.jpeg',
            '/assets/bucket-hats/hat2.jpeg',
            '/assets/bucket-hats/hat3.jpeg'
        ],
        hasCarousel: true,
        featured: true 
    },
    
    // GIFTS
    { id: 31, 
      name: 'Gaming Cards', 
      category: 'gifts', 
      image: '/assets/gifts/cards1.png', 
      images: [
            '/assets/gifts/cards.png',
            '/assets/gifts/cards2.png',
            '/assets/gifts/cards3.png',
            '/assets/gifts/cards4.png',
            '/assets/gifts/cards5.png',
            '/assets/gifts/cards6.png',
            '/assets/gifts/cards7.png',
            '/assets/gifts/cards8.png',
            '/assets/gifts/cards9.png',
            '/assets/gifts/cards10.png',

        ],
      hasCarousel: true,

      featured: false 
    },
    { id: 32, name: 'Baby Puppets', category: 'gifts', image: '/assets/gifts/puppet.jpeg', featured: false },
    
    // SOCKS
    { id: 33, name: 'Patterned Socks', category: 'socks', image: '/assets/socks/sock1.jpeg', featured: false },
    { id: 34, name: 'Anime Socks', category: 'socks', image: '/assets/socks/sock2.jpeg', featured: false },
    { id: 35, name: 'Comfort Socks', category: 'socks', image: '/assets/socks/sock4.jpeg', featured: false },
   
    // ONESIES
    { id: 36, name: 'Cozy Onesie', category: 'onesies', image: '/assets/onesies/onesies3.jpeg', featured: false },
    
    // TROUSERS
    { id: 37, name: 'Gray SweatPants', category: 'trousers', image: '/assets/trousers/pant4.jpeg', featured: false },
    { id: 38, name: 'Brown Sweatpants', category: 'trousers', image: '/assets/trousers/pant5.jpeg', featured: true },
    { id: 39, name: 'Beige Pants', category: 'trousers', image: '/assets/trousers/pant6.jpeg', featured: false },
    { id: 40, name: 'Yellow Pants', category: 'trousers', image: '/assets/trousers/pant7.jpeg', featured: false },
    { id: 41, name: 'Dull-blue SweatPants', category: 'trousers', image: '/assets/trousers/pant8.jpeg', featured: false },
    
    // HOME - DRINKWARE (RENAMED to avoid duplicates)
    { id: 42, name: 'Omniac Logo Mug Set', category: 'home', image: '/assets/home/drinkware.jpeg', featured: false },
    { id: 43, name: 'Omniac Purple Drinkware', category: 'home', image: '/assets/home/drinkware1.jpeg', featured: false },
    { id: 44, name: 'Omniac Drink Mugs', category: 'home', image: '/assets/home/drinkware2.jpeg', featured: false },
    { id: 45, name: 'Omniac Glass Set', category: 'home', image: '/assets/home/drinkware3.jpeg', featured: false },
    { id: 46, name: 'Omniac Travel Mug', category: 'home', image: '/assets/home/drinkware7.jpeg', featured: false },
    { id: 47, name: 'Omniac Coffee Cup Collection', category: 'home', image: '/assets/home/drinkware9.jpeg', featured: false },
    
    // TEAPOTS - CAROUSEL ITEM (Multiple images for one product)
    { 
        id: 48, 
        name: 'Omniac Teapot Collection', 
        category: 'home', 
        image: '/assets/home/teapot1.jpeg',
        images: [
            '/assets/home/teapot1.jpeg',
            '/assets/home/teapot4.jpeg'
        ],
        hasCarousel: true,
        featured: true 
    },
   
    // NECKLACES (RENAMED to avoid duplicates)
    { id: 50, name: 'Silver Chain Necklace', category: 'necklaces', image: '/assets/necklaces/necklace1.jpeg', featured: true },
    { id: 51, name: 'Gold Chain Necklace', category: 'necklaces', image: '/assets/necklaces/necklace2.jpeg', featured: false },
    { id: 52, name: 'Rose Gold Chain Necklace', category: 'necklaces', image: '/assets/necklaces/necklase3.jpeg', featured: false },
    { id: 53, name: 'Platinum Chain Necklace', category: 'necklaces', image: '/assets/necklaces/necklase4.jpeg', featured: false },
    { id: 54, name: 'Bronze Chain Necklace', category: 'necklaces', image: '/assets/necklaces/necklase5.jpeg', featured: false },
    
    // OFFICE
    { id: 55, name: 'Binder', category: 'office', image: '/assets/office/binder.jpeg', featured: false },
    { id: 56, name: 'Envelope', category: 'office', image: '/assets/office/envelope3.jpeg', featured: false },
    { id: 57, name: 'Marker', category: 'office', image: '/assets/office/markers2.jpeg', featured: false },
    { id: 58, name: 'Mousepad', category: 'office', image: '/assets/office/mousepad.jpeg', featured: false },
    { id: 59, name: 'Paperweights', category: 'office', image: '/assets/office/paperweights2.jpeg', featured: false },
    { id: 60, name: 'Paper Puncher', category: 'office', image: '/assets/office/puncher1.jpeg', featured: false },
    { id: 61, name: 'Scissors', category: 'office', image: '/assets/office/scissors.jpeg', featured: false },
    { id: 62, name: 'Sharpener', category: 'office', image: '/assets/office/sharpener.jpeg', featured: false },
    { id: 63, name: 'Stamper', category: 'office', image: '/assets/office/stamper1.jpeg', featured: false },
    { id: 64, name: 'Stapler', category: 'office', image: '/assets/office/stapler2.jpeg', featured: false },
    { id: 65, name: 'Sticky Notes', category: 'office', image: '/assets/office/stickynotes.jpeg', featured: false },
    { id: 66, name: 'Tape Dispenser', category: 'office', image: '/assets/office/tapedispenser1.jpeg', featured: false },
    { id: 67, name: 'Trasher', category: 'office', image: '/assets/office/papertrasher.jpeg', featured: false }
];

// ==================== CART MANAGEMENT ====================
let cart = [];

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('omniacsCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('omniacsCart', JSON.stringify(cart));
    updateCartCount();
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product && !cart.find(item => item.id === productId)) {
        cart.push(product);
        saveCart();
        showNotification('Added to cart! 🛒');
    } else if (cart.find(item => item.id === productId)) {
        showNotification('Already in cart!');
    }
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCartItems();
}

// Update cart count
function updateCartCount() {
    const countElement = document.getElementById('cartCount');
    if (countElement) {
        countElement.textContent = cart.length;
    }
}

// Toggle cart modal
function toggleCart() {
    const modal = document.getElementById('cartModal');
    modal.classList.toggle('active');
    if (modal.classList.contains('active')) {
        renderCartItems();
    }
}

// Render cart items
function renderCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="cart-empty">Your cart is empty</div>';
        return;
    }
    
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-category">${item.category.replace('-', ' ')}</div>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
        </div>
    `).join('');
}

// Open checkout
function openCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    document.getElementById('cartModal').classList.remove('active');
    document.getElementById('checkoutModal').classList.add('active');
    
    const checkoutItemsContainer = document.getElementById('checkoutItems');
    checkoutItemsContainer.innerHTML = '<strong>Products:</strong><br>' + 
        cart.map(item => `• ${item.name}`).join('<br>');
}

// Close checkout
function closeCheckout() {
    document.getElementById('checkoutModal').classList.remove('active');
}

// Close success modal
function closeSuccess() {
    document.getElementById('successModal').classList.remove('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: #00BFFF;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 25px;
        z-index: 10000;
        font-weight: 500;
        box-shadow: 0 4px 15px rgba(0, 191, 255, 0.4);
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 2000);
}

// ==================== CAROUSEL MODAL FUNCTIONS ====================
let currentCarouselIndex = 0;
let currentCarouselImages = [];
let currentCarouselProduct = null;

// Open carousel modal
function openCarousel(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.hasCarousel) return;
    
    currentCarouselProduct = product;
    currentCarouselImages = product.images;
    currentCarouselIndex = 0;
    
    const modal = document.getElementById('carouselModal');
    modal.classList.add('active');
    updateCarouselImage();
}

// Close carousel modal
function closeCarousel() {
    document.getElementById('carouselModal').classList.remove('active');
}

// Navigate carousel
function navigateCarousel(direction) {
    currentCarouselIndex += direction;
    
    if (currentCarouselIndex < 0) {
        currentCarouselIndex = currentCarouselImages.length - 1;
    } else if (currentCarouselIndex >= currentCarouselImages.length) {
        currentCarouselIndex = 0;
    }
    
    updateCarouselImage();
}

// Update carousel image
function updateCarouselImage() {
    const imgElement = document.getElementById('carouselImage');
    const counterElement = document.getElementById('carouselCounter');
    const titleElement = document.getElementById('carouselTitle');
    
    imgElement.src = currentCarouselImages[currentCarouselIndex];
    counterElement.textContent = `${currentCarouselIndex + 1} / ${currentCarouselImages.length}`;
    titleElement.textContent = currentCarouselProduct.name;
}

// Add to cart from carousel
function addToCartFromCarousel() {
    if (currentCarouselProduct) {
        addToCart(currentCarouselProduct.id);
    }
}

// Handle checkout form submission
document.addEventListener('DOMContentLoaded', function() {
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('userName').value,
                email: document.getElementById('userEmail').value,
                interestLevel: document.getElementById('interestLevel').value,
                size: document.getElementById('sizePreference').value,
                products: cart.map(item => item.name).join(', '),
                timestamp: new Date().toISOString()
            };
            
            try {
                const response = await fetch('/api/submit-checkout', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });
                
                if (response.ok) {
                    closeCheckout();
                    document.getElementById('successModal').classList.add('active');
                    
                    // Clear cart
                    cart = [];
                    saveCart();
                    
                    // Reset form
                    checkoutForm.reset();
                } else {
                    alert('Something went wrong. Please try again.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Failed to submit. Please try again.');
            }
        });
    }
    
    // Close modals when clicking outside
    document.getElementById('cartModal').addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
        }
    });
    
    document.getElementById('checkoutModal').addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
        }
    });
    
    document.getElementById('carouselModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeCarousel();
        }
    });
});

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
    // If product has carousel, add view gallery badge
    const galleryBadge = product.hasCarousel ? 
        '<span class="gallery-badge">📸 View Gallery</span>' : '';
    
    // Different onclick behavior for carousel products
    const cardClick = product.hasCarousel ? 
        `onclick="openCarousel(${product.id})"` : '';
    
    const addToCartBtn = product.hasCarousel ? 
        `<button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">+</button>` :
        `<button class="add-to-cart-btn" onclick="addToCart(${product.id})">+</button>`;
    
    return `
        <div class="product-card" data-category="${product.category}" ${cardClick}>
            ${galleryBadge}
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <div class="product-info">
                <p class="product-name">${product.name}</p>
            </div>
            ${addToCartBtn}
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
    // Load cart
    loadCart();
    
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