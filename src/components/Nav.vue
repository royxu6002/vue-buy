<template>
	<!-- header 部分 -->
    <header class="box-shadow-sm">
      <div class="topbar topbar-dark bg-dark">
        <div class="container">
          <div class="topbar-text dropdown d-md-none"><a class="topbar-link dropdown-toggle" href="#" data-toggle="dropdown">Useful links</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="tel:00331697720"><i class="czi-support text-muted mr-2"></i>(00) 33 169 7720</a></li>
              <li><a class="dropdown-item" href="order-tracking.html"><i class="czi-location text-muted mr-2"></i>Order tracking</a></li>
            </ul>
          </div>
          <div class="topbar-text text-nowrap d-none d-md-inline-block"><i class="czi-support"></i><span class="text-muted mr-1">Support</span><a class="topbar-link" href="tel:00331697720">(00) 33 169 7720</a></div>
          <div class="cz-carousel cz-controls-static d-none d-md-block">
            <div class="tns-outer" id="tns1-ow"><div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="tns1"><i class="czi-arrow-left"></i></button><button type="button" data-controls="next" tabindex="-1" aria-controls="tns1"><i class="czi-arrow-right"></i></button></div><div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">1</span>  of 3</div><div class="tns-inner" id="tns1-iw"><div class="cz-carousel-inner tns-slider tns-gallery tns-subpixel tns-calc tns-horizontal" data-carousel-options="{&quot;mode&quot;: &quot;gallery&quot;, &quot;nav&quot;: false}" id="tns1">
              <div class="topbar-text tns-item tns-fadeIn tns-slide-active" id="tns1-item0" style="left: 0%;">Free shipping for order over $200</div>
              <div class="topbar-text tns-item tns-normal" id="tns1-item1" aria-hidden="true" tabindex="-1">We return money within 30 days</div>
              <div class="topbar-text tns-item tns-normal" id="tns1-item2" aria-hidden="true" tabindex="-1">Friendly 24/7 customer support</div>
            <div class="topbar-text tns-item tns-normal" aria-hidden="true" tabindex="-1">Free shipping for order over $200</div></div></div></div>
          </div>
          <div class="ml-3 text-nowrap"><a class="topbar-link mr-4 d-none d-md-inline-block" href="order-tracking.html"><i class="czi-location"></i>Order tracking</a>
            <div class="topbar-text dropdown disable-autohide"><a class="topbar-link dropdown-toggle" href="#" data-toggle="dropdown"><img class="mr-2" width="20" src="img/flags/en.png" alt="English">Eng / $</a>
              <ul class="dropdown-menu dropdown-menu-right">
                <li class="dropdown-item">
                  <select class="custom-select custom-select-sm">
                    <option value="usd">$ USD</option>
                    <option value="eur">€ EUR</option>
                    <option value="ukp">£ UKP</option>
                    <option value="jpy">¥ JPY</option>
                  </select>
                </li>
                <li><a class="dropdown-item pb-1" href="#"><img class="mr-2" width="20" src="img/flags/fr.png" alt="Français">Français</a></li>
                <li><a class="dropdown-item pb-1" href="#"><img class="mr-2" width="20" src="img/flags/de.png" alt="Deutsch">Deutsch</a></li>
                <li><a class="dropdown-item" href="#"><img class="mr-2" width="20" src="img/flags/it.png" alt="Italiano">Italiano</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- Remove "navbar-sticky" class to make navigation bar scrollable with the page.-->
      <div class="navbar-sticky bg-light">
        <div class="navbar navbar-expand-lg navbar-light">
          <div class="container">
            <a class="navbar-brand d-none d-sm-block mr-3 flex-shrink-0" href="index.html" style="min-width: 7rem;">
              <img width="142" src="../assets/images/logo-dark.png" alt="Cartzilla">
            </a>
            <a class="navbar-brand d-sm-none mr-2" href="index.html" style="min-width: 4.625rem;">
              <img width="74" src="img/logo-icon.png" alt="Cartzilla">
            </a>
            <!-- search-bar area -->
            <div class="input-group-overlay d-none d-lg-block mx-4">
              <div class="input-group-prepend-overlay"><span class="input-group-text">
                <svg class="czi-search" viewBox="0 0 21 21" role="presentation">
                  <g stroke-width="2" stroke="currentColor" fill="none" fill-rule="evenodd">
                    <path d="M19 19l-5-5" stroke-linecap="square"></path>
                    <circle cx="8.5" cy="8.5" r="7.5"></circle>
                  </g>
                </svg>
              </span></div>
              <input class="form-control prepended-form-control appended-form-control" type="text" placeholder="Search for products">
              <div class="input-group-append-overlay">
                <select class="custom-select">
                  <option>All categories</option>
                  <option>Computers</option>
                  <option>Smartphones</option>
                  <option>TV, Video, Audio</option>
                  <option>Cameras</option>
                  <option>Headphones</option>
                  <option>Wearables</option>
                  <option>Printers</option>
                  <option>Video Games</option>
                  <option>Home Music</option>
                  <option>Data Storage</option>
                </select>
              </div>
            </div>

            <!-- nav-user area -->
            <div class="navbar-toolbar d-flex flex-shrink-0 align-items-center">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"><span class="navbar-toggler-icon"></span></button><a class="navbar-tool navbar-stuck-toggler" href="#"><span class="navbar-tool-tooltip">Expand menu</span>
                <div class="navbar-tool-icon-box"><i class="navbar-tool-icon czi-menu"></i></div></a><a class="navbar-tool ml-1 ml-lg-0 mr-n1 mr-lg-2" href="#signin-modal" data-toggle="modal">
                <div class="navbar-tool-icon-box">
                  <svg class="navbar-tool-icon czi-user" role="presentation">
                    <path d="M10 13c2.82 0 5.33.64 6.98 1.2A3 3 0 0 1 19 17.02V21H1v-3.97a3 3 0 0 1 2.03-2.84A22.35 22.35 0 0 1 10 13zm0 0c-2.76 0-5-3.24-5-6V6a5 5 0 0 1 10 0v1c0 2.76-2.24 6-5 6z" stroke="#4b566b" stroke-width="2" fill="none"></path>
                  </svg>
                </div>
                <div class="navbar-tool-text ml-n3"><small>Hello, Sign in</small>My Account</div></a>
              <div class="navbar-tool dropdown ml-3"><a class="navbar-tool-icon-box bg-secondary dropdown-toggle" href="shop-cart.html"><span class="navbar-tool-label">4</span>
                <svg class="navbar-tool-icon czi-car" viewBox="-10 -10 50 50" role="presentation">
                <g transform="translate(0 1)" stroke-width="2" stroke="currentColor" fill="none" fill-rule="evenodd">
                  <circle stroke-linecap="square" cx="11" cy="20" r="2"></circle>
                  <circle stroke-linecap="square" cx="22" cy="20" r="2"></circle>
                  <path d="M7.31 5h18.27l-1.44 10H9.78L6.22 0H0"></path>
                </g>
              </svg>

              </a><a class="navbar-tool-text" href="shop-cart.html"><small>My Cart</small>$1,247.00</a>
                <!-- Cart dropdown-->
                <div class="dropdown-menu dropdown-menu-right" style="width: 20rem;">
                  <div class="widget widget-cart px-3 pt-2 pb-3">
                    <div style="height: 15rem;" data-simplebar="init" data-simplebar-auto-hide="false"><div class="simplebar-wrapper" style="margin: 0px -16px 0px 0px;"><div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div><div class="simplebar-mask"><div class="simplebar-offset" style="right: 0px; bottom: 0px;"><div class="simplebar-content-wrapper" style="height: auto; padding-right: 0px; padding-bottom: 0px; overflow: hidden;"><div class="simplebar-content" style="padding: 0px 16px 0px 0px;">
                      <div class="widget-cart-item pb-2 border-bottom">
                        <button class="close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">×</span></button>
                        <div class="media align-items-center"><a class="d-block mr-2" href="shop-single-v2.html"><img width="64" src="img/shop/cart/widget/05.jpg" alt="Product"></a>
                          <div class="media-body">
                            <h6 class="widget-product-title"><a href="shop-single-v2.html">Bluetooth Headphones</a></h6>
                            <div class="widget-product-meta"><span class="text-accent mr-2">$259.<small>00</small></span><span class="text-muted">x 1</span></div>
                          </div>
                        </div>
                      </div>
                      <div class="widget-cart-item py-2 border-bottom">
                        <button class="close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">×</span></button>
                        <div class="media align-items-center"><a class="d-block mr-2" href="shop-single-v2.html"><img width="64" src="img/shop/cart/widget/06.jpg" alt="Product"></a>
                          <div class="media-body">
                            <h6 class="widget-product-title"><a href="shop-single-v2.html">Cloud Security Camera</a></h6>
                            <div class="widget-product-meta"><span class="text-accent mr-2">$122.<small>00</small></span><span class="text-muted">x 1</span></div>
                          </div>
                        </div>
                      </div>
                      <div class="widget-cart-item py-2 border-bottom">
                        <button class="close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">×</span></button>
                        <div class="media align-items-center"><a class="d-block mr-2" href="shop-single-v2.html"><img width="64" src="img/shop/cart/widget/07.jpg" alt="Product"></a>
                          <div class="media-body">
                            <h6 class="widget-product-title"><a href="shop-single-v2.html">Android Smartphone S10</a></h6>
                            <div class="widget-product-meta"><span class="text-accent mr-2">$799.<small>00</small></span><span class="text-muted">x 1</span></div>
                          </div>
                        </div>
                      </div>
                      <div class="widget-cart-item py-2 border-bottom">
                        <button class="close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">×</span></button>
                        <div class="media align-items-center"><a class="d-block mr-2" href="shop-single-v2.html"><img width="64" src="img/shop/cart/widget/08.jpg" alt="Product"></a>
                          <div class="media-body">
                            <h6 class="widget-product-title"><a href="shop-single-v2.html">Android Smart TV Box</a></h6>
                            <div class="widget-product-meta"><span class="text-accent mr-2">$67.<small>00</small></span><span class="text-muted">x 1</span></div>
                          </div>
                        </div>
                      </div>
                    </div></div></div></div><div class="simplebar-placeholder" style="width: 0px; height: 0px;"></div></div><div class="simplebar-track simplebar-horizontal" style="visibility: hidden;"><div class="simplebar-scrollbar simplebar-visible" style="transform: translate3d(0px, 0px, 0px); display: none;"></div></div><div class="simplebar-track simplebar-vertical" style="visibility: hidden;"><div class="simplebar-scrollbar simplebar-visible" style="transform: translate3d(0px, 0px, 0px); display: none;"></div></div></div>
                    <div class="d-flex flex-wrap justify-content-between align-items-center py-3">
                      <div class="font-size-sm mr-2 py-2"><span class="text-muted">Subtotal:</span><span class="text-accent font-size-base ml-1">$1,247.<small>00</small></span></div><a class="btn btn-outline-secondary btn-sm" href="shop-cart.html">Expand cart<i class="czi-arrow-right ml-1 mr-n1"></i></a>
                    </div><a class="btn btn-primary btn-sm btn-block" href="checkout-details.html"><i class="czi-card mr-2 font-size-base align-middle"></i>Checkout</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="navbar navbar-expand-lg navbar-light navbar-stuck-menu mt-n2 pt-0 pb-2">
          <div class="container">
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <!-- Search-->
              <div class="input-group-overlay d-lg-none my-3">
                <div class="input-group-prepend-overlay"><span class="input-group-text"><i class="czi-search"></i></span></div>
                <input class="form-control prepended-form-control" type="text" placeholder="Search for products">
              </div>
              <!-- Departments menu-->
              <ul class="navbar-nav mega-nav pr-lg-2 mr-lg-2">
                <li class="nav-item dropdown"><a class="nav-link dropdown-toggle pl-0" href="#" data-toggle="dropdown"><i class="czi-view-grid mr-2"></i>Departments</a>
                  <div class="dropdown-menu px-2 pl-0 pb-4">
                    <div class="d-flex flex-wrap flex-md-nowrap">
                      <div class="mega-dropdown-column pt-4 px-3">
                        <div class="widget widget-links"><a class="d-block overflow-hidden rounded-lg mb-3" href="#"><img src="img/shop/departments/01.jpg" alt="Shoes"></a>
                          <h6 class="font-size-base mb-2">Clothing</h6>
                          <ul class="widget-list">
                            <li class="widget-list-item"><a class="widget-list-link" href="#">Women's clothing</a></li>
                            <li class="widget-list-item"><a class="widget-list-link" href="#">Men's clothing</a></li>
                            <li class="widget-list-item"><a class="widget-list-link" href="#">Kid's clothing</a></li>
                          </ul>
                        </div>
                      </div>
                      <div class="mega-dropdown-column pt-4 px-3">
                        <div class="widget widget-links"><a class="d-block overflow-hidden rounded-lg mb-3" href="#"><img src="img/shop/departments/02.jpg" alt="Shoes"></a>
                          <h6 class="font-size-base mb-2">Shoes</h6>
                          <ul class="widget-list">
                            <li class="widget-list-item"><a class="widget-list-link" href="#">Women's shoes</a></li>
                            <li class="widget-list-item"><a class="widget-list-link" href="#">Men's shoes</a></li>
                            <li class="widget-list-item"><a class="widget-list-link" href="#">Kid's shoes</a></li>
                          </ul>
                        </div>
                      </div>
                      <div class="mega-dropdown-column pt-4 px-3">
                        <div class="widget widget-links"><a class="d-block overflow-hidden rounded-lg mb-3" href="#"><img src="img/shop/departments/03.jpg" alt="Shoes"></a>
                          <h6 class="font-size-base mb-2">Gadgets</h6>
                          <ul class="widget-list">
                            <li class="widget-list-item"><a class="widget-list-link" href="#">Smartphones &amp; Tablets</a></li>
                            <li class="widget-list-item"><a class="widget-list-link" href="#">Wearable gadgets</a></li>
                            <li class="widget-list-item"><a class="widget-list-link" href="#">E-book readers</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex flex-wrap flex-md-nowrap">
                      <div class="mega-dropdown-column pt-4 px-3">
                        <div class="widget widget-links"><a class="d-block overflow-hidden rounded-lg mb-3" href="#"><img src="img/shop/departments/04.jpg" alt="Shoes"></a>
                          <h6 class="font-size-base mb-2">Furniture &amp; Decor</h6>
                          <ul class="widget-list">
                            <li class="widget-list-item"><a class="widget-list-link" href="#">Home furniture</a></li>
                            <li class="widget-list-item"><a class="widget-list-link" href="#">Office furniture</a></li>
                            <li class="widget-list-item"><a class="widget-list-link" href="#">Lighting and decoration</a></li>
                          </ul>
                        </div>
                      </div>
                      <div class="mega-dropdown-column pt-4 px-3">
                        <div class="widget widget-links"><a class="d-block overflow-hidden rounded-lg mb-3" href="#"><img src="img/shop/departments/05.jpg" alt="Shoes"></a>
                          <h6 class="font-size-base mb-2">Accessories</h6>
                          <ul class="widget-list">
                            <li class="widget-list-item"><a class="widget-list-link" href="#">Hats</a></li>
                            <li class="widget-list-item"><a class="widget-list-link" href="#">Sunglasses</a></li>
                            <li class="widget-list-item"><a class="widget-list-link" href="#">Bags</a></li>
                          </ul>
                        </div>
                      </div>
                      <div class="mega-dropdown-column pt-4 px-3">
                        <div class="widget widget-links"><a class="d-block overflow-hidden rounded-lg mb-3" href="#"><img src="img/shop/departments/06.jpg" alt="Shoes"></a>
                          <h6 class="font-size-base mb-2">Entertainment</h6>
                          <ul class="widget-list">
                            <li class="widget-list-item"><a class="widget-list-link" href="#">Kid's toys</a></li>
                            <li class="widget-list-item"><a class="widget-list-link" href="#">Video games</a></li>
                            <li class="widget-list-item"><a class="widget-list-link" href="#">Outdoor / Camping</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <!-- Primary menu-->
              <ul class="navbar-nav">
                <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Home</a>
                  <ul class="dropdown-menu">
                    <li class="dropdown position-static mb-0"><a class="dropdown-item py-2 border-bottom" href="home-fashion-store-v1.html"><span class="d-block text-heading">Fashion Store v.1</span><small class="d-block text-muted">Classic shop layout</small></a>
                      <div class="dropdown-menu h-100 animation-0 mt-0 p-3"><a class="d-block" href="home-fashion-store-v1.html" style="width: 250px;"><img src="img/home/preview/th01.jpg" alt="Fashion Store v.1"></a></div>
                    </li>
                    <li class="dropdown position-static mb-0"><a class="dropdown-item py-2 border-bottom" href="home-fashion-store-v2.html"><span class="d-block text-heading">Fashion Store v.2</span><small class="d-block text-muted">Slider + Featured categories</small></a>
                      <div class="dropdown-menu h-100 animation-0 mt-0 p-3"><a class="d-block" href="home-fashion-store-v2.html" style="width: 250px;"><img src="img/home/preview/th02.jpg" alt="Fashion Store v.2"></a></div>
                    </li>
                    <li class="dropdown position-static mb-0"><a class="dropdown-item py-2 border-bottom" href="home-electronics-store.html"><span class="d-block text-heading">Electronics Store</span><small class="d-block text-muted">Classic shop layout</small></a>
                      <div class="dropdown-menu h-100 animation-0 mt-0 p-3"><a class="d-block" href="home-electronics-store.html" style="width: 250px;"><img src="img/home/preview/th03.jpg" alt="Electronics Store"></a></div>
                    </li>
                    <li class="dropdown position-static mb-0"><a class="dropdown-item py-2" href="home-marketplace.html"><span class="d-block text-heading">Marketplace</span><small class="d-block text-muted">Multi-vendor, digital goods</small></a>
                      <div class="dropdown-menu h-100 animation-0 mt-0 p-3"><a class="d-block" href="home-marketplace.html" style="width: 250px;"><img src="img/home/preview/th04.jpg" alt="Marketplace"></a></div>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Shop</a>
                  <div class="dropdown-menu p-0">
                    <div class="d-flex flex-wrap flex-md-nowrap px-2">
                      <div class="mega-dropdown-column py-4 px-3">
                        <div class="widget widget-links mb-3">
                          <h6 class="font-size-base mb-3">Shop layouts</h6>
                          <ul class="widget-list">
                            <li class="widget-list-item pb-1"><a class="widget-list-link" href="shop-grid-ls.html">Shop Grid - Left Sidebar</a></li>
                            <li class="widget-list-item pb-1"><a class="widget-list-link" href="shop-grid-rs.html">Shop Grid - Right Sidebar</a></li>
                            <li class="widget-list-item pb-1"><a class="widget-list-link" href="shop-grid-ft.html">Shop Grid - Filters on Top</a></li>
                            <li class="widget-list-item pb-1"><a class="widget-list-link" href="shop-list-ls.html">Shop List - Left Sidebar</a></li>
                            <li class="widget-list-item pb-1"><a class="widget-list-link" href="shop-list-rs.html">Shop List - Right Sidebar</a></li>
                            <li class="widget-list-item pb-1"><a class="widget-list-link" href="shop-list-ft.html">Shop List - Filters on Top</a></li>
                          </ul>
                        </div>
                        <div class="widget widget-links">
                          <h6 class="font-size-base mb-3">Marketplace</h6>
                          <ul class="widget-list">
                            <li class="widget-list-item pb-1"><a class="widget-list-link" href="marketplace-category.html">Category Page</a></li>
                            <li class="widget-list-item pb-1"><a class="widget-list-link" href="marketplace-single.html">Single Item Page</a></li>
                            <li class="widget-list-item pb-1"><a class="widget-list-link" href="marketplace-vendor.html">Vendor Page</a></li>
                            <li class="widget-list-item pb-1"><a class="widget-list-link" href="marketplace-cart.html">Cart</a></li>
                            <li class="widget-list-item pb-1"><a class="widget-list-link" href="marketplace-checkout.html">Checkout</a></li>
                          </ul>
                        </div>
                      </div>
                      <div class="mega-dropdown-column py-4 px-3">
                        <div class="widget widget-links">
                          <h6 class="font-size-base mb-3">Shop pages</h6>
                          <ul class="widget-list">
                            <li class="widget-list-item pb-1"><a class="widget-list-link" href="shop-categories.html">Shop Categories</a></li>
                            <li class="widget-list-item pb-1"><a class="widget-list-link" href="shop-single-v1.html">Product Page v.1</a></li>
                            <li class="widget-list-item pb-1"><a class="widget-list-link" href="shop-single-v2.html">Product Page v.2</a></li>
                            <li class="widget-list-item pb-1"><a class="widget-list-link" href="shop-cart.html">Cart</a></li>
                            <li class="widget-list-item pb-1"><a class="widget-list-link" href="checkout-details.html">Checkout - Details</a></li>
                            <li class="widget-list-item pb-1"><a class="widget-list-link" href="checkout-shipping.html">Checkout - Shipping</a></li>
                            <li class="widget-list-item pb-1"><a class="widget-list-link" href="checkout-payment.html">Checkout - Payment</a></li>
                            <li class="widget-list-item pb-1"><a class="widget-list-link" href="checkout-review.html">Checkout - Review</a></li>
                            <li class="widget-list-item pb-1"><a class="widget-list-link" href="checkout-complete.html">Checkout - Complete</a></li>
                            <li class="widget-list-item pb-1"><a class="widget-list-link" href="order-tracking.html">Order Tracking</a></li>
                            <li class="widget-list-item pb-1"><a class="widget-list-link" href="comparison.html">Product Comparison</a></li>
                          </ul>
                        </div>
                      </div>
                      <div class="mega-dropdown-column py-4 pr-3"><a class="d-block" href="#"><img src="img/shop/menu-banner.jpg" alt="Promo banner"></a></div>
                    </div>
                  </div>
                </li>
                <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Account</a>
                  <ul class="dropdown-menu">
                    <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown">Shop User Account</a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="account-orders.html">Orders History</a></li>
                        <li><a class="dropdown-item" href="account-profile.html">Profile Settings</a></li>
                        <li><a class="dropdown-item" href="account-address.html">Account Addresses</a></li>
                        <li><a class="dropdown-item" href="account-payment.html">Payment Methods</a></li>
                        <li><a class="dropdown-item" href="account-wishlist.html">Wishlist</a></li>
                        <li><a class="dropdown-item" href="account-tickets.html">My Tickets</a></li>
                        <li><a class="dropdown-item" href="account-single-ticket.html">Single Ticket</a></li>
                      </ul>
                    </li>
                    <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown">Vendor Dashboard</a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="dashboard-settings.html">Settings</a></li>
                        <li><a class="dropdown-item" href="dashboard-purchases.html">Purchases</a></li>
                        <li><a class="dropdown-item" href="dashboard-favorites.html">Favorites</a></li>
                        <li><a class="dropdown-item" href="dashboard-sales.html">Sales</a></li>
                        <li><a class="dropdown-item" href="dashboard-products.html">Products</a></li>
                        <li><a class="dropdown-item" href="dashboard-add-new-product.html">Add New Product</a></li>
                        <li><a class="dropdown-item" href="dashboard-payouts.html">Payouts</a></li>
                      </ul>
                    </li>
                    <li><a class="dropdown-item" href="account-signin.html">Sign In / Sign Up</a></li>
                    <li><a class="dropdown-item" href="account-password-recovery.html">Password Recovery</a></li>
                  </ul>
                </li>
                <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Pages</a>
                  <ul class="dropdown-menu">
                    <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown">Navbar Variants</a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="navbar-1-level-light.html">1 Level Light</a></li>
                        <li><a class="dropdown-item" href="navbar-1-level-dark.html">1 Level Dark</a></li>
                        <li><a class="dropdown-item" href="navbar-2-level-light.html">2 Level Light</a></li>
                        <li><a class="dropdown-item" href="navbar-2-level-dark.html">2 Level Dark</a></li>
                        <li><a class="dropdown-item" href="navbar-3-level-light.html">3 Level Light</a></li>
                        <li><a class="dropdown-item" href="navbar-3-level-dark.html">3 Level Dark</a></li>
                        <li><a class="dropdown-item" href="navbar-electro-store.html">Electronics Store</a></li>
                        <li><a class="dropdown-item" href="navbar-marketplace.html">Marketplace</a></li>
                      </ul>
                    </li>
                    <li class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="about.html">About Us</a></li>
                    <li><a class="dropdown-item" href="contacts.html">Contacts</a></li>
                    <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown">Help Center</a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="help-topics.html">Help Topics</a></li>
                        <li><a class="dropdown-item" href="help-single-topic.html">Single Topic</a></li>
                        <li><a class="dropdown-item" href="help-submit-request.html">Submit a Request</a></li>
                      </ul>
                    </li>
                    <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown">404 Not Found</a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="404-simple.html">404 - Simple Text</a></li>
                        <li><a class="dropdown-item" href="404-illustration.html">404 - Illustration</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown active"><a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Blog</a>
                  <ul class="dropdown-menu">
                    <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown">Blog List Layouts</a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="blog-list-sidebar.html">List with Sidebar</a></li>
                        <li><a class="dropdown-item" href="blog-list.html">List no Sidebar</a></li>
                      </ul>
                    </li>
                    <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#" data-toggle="dropdown">Blog Grid Layouts</a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="blog-grid-sidebar.html">Grid with Sidebar</a></li>
                        <li><a class="dropdown-item" href="blog-grid.html">Grid no Sidebar</a></li>
                      </ul>
                    </li>
                    <li><a class="dropdown-item" href="blog-single.html">Single Post</a></li>
                  </ul>
                </li>
                <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Docs / Components</a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="docs/dev-setup.html">
                        <div class="d-flex">
                          <div class="lead text-muted pt-1"><i class="czi-book"></i></div>
                          <div class="ml-2"><span class="d-block text-heading">Documentation</span><small class="d-block text-muted">Kick-start customization</small></div>
                        </div></a></li>
                    <li class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="components/typography.html">
                        <div class="d-flex">
                          <div class="lead text-muted pt-1"><i class="czi-server"></i></div>
                          <div class="ml-2"><span class="d-block text-heading">Components<span class="badge badge-info ml-2">40+</span></span><small class="d-block text-muted">Faster page building</small></div>
                        </div></a></li>
                    <li class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="docs/changelog.html">
                        <div class="d-flex">
                          <div class="lead text-muted pt-1"><i class="czi-edit"></i></div>
                          <div class="ml-2"><span class="d-block text-heading">Changelog<span class="badge badge-success ml-2">v1.2</span></span><small class="d-block text-muted">Regular updates</small></div>
                        </div></a></li>
                    <li class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="mailto:contact@createx.studio">
                        <div class="d-flex">
                          <div class="lead text-muted pt-1"><i class="czi-help"></i></div>
                          <div class="ml-2"><span class="d-block text-heading">Support</span><small class="d-block text-muted">contact@createx.studio</small></div>
                        </div></a></li>
                  </ul> 
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
</template>

<script>
export default {
	
}
</script>