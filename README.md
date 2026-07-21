# CloudExify-Project-2
E-Commerce Website Report
Project Title
K.AQSA E-Commerce Website 
Introduction
The K.AQSA E-Commerce Website is a web-based online shopping system developed using ASP.NET Core MVC, Entity Framework Core, and SQL Server. The system allows users to browse products, add products to the cart, manage wishlists, and place orders using Cash on Delivery (COD).
The project also provides an administration panel where the administrator can manage products, categories, users, and customer orders. The main objective of the project is to provide a simple, secure, and user-friendly online shopping experience.
________________________________________
Objectives
The objectives of this project are:
•	Develop a complete online shopping website. 
•	Allow users to register and login securely. 
•	Display products with detailed information. 
•	Allow users to add products to the shopping cart. 
•	Implement wishlist functionality. 
•	Complete checkout using Cash on Delivery. 
•	Store all customer and order information in SQL Server. 
•	Follow MVC Architecture for better code organization. 
________________________________________
Tools and Technologies
Technology	Purpose
	
Bootstrap	Responsive UI
HTML5	Structure
JavaScript	Client-side functionality
________________________________________
System Modules
The website contains the following modules:
•	User Authentication 
•	Product Management 
•	Shopping Cart 
•	Wishlist 
•	Checkout System 
•	Order Management 
•	Admin Dashboard 
________________________________________
Working Procedure
Home Page Landing Interface
 
Home Page
The Home Page is the primary interface of the K.AQSA Electronics E-Commerce Store. It provides users with an attractive introduction to the website and highlights the main purpose of the online shopping platform. The design follows a modern user interface with a dark navy theme combined with golden accent colors, creating a premium appearance suitable for an electronics brand.
At the top of the page, a responsive navigation bar allows users to access different sections of the website including Home, Products, Wishlist, Login, and Registration. The navigation bar remains clean and easy to understand, improving usability on both desktop and mobile devices.
The hero section displays the company title "K.AQSA Electronics" along with a promotional message describing the available electronic products. A countdown timer has been implemented using JavaScript to create urgency for customers by indicating the remaining duration of the promotional event.
A large "Shop Now" button is positioned below the timer, enabling visitors to quickly navigate towards the product catalog. The combination of typography, spacing, colors, and animations improves the overall visual experience while encouraging customer engagement.
Figure: Home page with hero banner and promotional countdown timer.
________________________________________
Featured Products Section
 
Featured Products
Below the hero section, the website displays a collection of featured electronic products generated dynamically through JavaScript. Instead of manually writing HTML for every product, the application loads product information from the data.js file.
Each product card includes:
•	Product Image 
•	Product Category 
•	Product Name 
•	Product Price 
•	Stock Availability 
•	View Details Button 
The product cards are designed using Bootstrap cards together with custom CSS styling. Hover animations increase user interaction while maintaining a clean professional layout.
The responsive grid automatically adjusts according to different screen sizes, ensuring proper display across desktop, tablet, and mobile devices.
Figure : Dynamically generated featured product cards.
________________________________________
Why Shop With Us Section
 
Why Shop With Us
The "Why Shop With Us" section presents the key benefits offered by the K.AQSA Electronics Store. Rather than only displaying products, this section builds customer confidence by highlighting the services provided by the business.
Four major service advantages are displayed:
•	100% Genuine Products 
•	Fast Delivery Across Pakistan 
•	Easy Return Policy 
•	24/7 Customer Support 
Each service is represented using Font Awesome icons and Bootstrap cards. The layout is symmetrical and visually balanced, helping visitors quickly understand the advantages of purchasing from the platform.
This section improves customer trust and increases the likelihood of successful purchases.
Figure: Service features provided by the e-commerce platform.
________________________________________
Website Footer
 
Footer Design
The footer is placed at the bottom of every page and provides essential business information. It includes company branding, navigation links, and contact details.
The footer contains:
•	Company Name 
•	Business Description 
•	Quick Navigation Links 
•	Email Address 
•	Physical Location 
•	Copyright Information 
The dark background with golden accents maintains visual consistency with the rest of the website while presenting important information in an organized format.
Figure : Website footer containing contact information and navigation links.
________________________________________
User Registration Page
 

User Registration Module
The registration module enables new customers to create an account before accessing personalized shopping features. The registration form is designed using Bootstrap form controls combined with custom CSS.
The form collects:
•	First Name 
•	Last Name 
•	Username 
•	Email Address 
•	Password 
•	Confirm Password 
JavaScript validates all fields before storing user information in Local Storage. Password confirmation ensures that users enter matching credentials, reducing registration errors.
The responsive form layout improves accessibility while maintaining a professional appearance.
Figure : User registration interface.
________________________________________
Login Page
 
User Authentication
After successful registration, users can securely log into the application using their registered username and password.
The login system performs validation before allowing access to authenticated features such as:
•	Shopping Cart 
•	Wishlist 
•	Checkout 
•	User Profile 
Session information is maintained using browser Local Storage, allowing users to remain logged in until logout.
The minimal interface reduces distractions and provides a smooth authentication experience.
Figure : Login page for registered users.
________________________________________
Figure 5.7 Products Page
 
Product Listing Page
The Products Page displays the complete inventory available in the online store. Product information is generated dynamically through JavaScript using the product dataset stored in data.js.
Each product includes:
•	Product Image 
•	Product Category 
•	Product Price 
•	Stock Status 
•	Wishlist Button 
•	View Details Button 
Category filter buttons enable users to browse products based on specific categories such as AirPods, Chargers, Bluetooth Speakers, Earbuds, Smart Watches, and Gaming Accessories.
The filtering process is performed entirely through JavaScript without refreshing the webpage.
Figure : Product listing page with category filters.
________________________________________
Category Filtering
 

Product Category Filtering
Category filtering improves the shopping experience by displaying only products belonging to the selected category.
When the user selects "AirPods," JavaScript filters the dataset and updates the interface instantly. This client-side filtering reduces unnecessary page reloads and provides faster navigation.
The active category button changes color to indicate the currently selected filter.
The filtering algorithm iterates through the product array and displays only matching products, improving usability for customers searching for specific product types.
Figure : Dynamic category filtering using JavaScript.
________________________________________ Product Details Page
 
Product Details Module
The Product Details page provides complete information about the selected product.
Information displayed includes:
•	Large Product Image 
•	Product Category 
•	Product Name 
•	Product Price 
•	Available Stock 
•	Product Description 
•	Add to Cart Button 
The page retrieves the selected product dynamically using its unique product ID. JavaScript searches the product array and populates the interface without requiring a backend database.
This detailed view enables customers to examine products carefully before making purchasing decisions.
Figure: Detailed product information page.
Add to Cart Functionality
 
Add to Cart Module
The Add to Cart feature is one of the most important components of the K.AQSA Electronics Store. It enables customers to temporarily store products they wish to purchase before completing the checkout process. This improves the overall shopping experience by allowing users to compare products, modify quantities, and review their selections without making an immediate purchase.
When the customer clicks the "Add to Cart" button from the Product Details page, the selected product is automatically stored inside the shopping cart using JavaScript Local Storage. This allows the cart data to remain available even after refreshing the browser page.
The shopping cart page displays complete information about each selected product including:
•	Product Image 
•	Product Name 
•	Product Category 
•	Unit Price 
•	Quantity 
•	Total Price 
•	Remove Button 
The cart automatically calculates the total amount payable by summing all selected products. If a product already exists in the cart, its quantity is increased instead of creating duplicate entries.
Features
•	Add multiple products 
•	Quantity management 
•	Automatic total calculation 
•	Remove product option 
•	Persistent Local Storage 
•	Real-time cart badge updates 
________________________________________
Proceed to Checkout Page
 
Checkout Module
The Checkout Page represents the final purchasing stage of the e-commerce application. It summarizes all products selected by the customer and displays the final amount before order confirmation.
The checkout interface has been designed to remain clean, organized, and user-friendly. Customers can carefully review all products before confirming their order.
The checkout page includes:
•	Customer Order Summary 
•	Product List 
•	Quantity Details 
•	Individual Product Price 
•	Grand Total 
•	Proceed Button 
•	Cancel Button 
The total bill is calculated dynamically using JavaScript, ensuring complete accuracy without requiring manual calculations.
Once the customer clicks Proceed to Checkout, the application validates the order and initiates the logistics process.
Checkout Process
1.	Customer reviews products. 
2.	JavaScript calculates total price. 
3.	Cart validation is performed. 
4.	Order confirmation begins. 
5.	Logistics sheet is generated. 
This workflow closely resembles the purchasing process followed by professional online shopping websites.
________________________________________
Figure 14: Logistics Handover Sheet
 
Logistics Management Module
Once the customer confirms the purchase, the application generates a Logistics Handover Sheet. This page represents the internal shipping documentation used before dispatching customer orders.
The Logistics Handover Sheet contains complete shipment information required by the delivery department.
Displayed information includes:
•	Order ID 
•	Customer Name 
•	Shipping Date 
•	Product Count 
•	Delivery Status 
•	Dispatch Confirmation 
•	Shipping Address 
•	Total Payment 
This module simulates a real warehouse management system where each confirmed order is transferred from the sales department to the logistics department for packaging and delivery.
Benefits
•	Order tracking 
•	Shipment verification 
•	Delivery preparation 
•	Inventory confirmation 
•	Logistics documentation 
The logistics module demonstrates how front-end systems can imitate real-world e-commerce operations.
________________________________________
Figure 15: Registration Successful Message
 
Registration Success Notification
After completing all required registration fields successfully, the application displays a Registration Successful confirmation message.
This notification informs the user that their account has been created successfully and they may now access the system using their login credentials.
The success message improves user confidence by providing immediate visual feedback after registration.
The validation process checks:
•	Empty Fields 
•	Email Format 
•	Password Matching 
•	Required Information 
Only after all validation rules are satisfied does the system display the confirmation notification.
Advantages
•	Better User Experience 
•	Instant Feedback 
•	Reduced Registration Errors 
•	Improved Interface Usability 
This module demonstrates proper client-side validation techniques using JavaScript before storing user information.

Database
The project uses SQL Server database.
Main tables include:
•	Users 
•	Products 
•	Categories 
•	Cart 
•	Wishlist 
•	Orders 
•	OrderDetails 
Entity Framework Core manages database operations using DbContext.
________________________________________
MVC Architecture
The project follows MVC Architecture.
Model
Contains:
•	Product Model 
•	Category Model 
•	Order Model 
•	User Model 
Models communicate with SQL Server using Entity Framework Core.
________________________________________
View
Views display information to users using Razor Pages.
Examples include:
•	Home 
•	Products 
•	Cart 
•	Checkout 
•	Wishlist 
________________________________________
Controller
Controllers process user requests.
Examples include:
•	HomeController 
•	ProductController 
•	CartController 
•	WishlistController 
•	CheckoutController 
•	AdminController 
________________________________________
Features
The website provides the following features:
•	User Registration 
•	User Login 
•	Product Search 
•	Product Categories 
•	Wishlist 
•	Shopping Cart 
•	Quantity Selection 
•	Checkout 
•	Cash on Delivery 
•	Order Confirmation 
•	Admin Dashboard 
•	Responsive Design 
________________________________________
Code Implementation
Paste important code snippets in this section.
Code 1: HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>K.AQSA Electronics - Limited Drop Framework</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<div id="toast-message" class="toast-message">
    ✓ added to cart
</div>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark-navbar sticky-top">
        <div class="container">
            <a class="navbar-brand-classic" href="#" onclick="navigateToView('home')">
                <i class="fa-solid fa-bolt text-warning me-2"></i>K.AQSA
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <div class="navbar-nav mx-auto">
                    <a class="nav-link text-white px-3" href="#" onclick="navigateToView('home')"><i class="fa-solid fa-house me-1"></i> Home</a>
                    <a class="nav-link text-white px-3" href="#" onclick="navigateToView('products')"><i class="fa-solid fa-boxes-stacked me-1"></i> Products</a>
                    <a class="nav-link text-white px-3"
   href="#"
   onclick="navigateToView('wishlist')">

    <i class="fa-solid fa-heart text-danger me-1"></i>
    Wishlist

</a>
                </div>
          
                <div id="auth-corner" class="d-flex align-items-center gap-2">
                    <button class="btn btn-link text-white-50 text-decoration-none fw-medium me-1" onclick="navigateToView('login')">
                        <i class="fa-solid fa-right-to-bracket me-1"></i> Login
                    </button>
                    <button class="btn btn-warning fw-bold px-3 text-dark" onclick="navigateToView('register')">
                        <i class="fa-solid fa-user-plus me-1"></i> Register
                    </button>
                </div>
            </div>
        </div>
    </nav>
    <div id="app-alert-stream" class="container mt-3 d-none">
        <div class="alert alert-warning alert-dismissible fade show d-flex justify-content-between align-items-center py-3 m-0" role="alert">
            <span id="alert-payload-message" class="fw-medium">Stream network status updates...</span>
            <button type="button" class="btn-close shadow-none position-static p-0" onclick="hideNotificationBar()"></button>
        </div>
    </div>
    <main class="container my-4 min-vh-100">

        <div id="home-view" class="view-panel">
            <header class="hero-blue-canvas text-center text-white p-5 rounded-3 mb-5 shadow-sm position-relative overflow-hidden">
                <div class="position-relative z-1 py-4">
                   <span class="badge bg-danger px-3 py-2 mb-3 tracking-wider animate-pulse"
style="font-family:'Inter',sans-serif;font-size:14px;font-weight:600;">
    <i class="fa-solid fa-circle-radiation me-1"></i> Limited Drop Event Active
</span>
                    <h1 class="display-4 fw-extrabold mb-2 text-uppercase font-brand-family">K.AQSA Electronics</h1>
                    <p class="lead mb-4 opacity-75">High-fidelity acoustic systems, fast chargers, and smart tracking units.</p>
                    
                    <div class="d-flex justify-content-center gap-3 my-4">
                        <div class="timer-block-card p-3 rounded bg-dark-navbar border border-warning">
                            <span class="d-block fs-2 fw-bold text-warning font-monospace" id="drop-clock-hours">02</span>
                            <small class="text-white-50 text-uppercase font-monospace size-11">Hours</small>
                        </div>
                        <div class="timer-block-card p-3 rounded bg-dark-navbar border border-warning">
                            <span class="d-block fs-2 fw-bold text-warning font-monospace" id="drop-clock-minutes">45</span>
                            <small class="text-white-50 text-uppercase font-monospace size-11">Mins</small>
                        </div>
                        <div class="timer-block-card p-3 rounded bg-dark-navbar border border-warning">
                            <span class="d-block fs-2 fw-bold text-warning font-monospace" id="drop-clock-seconds">00</span>
                            <small class="text-white-50 text-uppercase font-monospace size-11">Secs</small>
                        </div>
                    </div>
                    <button class="btn btn-warning btn-lg fw-bold px-5 shadow text-uppercase mt-2 text-dark" onclick="navigateToView('products')">
                        <i class="fa-solid fa-basket-shopping me-2"></i> Shop Now
                    </button>
                </div>
            </header>
            <section class="mb-5">
    <h3 class="fw-bold text-dark mb-4 border-start border-4 border-warning ps-3 custom-heading">
        Shop Drop Segments
    </h3>
    <div class="row g-3" id="home-categories-grid"></div>
</section>
<style>
    .custom-heading {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
        text-transform: none !important; 
        letter-spacing: 0px;           
    }
</style>
            <section class="mb-5">
                <h3 class="fw-bold text-dark mb-4"><i class="fa-solid fa-fire text-danger me-2"></i>Critical Low Allocation Watchlist</h3>
                <div class="row g-4" id="featured-products-row"></div>
            </section>

    <section class="bg-white py-5 border-top border-light mt-5">
        <div class="container">
            <h4 class="page-heading text-center">
    Why Shop With Us?
</h4>
            <div class="row g-4 text-center">
                <div class="col-md-3">
                    <div class="p-4 border rounded bg-white shadow-xs">
                        <i class="fa-solid fa-shield-halved text-success fs-2 mb-3"></i>
                        <h6 class="fw-bold text-dark mb-1">100% Genuine</h6>
                        <p class="text-muted size-11 m-0">All products are authentic and original</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="p-4 border rounded bg-white shadow-xs">
                        <i class="fa-solid fa-truck text-primary fs-2 mb-3"></i>
                        <h6 class="fw-bold text-dark mb-1">Fast Delivery</h6>
                        <p class="text-muted size-11 m-0">Quick delivery across Pakistan</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="p-4 border rounded bg-white shadow-xs">
                        <i class="fa-solid fa-rotate-left text-warning fs-2 mb-3"></i>
                        <h6 class="fw-bold text-dark mb-1">Easy Returns</h6>
                        <p class="text-muted size-11 m-0">7-day hassle-free return policy</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="p-4 border rounded bg-white shadow-xs">
                        <i class="fa-solid fa-headset text-danger fs-2 mb-3"></i>
                        <h6 class="fw-bold text-dark mb-1">24/7 Support</h6>
                        <p class="text-muted size-11 m-0">We're here to help anytime</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
        <div id="register-view" class="view-panel d-none">
            <div class="row justify-content-center">
                <div class="col-md-5">
                    <div class="card shadow border-0 p-4 bg-white rounded-3">
                        <div class="text-center mb-4">
                            <i class="fa-solid fa-user-plus text-warning fs-1 mb-2"></i>
                            <h4 class="fw-bold text-dark m-0">Create Account</h4>
                            <p class="text-muted small">Join K.AQSA Electronics Store today</p>
                        </div>
                        <form id="registrationForm" onsubmit="handleUserRegistration(event)">
                            <div class="row g-2 mb-3">
                                <div class="col-6">
                                    <label class="small fw-bold text-secondary mb-1">First Name</label>
                                    <input type="text" id="regFirst" class="form-control py-2 shadow-none" placeholder="" required>
                                </div>
                                <div class="col-6">
                                    <label class="small fw-bold text-secondary mb-1">Last Name</label>
                                    <input type="text" id="regLast" class="form-control py-2 shadow-none" placeholder="" required>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="small fw-bold text-secondary mb-1">Select Username</label>
                                <input type="text" id="regUsername" class="form-control py-2 shadow-none" placeholder="" required>
                            </div>
                            <div class="mb-3">
                                <label class="small fw-bold text-secondary mb-1">Email Coordinates</label>
                                <input type="email" id="regEmail" class="form-control py-2 shadow-none" placeholder="" required>
                            </div>
                            <div class="row g-2 mb-4">
                                <div class="col-6">
                                    <label class="small fw-bold text-secondary mb-1">Set Password</label>
                                    <input type="password" id="regPassword" class="form-control py-2 shadow-none" placeholder="" required>
                                </div>
                                <div class="col-6">
                                    <label class="small fw-bold text-secondary mb-1">Confirm Password</label>
                                    <input type="password" id="regConfirmPassword" class="form-control py-2 shadow-none" placeholder="" required>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-dark w-100 py-2.5 fw-bold text-uppercase rounded-2">
                                <i class="fa-solid fa-user-check me-2"></i> Create Account
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div id="login-view" class="view-panel d-none">
            <div class="row justify-content-center">
                <div class="col-md-4">
                    <div class="card shadow border-0 p-4 bg-white rounded-3">
                        <div class="text-center mb-4">
                            <i class="fa-solid fa-right-to-bracket text-warning fs-1 mb-2"></i>
                            <h4 class="fw-bold text-dark m-0">Account Login</h4>
                            <p class="text-muted small">Access secure profile session parameters</p>
                        </div>
                        <form id="loginForm" onsubmit="handleUserLoginValidation(event)">
                            <div class="mb-3">
                                <label class="small fw-bold text-secondary mb-1">Username</label>
                                <input type="text" id="loginUsername" class="form-control py-2 shadow-none" placeholder="" required>
                            </div>
                            <div class="mb-4">
                                <label class="small fw-bold text-secondary mb-1">Password</label>
                                <input type="password" id="loginPassword" class="form-control py-2 shadow-none" placeholder="" required>
                            </div>
                            <button type="submit" class="btn btn-dark w-100 py-2.5 fw-bold text-uppercase rounded-2">
                                <i class="fa-solid fa-lock-open me-2"></i> Authenticate Session
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div id="products-view" class="view-panel d-none">
            <div class="d-flex justify-content-between align-items-center mb-3">
                <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
    <div class="text-muted small fw-bold font-monospace text-uppercase text-secondary"
         id="total-count-string-node">
        Showing 0 products
    </div>
    <select id="sort-products"
            class="form-select"
            style="width:220px;font-family:'Inter',sans-serif;"
            onchange="sortProducts(this.value)">
        <option value="default">sort products</option>
        <option value="low">price : low to high</option>
        <option value="high">price : high to low</option>
        <option value="rating">rating</option>
    </select>
</div>
            </div>
            <div class="d-flex flex-wrap gap-2 mb-4 p-1" id="dynamic-category-pill-strip"></div>
            <div class="row g-4" id="catalog-products-row"></div>
        </div>
<div id="product-details-view" class="view-panel d-none">
    <div class="container py-5">
        <div class="row">
            <div class="col-lg-6">
                <img id="details-image"
                     class="img-fluid rounded shadow">
            </div>
            <div class="col-lg-6">
                <span class="badge bg-secondary mb-2"
                      id="details-category"></span>
                <h2 id="details-name"
                    class="fw-bold mb-3"></h2>
                <h3 class="text-warning fw-bold mb-3"
                    id="details-price"></h3>
                <div class="alert alert-success py-2"
                     id="details-stock"></div>
                <h5>Description</h5>
                <p id="details-description"></p>
                <button
                    class="btn btn-dark btn-lg mt-3"
                    id="details-cart-btn">
                    Add To Cart
                </button>
            </div>
        </div>
        <hr class="my-5">
        <h3 class="fw-bold mb-4">
            Related Products
        </h3>
        <div class="row"
             id="related-products-row">

        </div>
    </div>
</div>
<div id="wishlist-view" class="view-panel d-none">
    <h2 class="page-heading">
        <i class="fa-solid fa-heart text-danger me-2"></i>
        My Wishlist
    </h2>
    <div class="row g-4" id="wishlist-products-row">
    </div>
</div>
        <div id="cart-view" class="view-panel d-none">
            <h2 class="page-heading">
                <i class="fa-solid fa-cart-shopping text-warning me-2"></i>My Cart
            </h2>
            <div class="row g-4">
                <div class="col-lg-8">
                    <div class="card border shadow-sm bg-white rounded-3 overflow-hidden">
                        <div class="table-responsive">
                            <table class="table table-align-middle m-0 text-center text-md-start">
                                <thead class="table-dark">
    <tr>
        <th class="ps-3 py-3 text-start">Drop item</th>
        <th class="py-3">Price</th>
        <th class="py-3 text-center" style="width:140px;">Qty</th>
        <th class="py-3">Subtotal</th>
        <th class="py-3 text-center pe-3">Purge</th>
    </tr>
</thead>
                                <tbody id="cart-ledger-rows-target"></tbody>
                            </table>
                        </div>
                    </div>
                    <div id="cart-continue-action-holder"></div>
                </div>
                <div class="col-lg-4">
                    <div class="card border shadow-sm bg-white rounded-3">
                        <div class="card-header bg-dark text-white py-3">
                            <h6 class="fw-bold m-0 text-warning cost-aggregate-title">
    <i class="fa-solid fa-receipt me-2"></i>Cost aggregate
</h6>
                        </div>
                        <div class="card-body p-4">
                            <div class="d-flex justify-content-between mb-3 border-bottom pb-2">
                                <span class="text-muted">Items Registered</span>
                                <span class="fw-bold text-dark" id="cart-summary-items-count">0</span>
                            </div>
                            <div class="d-flex justify-content-between mb-4 border-bottom pb-2">
                                <span class="text-muted">Logistics Distribution</span>
                                <span class="text-success fw-bold font-monospace text-uppercase">Free Secure Delivery</span>
                            </div>
                            <div class="mb-3">
    <label class="fw-bold mb-2">
        Discount Coupon
    </label>
    <div class="input-group">
        <input
            type="text"
            id="coupon-code"
            class="form-control"
            placeholder="Enter coupon code">
        <button
            class="btn btn-success"
            onclick="applyCoupon()">
            Apply
        </button>
    </div>
</div>
<div class="d-flex justify-content-between mb-3">
    <span>Discount</span>

    <span id="discount-amount">

        Rs. 0

    </span>

</div>
                            <div class="d-flex justify-content-between align-items-center mb-4">
                                <span class="fw-bold text-dark fs-5">Grand Valuation</span>
                                <span class="fw-extrabold text-warning fs-4 bg-dark px-3 py-1 rounded" id="cart-summary-total">Rs. 0</span>
                            </div>
                            <button class="btn btn-dark text-white w-100 py-3 fw-bold text-uppercase rounded-2 tracking-wider" onclick="transitionToCheckoutView()">
                                <i class="fa-solid fa-credit-card me-2 text-warning"></i> Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="checkout-view" class="view-panel d-none">
            <h2 class="page-heading">
    <i class="fa-solid fa-truck-fast text-warning me-2"></i>Logistics Handover Sheet
</h2>
            <div class="row g-4">
                <div class="col-lg-7">
                    <div class="card shadow-sm border p-4 bg-white rounded-3">
                        <form id="checkoutShippingForm" onsubmit="executeOrderFinalizationPayload(event)">
                            <div class="mb-3">
                                <label class="small fw-bold text-secondary mb-1">Name</label>
                                <input type="text" id="shipFullName" class="form-control py-2 shadow-none" placeholder="Enter Full Name" required>
                            </div>
                            <div class="mb-3">
                                <label class="small fw-bold text-secondary mb-1">Contact Number</label>
                                <input type="text" id="shipPhone" class="form-control py-2 shadow-none" placeholder="03XXXXXXXXX" required>
                            </div>
                            <div class="mb-3">
                                <label class="small fw-bold text-secondary mb-1">Physical Destination Address Coordinates</label>
                                <textarea id="shipAddress" class="form-control shadow-none" rows="3" placeholder="Street layout details..." required></textarea>
                            </div>
                            <div class="row g-3 mb-4">
                                <div class="col-md-6">
                                    <label class="small fw-bold text-secondary mb-1">Distribution Center City</label>
                                    <input type="text" id="shipCity" class="form-control py-2 shadow-none" placeholder="e.g. Sialkot" required>
                                </div>
                                <div class="col-md-6">
                                    <label class="small fw-bold text-secondary mb-1">Domain State</label>
                                    <input type="text" id="shipCountry" class="form-control py-2 shadow-none bg-light" value="Pakistan" readonly>
                                </div>
                            </div>
<div class="p-3 mb-4 rounded border d-flex align-items-center shadow-sm" style="background-color: #e8f5e9; border-color: #c8e6c9;">
    <i class="fa-solid fa-circle-info me-3 fs-5" style="color: #0c5460;"></i> 
    <span style="color: #0c5460; font-family: sans-serif; font-size: 15px;">
        <strong>Payment Method:</strong> Cash on Delivery (COD)
    </span>
</div>
                            <button type="submit" class="btn w-100 py-2 d-flex align-items-center justify-content-center gap-2 text-white" style="background-color: #1a1e36; border-radius: 6px; font-weight: 500; font-size: 16px;">
    <i class="fa-regular fa-circle-check"></i> Place Order
</button>
                        </form>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="card border shadow-sm bg-white rounded-3">
                       <div class="card-header bg-dark text-white py-3">
    <h6 class="fw-bold m-0" style="font-family:'Poppins', sans-serif;">
        Allocation hold counter terminal
    </h6>
</div>
                        <div class="card-body p-4">
                            <div class="p-3 mb-3 bg-light rounded text-center border text-danger fw-bold fs-6 shadow-sm border-danger"
style="font-family:'Inter', sans-serif;"
id="checkout-session-countdown-node">
    Allocation Hold Time Remaining: 10:00
</div>
                            <div id="checkout-receipt-manifest-list" class="mb-4 overflow-y-auto" style="max-height:260px;"></div>
                            <div class="d-flex justify-content-between align-items-center pt-3 border-top">
    <span class="fw-bold text-dark small" style="font-family:'Poppins', sans-serif;">
        Total valuation weight
    </span>
    <span class="fw-bold text-warning fs-4 bg-dark px-3 py-1 rounded" id="checkout-receipt-total">
        Rs. 0
    </span>
</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="order-success-view" class="view-panel d-none py-4 text-center">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card border-0 shadow p-5 bg-white rounded-4">
                        <div class="mb-4 mx-auto d-flex align-items-center justify-content-center bg-success text-white rounded-circle shadow-lg" style="width:80px; height:80px;">
                            <i class="fa-solid fa-check-double fs-2"></i>
                        </div>
                        <h2 class="fw-extrabold text-dark mb-1 font-brand-family">Drop Secured Successfully</h2>
                        <p class="text-muted small mb-4">Your limited allocation has passed checkout validation benchmarks cleanly.</p>
                        <div class="alert alert-light text-start border p-4 mb-4 text-dark shadow-xs" id="success-invoice-box-summary"></div>
                        <button
    class="btn btn-dark success-btn"
    onclick="navigateToView('my-orders')">
    REVIEW DROP HISTORY
</button>

<button
    class="btn btn-outline-dark success-btn"
    onclick="navigateToView('products')">
    CONTINUE ALLOCATION
</button>
                </div>
            </div>
        </div>
        </div>  

        <div id="my-orders-view" class="view-panel d-none">
           <h2 class="page-heading">
    <i class="fa-solid fa-file-invoice text-warning me-2"></i>My Allocation Manifest Ledger
</h2>
            <div id="historical-orders-container-target"></div>
        </div>

    </main>

    <div class="modal fade" id="quantitySelectionModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content border-0 shadow">
                <div class="modal-header bg-dark text-white">
                    <h5 class="modal-title fw-bold font-monospace text-warning" id="modalTitle">Device Allocation Configuration</h5>
                    <button type="button" class="btn-close btn-close-white shadow-none" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body p-4">
                    <div class="text-center mb-3 bg-light p-3 rounded">
                        <img id="modalImg" src="" style="max-height:180px; object-fit:contain;">
                    </div>
                    <h5 class="fw-bold text-dark mb-1" id="modalItemName">Product Title</h5>
                    <h4 class="fw-extrabold text-warning mb-3 font-monospace" id="modalItemPrice">Rs. 0</h4>
                    <p class="text-muted small mb-4" id="modalItemDesc">Product specs description matrix info data.</p>
                    
                    <div class="p-3 bg-light rounded border border-warning-subtle">
                       <label class="small fw-bold text-secondary mb-2 d-block" style="font-family: 'Inter', sans-serif; text-transform: capitalize;">
    <i class="fa-solid fa-cubes me-1"></i>Select allocation quantity
</label>
                        <div class="input-group" style="max-width:160px;">
                            <button class="btn btn-outline-dark fw-bold" onclick="adjustModalQuantityValue(-1)">-</button>
                            <input type="text" id="modalQtyInput" class="form-control text-center bg-white border-dark fw-bold shadow-none" value="1" readonly>
                            <button class="btn btn-outline-dark fw-bold" onclick="adjustModalQuantityValue(1)">+</button>
                        </div>
                        <small class="text-danger mt-2 d-block"
id="modalStockWarningLabel"
style="font-family:'Inter',sans-serif;font-size:14px;font-weight:600;"></small>
                    </div>
                </div>
                <div class="modal-footer bg-light">
                    <button type="button" class="btn btn-secondary fw-bold" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-warning text-dark fw-bold px-4 text-uppercase" id="modalAddCartBtn">Add To Cart</button>
                </div>
            </div>
        </div>
    </div>
    <footer class="bg-dark text-white-50 py-5 mt-0 border-top border-warning border-4 bg-dark-navbar">
        <div class="container">
            <div class="row g-4 text-start">
                <div class="col-md-4">
                    <h5 class="fw-bold text-warning mb-3"><i class="fa-solid fa-bolt me-2"></i>K.AQSA Electronics</h5>
                    <p class="small lh-relaxed">Premium electronic hardware configuration matrices. Built natively for frontend high allocation performance.</p>
                </div>
                <div class="col-md-4">
    <h6 class="fw-bold text-white mb-3 custom-footer-heading">Quick Links</h6>
    <ul class="list-unstyled d-flex flex-column gap-2 custom-footer-list">
        <li><a href="#" onclick="navigateToView('home')" class="text-white-50 text-decoration-none">Home Canvas</a></li>
        <li><a href="#" onclick="navigateToView('products')" class="text-white-50 text-decoration-none">Allocation Grid</a></li>
        <li><a href="#" onclick="navigateToView('cart')" class="text-white-50 text-decoration-none">My Basket Workspace</a></li>
    </ul>
</div>

<style>
    .custom-footer-heading {
        font-family: 'Segoe UI', sans-serif !important;
        text-transform: none !important; 
        letter-spacing: 0px !important;
    }
    
    .custom-footer-list a {
        font-family: 'Segoe UI', sans-serif !important;
        font-size: 14px; 
    }
</style>
                <div class="col-md-4">
    <h6 class="fw-bold text-white mb-3 custom-footer-heading">Contact Channels</h6>
    
    <p class="custom-contact-text m-0">
        <i class="fa-solid fa-envelope me-2 text-warning"></i>kimaqsa763@gmail.com
    </p>
    
    <p class="custom-contact-text mt-2">
        <i class="fa-solid fa-location-dot me-2 text-warning"></i>Narowal, Punjab, Pakistan
    </p>
</div>

<style>
    .custom-footer-heading {
        font-family: 'Segoe UI', sans-serif !important;
        text-transform: none !important;
        letter-spacing: 0px !important;
    }
    
    .custom-contact-text {
        font-family: 'Segoe UI', sans-serif !important;
        font-size: 14px; 
        color: #d1d1d1; 
    }
</style>
            </div>
            <hr class="border-secondary my-4">
            <div class="text-center size-11 font-monospace">
                &copy; 2026 K.AQSA Limited Drop Architecture Engine Panel. CloudExify Intern Systems Grid.
            </div>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/data.js"></script>
    <script src="js/script.js"></script>
</body>
</html>

________________________________________
Code 2: CSS

:root {
    --navy-header-bg: #0f172a;
    --hero-blue-deep: linear-gradient(135deg, #020617 0%, #0f172a 50%, #1e293b 100%);
    --body-gray-canvas: #f8fafc;
}

body {
    background-color: var(--body-gray-canvas);
    font-family: 'Inter', sans-serif;
    color: #1e293b;
     transition: .3s;
}

.navbar-brand-classic {
    font-family: 'Cinzel', serif;
    font-size: 1.7rem;
    font-weight: 700;
    color: #ffc107 !important;
    text-decoration: none;
    letter-spacing: 1px;
}

.font-brand-family {
    font-family: 'Cinzel', serif;
}

.bg-dark-navbar {
    background-color: var(--navy-header-bg) !important;
    border-bottom: 2px solid #334155;
}

.hero-blue-canvas {
    background: var(--hero-blue-deep);
    border-bottom: 5px solid #ffc107;
}

.timer-block-card {
    min-width: 80px;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3);
}

.pill-badge {
    background-color: #ffffff;
    color: #64748b;
    font-weight: 600;
    border: 1px solid #e2e8f0;
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 12.5px;
    text-transform: uppercase;
    transition: all 0.2s ease;
    cursor: pointer;
}

.pill-badge:hover, .pill-badge.active {
    background-color: #ffc107;
    color: #0f172a;
    border-color: #ffc107;
}

.store-product-card {
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 12px !important;
    overflow: hidden;
}

.store-product-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08) !important;
}

.img-canvas-wrapper {
    position: relative;
    height: 200px;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    border-bottom: 1px solid #f1f5f9;
}

.img-canvas-wrapper img {
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
    transition: .3s;
}
.store-product-card:hover .img-canvas-wrapper img{
    transform:scale(1.05);
}

.table-align-middle td, .table-align-middle th {
    vertical-align: middle;
}

.animate-pulse {
    animation: pulseKey 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulseKey {
    0%, 100% { opacity: 1; }
    50% { opacity: .6; }
}

.view-panel {
    animation: slideFade 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes slideFade {
    from { opacity: 0; transform: translateY(6px); }
    to { opacity: 1; transform: translateY(0); }
}

.size-11 { font-size: 11px; }
.tracking-wider { letter-spacing: 0.07em; }
/* ===== PRODUCT CARD NEW DESIGN ===== */

.store-product-card{
    border-radius:16px;
    overflow:hidden;
    transition:.3s;
}

.store-product-card:hover{
    transform:translateY(-6px);
    box-shadow:0 15px 30px rgba(0,0,0,.12);
}

.product-category{
    display:inline-block;
    width:fit-content;
    background:#6c757d;
    color:#fff;
    padding:5px 12px;
    border-radius:8px;
    font-size:12px;
    font-weight:600;
    margin-bottom:10px;
}
.product-name{
    font-size:20px;
    font-weight:700;
    color:#222;
    margin:10px 0;
   min-height:56px;
}

.product-price{
    color:#ffb700;
    font-size:20px;
    font-weight:800;
    margin-bottom:15px;
}

.stock-box{
    width:100%;
    height:32px;
    background:#d9f3e8;
    border:1px solid #bfe8d7;
    border-radius:8px;

    display:flex;
    justify-content:center;
    align-items:center;

    color:#13885b;
    font-size:14px;
    font-weight:700;

    margin-bottom:12px;
}

.view-btn{
    width:100%;
    height:40px;
    border:none;
    border-radius:6px;
    background:#1d1d39;
    color:#fff;
    font-size:17px;
    font-weight:600;
    transition:.3s;
     letter-spacing:.5px;
}

.view-btn:hover{
    background:#111827;
}

.page-heading{
    font-family:'Poppins',sans-serif;
    font-size:32px;
    font-weight:700;
    color:#1f2937;
    letter-spacing:0.5px;
    margin-bottom:30px;
}

.page-heading i{
    color:#f4b400;
    margin-right:10px;
}

.payment-box{
    background:linear-gradient(135deg,#fff8e1,#ffe082);
    border:2px solid #ffc107;
    border-radius:12px;
    padding:18px;
    margin-bottom:20px;

    color:#333;
    font-size:15px;
    font-weight:500;

    box-shadow:0 5px 15px rgba(255,193,7,.25);
}

.payment-box strong{
    color:#1d1d39;
    font-weight:700;
}

.payment-box i{
    color:#ff9800;
    font-size:22px;
    margin-right:10px;
}

#product-details-view img{
    width:100%;
    height:450px;
    object-fit:contain;
    background:#fff;
    border-radius:12px;
    padding:20px;
}

#details-name{
    font-size:34px;
    font-weight:700;
}

#details-price{
    font-size:30px;
    color:#ffb700;
}

#details-description{
    color:#555;
    line-height:1.7;
    max-width:700px;
    font-size:16px;
}

#details-stock{
    font-weight:600;
    border-radius:8px;
}

#related-products-row .card{
    border-radius:12px;
    transition:.3s;
}

#related-products-row .card:hover{
    transform:translateY(-5px);
}
#related-products-row .card-body{
    padding:18px;
}
.store-product-card .card-body{
    display:flex;
    flex-direction:column;
}

.view-btn{
    margin-top:auto;
}
@media(max-width:768px){

    #product-details-view img{
        height:280px;
    }

    #details-name{
        font-size:26px;
    }

    #details-price{
        font-size:24px;
    }

}
.success-btn{
    width:100%;
    height:56px;
    font-size:18px;
    font-weight:700;
    border-radius:10px;
}

.success-btn + .success-btn{
    margin-top:14px;
}
.table-dark th {
    font-family: 'Inter', sans-serif !important;
    text-transform: capitalize !important; 
    font-weight: 600 !important;          
}

.toast-message{
    position: fixed;

    top: 60px;          
    right: 20px;

    min-width: 220px;

    max-width: 260px;

    background: #198754;
    color: #fff;

    padding: 10px 16px;
    border-radius: 88px;

    font-size: 14px;
    font-weight: 600;
    font-family: 'Inter', sans-serif;

    text-align: center;

    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: .35s;

    z-index: 99999;

    box-shadow: 0 10px 25px rgba(0,0,0,.25);
}

.toast-message.show{
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}
.wishlist-btn{

    position:absolute;

    top:8px;

    right:8px;

    width: 28px;

    height:28px;

    border:none;

    border-radius:50%;

    background:#fff;

    box-shadow:0 2px 8px rgba(0,0,0,.15);

    cursor:pointer;

    font-size:14px;

    transition:.3s;
    line-height:28px;
padding:0;
z-index:999;

}

.wishlist-btn:hover{

    transform:scale(1.1);

}

.wishlist-btn.active{

    color:#e63946;

}
body.dark-mode{
    background:#121212;
    color:#ffffff;
}

body.dark-mode .bg-dark-navbar{
    background:#000 !important;
}

body.dark-mode .card{
    background:#1f1f1f !important;
    color:#ffffff !important;
}

body.dark-mode .img-canvas-wrapper{
    background:#2b2b2b;
}

body.dark-mode .product-name,
body.dark-mode .page-heading,
body.dark-mode #details-name,
body.dark-mode #details-description{
    color:#ffffff !important;
}

body.dark-mode .table{
    color:#ffffff;
}

body.dark-mode .modal-content{
    background:#1f1f1f;
    color:#ffffff;
}

body.dark-mode .form-control{
    background:#2b2b2b;
    color:#ffffff;
    border-color:#555;
}

body.dark-mode .dropdown-menu{
    background:#1f1f1f;
}

body.dark-mode .dropdown-item{
    color:#ffffff;
}

body.dark-mode .dropdown-item:hover{
    background:#333;
}

body.dark-mode .payment-box{
    background:#2b2b2b;
    color:#fff;
    border-color:#555;
}

________________________________________
Code 3: Script.js

const airpodsImages = [
    "https://i.pinimg.com/736x/4f/5f/28/4f5f28063174028c57e96f0fadf21a53.jpg",
    "https://i.pinimg.com/736x/42/4e/76/424e7686d96514528602705ec447998b.jpg",
    "https://i.pinimg.com/1200x/04/b9/c8/04b9c855269bdc6be7ede60acd6e4cc8.jpg",
    "https://i.pinimg.com/1200x/73/0a/6c/730a6ca67e6fba7aa9239a51b75be735.jpg",
    "https://i.pinimg.com/736x/21/2b/21/212b210d8f3948cd43570cb034e52de1.jpg",
    "https://i.pinimg.com/736x/54/2e/d6/542ed63b1534262cca0239046da7a2bd.jpg",
    "https://i.pinimg.com/736x/e8/54/84/e8548488ceaffddbb1c06a4758dddcff.jpg",
    "https://i.pinimg.com/736x/da/56/c2/da56c276ed74c5e05cbe3a68650ad9cd.jpg",
    "https://i.pinimg.com/736x/20/04/45/2004459223032a12ed725504374424ca.jpg",
    "https://i.pinimg.com/736x/bb/92/78/bb9278e5e1b5b47ec76c82d0f230bdce.jpg"
];

const earbudsImages = [
    "https://i.pinimg.com/1200x/06/6b/a6/066ba692a515401cc104c6435fbd1b06.jpg",
    "https://i.pinimg.com/736x/96/a4/71/96a471c466857a27abdb530bc06c6981.jpg",
    "https://i.pinimg.com/1200x/6b/61/dd/6b61dd378109c4b0be798135c54adef7.jpg",
    "https://i.pinimg.com/1200x/ff/2e/bc/ff2ebc9246a14775ebb597b22282f460.jpg",
    "https://i.pinimg.com/1200x/74/54/63/7454633add2afa4e5873dda9a7fa42c0.jpg",
    "https://i.pinimg.com/1200x/c9/0a/5a/c90a5aa003cd1c366018933339256e1a.jpg",
    "https://i.pinimg.com/736x/36/10/e5/3610e52829f005f54d8f529f46c9d73c.jpg",
    "https://i.pinimg.com/736x/1a/35/31/1a353159e1e3f603f603165121fd90ed.jpg",
    "https://i.pinimg.com/1200x/7f/6d/a3/7f6da352c84180128d33ab89756b5cab.jpg",
    "https://i.pinimg.com/736x/6e/9c/46/6e9c461e4f129f5596abf22af1beb86d.jpg",
    "https://i.pinimg.com/736x/f8/73/43/f873434d64ec83da3ecc98007e7437e0.jpg",
    "https://i.pinimg.com/736x/13/bc/57/13bc5717de2d57f4a2a54cac04138d28.jpg",
    "https://i.pinimg.com/736x/16/8c/5c/168c5c3e9858b2808d5d21d00fd167f2.jpg"
];

const speakerImages = [
    "https://i.pinimg.com/1200x/74/5f/f6/745ff6565868246178f23f6509271adb.jpg",
    "https://i.pinimg.com/1200x/30/04/1b/30041bc2df1e8ec7a02d268e52c12fad.jpg",
    "https://i.pinimg.com/1200x/d2/ef/7c/d2ef7c1aa3188857a220045abd6e7be2.jpg",
    "https://i.pinimg.com/1200x/f0/b5/d5/f0b5d5f69cf73f8ffe3c7eadbb0b7501.jpg",
    "https://i.pinimg.com/1200x/04/30/db/0430db7b71506b51f19b72ae170ae759.jpg",
    "https://i.pinimg.com/1200x/1d/2e/08/1d2e08ea5e5cf47c12720e156ce41a55.jpg",
    "https://i.pinimg.com/736x/ad/f3/e2/adf3e2053427789ba289c5796853d8a0.jpg",
    "https://i.pinimg.com/1200x/87/8a/65/878a65ae8a0447e664dd491b0c2303b4.jpg",
    "https://i.pinimg.com/1200x/b8/00/81/b80081c151b1bd19609cc0a37820c5c6.jpg",
    "https://i.pinimg.com/736x/4c/f9/38/4cf938e57618768a7dd4e6969d5bca47.jpg"
];

const chargersImages = [
    "https://i.pinimg.com/1200x/0a/e1/47/0ae147f372aa9bf3d66c885e39d0d872.jpg",
    "https://i.pinimg.com/1200x/5f/c3/f4/5fc3f497d779f0115a0483dba1306114.jpg",
    "https://i.pinimg.com/736x/29/3b/6a/293b6a9d8208b982c43bd2b1d326f339.jpg",
    "https://i.pinimg.com/1200x/cb/a7/85/cba7857003a32aecc84756adc7692561.jpg",
    "https://i.pinimg.com/1200x/ff/81/1a/ff811a5e4593e27a7d1197c1d99a150e.jpg",
    "https://i.pinimg.com/1200x/cb/75/bb/cb75bb0e114dd3f9ab7416386ced1fd4.jpg",
    "https://i.pinimg.com/1200x/4e/ff/f0/4efff0d4580b3d1f741eb45bf9c94fc1.jpg",
    "https://i.pinimg.com/736x/92/29/78/922978fa2fdbdd20be2feccbf83d1c6e.jpg",
    "https://i.pinimg.com/1200x/8b/20/f0/8b20f0379d28ef7bb7d4325a1e0d9b2b.jpg",
    "https://i.pinimg.com/1200x/dd/53/ca/dd53ca8e7e61d24bd389edab67cec253.jpg",
    "https://i.pinimg.com/736x/e1/4d/88/e14d882992bf914362ace17533faa37d.jpg"
];

const fastChargerImages = [
    "https://i.pinimg.com/1200x/0e/06/60/0e0660b07854e7a080bc1f81e89916af.jpg",
    "https://i.pinimg.com/736x/21/3a/ae/213aae700eb81441dd7ce52d52c6cef7.jpg",
    "https://i.pinimg.com/736x/4d/74/77/4d74775de5f9f788a99a76607e0ec354.jpg",
    "https://i.pinimg.com/1200x/0b/7a/13/0b7a136973a0fccd95e99d2961d48a40.jpg",
    "https://i.pinimg.com/1200x/fb/6e/fd/fb6efdbefbf8943514e10fd829ff673c.jpg",
    "https://i.pinimg.com/736x/71/c1/65/71c165f2ba7786a95020cb1250a30c2f.jpg",
    "https://i.pinimg.com/736x/e0/d2/e6/e0d2e66c1a888018181e29ca41ba785a.jpg",
    "https://i.pinimg.com/1200x/d2/7c/1d/d27c1df04aef7e4be223a20109d1886e.jpg",
    "https://i.pinimg.com/1200x/39/59/f3/3959f339db8f099fd1a494e54faaf10f.jpg",
    "https://i.pinimg.com/736x/e2/77/a4/e277a4d7d8c6f40de1a53ec41704aecd.jpg",
    "https://i.pinimg.com/736x/22/f2/a7/22f2a7f6dd9333ea3397642079976361.jpg"
];

const gamingImages = [
    "https://i.pinimg.com/736x/ab/05/92/ab05929a12df309b0e8e3a9e505dc2b4.jpg",
    "https://i.pinimg.com/1200x/59/44/08/5944085d14eff33f637d440d09baafe7.jpg",
    "https://i.pinimg.com/1200x/37/35/d3/3735d3bc8c50d9aa945b38e97fb64f9e.jpg",
    "https://i.pinimg.com/736x/ba/b4/d9/bab4d90debea9d675b0da79657296de6.jpg",
    "https://i.pinimg.com/736x/64/c7/ed/64c7ed6c9001090fddea78cf4273eb01.jpg",
    "https://i.pinimg.com/736x/e1/3d/ba/e13dbaab6c95afa767553f22ae1ed2fc.jpg",
    "https://i.pinimg.com/1200x/e1/30/f4/e130f4f18832ed0cffbe9be31b510ec3.jpg",
    "https://i.pinimg.com/1200x/bf/94/77/bf9477e0f37a65a6b9d239bac425606d.jpg",
    "https://i.pinimg.com/1200x/32/25/6a/32256ae89519cbac9481fcd50f184864.jpg",
    "https://i.pinimg.com/1200x/b4/f0/a6/b4f0a6452ac38e93167ef248e29dbb28.jpg"
];

const headphoneImages = [
    "https://i.pinimg.com/736x/10/9c/3f/109c3f35a1ed7308892c66135e029352.jpg",
    "https://i.pinimg.com/736x/99/a7/ab/99a7abe70b8e64d3038dbe15af76f276.jpg",
    "https://i.pinimg.com/736x/f2/31/d0/f231d04cad938f4176235b35790e4469.jpg",
    "https://i.pinimg.com/1200x/58/7b/b4/587bb4b6d7f25b478ec09554928a030c.jpg",
    "https://i.pinimg.com/736x/75/37/c2/7537c234d6256c7623922fbfa94f0a50.jpg",
    "https://i.pinimg.com/736x/6e/6d/c8/6e6dc8cb5a30ff73aebfd5774a77a5b3.jpg",
    "https://i.pinimg.com/1200x/f9/b6/e6/f9b6e665d7bd3c6d5206e2cd64cfeacf.jpg",
    "https://i.pinimg.com/1200x/2b/06/e3/2b06e3eea27c8f3e80a92877250383aa.jpg",
    "https://i.pinimg.com/1200x/4d/3d/f5/4d3df561229522bd6101ce3b48429a28.jpg",
    "https://i.pinimg.com/736x/c2/79/e9/c279e90bc7a61395fed065f976f13d7b.jpg"
];

const watchImages = [
    "https://i.pinimg.com/1200x/37/a8/ae/37a8ae2095512429d5d0ffa5d8675378.jpg",
    "https://i.pinimg.com/1200x/4d/14/29/4d1429dcb6d53b48ac712d155690bb5c.jpg",
    "https://i.pinimg.com/1200x/d9/5a/c7/d95ac73f232c7faed078122fea87c5ab.jpg",
    "https://i.pinimg.com/736x/f7/6a/1d/f76a1dac095a1edc06f38b2318fd2e87.jpg",
    "https://i.pinimg.com/736x/d3/da/b9/d3dab90067c5170809bb50c28115970e.jpg",
    "https://i.pinimg.com/1200x/23/a3/d1/23a3d1e8ac86330ea14c93052a8f4f6d.jpg",
    "https://i.pinimg.com/1200x/c2/28/85/c22885711c94c6e61f027e9ecbf4f76c.jpg",
    "https://i.pinimg.com/736x/19/4e/a3/194ea3ba73cdebece8eba76a5f63c393.jpg",
    "https://i.pinimg.com/1200x/1d/f5/0c/1df50cb1c91aedaaf68464559108b386.jpg",
    "https://i.pinimg.com/1200x/84/8d/f8/848df895be7584633d08da310d6e2f49.jpg"
];

const smartphoneImages = [
    "https://i.pinimg.com/736x/24/22/32/24223258deb2711a6cfb6ffe2ba3b5e9.jpg",
    "https://i.pinimg.com/1200x/f1/4b/52/f14b52bcbac33d409ca7cb7f2536af1d.jpg",
    "https://i.pinimg.com/736x/ef/f5/ea/eff5ea109b12214edd36c753bb07dc23.jpg",
    "https://i.pinimg.com/736x/a3/21/80/a321806a710e0e33d0bd97b4e5ccc394.jpg",
    "https://i.pinimg.com/1200x/ae/55/36/ae553613304bcb82fc1b46c1c3b63594.jpg",
    "https://i.pinimg.com/736x/c2/15/de/c215de9d0ac9d290fa7e0c5caadca4d5.jpg",
    "https://i.pinimg.com/1200x/82/1b/b5/821bb50db202305360fd97776bbb7a55.jpg",
    "https://i.pinimg.com/1200x/bc/ab/d0/bcabd0a4babdc1cde947840466c1d471.jpg",
    "https://i.pinimg.com/736x/b4/e2/f7/b4e2f7696ae0ccfc1482e49671379f61.jpg",
    "https://i.pinimg.com/736x/74/78/cf/7478cf0882d2bcb97211abb5fd5881ce.jpg"
];

const cableImages = [
    "https://i.pinimg.com/736x/20/9e/30/209e30a2546804de50db97ee671fedbe.jpg",
    "https://i.pinimg.com/1200x/b2/c7/4a/b2c74aed6ff516b86b9d06d3dcbd7af9.jpg",
    "https://i.pinimg.com/736x/80/94/0c/80940cf262c0bd190e4236be714031ec.jpg",
    "https://i.pinimg.com/1200x/73/4c/70/734c706a78c926718636ec296cf74e13.jpg",
    "https://i.pinimg.com/1200x/00/b9/6a/00b96aece87524ce4e05b07dc798dc8d.jpg",
    "https://i.pinimg.com/1200x/37/42/da/3742dab5c795ac4ae6b6eb7d963e54bd.jpg",
    "https://i.pinimg.com/1200x/d3/f2/96/d3f296b1de4ae75b80d2040367d8c0e4.jpg",
    "https://i.pinimg.com/1200x/2d/52/b9/2d52b93e92e4e8adc0d831961d1f251e.jpg",
    "https://i.pinimg.com/1200x/35/df/6c/35df6cda211a36973e379a23bd9b6568.jpg",
    "https://i.pinimg.com/1200x/78/65/7b/78657b13a707e803a15136cc38f0b656.jpg"
];

let airpodCounter = 0, earbudsCounter = 0, speakerCounter = 0, chargerCounter = 0, fastChargerCounter = 0, gamingCounter = 0, headphoneCounter = 0, watchCounter = 0, smartphoneCounter = 0, cableCounter = 0;

let runtimeProducts = STORE_PRODUCTS_ARRAY.map((item, i) => {
    let cleanImage = "";

    if (item.category === "AirPods") cleanImage = airpodsImages[airpodCounter++ % airpodsImages.length];
    else if (item.category === "Earbuds") cleanImage = earbudsImages[earbudsCounter++ % earbudsImages.length];
    else if (item.category === "Bluetooth Speakers") cleanImage = speakerImages[speakerCounter++ % speakerImages.length];
    else if (item.category === "Chargers") cleanImage = chargersImages[chargerCounter++ % chargersImages.length];
    else if (item.category === "Fast Chargers") cleanImage = fastChargerImages[fastChargerCounter++ % fastChargerImages.length];
    else if (item.category === "Gaming Accessories") cleanImage = gamingImages[gamingCounter++ % gamingImages.length];
    else if (item.category === "Headphones") cleanImage = headphoneImages[headphoneCounter++ % headphoneImages.length];
    else if (item.category === "Smart Watches") cleanImage = watchImages[watchCounter++ % watchImages.length];
    else if (item.category === "Smartphones") cleanImage = smartphoneImages[smartphoneCounter++ % smartphoneImages.length];
    else if (item.category === "USB Cables") cleanImage = cableImages[cableCounter++ % cableImages.length];
    else cleanImage = "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=500&q=80";
    
    return {
    ...item,
    image: cleanImage,
    rating: item.rating || (Math.random() * 2 + 3).toFixed(1)
};
});

let wishlist = [];
let currentSort = "default";
let wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];
let discountPercent = 0;
let appliedCoupon = "";
let activeBasket = []; 
let savedRegProfileMemory = JSON.parse(localStorage.getItem('kaqsa_registered_user_v5')) || null;
let activeSessionUser = JSON.parse(localStorage.getItem('kaqsa_logged_user_v5')) || null;
let purchaseHistoryLog = JSON.parse(localStorage.getItem('kaqsa_order_log_v5')) || [];

let activeCategoryFilter = "All";
let holdTimerCountdown = 600; 
let holdIntervalRef = null;
let bootstrapModalObjRef = null;
let modalActiveProductId = null;
let modalSelectedQuantityValue = 1;

document.addEventListener('DOMContentLoaded', () => {

    bootstrapModalObjRef = new bootstrap.Modal(document.getElementById('quantitySelectionModal'));
    
    loadUserCart(); 
    initiateGlobalHeroBannerClockTick();
    refreshNavigationHeaderControlPanel();
    buildCategoryFilterPillsStripRow();
    
    window.addEventListener('popstate', (e) => {
        if (e.state && e.state.view) renderViewDOMSwitchState(e.state.view, false);
    });
    history.replaceState({ view: 'home' }, 'Home', '#home');
    renderViewDOMSwitchState('home', false);
    if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark-mode");

    const btn = document.getElementById("theme-btn");

    if(btn){
        btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

}
});
function sortProducts(type){

    currentSort = type;

    renderMainCatalogGridStructure();

}
function toggleWishlist(productId){

    if(wishlistItems.includes(productId)){

        wishlistItems = wishlistItems.filter(id => id !== productId);

        showToast("Removed from wishlist");

    }else{

        wishlistItems.push(productId);

        showToast("Added to wishlist");

    }

    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));

    renderMainCatalogGridStructure();
    renderWishlist();

}
function isWishlisted(productId){

    return wishlistItems.includes(productId);

}

function navigateToView(viewId) {
    history.pushState({ view: viewId }, viewId, `#${viewId}`);
    renderViewDOMSwitchState(viewId, true);
}
function showToast(message){

    const toast=document.getElementById("toast-message");

    toast.innerText=message;

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");

    },2000);

}

function renderViewDOMSwitchState(viewId, scrollSmooth = true) {
    document.querySelectorAll('.view-panel').forEach(panel => panel.classList.add('d-none'));
    
    const elementTarget = document.getElementById(`${viewId}-view`);
    if (elementTarget) elementTarget.classList.remove('d-none');

    if (viewId === 'products') renderMainCatalogGridStructure();
    else if (viewId === 'cart') rebuildCartInterfaceTableGrid();
    else if (viewId === "wishlist")
    renderWishlist();
    else if (viewId === 'my-orders') rebuildHistoricalOrdersLogViewGrid();
    else if (viewId === 'home') { renderHomeCategoriesGrid(); renderHomeFeaturedDrops(); }

    updateFooterDesign(viewId);

    if (scrollSmooth) window.scrollTo({ top: 0, behavior: 'smooth' });
}

function initiateGlobalHeroBannerClockTick() {
    let hr = 2, min = 45, sec = 0;
    setInterval(() => {
        sec--;
        if (sec < 0) { sec = 59; min--; if (min < 0) { min = 59; hr--; if (hr < 0) { hr = 0; min = 0; sec = 0; } } }
        if(document.getElementById('drop-clock-hours')) {
            document.getElementById('drop-clock-hours').innerText = String(hr).padStart(2, '0');
            document.getElementById('drop-clock-minutes').innerText = String(min).padStart(2, '0');
            document.getElementById('drop-clock-seconds').innerText = String(sec).padStart(2, '0');
        }
    }, 1000);
}

function renderHomeCategoriesGrid() {
    const target = document.getElementById('home-categories-grid');
    if (!target) return;
    let displayPillSlices = ["AirPods", "Bluetooth Speakers", "Chargers", "Earbuds", "Fast Chargers", "Gaming Accessories"];
    target.innerHTML = displayPillSlices.map(cat => `
        <div class="col-6 col-md-2" onclick="triggerCategoryPillFilter('${cat}')">
            <div class="p-3 bg-white border text-center rounded store-product-card shadow-sm" style="cursor:pointer;">
                <i class="fa-solid fa-bolt text-warning fs-4 mb-2 d-block"></i>
                <span class="fw-bold small text-secondary font-monospace" style="font-size:11.5px;">${cat}</span>
            </div>
        </div>
    `).join('');
}

function renderHomeFeaturedDrops() {
    const target = document.getElementById('featured-products-row');
    if (!target) return;

    target.innerHTML = runtimeProducts.slice(0, 4).map(item => `
        <div class="col-6 col-md-3">
           <div class="card h-100 store-product-card shadow-sm border bg-white position-relative">
                <div class="img-canvas-wrapper">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="card-body">
                    <span class="product-category">${item.category}</span>
                    <h5 class="product-name">${item.name}</h5>
                    <div class="product-price">Rs. ${item.price.toLocaleString()}</div>
                    <div class="stock-box">In Stock</div>
                    <button class="view-btn" onclick="showProductDetails(${item.id})">View Details</button>
                </div>
            </div>
        </div>
    `).join('');
}

function buildCategoryFilterPillsStripRow() {
    const stripContainer = document.getElementById('dynamic-category-pill-strip');
    if (!stripContainer) return;
    let fullCategoriesOptionsList = ["All", ...AVAILABLE_CATEGORIES];
    stripContainer.innerHTML = fullCategoriesOptionsList.map(cat => {
        let activeCSS = (cat === activeCategoryFilter) ? "active" : "";
        return `<button class="btn btn-sm pill-badge ${activeCSS}" onclick="triggerCategoryPillFilter('${cat}')">${cat}</button>`;
    }).join('');
}

function triggerCategoryPillFilter(categoryName) {
    activeCategoryFilter = categoryName;
    navigateToView('products');
    buildCategoryFilterPillsStripRow();
    renderMainCatalogGridStructure();
}

function renderMainCatalogGridStructure() {
    const catalogContainer = document.getElementById('catalog-products-row');
    if (!catalogContainer) return;

    let processingFilteredList = runtimeProducts.filter(
        item => activeCategoryFilter === "All" || item.category === activeCategoryFilter
    );
    if(currentSort==="low"){

    processingFilteredList.sort((a,b)=>a.price-b.price);

}

else if(currentSort==="high"){

    processingFilteredList.sort((a,b)=>b.price-a.price);

}

else if(currentSort==="rating"){

    processingFilteredList.sort((a,b)=>(b.rating||5)-(a.rating||5));

}

   if (document.getElementById('total-count-string-node')) {
    document.getElementById('total-count-string-node').innerHTML = `
        <span class="custom-status-text" style="font-family: 'Segoe UI', sans-serif; font-size: 15px; color: #444;">
            Showing 
            <span class="badge bg-dark text-warning px-2 py-1 mx-1 rounded-3 fs-6 shadow-sm">
                ${processingFilteredList.length}
            </span> 
            Allocation Instances Available
        </span>
    `;
}

    catalogContainer.innerHTML = processingFilteredList.map(item => `
        <div class="col-6 col-md-3 mb-4">
            <div class="card h-100 store-product-card shadow-sm border bg-white">
            <button class="wishlist-btn ${isWishlisted(item.id)?'active':''}"
onclick="toggleWishlist(${item.id})">

${isWishlisted(item.id)?'❤':'♡'}

</button>
                <div class="img-canvas-wrapper">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="card-body">
                    <span class="product-category">${item.category}</span>
                    <h5 class="product-name">${item.name}</h5>
                    <div class="product-price">Rs. ${item.price.toLocaleString()}</div>
                    <div class="stock-box">In Stock</div>
                    <button class="view-btn" onclick="showProductDetails(${item.id})">View Details</button>
                </div>
            </div>
        </div>
    `).join('');
}

function openProductQuantityModal(productId) {
    const targetProduct = runtimeProducts.find(p => p.id === productId);
    if (!targetProduct) return;

    modalActiveProductId = productId;
    modalSelectedQuantityValue = 1;

    document.getElementById('modalImg').src = targetProduct.image;
    document.getElementById('modalItemName').innerText = targetProduct.name;
    
    const priceElement = document.getElementById('modalItemPrice');
    priceElement.innerText = `Rs. ${targetProduct.price.toLocaleString()}`;
    priceElement.setAttribute('data-base-price', targetProduct.price);

    document.getElementById('modalItemDesc').innerText = targetProduct.description;
    document.getElementById('modalQtyInput').value = "1";
    document.getElementById('modalStockWarningLabel').innerText = `Live batch allocation limit cap: ${targetProduct.stock} items`;

    document.getElementById('modalAddCartBtn').onclick = () => addItemToCartWorkspace();
    bootstrapModalObjRef.show();
}

function adjustModalQuantityValue(offset) {
    const matchedProduct = runtimeProducts.find(p => p.id === modalActiveProductId);
    if (!matchedProduct) return;

    let predictedValue = modalSelectedQuantityValue + offset;
    if (predictedValue >= 1 && predictedValue <= matchedProduct.stock) {
        modalSelectedQuantityValue = predictedValue;
        document.getElementById('modalQtyInput').value = modalSelectedQuantityValue;

        const priceElement = document.getElementById('modalItemPrice');
        const basePrice = parseFloat(priceElement.getAttribute('data-base-price'));
        const totalCalculatedPrice = basePrice * modalSelectedQuantityValue;
        
        priceElement.innerText = `Rs. ${totalCalculatedPrice.toLocaleString()}`;
    }
}

function saveCart() {
    const currentUsername = savedRegProfileMemory ? savedRegProfileMemory.username : 'guest';
    localStorage.setItem(`kaqsa_cart_v5_${currentUsername}`, JSON.stringify(activeBasket));
    refreshNavigationHeaderControlPanel();
}

function addItemToCartWorkspace() {
    if (!activeSessionUser) {
        bootstrapModalObjRef.hide();
        alert("Authorization session missing. Please create account and execute login verification first.");
        navigateToView('register');
        return;
    }

    const product = runtimeProducts.find(p => p.id === modalActiveProductId);
    if (!product) return;

    const existing = activeBasket.find(item => item.id === modalActiveProductId);
    if (existing) {
        let totalProposed = existing.quantity + modalSelectedQuantityValue;
        if (totalProposed <= product.stock) {
            existing.quantity = totalProposed;
        } else {
            alert("Requested allocation quantity increment bounds violate store stock limits.");
            return;
        }
    } else {
        activeBasket.push({ ...product, quantity: modalSelectedQuantityValue });
    }

   saveCart();

showToast("✓ Added to cart");

bootstrapModalObjRef.hide();

navigateToView('cart');
}

function handleUserRegistration(event) {
    event.preventDefault();

    let firstName = document.getElementById('regFirst').value.trim();
    let lastName = document.getElementById('regLast').value.trim();
    let username = document.getElementById('regUsername').value.trim();
    let password = document.getElementById('regPassword').value;
    let confirm = document.getElementById('regConfirmPassword').value;

    if (password !== confirm) {
        alert("Registration failed: Key secret mapping strings mismatch.");
        return;
    }

    // First letter capital
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

    savedRegProfileMemory = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: password,
        displayName: `${firstName} ${lastName}`
    };

    localStorage.setItem('kaqsa_registered_user_v5', JSON.stringify(savedRegProfileMemory));

    alert("Profile storage sequence initialized successfully! Proceeding to security login page panel.");

    document.getElementById('registrationForm').reset();

    navigateToView('login');
}

function handleUserLoginValidation(event) {
    event.preventDefault();
    let userInp = document.getElementById('loginUsername').value.trim();
    let passInp = document.getElementById('loginPassword').value;

    if (!savedRegProfileMemory) {
        alert("No deployment registration profile records detected. Please fill the register screen form fields first.");
        navigateToView('register');
        return;
    }

    if (userInp === savedRegProfileMemory.username && passInp === savedRegProfileMemory.password) {
        activeSessionUser = { name: savedRegProfileMemory.displayName };
        localStorage.setItem('kaqsa_logged_user_v5', JSON.stringify(activeSessionUser));
        
        loadUserCart();

        alert(`Authentication sequence verified cleanly. Welcome context: ${activeSessionUser.name}`);
        document.getElementById('loginForm').reset();
        refreshNavigationHeaderControlPanel();
        
        document.getElementById('app-alert-stream').classList.remove('d-none');
        document.getElementById('alert-payload-message').innerText = `Session verified under token identifier key: ${activeSessionUser.name}.`;
        navigateToView('home');
    } else {
        alert("Security handshake rejection: Invalid custom credential coordinates.");
    }
}

function triggerSessionLogoutFlushAction() {
    localStorage.removeItem('kaqsa_logged_user_v5');
    activeSessionUser = null;
    activeBasket = []; 
    location.reload();
}

function refreshNavigationHeaderControlPanel() {
    const authGridCornerNodeTarget = document.getElementById('auth-corner');
    if (!authGridCornerNodeTarget) return;
    const basketBadgeCounterSum = activeBasket.reduce((sum, item) => sum + item.quantity, 0);

    if (!activeSessionUser) {
        authGridCornerNodeTarget.innerHTML = `
            <button class="btn btn-link text-white-50 text-decoration-none fw-medium me-1" onclick="navigateToView('login')">
                <i class="fa-solid fa-right-to-bracket me-1"></i> Login
            </button>
            <button class="btn btn-warning fw-bold px-3 text-dark" onclick="navigateToView('register')">
                <i class="fa-solid fa-user-plus me-1"></i> Register
            </button>
        `;
        return;
    }

    authGridCornerNodeTarget.innerHTML = `
        <a href="#" class="text-white text-decoration-none px-3 position-relative me-2 align-middle" onclick="navigateToView('cart')">
            <i class="fa-solid fa-cart-shopping text-warning fs-5"></i>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger text-white font-monospace" style="font-size:9px; padding:3px 6px;">
                ${basketBadgeCounterSum}
            </span>
        </a>
        <button class="btn btn-outline-light border-0 me-2"
        id="theme-btn"
        onclick="toggleDarkMode()">
    <i class="fa-solid fa-moon"></i>
</button>
        <div class="dropdown d-inline-block align-middle">
            <button class="btn btn-outline-warning dropdown-toggle border-0 fw-bold px-2 text-capitalize shadow-none d-flex align-items-center gap-2" type="button" data-bs-toggle="dropdown">
    <i class="fa-solid fa-circle-user fs-5 text-warning"></i>
    <span class="text-white fw-semibold"
          style="font-family:'Segoe UI', sans-serif; font-size:15px;">
        ${activeSessionUser.name}
    </span>
</button>
            <ul class="dropdown-menu dropdown-menu-end shadow mt-2">
                <li><a class="dropdown-item py-2 px-3 small text-dark fw-bold" href="#" onclick="navigateToView('cart')"><i class="fa-solid fa-basket-shopping me-2 text-muted"></i>View My Basket</a></li>
                <li><a class="dropdown-item py-2 px-3 small text-dark fw-bold" href="#" onclick="navigateToView('my-orders')"><i class="fa-solid fa-file-lines me-2 text-muted"></i>My Orders Log</a></li>
                <li><hr class="dropdown-divider my-1"></li>
                <li><a class="dropdown-item py-2 px-3 small text-danger fw-extrabold text-uppercase" href="#" onclick="triggerSessionLogoutFlushAction()"><i class="fa-solid fa-power-off me-2"></i>Logout</a></li>
            </ul>
        </div>
    `;
}

function rebuildCartInterfaceTableGrid() {
    const targetBody = document.getElementById('cart-ledger-rows-target');
    if (!targetBody) return;

    targetBody.innerHTML = '';

    let billingSubtotal = 0,
        itemCountSummary = 0;

    activeBasket.forEach(item => {
        const itemRowTotal = item.price * item.quantity;

        billingSubtotal += itemRowTotal;
        itemCountSummary += item.quantity;

        targetBody.insertAdjacentHTML('beforeend', `
            <tr>
                <td class="ps-3 py-3 text-start">
                    <div class="d-flex align-items-center gap-3">
                        <img src="${item.image}" class="rounded border p-1 bg-white" style="width:45px; height:45px; object-fit:contain;">
                        <span class="fw-bold text-dark text-truncate d-block" style="max-width:220px;">${item.name}</span>
                    </div>
                </td>
                <td class="fw-semibold text-secondary">Rs. ${item.price.toLocaleString()}</td>
                <td class="text-center bg-light fw-bold">${item.quantity}</td>
                <td class="fw-bold text-warning">Rs. ${itemRowTotal.toLocaleString()}</td>
                <td class="text-center pe-3">
                    <button class="btn btn-sm btn-outline-danger border-0" onclick="purgeCartRowItem(${item.id})">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </td>
            </tr>
        `);
    });

    if (activeBasket.length === 0) {
        targetBody.innerHTML = `
            <tr>
                <td colspan="5" class="text-center text-muted py-5 font-monospace">
                    No items registered in active transactional frame layer.
                </td>
            </tr>
        `;
    }

    const continueBtnContainer = document.getElementById('cart-continue-action-holder');

    if (continueBtnContainer) {
        continueBtnContainer.innerHTML = `
            <button class="btn btn-dark fw-bold px-4 py-2 mt-3" onclick="navigateToView('products')">
                <i class="fa-solid fa-arrow-left me-2"></i>
                Continue Shopping
            </button>
        `;
    }

    const discountAmount = (billingSubtotal * discountPercent) / 100;
    const finalTotal = billingSubtotal - discountAmount;

    if (document.getElementById("cart-summary-items-count")) {
        document.getElementById("cart-summary-items-count").innerText = itemCountSummary;
    }

    if (document.getElementById("discount-amount")) {
        document.getElementById("discount-amount").innerText = `Rs. ${discountAmount.toLocaleString()}`;
    }

    if (document.getElementById("cart-summary-total")) {
        document.getElementById("cart-summary-total").innerText = `Rs. ${finalTotal.toLocaleString()}`;
    }
}

function purgeCartRowItem(id) {
    activeBasket = activeBasket.filter(item => item.id !== id);
    saveCart();
    rebuildCartInterfaceTableGrid();
}

function transitionToCheckoutView() {
    if (activeBasket.length === 0) { alert("Allocation basket target stream cannot execute empty operations."); return; }
    if (activeSessionUser) { document.getElementById('shipFullName').value = activeSessionUser.name; } 
    else { alert("Authorization token key missing. Redirecting..."); navigateToView('register'); return; }

    const listManifestTarget = document.getElementById('checkout-receipt-manifest-list');
    let runningCheckoutSum = 0; listManifestTarget.innerHTML = '';

    activeBasket.forEach(item => {
        const itemAggregateCost = item.price * item.quantity; runningCheckoutSum += itemAggregateCost;
        listManifestTarget.insertAdjacentHTML('beforeend', `
            <div class="d-flex justify-content-between align-items-center mb-2 border-bottom pb-2" style="font-family: sans-serif;">
                <div>
                    <h6 class="fw-bold text-dark m-0 small text-truncate" style="max-width:240px;">${item.name}</h6>
                    <small class="text-muted">Units: ${item.quantity}</small>
                </div>
                <span class="fw-bold text-secondary text-size-13">Rs. ${itemAggregateCost.toLocaleString()}</span>
            </div>
        `);
    });
    document.getElementById('checkout-receipt-total').innerText = `Rs. ${runningCheckoutSum.toLocaleString()}`;
    initiateHoldDownCountdownTimerIntervalLoop(); navigateToView('checkout');
}

function initiateHoldDownCountdownTimerIntervalLoop() {
    clearInterval(holdIntervalRef); holdTimerCountdown = 600;
    const outputNode = document.getElementById('checkout-session-countdown-node');
    holdIntervalRef = setInterval(() => {
        holdTimerCountdown--;
        let m = Math.floor(holdTimerCountdown / 60), s = holdTimerCountdown % 60;
        outputNode.innerText = `Allocation Hold Time Remaining: ${m}:${s < 10 ? '0' : ''}${s}`;
        if (holdTimerCountdown <= 0) {
            clearInterval(holdIntervalRef); alert("Allocation frame timed out."); activeBasket = [];
            saveCart(); navigateToView('home');
        }
    }, 1000);
}

function executeOrderFinalizationPayload(event) {
    event.preventDefault(); 
    clearInterval(holdIntervalRef);
    const orderId = Math.floor(7000 + Math.random() * 2999);
    let finalSum = activeBasket.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const currentUserKey = savedRegProfileMemory ? savedRegProfileMemory.username : "guest";

    purchaseHistoryLog.unshift({ 
        id: orderId, 
        username: currentUserKey,
        total: finalSum, 
        items: [...activeBasket], 
        date: new Date().toLocaleDateString(), 
        status: "Pending" 
    });
    
    localStorage.setItem('kaqsa_order_log_v5', JSON.stringify(purchaseHistoryLog));

    activeBasket = []; 
    saveCart();

    document.getElementById('success-invoice-box-summary').innerHTML = `
        <div class="mb-1"><strong>Manifest ID Key:</strong> #${orderId}</div>
        <div class="mb-1"><strong>Financial Weight Total:</strong> Rs. ${finalSum.toLocaleString()}</div>
        <div><strong>Gateway Route Channel:</strong> Cash on Delivery (COD)</div>
    `;
    navigateToView('order-success');
}

function rebuildHistoricalOrdersLogViewGrid() {
    const node = document.getElementById('historical-orders-container-target');
    if (!node) return;

    const currentUserKey = savedRegProfileMemory ? savedRegProfileMemory.username : "guest";
    let userSpecificOrders = purchaseHistoryLog.filter(order => order.username === currentUserKey);

    if (userSpecificOrders.length === 0) {
        node.innerHTML = `<div class="text-center p-5 bg-white border rounded font-monospace text-muted">No historical verified records located for this account.</div>`; 
        return;
    }
    
    node.innerHTML = userSpecificOrders.map(order => `
        <div class="card border mb-3 bg-white shadow-sm text-start">
            <div class="card-header bg-dark text-white d-flex justify-content-between align-items-center py-2">
                <span class="small" style="font-family: sans-serif;">Manifest Signature ID: <strong>#${order.id}</strong></span>
                <span class="badge bg-warning text-dark fw-bold" style="font-size:10px; font-family: sans-serif;">${order.status}</span>
            </div>
            <div class="card-body" style="font-family: sans-serif;">
                ${order.items.map(i => `<div class="d-flex justify-content-between align-items-center py-2 border-bottom border-light"><span class="small text-dark">${i.name} (x${i.quantity})</span><span class="small fw-bold">Rs. ${(i.price * i.quantity).toLocaleString()}</span></div>`).join('')}
                <div class="text-end mt-3 fw-bold text-dark">Total Weight Sum: <span class="text-warning fs-5 bg-dark px-2 rounded ms-1">Rs. ${order.total.toLocaleString()}</span></div>
            </div>
        </div>
    `).join('');
}

function hideNotificationBar() { document.getElementById('app-alert-stream').classList.add('d-none'); }

function showProductDetails(productId){
    const product = runtimeProducts.find(p => p.id === productId);
    if(!product) return;

    document.getElementById("details-image").src = product.image;
    document.getElementById("details-category").innerText = product.category;
    document.getElementById("details-name").innerText = product.name;
    document.getElementById("details-price").innerText = "Rs. " + product.price.toLocaleString();
    document.getElementById("details-stock").innerText = "In Stock (" + product.stock + " Available)";
    document.getElementById("details-description").innerText = product.description;

    document.getElementById("details-cart-btn").onclick = () => {
        openProductQuantityModal(product.id);
    };

    renderRelatedProducts(product.category, product.id);
    navigateToView("product-details");
}

function renderRelatedProducts(category, id){
    let list = runtimeProducts.filter(p => p.category === category && p.id !== id).slice(0, 4);

    document.getElementById("related-products-row").innerHTML = list.map(item => `
        <div class="col-6 col-md-3 mb-4">
            <div class="card h-100 store-product-card shadow-sm border bg-white">
                <div class="img-canvas-wrapper">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="card-body">
                    <span class="product-category">${item.category}</span>
                    <h5 class="product-name">${item.name}</h5>
                    <div class="product-price">Rs. ${item.price.toLocaleString()}</div>
                    <div class="stock-box">In Stock</div>
                    <button class="view-btn" onclick="showProductDetails(${item.id})">View Details</button>
                </div>
            </div>
        </div>
    `).join("");
}

function updateFooterDesign(viewId) {
    const footerContainer = document.getElementById('footer-content-container');
    if (!footerContainer) return;

    if (viewId === 'home' || viewId === 'home-view') {
        footerContainer.innerHTML = `
            <div class="row g-4 text-start">
                <div class="col-md-4">
                    <h5 class="fw-bold text-warning mb-3"><i class="fa-solid fa-bolt me-2"></i>K.AQSA Electronics</h5>
                    <p class="small text-white-50 lh-relaxed">Premium electronic hardware configuration matrices. Built natively for frontend high allocation performance.</p>
                </div>
                <div class="col-md-4">
                    <h6 class="fw-bold text-white text-uppercase font-monospace mb-3">Quick Links</h6>
                    <ul class="list-unstyled size-11 d-flex flex-column gap-2">
                        <li><a href="#" onclick="navigateToView('home')" class="text-white-50 text-decoration-none">Home Canvas</a></li>
                        <li><a href="#" onclick="navigateToView('products')" class="text-white-50 text-decoration-none">Allocation Grid</a></li>
                        <li><a href="#" onclick="navigateToView('cart')" class="text-white-50 text-decoration-none">My Basket Workspace</a></li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h6 class="fw-bold text-white text-uppercase font-monospace mb-3">Contact Channels</h6>
                    <p class="small m-0"><i class="fa-solid fa-envelope me-2 text-warning"></i>kimaqsa763@gmail.com</p>
                    <p class="small mt-2"><i class="fa-solid fa-location-dot me-2 text-warning"></i>Narowal, Punjab, Pakistan</p>
                </div>
            </div>
            <hr class="border-secondary my-4">
            <div class="text-center text-white-50 size-11">
    &copy; 2026 K.AQSA Limited Drop Architecture Engine Panel. CloudExify Intern Systems Grid.
</div>
        `;
    } else {
        footerContainer.innerHTML = `
            <div class="row align-items-center py-2 text-start">
                <div class="col-md-4 mb-3 mb-md-0">
                    <h5 class="fw-bold m-0 d-flex align-items-center gap-2 text-warning">
                        <i class="fa-solid fa-bolt"></i> K.AQSA
                    </h5>
                </div>
                <div class="col-md-4 mb-3 mb-md-0 text-md-center">
                    <span class="text-white-50 small">Premium Drop Logistics Interface</span>
                </div>
                <div class="col-md-4 text-md-end text-white-50 small">
                    &copy; 2026 Secure Node Panel
                </div>
            </div>
        `;
    }
}

function loadUserCart() {
    const currentUsername = savedRegProfileMemory ? savedRegProfileMemory.username : 'guest';
    const savedCart = localStorage.getItem(`kaqsa_cart_v5_${currentUsername}`);
    
    activeBasket = savedCart ? JSON.parse(savedCart) : [];
    
    refreshNavigationHeaderControlPanel();
    if (typeof rebuildCartInterfaceTableGrid === 'function') rebuildCartInterfaceTableGrid();
}
function renderWishlist() {

    const container = document.getElementById("wishlist-products-row");

    if (!container) return;

    const wishlistProducts = runtimeProducts.filter(product =>
        wishlistItems.includes(product.id)
    );

    if (wishlistProducts.length === 0) {

        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <h4>Your wishlist is empty.</h4>
            </div>
        `;

        return;
    }

    container.innerHTML = wishlistProducts.map(item => `

        <div class="col-6 col-md-3 mb-4">

            <div class="card h-100 store-product-card shadow-sm border bg-white">

                <button
                    class="wishlist-btn active"
                    onclick="toggleWishlist(${item.id}); renderWishlist();">

                    ❤

                </button>

                <div class="img-canvas-wrapper">

                    <img src="${item.image}" alt="${item.name}">

                </div>

                <div class="card-body">

                    <span class="product-category">${item.category}</span>

                    <h5 class="product-name">${item.name}</h5>

                    <div class="product-price">

                        Rs. ${item.price.toLocaleString()}

                    </div>

                    <div class="stock-box">

                        In Stock

                    </div>

                    <button
                        class="view-btn"
                        onclick="showProductDetails(${item.id})">

                        View Details

                    </button>

                </div>

            </div>

        </div>

    `).join("");

}
function applyCoupon() {

    const code = document
        .getElementById("coupon-code")
        .value
        .trim()
        .toUpperCase();

    if (code === "SAVE10") {

        discountPercent = 10;

    }

    else if (code === "SAVE20") {

        discountPercent = 20;

    }

    else if (code === "WELCOME15") {

        discountPercent = 15;

    }

    else {

        alert("Invalid Coupon Code");

        discountPercent = 0;

    }

    rebuildCartInterfaceTableGrid();

}
function toggleDarkMode(){

    document.body.classList.toggle("dark-mode");

    const btn = document.getElementById("theme-btn");

    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("theme","dark");

        if(btn){
            btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        }

    }else{

        localStorage.setItem("theme","light");

        if(btn){
            btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }

    }

}


________________________________________
Code 4: Data.js
// Clean categories map framework blueprint

const AVAILABLE_CATEGORIES = [
    "AirPods", "Bluetooth Speakers", "Chargers", "Earbuds", "Fast Chargers", 
    "Gaming Accessories", "Headphones", "Smart Watches", "Smartphones", "USB Cables"
];

function generateCoreEcomOneHundredUniqueProducts() {
    let datasetList = [];

    for (let i = 1; i <= 105; i++) {
        let currentCategory = AVAILABLE_CATEGORIES[(i - 1) % AVAILABLE_CATEGORIES.length];
        let randomPriceValue = Math.floor(999 + ((i * 473) % 45000));
        let limitedDropStockAmount = (i % 7 === 0) ? Math.floor(1 + (i % 3)) : Math.floor(3 + (i % 9));
        
        let completelyUniqueImageSource = `https://images.unsplash.com/photo-${1500000000000 + (i * 72413)}?auto=format&fit=crop&w=500&q=80&sig=${i}`;

        let finalizedProductName = `${currentCategory} Ultra-Pro Gen-${i}`;
        if (i === 1) {
            finalizedProductName = "OnePlus Away Mini";
            currentCategory = "Earbuds";
            completelyUniqueImageSource = "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80";
        } else if (i === 2) {
            finalizedProductName = "OnePlus Training Max";
            currentCategory = "Earbuds";
            completelyUniqueImageSource = "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=500&q=80";
        }

        datasetList.push({
            id: i,
            name: finalizedProductName,
            category: currentCategory,
            price: randomPriceValue,
            stock: limitedDropStockAmount,
            image: completelyUniqueImageSource,
            description: `Exclusive limited drop premium release specs for ${finalizedProductName}. Designed with structural premium acoustics framework features.`
        });
    }
    return datasetList;
}

const STORE_PRODUCTS_ARRAY = generateCoreEcomOneHundredUniqueProducts();

________________________________________
Results
The developed website successfully performs all major e-commerce operations.
The user can:
•	Browse products 
•	Add products to cart 
•	Update quantity 
•	Checkout successfully 
•	Receive order confirmation 
All information is stored securely in SQL Server.
________________________________________
Conclusion
The K.AQSA E-Commerce Website successfully demonstrates the implementation of an online shopping system using ASP.NET Core MVC. The project follows MVC architecture, provides secure data management using Entity Framework Core, and offers a responsive user interface. The system fulfills all basic e-commerce requirements including product browsing, shopping cart, checkout, and order management.
________________________________________
References
•	Microsoft ASP.NET Core Documentation 
•	Entity Framework Core Documentation 
•	SQL Server Documentation 
•	Bootstrap Documentation 

