<template>
<div>     
    <Nav/>
    <LogModal/>
    <MobileNav/>
    <Sidebar/>
    <br class="clear">
    <div class="container" id="main">
        <div class="pagecontent">
            <div class="breadcrumb">
                product details
            </div>
            <div class="description">
                <div class="product-slider col-lg-7 col-md-12 col-sm-12">
                    <!-- large pictures -->
                    <div class="carousel-inner col-12">
                        <div class="carousel-item">
                            <a href="" >   
                                <img :src="indicatorPic" alt="">
                            </a>
                        </div>
                    </div>

                    <!-- small pictures -->
                    <div class="carousel-indicators">
                        <div class="thumbnail"  v-for="(img, imgIdx) in productSkuImage" :key="imgIdx" >
                            <a @mouseenter="toggleIndicatorPic(img)">
                                <img :src="img" class="img-fluid">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="product-tabs align-items-center justify-content-between col-lg-5 col-md-12 col-sm-12">
                    <!-- Nav tabs -->
                    <ul class="nav" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active sub-nav-link" id="product-desc-tab" data-toggle="tab" href="#product_desc" role="tab" aria-controls="product_desc" aria-selected="true">
                                <h4>
                                     {{product[0].product_name}}
                                </h4>
                            </a>
                        </li>
                        <li>
                            <p>{{product[0].product_brief_intro}}</p>
                        </li>
                        <li v-for="(sku, skuIdx) in productSkus" :key="skuIdx">
                            <p>  {{sku.price}}</p>
                            <span @click="redirectSku(sku.id)">颜色:{{sku.color}} - 名称:{{sku.title}}</span>
                        </li>
                        <li>
                            <button>-</button>
                            <span>{{ cartNum }}</span>
                            <button>+</button>
                            <button>加入购物车</button>
                        </li>
                    </ul>
                </div>

                <!-- Tab panels -->
                <div class="tab-content col-12">
                    <div class="tab-panel active " id="product_desc" role="tabpanel" aria-labelledby="product-desc-tab">
                       <!-- {{ item.product_description }} -->
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
  
<script>
import Nav from "@/components/Nav.vue";
import LogModal from "@/components/LogModal.vue";   
import Sidebar from "@/components/Sidebar.vue";
import MobileNav from "@/components/MobileNav.vue";

// @ is an alias to /src
export default {
    data () {
        return {
            product: [],
            productSkus: [],
            indicatorPic: null,
            cartNum: 1
        }   
    },
    components: {
        Nav,
        LogModal,
        Sidebar,
        MobileNav
    },
    created () {
        let id = this.$route.params.id;
        let product = this.$store.state.productList.filter( product => {
            return product.id == id;
        })
        return this.product = product, this.productSkus = product[0].product_skus;
    },
    computed: {
        productSkuImage () {
            let id = this.$route.query.skuId;
            if (id) {
                let productSku = this.productSkus.filter(sku => {
                    return sku.id = id;
                });
                return productSku[0].image;
            } else {
                return this.productSkus[0].image;
            }
            
        }
    },
    methods: {
        toggleIndicatorPic (img) {
            this.indicatorPic = img;
        },
        redirectSku (id) {
            this.$router.push({
                name: 'show',
                query: {
                    skuId: id
                }
            })
        }
    }
};  
</script>
<style>
.product-slider {
        margin: 0 auto;
    }
    .carousel-inner{
      /*  display: flex;
        justify-content: center;
        align-items: center;*/
    }

    .carousel-item{
        /*display: table-cell;*/
        display: flex;
        justify-content: center;
        align-items: center;
        height: 500px;
        width: 500px;
    }
    .carousel-item img {
        width: 500px;
        height: auto;
    }
    .img-fluid{
        width: 100%;
        height: auto;
    }
    .carousel-indicators {
        position: relative !important;
        max-width: 500px;
        float: left;
        display: table-cell;
        vertical-align: middle;
        text-align: center;
    }
    .thumbnail {
        width: 60px;
        height: 60px;
         float: left;
         margin: 10px;
         border: 1px solid #e3e3e3;
    }
    .thumbnail img{
        max-width: 58px;
        max-height: 58px;
    }
    .related-product-area{
        margin-top: 100px;
    }
    .related-product-area .heading a{
        float: right;
        margin-top: -30px;
    }
    .related-product-area .product{
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px 0 20px;
    }
    .related-product-area img{
        max-width: 240px;
        max-height: 240px;
    }
    .related-product-area .thumb{
        display: table-cell;
        vertical-align: middle;
        text-align: center;
    }

@media only screen and (max-width: 767px){
    .carousel-item{
    /*display: table-cell;*/
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px !important;
    width: 350px !important;
}
.carousel-item img {
    width: 350px !important;
    height: auto !important;
}
}
</style>