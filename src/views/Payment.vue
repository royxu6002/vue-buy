<template>
<div>
	<Nav/>
  <div class="page-title-overlap bg-dark pt-4">
      <div class="container d-lg-flex justify-content-between py-2 py-lg-3">
        <div class="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-star">
              <li class="breadcrumb-item"><a class="text-nowrap" href="index.html"><i class="czi-home"></i>Home</a></li>
              <li class="breadcrumb-item text-nowrap"><a href="shop-grid-ls.html">Shop</a>
              </li>
              <li class="breadcrumb-item text-nowrap active" aria-current="page">Checkout</li>
            </ol>
          </nav>
        </div>
        <div class="order-lg-1 pr-lg-4 text-center text-lg-left">
          <h1 class="h3 text-light mb-0">Checkout</h1>
        </div>
      </div>
    </div>

    <div class="container pb-5 mb-2 mb-md-4">
      <div class="row">
        <section class="col-lg-8">
          <!-- Steps-->
          <div class="steps steps-light pt-2 pb-3 mb-5"><a class="step-item active" href="shop-cart.html">
              <div class="step-progress"><span class="step-count">1</span></div>
              <div class="step-label"><i class="czi-cart"></i>Cart</div></a><a class="step-item active" href="checkout-details.html">
              <div class="step-progress"><span class="step-count">2</span></div>
              <div class="step-label"><i class="czi-user-circle"></i>Your details</div></a><a class="step-item active" href="checkout-shipping.html">
              <div class="step-progress"><span class="step-count">3</span></div>
              <div class="step-label"><i class="czi-package"></i>Shipping</div></a><a class="step-item active current" href="checkout-payment.html">
              <div class="step-progress"><span class="step-count">4</span></div>
              <div class="step-label"><i class="czi-card"></i>Payment</div></a><a class="step-item" href="checkout-review.html">
              <div class="step-progress"><span class="step-count">5</span></div>
              <div class="step-label"><i class="czi-check-circle"></i>Review</div></a></div>
          <!-- Payment methods accordion-->
          <h2 class="h6 pb-3 mb-2">Choose payment method</h2>
          <div class="accordion mb-2" id="payment-method" role="tablist">
            <div class="card">
              <div class="card-header" role="tab">
                <h3 class="accordion-heading"><a href="#card" data-toggle="collapse" class="collapsed" aria-expanded="false"><i class="czi-card font-size-lg mr-2 mt-n1 align-middle"></i>Pay with Credit Card<span class="accordion-indicator"><i data-feather="chevron-up"></i></span></a></h3>
              </div>
              <div class="collapse" id="card" data-parent="#payment-method" role="tabpanel" style="">
                <div class="card-body">
                  <p class="font-size-sm">We accept following credit cards:&nbsp;&nbsp;<img class="d-inline-block align-middle" src="img/cards.png" style="width: 187px;" alt="Cerdit Cards"></p>
                  <div class="card-wrapper" data-jp-card-initialized="true"><div class="jp-card-container"><div class="jp-card"><div class="jp-card-front"><div class="jp-card-logo jp-card-elo"><div class="e">e</div><div class="l">l</div><div class="o">o</div></div><div class="jp-card-logo jp-card-visa">Visa</div><div class="jp-card-logo jp-card-visaelectron">Visa<div class="elec">Electron</div></div><div class="jp-card-logo jp-card-mastercard">Mastercard</div><div class="jp-card-logo jp-card-maestro">Maestro</div><div class="jp-card-logo jp-card-amex"></div><div class="jp-card-logo jp-card-discover">discover</div><div class="jp-card-logo jp-card-dinersclub"></div><div class="jp-card-logo jp-card-dankort"><div class="dk"><div class="d"></div><div class="k"></div></div></div><div class="jp-card-logo jp-card-jcb"><div class="j">J</div><div class="c">C</div><div class="b">B</div></div><div class="jp-card-lower"><div class="jp-card-shiny"></div><div class="jp-card-cvc jp-card-display">•••</div><div class="jp-card-number jp-card-display">•••• •••• •••• ••••</div><div class="jp-card-name jp-card-display">Full Name</div><div class="jp-card-expiry jp-card-display" data-before="month/year" data-after="valid
thru">••/••</div></div></div><div class="jp-card-back"><div class="jp-card-bar"></div><div class="jp-card-cvc jp-card-display">•••</div><div class="jp-card-shiny"></div></div></div></div></div>
                  <form class="interactive-credit-card row">
                    <div class="form-group col-sm-6">
                      <input class="form-control" type="text" name="number" placeholder="Card Number" required="">
                    </div>
                    <div class="form-group col-sm-6">
                      <input class="form-control" type="text" name="name" placeholder="Full Name" required="">
                    </div>
                    <div class="form-group col-sm-3">
                      <input class="form-control" type="text" name="expiry" placeholder="MM/YY" required="">
                    </div>
                    <div class="form-group col-sm-3">
                      <input class="form-control" type="text" name="cvc" placeholder="CVC" required="">
                    </div>
                    <div class="col-sm-6">
                      <button class="btn btn-outline-primary btn-block mt-0" type="submit">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" role="tab">
                <h3 class="accordion-heading"><a class="" href="#paypal" data-toggle="collapse" aria-expanded="true"><i class="czi-paypal mr-2 align-middle"></i>Pay with PayPal<span class="accordion-indicator"><i data-feather="chevron-up"></i></span></a></h3>
              </div>
              <div class="collapse show" id="paypal" data-parent="#payment-method" role="tabpanel" style="">
                <div class="card-body font-size-sm">
                  <p><span class="font-weight-medium">PayPal</span> - the safer, easier way to pay</p>
                  <form class="row" method="post">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <input class="form-control" type="email" placeholder="E-mail" required="">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <input class="form-control" type="password" placeholder="Password" required="">
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="d-flex flex-wrap justify-content-between align-items-center"><a class="nav-link-style" href="#">Forgot password?</a>
                        <button class="btn btn-primary" type="submit">Log In</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" role="tab">
                <h3 class="accordion-heading"><a class="collapsed" href="#points" data-toggle="collapse"><i class="czi-gift mr-2"></i>Redeem Reward Points<span class="accordion-indicator"><i data-feather="chevron-up"></i></span></a></h3>
              </div>
              <div class="collapse" id="points" data-parent="#payment-method" role="tabpanel">
                <div class="card-body">
                  <p>You currently have<span class="font-weight-medium">&nbsp;384</span>&nbsp;Reward Points to spend.</p>
                  <div class="custom-control custom-checkbox d-block">
                    <input class="custom-control-input" type="checkbox" id="use_points">
                    <label class="custom-control-label" for="use_points">Use my Reward Points to pay for this order.</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Navigation (desktop)-->
          <div class="d-none d-lg-flex pt-4">
            <div class="w-50 pr-3"><a class="btn btn-secondary btn-block" href="checkout-shipping.html"><i class="czi-arrow-left mt-sm-0 mr-1"></i><span class="d-none d-sm-inline">Back to Shipping</span><span class="d-inline d-sm-none">Back</span></a></div>
            <div class="w-50 pl-2"><a class="btn btn-primary btn-block" href="checkout-review.html"><span class="d-none d-sm-inline">Review your order</span><span class="d-inline d-sm-none">Review order</span><i class="czi-arrow-right mt-sm-0 ml-1"></i></a></div>
          </div>
        </section>
        <!-- Sidebar-->
        <aside class="col-lg-4 pt-4 pt-lg-0">
          <div class="cz-sidebar-static rounded-lg box-shadow-lg ml-lg-auto">
            <div class="widget mb-3">
              <h2 class="widget-title text-center">Order summary</h2>
              <div class="media align-items-center pb-2 border-bottom"><a class="d-block mr-2" href="shop-single-v1.html"><img width="64" src="img/shop/cart/widget/01.jpg" alt="Product"></a>
                <div class="media-body">
                  <h6 class="widget-product-title"><a href="shop-single-v1.html">Women Colorblock Sneakers</a></h6>
                  <div class="widget-product-meta"><span class="text-accent mr-2">$150.<small>00</small></span><span class="text-muted">x 1</span></div>
                </div>
              </div>
              <div class="media align-items-center py-2 border-bottom"><a class="d-block mr-2" href="shop-single-v1.html"><img width="64" src="img/shop/cart/widget/02.jpg" alt="Product"></a>
                <div class="media-body">
                  <h6 class="widget-product-title"><a href="shop-single-v1.html">TH Jeans City Backpack</a></h6>
                  <div class="widget-product-meta"><span class="text-accent mr-2">$79.<small>50</small></span><span class="text-muted">x 1</span></div>
                </div>
              </div>
              <div class="media align-items-center py-2 border-bottom"><a class="d-block mr-2" href="shop-single-v1.html"><img width="64" src="img/shop/cart/widget/03.jpg" alt="Product"></a>
                <div class="media-body">
                  <h6 class="widget-product-title"><a href="shop-single-v1.html">3-Color Sun Stash Hat</a></h6>
                  <div class="widget-product-meta"><span class="text-accent mr-2">$22.<small>50</small></span><span class="text-muted">x 1</span></div>
                </div>
              </div>
              <div class="media align-items-center py-2 border-bottom"><a class="d-block mr-2" href="shop-single-v1.html"><img width="64" src="img/shop/cart/widget/04.jpg" alt="Product"></a>
                <div class="media-body">
                  <h6 class="widget-product-title"><a href="shop-single-v1.html">Cotton Polo Regular Fit</a></h6>
                  <div class="widget-product-meta"><span class="text-accent mr-2">$9.<small>00</small></span><span class="text-muted">x 1</span></div>
                </div>
              </div>
            </div>
            <ul class="list-unstyled font-size-sm pb-2 border-bottom">
              <li class="d-flex justify-content-between align-items-center"><span class="mr-2">Subtotal:</span><span class="text-right">$265.<small>00</small></span></li>
              <li class="d-flex justify-content-between align-items-center"><span class="mr-2">Shipping:</span><span class="text-right">—</span></li>
              <li class="d-flex justify-content-between align-items-center"><span class="mr-2">Taxes:</span><span class="text-right">$9.<small>50</small></span></li>
              <li class="d-flex justify-content-between align-items-center"><span class="mr-2">Discount:</span><span class="text-right">—</span></li>
            </ul>
            <h3 class="font-weight-normal text-center my-4">$274.<small>50</small></h3>
            <form class="needs-validation" method="post" novalidate="">
              <div class="form-group">
                <input class="form-control" type="text" placeholder="Promo code" required="">
                <div class="invalid-feedback">Please provide promo code.</div>
              </div>
              <button class="btn btn-outline-primary btn-block" type="submit">Apply promo code</button>
            </form>
          </div>
        </aside>
      </div>
      <!-- Navigation (mobile)-->
      <div class="row d-lg-none">
        <div class="col-lg-8">
          <div class="d-flex pt-4 mt-3">
            <div class="w-50 pr-3"><a class="btn btn-secondary btn-block" href="checkout-shipping.html"><i class="czi-arrow-left mt-sm-0 mr-1"></i><span class="d-none d-sm-inline">Back to Shipping</span><span class="d-inline d-sm-none">Back</span></a></div>
            <div class="w-50 pl-2"><a class="btn btn-primary btn-block" href="checkout-review.html"><span class="d-none d-sm-inline">Review your order</span><span class="d-inline d-sm-none">Review order</span><i class="czi-arrow-right mt-sm-0 ml-1"></i></a></div>
          </div>
        </div>
      </div>
    </div>

    <Footer/>
</div>
</template>
<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
export default {
	components: {
		Nav,
		Footer
	}
}
</script>