<template>
<div>     
    <Nav/>

    <!-- breadcrump-->
    <!-- <div class="page-title-overlap bg-dark pt-4">
      <div class="container d-lg-flex justify-content-between py-2 py-lg-3">
        <div class="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-star">
              <li class="breadcrumb-item"><a class="text-nowrap" href="index.html"><i class="czi-home"></i>Home</a></li>
              <li class="breadcrumb-item text-nowrap"><a href="#">Shop</a>
              </li>
              <li class="breadcrumb-item text-nowrap active" aria-current="page">Product Page v.1</li>
            </ol>
          </nav>
        </div>
        <div class="order-lg-1 pr-lg-4 text-center text-lg-left">
          <h1 class="h3 text-light mb-0">Sports Hooded Sweatshirt</h1>
        </div>
      </div>
    </div> -->
    
    <div class="container pb-5 mb-sm-4 pt-5">
    
      <!-- Gallery + details-->
      <div class="bg-light box-shadow-lg rounded-lg px-4 py-3 mb-5">
        <div class="px-lg-3">
          <div class="row">
            <!-- Product gallery-->
            <div class="col-lg-7 pr-lg-0 pt-lg-4">
              <div class="cz-product-gallery">

                <!--preview -->
                <div class="cz-preview order-sm-2">
                  <div class="cz-preview-item" :class="{'active': imgIndex === indicatorPic }" v-for="(skuImg, imgIndex) in productSku.image" :key="imgIndex">
                    <img class="cz-image-zoom" :src="skuImg" data-zoom="skuImg" alt="Product image">
                    <div class="cz-image-zoom-pane"></div>
                  </div>             
                </div>

                <!-- thumbnail -->
                <div class="cz-thumblist order-sm-1">
                    <a class="cz-thumblist-item" :class="{'active': imgIndex === indicatorPic }"  v-for="(skuImg, imgIndex) in productSku.image" :key="imgIndex" @click="indicatorPicHandle(imgIndex)">
                        <img :src="skuImg" alt="Product thumb">
                    </a>
                    <!-- video  -->
                    <!-- <a class="cz-thumblist-item video-item" href="https://www.youtube.com/watch?v=1vrXpMLLK14" lg-uid="lg0">
                        <div class="cz-thumblist-item-text">
                            <i class="czi-video"></i>Video
                        </div>
                    </a> -->
                </div>
              </div>
            </div>
            <!-- Product details-->
            <div class="col-lg-5 pt-4 pt-lg-0">
              <div class="product-details ml-auto pb-3">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <a href="#reviews" data-scroll="">
                        <div class="star-rating">
                            <i class="sr-star czi-star-filled active"></i>
                            <i class="sr-star czi-star-filled active"></i>
                            <i class="sr-star czi-star-filled active"></i>
                            <i class="sr-star czi-star-filled active"></i>
                            <i class="sr-star czi-star"></i>
                        </div>
                        <span class="d-inline-block font-size-sm text-body align-middle mt-1 ml-1">74 Reviews
                        </span>
                    </a>
                    <button class="btn-wishlist mr-0 mr-lg-n3" type="button" data-toggle="tooltip" title="" data-original-title="Add to wishlist">
                        <i class="czi-heart"></i>
                    </button>
                </div>

                <div class="mb-3">
                    <h1 class="h5 text-dark mb-2">{{product.product_name}}</h1>
                    <span class="h3 font-weight-normal text-accent mr-1">
                        ${{productSku.price}}
                    </span>
                </div>

                <div class="form-group">
                  <div class="justify-content-between">
                    <label class="font-weight-medium" for="product-size">Options:</label>
                    <div class="font-size-sm mb-4">
                        <div v-for="(sku, skuIndex) in product.product_skus" :key="skuIndex" class="{'skuIsSelected': sku.id == skuId}">
                          <router-link :to="{name: 'show', query: {'skuId': sku.id} }" class="badge badge-secondary">
                              <img :src="sku.image[0]" alt="" class="option-thumblist-item">
                              <span>{{sku.color}}</span>
                              <br>
                              <span class="text-muted">{{sku.title}}</span>
                          </router-link>
                        </div>
                    </div>
                  </div>
                </div>
                

                <form class="mb-grid-gutter" method="post">
                    <div class="form-group d-flex align-items-center">
                        <span class="btn btn-shadow btn-block badge" @click="reduceCartNum">
                            -
                        </span>
                        {{ cartNum }}
                        <span class="btn btn-shadow btn-block" @click="addCartNum">
                           +
                        </span>
                    </div>

                    <div class="form-group d-flex align-items-center">
                      <button class="btn btn-primary btn-shadow btn-block" type="submit">
                          Add to Cart
                      </button>
                    </div>
                </form>
                <!-- Product panels-->
                <div class="accordion mb-4" id="productPanels">
                  <div class="card">
                    <div class="card-header">
                      <h3 class="accordion-heading">
                        <a href="#productInfo" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="productInfo" class="collapsed">
                          <i class="czi-announcement text-muted font-size-lg align-middle mt-n1 mr-2"></i>Product info
                          <span class="accordion-indicator">
                            <i data-feather="chevron-up"></i>
                          </span>
                        </a>
                      </h3>
                    </div>

                    <div class="collapse" id="productInfo" data-parent="#productPanels" style="">
                      <div class="card-body">
                        <h6 class="font-size-sm mb-2">Composition</h6>
                        <ul class="font-size-sm pl-4">
                          <li>Elastic rib: Cotton 95%, Elastane 5%</li>
                          <li>Lining: Cotton 100%</li>
                          <li>Cotton 80%, Polyester 20%</li>
                        </ul>
                        <h6 class="font-size-sm mb-2">Art. No.</h6>
                        <ul class="font-size-sm pl-4 mb-0">
                          <li>183260098</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header">
                      <h3 class="accordion-heading"><a class="collapsed" href="#shippingOptions" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="shippingOptions"><i class="czi-delivery text-muted lead align-middle mt-n1 mr-2"></i>Shipping options<span class="accordion-indicator"><i data-feather="chevron-up"></i></span></a></h3>
                    </div>
                    <div class="collapse" id="shippingOptions" data-parent="#productPanels" style="">
                      <div class="card-body font-size-sm">
                        <div class="d-flex justify-content-between border-bottom pb-2">
                          <div>
                            <div class="font-weight-semibold text-dark">Courier</div>
                            <div class="font-size-sm text-muted">2 - 4 days</div>
                          </div>
                          <div>$26.50</div>
                        </div>
                        <div class="d-flex justify-content-between border-bottom py-2">
                          <div>
                            <div class="font-weight-semibold text-dark">Local shipping</div>
                            <div class="font-size-sm text-muted">up to one week</div>
                          </div>
                          <div>$10.00</div>
                        </div>
                        <div class="d-flex justify-content-between border-bottom py-2">
                          <div>
                            <div class="font-weight-semibold text-dark">Flat rate</div>
                            <div class="font-size-sm text-muted">5 - 7 days</div>
                          </div>
                          <div>$33.85</div>
                        </div>
                        <div class="d-flex justify-content-between border-bottom py-2">
                          <div>
                            <div class="font-weight-semibold text-dark">UPS ground shipping</div>
                            <div class="font-size-sm text-muted">4 - 6 days</div>
                          </div>
                          <div>$18.00</div>
                        </div>
                        <div class="d-flex justify-content-between pt-2">
                          <div>
                            <div class="font-weight-semibold text-dark">Local pickup from store</div>
                            <div class="font-size-sm text-muted">—</div>
                          </div>
                          <div>$0.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header">
                      <h3 class="accordion-heading">
                        <a class="" href="#localStore" role="button" data-toggle="collapse" aria-expanded="true" aria-controls="localStore">
                          <i class="czi-location text-muted font-size-lg align-middle mt-n1 mr-2"></i>
                          Find in local store
                          <span class="accordion-indicator">
                            <i data-feather="chevron-up"></i>
                          </span>
                        </a>
                      </h3>
                    </div>
                    <div class="collapse show" id="localStore" data-parent="#productPanels" style="">
                      <div class="card-body">
                        <select class="custom-select">
                          <option value="">Select your country</option>
                          <option value="UK">United Kingdom</option>
                          <option value="USA">USA</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Sharing-->
                <h6 class="d-inline-block align-middle font-size-base my-2 mr-2">Share:</h6>
                <a class="share-btn sb-twitter mr-2 my-2" href="#">
                  <i class="czi-twitter"></i>Twitter
                </a>
                <a class="share-btn sb-instagram mr-2 my-2" href="#">
                  <i class="czi-instagram"></i>Instagram
                </a>
                <a class="share-btn sb-facebook my-2" href="#">
                  <i class="czi-facebook"></i>Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Product description section-->
        <div class="row align-items-center py-md-3">
            {{product.product_description}}
        </div>

</div>
    <Footer/>
</div>
</template>
  
<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
// @ is an alias to /src
export default {
    data () {
        return {
            indicatorPic: 0,
            cartNum: 1,
            skuId: this.$route.query.skuId,
            productId: this.$route.params.id,
            product: {}
        }   
    },
    components: {
        Nav,
        Footer
    },
    watch: {
        '$route.query.skuId' () {
            this.skuId = this.$route.query.skuId;
            this.indicatorPic = 0;
        }
    },
    created () {
        // product object
        return this.product = this.$store.state.productList.filter(product => {
                return Number(product.id) === Number(this.productId);
            })[0];
    },
    computed: {
      // productSku is an object
        productSku() {
            if(!this.skuId) {
                return this.product.product_skus[0];
            } else {
                return this.product.product_skus.filter(sku => {
                    return Number(sku.id) === Number(this.skuId);
                })[0];
            }
        }   
    },
    methods: {
        indicatorPicHandle(id) {
            return this.indicatorPic = id;
        },
        reduceCartNum() {
          if(this.cartNum<=1) return;
          return this.cartNum--;
        },
        addCartNum() {
          return this.cartNum++;
        }
    }
}
</script>
<style scoped>
.option-thumblist-item{
  width: 30px;
  height: 30px;
}
.skuIsSelected{
  border: 1px solid #ccc;
}
</style>

