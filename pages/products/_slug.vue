<script>
import ProductRecommendation from "@/components/front/ProductRecommendation.vue";
export default {
  components: {
    ProductRecommendation,
  },
  layout: "product",
  data() {
    return {
      lang: "",
      product: "",
      images: "",
    };
  },
  async asyncData({ app, params, $axios, error, redirect }) {
    const slug = params.slug;
    // const id = query.id;
    const locale = app.i18n.locale;
    const data = await $axios.$get(`http://localhost:3001/api/product/${slug}`);
    console.log(`Slug: ${slug}, Lang: ${locale}`);

    if (data[locale].slug !== slug)
      return redirect(301, `/pages/404//?title=${slug}`);
    return {
      data: data,
      locale: locale,
      // productId: data.id,
    };

    // await store.dispatch("GET_LISTINGS");
    // console.log(`state: ${store.state.currentListing}`);
  },
  created() {
    this.product = this.data; // data is intercepted from  asyncData return
    this.images = this.data.images;
    this.lang = this.locale;
    // console.log(this.listing);
    // this.urlImgId = this.data.imagesPathId;
    // this.structuredData.name = this.listing[this.locale].productTitle;
    // console.log(`listing data ${this.listing[this.locale].productTitle}`);
    // console.log(this.images);
  },
  methods: {
    gotocart: () => {
      this.$router.push("/cart");
    },
    addToCart(product) {
      this.$store.dispatch("cart/addToCart", product);
      // this.$router.push("/cart");
      // console.log(product);
      this.toTop();
      // this.$store.commit("cart/setCart", product);


    },
  },
};
</script>

<template>
  <main id="MainContent" class="content-for-layout focus-none" role="main" tabindex="-1">
    <div class="normal_main_content page-width">
      <section id="shopify-section-template--14383183396907__main"
        class="shopify-section product-section spaced-section">
        <div class="row grid">
          <div class="grid__item product__media-wrapper col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div class="slider-mobile-gutter product--media--sticky">
              <a class="skip-to-content-link button visually-hidden" href="#ProductInfo-template--14383183396907__main">
                Skip to product information
              </a>
              <ul id="main-media-container" class="single-product zoom">
                <li class="product__media-item grid__item" data-media-id="template--14383183396907__main-6663085260843"
                  data-media-type="image">
                  <modal-opener class="product__modal-opener product__modal-opener--image no-js-hidden"
                    data-modal="#ProductModal-template--14383183396907__main">
                    <div class="product__media media" style="padding-top: 129.7016861219196%">
                      <img :srcset="`
                        ${images[0]} 288w,
                        ${images[0]} 576w,
                        ${images[0]} 550w,
                        ${images[0]}      771w
                      `" class="ls-is-cached lazyloaded" :data-src="`${images[0]}`"
                        sizes="(min-width: 1200px) calc((1200px - 10rem) / 2), (min-width: 750px) calc((100vw - 11.5rem) / 2), calc(100vw - 4rem)"
                        loading="lazy" alt="Monte Carlo t-shirt" :data-zoom-image="`${images[0]}`"
                        :src="`${images[0]}`" />
                    </div>
                  </modal-opener>
                </li>
              </ul>
              <ul class="product__media-list grid owl-carousel owl-loaded owl-drag" role="list">
                <div class="owl-stage-outer">
                  <div class="owl-stage" style="
                      transform: translate3d(0px, 0px, 0px);
                      transition: all 0.75s ease 0s;
                      width: 1192px;
                    ">
                    <div class="owl-item active" style="width: 155.25px; margin-right: 15px">
                      <li class="product__media-item grid__item"
                        data-media-id="template--14383183396907__main-6663085228075" data-media-type="image">
                        <modal-opener class="product__modal-opener product__modal-opener--image no-js-hidden"
                          data-modal="#ProductModal-template--14383183396907__main">
                          <div class="product__media media" style="padding-top: 129.7016861219196%">
                            <img :srcset="`
                              ${images[0]} 288w,
                              ${images[0]} 576w,
                              ${images[0]} 550w,
                              ${images[0]}      771w
                            `" class="ls-is-cached lazyloaded" :data-src="`${images[0]}`"
                              sizes="(min-width: 1200px) calc((1200px - 10rem) / 2), (min-width: 750px) calc((100vw - 11.5rem) / 2), calc(100vw - 4rem)"
                              loading="lazy" alt="Monte Carlo t-shirt" :data-zoom-image="`${images[0]}`"
                              :src="`${images[0]}`" />
                          </div>
                        </modal-opener>
                      </li>
                    </div>
                    <div v-for="image in images" :key="image" class="owl-item active"
                      style="width: 155.25px; margin-right: 15px">
                      <li class="product__media-item grid__item"
                        data-media-id="template--14383183396907__main-6663085260843" data-media-type="image">
                        <modal-opener class="product__modal-opener product__modal-opener--image no-js-hidden"
                          data-modal="#ProductModal-template--14383183396907__main">
                          <div class="product__media media" style="padding-top: 129.7016861219196%">
                            <img :srcset="`
                              ${image} 288w,
                              ${image} 576w,
                              ${image} 550w,
                              ${image}      771w
                            `" class="ls-is-cached lazyloaded" :data-src="`${image}`"
                              sizes="(min-width: 1200px) calc((1200px - 10rem) / 2), (min-width: 750px) calc((100vw - 11.5rem) / 2), calc(100vw - 4rem)"
                              loading="lazy" alt="Monte Carlo t-shirt" :data-zoom-image="`${image}`"
                              :src="`${image}`" />
                          </div>
                        </modal-opener>
                      </li>
                    </div>
                  </div>
                </div>
                <div class="owl-nav">
                  <button type="button" role="presentation" class="owl-prev">
                    <i class="fa fa-angle-left"></i></button><button type="button" role="presentation" class="owl-next">
                    <i class="fa fa-angle-right"></i>
                  </button>
                </div>
                <div class="owl-dots disabled"></div>
              </ul>
            </div>
          </div>

          <!-- {{this.product}} -->
          <div class="product__info-wrapper grid__item col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div id="ProductInfo-template--14383183396907__main" class="product__info-container"
              style="padding:0rem 3.5% !important;">
              <h1 class="product__title" style="margin-bottom: 10px">
                {{ product[lang].productTitle }}
              </h1>
              <div class="review" style="margin-bottom: 5px">
                <span class="spr-badge" id="spr_badge_4528375136299" data-rating="4.0"><span
                    class="spr-starrating spr-badge-starrating"><i class="spr-icon spr-icon-star"
                      aria-hidden="true"></i><i class="spr-icon spr-icon-star" aria-hidden="true"></i><i
                      class="spr-icon spr-icon-star" aria-hidden="true"></i><i class="spr-icon spr-icon-star"
                      aria-hidden="true"></i><i class="spr-icon spr-icon-star-empty" aria-hidden="true"></i></span><span
                    class="spr-badge-caption">1 review</span>
                </span>

                <a href="javascript:void(0);" class="write_comment">Write Review<i class="fa fa-pencil"
                    aria-hidden="true"></i></a>
              </div>
              <div class="product-price" style="margin-bottom: 5px">
                <div class="no-js-hidden" id="price-template--14383183396907__main" role="status">
                  <div class="price price--large price--on-sale">
                    <dl>
                      <div class="price__regular">
                        <dt>
                          <span class="visually-hidden visually-hidden--inline">Regular price</span>
                        </dt>
                        <dd>
                          <span class="price-item price-item--regular">
                            ${{ product[lang].price }}
                          </span>
                        </dd>
                      </div>
                      <div class="price__sale">
                        <dt class="price__compare">
                          <span class="visually-hidden visually-hidden--inline">Regular price</span>
                        </dt>
                        <dd class="price__compare">
                          <s class="price-item price-item--regular"> ${{ product[lang].priceDiscountedTo }} </s>
                        </dd>
                        <dt>
                          <span class="visually-hidden visually-hidden--inline">Sale price</span>
                        </dt>
                        <dd>
                          <span class="price-item price-item--sale">
                            $64.00
                          </span>
                        </dd>
                      </div>
                      <small class="unit-price caption hidden">
                        <dt class="visually-hidden">Unit price</dt>
                        <dd>
                          <span></span>
                          <span aria-hidden="true">/</span>
                          <span class="visually-hidden">&nbsp;per&nbsp;</span>
                          <span> </span>
                        </dd>
                      </small>
                    </dl>
                  </div>
                </div>
              </div>

              <div class="product-information" style="margin-bottom: 10px">
                <p itemprop="brand" class="product-single__vendor" style="margin-bottom: 5px">
                  Vendor : <span>Babywear</span>
                </p>

                <p itemprop="brand" class="product-single__vendor" style="margin-bottom: 5px">
                  Product Type : <span>Babywear</span>
                </p>
              </div>
              <div class="wishlist-sizechart" style="margin-bottom: 5px">
                <div class="add-to-wishlist">
                  <div class="show">
                    <div class="default-wishbutton-monte-carlo-t-shirt loading">
                      <a class="add-in-wishlist-js btn" data-href="monte-carlo-t-shirt"><i class="fa fa-heart"></i><span
                          class="tooltip-label">Add to wishlist</span></a>
                    </div>
                    <div class="loadding-wishbutton-monte-carlo-t-shirt loading btn loader-btn"
                      style="display: none; pointer-events: none">
                      <a class="add_to_wishlist" data-href="monte-carlo-t-shirt"><i
                          class="fa fa-circle-o-notch fa-spin"></i><span class="tooltip-label">Add to
                          wishlist</span></a>
                    </div>
                    <div class="added-wishbutton-monte-carlo-t-shirt loading" style="display: none">
                      <a class="added-wishlist btn add_to_wishlist" href="/pages/wishlist"><i
                          class="fa fa-heart"></i><span class="tooltip-label">View Wishlist</span></a>
                    </div>
                  </div>
                </div>

                <ishimodal-opener class="product-popup-modal__opener no-js-hidden size-chart"
                  data-modal="#PopupModal-wishlist_sizechart">
                  <svg aria-hidden="true" focusable="false" role="presentation" class="icon" viewBox="0 0 640 512">
                    <svg x="0%" y="4%">
                      <path fill="currentColor"
                        d="M608 128H32c-17.67 0-32 14.33-32 32v192c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V160c0-17.67-14.33-32-32-32zm-16 208H48V176h64v56c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-56h64v56c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-56h64v56c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-56h64v56c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-56h64v56c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-56h64v160z">
                      </path>
                    </svg>
                  </svg>

                  <div id="ProductPopup-wishlist_sizechart" class="ishi-popup-modal__button link" type="button"
                    aria-haspopup="dialog" data-href="#PopupModal-wishlist_sizechart" data-toggle="popover"
                    aria-expanded="false">
                    Sizechart
                  </div>
                </ishimodal-opener>
                <a href="/pages/sizechart" class="ishi-popup-modal__button link no-js">Sizechart</a>
              </div>
              <div class="ishi-progress-space" style="margin-bottom: 10px">
                <div class="ishi-progress-content hidden" data-quantity="10">
                  <div class="quantity-value">
                    Hurry! Only
                    <div id="variant-stock" class="variant_quantity">156</div>
                    units left in stock!
                  </div>
                  <div id="ishi-progress-bar">
                    <span style="width: 90%"></span>
                  </div>
                </div>

                <span id="variant-32005558337579" data-stock="156" class="selected-variant"></span>

                <span id="variant-32005558370347" data-stock="46"></span>

                <span id="variant-32005558403115" data-stock="13"></span>

                <span id="variant-32005558435883" data-stock="23"></span>

                <span id="variant-32005558468651" data-stock="56"></span>

                <span id="variant-32005558501419" data-stock="89"></span>

                <span id="variant-32005558534187" data-stock="78"></span>

                <span id="variant-32005558566955" data-stock="45"></span>

                <span id="variant-32005558599723" data-stock="11"></span>
              </div>
              <div class="variant-space" style="margin-bottom: 10px">
                <variant-radios class="no-js-hidden" data-section="template--14383183396907__main"
                  data-url="/products/monte-carlo-t-shirt">
                  <fieldset class="js product-form__input size">
                    <legend class="form__label">Size</legend>
                    <input type="radio" id="template--14383183396907__main-1-0" name="Size" value="S"
                      form="product-form-template--14383183396907__main" checked="" />

                    <label for="template--14383183396907__main-1-0" class="square">
                      S
                    </label>

                    <input type="radio" id="template--14383183396907__main-1-1" name="Size" value="M"
                      form="product-form-template--14383183396907__main" />

                    <label for="template--14383183396907__main-1-1" class="square">
                      M
                    </label>

                    <input type="radio" id="template--14383183396907__main-1-2" name="Size" value="L"
                      form="product-form-template--14383183396907__main" />

                    <label for="template--14383183396907__main-1-2" class="square">
                      L
                    </label>
                  </fieldset>
                  <fieldset class="js product-form__input color">
                    <legend class="form__label">Color</legend>
                    <input type="radio" id="template--14383183396907__main-2-0" name="Color" value="Pink"
                      form="product-form-template--14383183396907__main" checked="" />

                    <label for="template--14383183396907__main-2-0" style="background-color: pink">
                    </label>

                    <input type="radio" id="template--14383183396907__main-2-1" name="Color" value="Green"
                      form="product-form-template--14383183396907__main" />

                    <label for="template--14383183396907__main-2-1" style="background-color: green">
                    </label>

                    <input type="radio" id="template--14383183396907__main-2-2" name="Color" value="Yellow"
                      form="product-form-template--14383183396907__main" />

                    <label for="template--14383183396907__main-2-2" style="background-color: yellow">
                    </label>
                  </fieldset>
                </variant-radios><noscript class="product-form__noscript-wrapper-template--14383183396907__main">
                  <div class="product-form__input">
                    <label class="form__label" for="Variants-template--14383183396907__main">Product variants</label>
                    <div class="select">
                      <select name="id" id="Variants-template--14383183396907__main" class="select__select"
                        form="product-form-template--14383183396907__main">
                        <option selected="selected" value="32005558337579">
                          S / Pink - $64.00
                        </option>
                        <option value="32005558370347">
                          S / Green - $64.00
                        </option>
                        <option value="32005558403115">
                          S / Yellow - $64.00
                        </option>
                        <option value="32005558435883">
                          M / Pink - $66.00
                        </option>
                        <option value="32005558468651">
                          M / Green - $66.00
                        </option>
                        <option value="32005558501419">
                          M / Yellow - $66.00
                        </option>
                        <option value="32005558534187">
                          L / Pink - $68.00
                        </option>
                        <option value="32005558566955">
                          L / Green - $68.00
                        </option>
                        <option value="32005558599723">
                          L / Yellow - $68.00
                        </option>
                      </select>

                      <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-caret"
                        viewBox="0 0 10 6">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"
                          fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </noscript>
              </div>
              <div class="product-form__input product-form__quantity" style="margin-bottom: 20px">
                <label class="form__label" for="Quantity-template--14383183396907__main">
                  Quantity
                </label>
                <quantity-input class="quantity">
                  <button class="quantity__button no-js-hidden" name="minus" type="button">
                    <span class="visually-hidden">Decrease quantity for Monte Carlo t-shirt</span>

                    <svg aria-hidden="true" focusable="false" role="presentation" viewBox="0 0 10 2" class="icon">
                      <svg x="0%" y="0%">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M.5 1C.5.7.7.5 1 .5h8a.5.5 0 110 1H1A.5.5 0 01.5 1z" fill="currentColor"></path>
                      </svg>
                    </svg>
                  </button>
                  <input class="quantity__input" type="number" name="quantity"
                    id="Quantity-template--14383183396907__main" min="1" value="1"
                    form="product-form-template--14383183396907__main" />
                  <button class="quantity__button no-js-hidden" name="plus" type="button">
                    <span class="visually-hidden">Increase quantity for Monte Carlo t-shirt</span>

                    <svg aria-hidden="true" focusable="false" role="presentation" class="icon" viewBox="0 0 10 10">
                      <svg x="0%" y="0%">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M1 4.51a.5.5 0 000 1h3.5l.01 3.5a.5.5 0 001-.01V5.5l3.5-.01a.5.5 0 00-.01-1H5.5L5.49.99a.5.5 0 00-1 .01v3.5l-3.5.01H1z"
                          fill="currentColor"></path>
                      </svg>
                    </svg>
                  </button>
                </quantity-input>
              </div>
              <div class="buy-btn-space" style="margin-bottom: 20px">
                <div>
                  <button type="submit" name="add" style="
                    background: #002044;
                    color: white;
                    font-size: 18px;
                    font-weight: 650;
                    width:300px;
                    padding: 0.8em 4%;
                    border-radius: 5px;
                    outline: none;
                    border: none;
                    
                  " @click="addToCart(product)">
                    Add to cart
                  </button>
                  <!-- <product-form class="product-form">
                    <div class="product-form__error-message-wrapper alert alert-danger" role="alert" hidden="">
                      <svg aria-hidden="true" focusable="false" role="presentation" viewBox="0 0 13 13"
                        class="icon icon-error">
                        <svg x="0%" y="0%">
                          <circle cx="6.5" cy="6.50049" r="5.5" stroke="white" stroke-width="2"></circle>
                          <circle cx="6.5" cy="6.5" r="5.5" fill="#EB001B" stroke="#EB001B" stroke-width="0.7"></circle>
                          <path
                            d="M5.87413 3.52832L5.97439 7.57216H7.02713L7.12739 3.52832H5.87413ZM6.50076 9.66091C6.88091 9.66091 7.18169 9.37267 7.18169 9.00504C7.18169 8.63742 6.88091 8.34917 6.50076 8.34917C6.12061 8.34917 5.81982 8.63742 5.81982 9.00504C5.81982 9.37267 6.12061 9.66091 6.50076 9.66091Z"
                            fill="white"></path>
                          <path
                            d="M5.87413 3.17832H5.51535L5.52424 3.537L5.6245 7.58083L5.63296 7.92216H5.97439H7.02713H7.36856L7.37702 7.58083L7.47728 3.537L7.48617 3.17832H7.12739H5.87413ZM6.50076 10.0109C7.06121 10.0109 7.5317 9.57872 7.5317 9.00504C7.5317 8.43137 7.06121 7.99918 6.50076 7.99918C5.94031 7.99918 5.46982 8.43137 5.46982 9.00504C5.46982 9.57872 5.94031 10.0109 6.50076 10.0109Z"
                            fill="white" stroke="#EB001B" stroke-width="0.7"></path>
                        </svg>
                      </svg>

                      <span class="product-form__error-message"></span>
                    </div>
                    <form method="post" action="/cart/add" id="product-form-template--14383183396907__main"
                      accept-charset="UTF-8" class="form" enctype="multipart/form-data" novalidate="novalidate"
                      data-type="add-to-cart-form">
                      <input type="hidden" name="form_type" value="product" /><input type="hidden" name="utf8"
                        value="✓" /><input type="hidden" name="id" value="32005558337579" />
                      <div class="product-form__buttons">
                      
                        <div data-shopify="payment-button" data-has-selling-plan="false"
                          data-has-fixed-selling-plan="false" class="shopify-payment-button">
                          <div>
                            <div>
                              <div>
                                <div class="shopify-cleanslate">
                                  <div id="shopify-svg-symbols" class="VoW3UuJKYxZJHMpUkDNUv" aria-hidden="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                      focusable="false">
                                      <defs>
                                        <symbol id="shopify-svg__warning" viewBox="0 0 16 14">
                                          <path
                                            d="M5.925 2.344c1.146-1.889 3.002-1.893 4.149 0l4.994 8.235c1.146 1.889.288 3.421-1.916 3.421h-10.305c-2.204 0-3.063-1.529-1.916-3.421l4.994-8.235zm1.075 1.656v5h2v-5h-2zm0 6v2h2v-2h-2z">
                                          </path>
                                        </symbol>
                                        <symbol id="shopify-svg__loading" viewBox="0 0 32 32">
                                          <path
                                            d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0v2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14h2z">
                                          </path>
                                        </symbol>
                                        <symbol id="shopify-svg__error" viewBox="0 0 18 18">
                                          <path style="fill: rgb(255, 62, 62)"
                                            d="M9 18c5 0 9-4 9-9s-4-9-9-9-9 4-9 9 4 9 9 9z"></path>
                                          <path style="fill: rgb(255, 255, 255)" d="M8 4h2v6H8z"></path>
                                          <rect style="fill: rgb(255, 255, 255)" x="7.8" y="12" width="2.5" height="2.5"
                                            rx="1.3"></rect>
                                        </symbol>
                                        <symbol id="shopify-svg__close-circle" viewBox="0 0 16 16">
                                          <circle cx="8" cy="8" r="8"></circle>
                                          <path d="M10.5 5.5l-5 5M5.5 5.5l5 5" stroke="#FFF" stroke-width="1.5"
                                            stroke-linecap="square"></path>
                                        </symbol>
                                        <symbol id="shopify-svg__close" viewBox="0 0 20 20">
                                          <path
                                            d="M17.1 4.3l-1.4-1.4-5.7 5.7-5.7-5.7-1.4 1.4 5.7 5.7-5.7 5.7 1.4 1.4 5.7-5.7 5.7 5.7 1.4-1.4-5.7-5.7z">
                                          </path>
                                        </symbol>
                                        <symbol id="shopify-svg__arrow-right" viewBox="0 0 16 16">
                                          <path d="M16 8.1l-8.1 8.1-1.1-1.1L13 8.9H0V7.3h13L6.8 1.1 7.9 0 16 8.1z">
                                          </path>
                                        </symbol>
                                        <symbol id="shopify-svg__payments-google-pay-light" viewBox="0 0 41 17">
                                          <path style="fill: rgb(255, 255, 255)"
                                            d="M19.526 2.635v4.083h2.518c.6 0 1.096-.202 1.488-.605.403-.402.605-.882.605-1.437 0-.544-.202-1.018-.605-1.422-.392-.413-.888-.62-1.488-.62h-2.518zm0 5.52v4.736h-1.504V1.198h3.99c1.013 0 1.873.337 2.582 1.012.72.675 1.08 1.497 1.08 2.466 0 .991-.36 1.819-1.08 2.482-.697.665-1.559.996-2.583.996h-2.485v.001zM27.194 10.442c0 .392.166.718.499.98.332.26.722.391 1.168.391.633 0 1.196-.234 1.692-.701.497-.469.744-1.019.744-1.65-.469-.37-1.123-.555-1.962-.555-.61 0-1.12.148-1.528.442-.409.294-.613.657-.613 1.093m1.946-5.815c1.112 0 1.989.297 2.633.89.642.594.964 1.408.964 2.442v4.932h-1.439v-1.11h-.065c-.622.914-1.45 1.372-2.486 1.372-.882 0-1.621-.262-2.215-.784-.594-.523-.891-1.176-.891-1.96 0-.828.313-1.486.94-1.976s1.463-.735 2.51-.735c.892 0 1.629.163 2.206.49v-.344c0-.522-.207-.966-.621-1.33a2.132 2.132 0 0 0-1.455-.547c-.84 0-1.504.353-1.995 1.062l-1.324-.834c.73-1.045 1.81-1.568 3.238-1.568M40.993 4.889l-5.02 11.53H34.42l1.864-4.034-3.302-7.496h1.635l2.387 5.749h.032l2.322-5.75z">
                                          </path>
                                          <path style="fill: rgb(66, 133, 244)"
                                            d="M13.448 7.134c0-.473-.04-.93-.116-1.366H6.988v2.588h3.634a3.11 3.11 0 0 1-1.344 2.042v1.68h2.169c1.27-1.17 2.001-2.9 2.001-4.944">
                                          </path>
                                          <path style="fill: rgb(52, 168, 83)"
                                            d="M6.988 13.7c1.816 0 3.344-.595 4.459-1.621l-2.169-1.681c-.603.406-1.38.643-2.29.643-1.754 0-3.244-1.182-3.776-2.774H.978v1.731a6.728 6.728 0 0 0 6.01 3.703">
                                          </path>
                                          <path style="fill: rgb(251, 188, 5)"
                                            d="M3.212 8.267a4.034 4.034 0 0 1 0-2.572V3.964H.978A6.678 6.678 0 0 0 .261 6.98c0 1.085.26 2.11.717 3.017l2.234-1.731z">
                                          </path>
                                          <path style="fill: rgb(234, 67, 53)"
                                            d="M6.988 2.921c.992 0 1.88.34 2.58 1.008v.001l1.92-1.918C10.324.928 8.804.262 6.989.262a6.728 6.728 0 0 0-6.01 3.702l2.234 1.731c.532-1.592 2.022-2.774 3.776-2.774">
                                          </path>
                                        </symbol>
                                        <symbol id="shopify-svg__payments-google-pay-dark" viewBox="0 0 41 17">
                                          <path style="fill: rgba(0, 0, 0, 0.55)"
                                            d="M19.526 2.635v4.083h2.518c.6 0 1.096-.202 1.488-.605.403-.402.605-.882.605-1.437 0-.544-.202-1.018-.605-1.422-.392-.413-.888-.62-1.488-.62h-2.518zm0 5.52v4.736h-1.504V1.198h3.99c1.013 0 1.873.337 2.582 1.012.72.675 1.08 1.497 1.08 2.466 0 .991-.36 1.819-1.08 2.482-.697.665-1.559.996-2.583.996h-2.485v.001zM27.194 10.442c0 .392.166.718.499.98.332.26.722.391 1.168.391.633 0 1.196-.234 1.692-.701.497-.469.744-1.019.744-1.65-.469-.37-1.123-.555-1.962-.555-.61 0-1.12.148-1.528.442-.409.294-.613.657-.613 1.093m1.946-5.815c1.112 0 1.989.297 2.633.89.642.594.964 1.408.964 2.442v4.932h-1.439v-1.11h-.065c-.622.914-1.45 1.372-2.486 1.372-.882 0-1.621-.262-2.215-.784-.594-.523-.891-1.176-.891-1.96 0-.828.313-1.486.94-1.976s1.463-.735 2.51-.735c.892 0 1.629.163 2.206.49v-.344c0-.522-.207-.966-.621-1.33a2.132 2.132 0 0 0-1.455-.547c-.84 0-1.504.353-1.995 1.062l-1.324-.834c.73-1.045 1.81-1.568 3.238-1.568M40.993 4.889l-5.02 11.53H34.42l1.864-4.034-3.302-7.496h1.635l2.387 5.749h.032l2.322-5.75z">
                                          </path>
                                          <path style="fill: rgb(66, 133, 244)"
                                            d="M13.448 7.134c0-.473-.04-.93-.116-1.366H6.988v2.588h3.634a3.11 3.11 0 0 1-1.344 2.042v1.68h2.169c1.27-1.17 2.001-2.9 2.001-4.944">
                                          </path>
                                          <path style="fill: rgb(52, 168, 83)"
                                            d="M6.988 13.7c1.816 0 3.344-.595 4.459-1.621l-2.169-1.681c-.603.406-1.38.643-2.29.643-1.754 0-3.244-1.182-3.776-2.774H.978v1.731a6.728 6.728 0 0 0 6.01 3.703">
                                          </path>
                                          <path style="fill: rgb(251, 188, 5)"
                                            d="M3.212 8.267a4.034 4.034 0 0 1 0-2.572V3.964H.978A6.678 6.678 0 0 0 .261 6.98c0 1.085.26 2.11.717 3.017l2.234-1.731z">
                                          </path>
                                          <path style="fill: rgb(234, 67, 53)"
                                            d="M6.988 2.921c.992 0 1.88.34 2.58 1.008v.001l1.92-1.918C10.324.928 8.804.262 6.989.262a6.728 6.728 0 0 0-6.01 3.702l2.234 1.731c.532-1.592 2.022-2.774 3.776-2.774">
                                          </path>
                                        </symbol>
                                        <symbol id="shopify-svg__payments-facebook-pay-light" viewBox="0 14 243 31">
                                          <path style="fill: white"
                                            d="M191.3 37.3V19.2h7.8c2.3 0 4.1.6 5.2 1.6 1.1 1.1 1.7 2.6 1.7 4.5 0 1.8-.6 3.3-1.7 4.5-1.1 1.1-2.8 1.6-5.2 1.6h-4.6v5.9h-3.2zm7.5-15.3h-4.3v6.5h4.3c1.4 0 2.4-.3 3.1-.8.6-.6.9-1.3.9-2.4s-.3-1.9-.9-2.4c-.7-.6-1.7-.9-3.1-.9zM212.3 37.6c-1.4 0-2.3-.4-3.1-1.1-.8-.7-1.1-1.6-1.1-2.8 0-1.1.4-2.1 1.3-2.8.9-.8 2.2-1.1 4.1-1.1h3.3v-.1c0-2-.9-3-2.8-3-.8 0-1.4.1-2 .4s-1 .7-1.4 1.2l-2-1.6c.6-.9 1.3-1.6 2.2-2s2-.7 3.1-.7h.3c1.6 0 3 .5 3.9 1.4 1 .9 1.5 2.3 1.5 4.1v7.7h-2.8v-2c-.5.7-1.1 1.3-1.9 1.7-.7.5-1.6.7-2.6.7zm.8-2.6c.9 0 1.6-.2 2.3-.6.6-.4 1.1-.9 1.4-1.6v-1h-3.1c-.9 0-1.6.1-2 .4-.4.3-.6.7-.6 1.2 0 1.1.6 1.6 2 1.6zM224.7 43c-.4 0-.8 0-1.1-.1v-2.6c.1 0 .3 0 .4.1.1.1.3 0 .4 0 .9 0 1.6-.2 2.1-.6.6-.4 1-1.1 1.4-2-1.1-2.1-2.1-4.4-3-6.6-.9-2.3-1.8-4.5-2.6-6.8h3.3c1 3.4 2.2 6.8 3.6 10.2l3.3-10.2h3.1l-5 13.3c-.6 1.7-1.4 3.1-2.3 4-.9.9-2.1 1.3-3.6 1.3zM20.3 19.5v2.4c0 .1-.1.2-.2.3H9.8v4.9h8.5c.1 0 .2.1.3.2v2.5c0 .1-.1.2-.2.3H9.8v7.2c0 .1-.1.2-.2.2H7c-.2 0-.3-.1-.3-.2V19.5c0-.1.1-.2.2-.3H20c.2.1.3.2.3.3zM41.2 37.5h-2.9c-.2 0-.3-.1-.3-.2-.4-1.5-.9-3.1-1.4-4.6H28c-.5 1.6-1 3.1-1.3 4.6 0 .2-.2.2-.3.2h-2.7c-.2 0-.3-.1-.2-.3 1.8-6 4-11.9 6.7-17.6.1-.2.3-.3.5-.3h3.7c.2 0 .5.1.5.3 2.7 5.7 4.9 11.6 6.6 17.6 0 .2-.1.3-.3.3zm-5.4-7.7c-1-2.6-2-5.3-3.1-7.7h-.6c-1.1 2.4-2.1 5-3.1 7.7h6.8zM45.9 28.5c0-5.7 3.7-9.6 9-9.6h.4c3-.1 5.8 1.5 7.3 4.1.1.2.1.3-.1.3l-2.3 1.1c-.2.1-.3.1-.5-.1v-.1c-.9-1.7-2.6-2.6-4.5-2.6h-.4c-3.3 0-5.7 2.6-5.7 6.5s2.3 6.5 5.7 6.5h.4c2.2 0 3.4-.7 4.5-1.9.1-.1.3-.2.5-.1l2.3 1.1c.1.1.1.1.1.2s-.1.1-.1.2c-1.4 2.1-4.1 3.4-7.2 3.4h-.4c-5.4.3-9-3.4-9-9zM83.3 34.8v2.4c0 .1-.1.2-.2.2H69.4c-.1 0-.2-.1-.2-.2V19.5c0-.1.1-.2.2-.3h13.4c.1 0 .2.1.2.2v2.4c0 .1-.1.2-.2.3H72.2v4.7h8.6c.1 0 .2.1.3.2v2.4c0 .1-.1.2-.2.3h-8.6v4.7h10.8c0 .2.2.3.2.4zM106.7 32.5c0 3.2-2.5 5-6.8 5H91c-.1 0-.2-.1-.3-.2V19.5c0-.1.1-.2.2-.3h8.2c4.2 0 6.5 1.7 6.5 4.7 0 2-1 3.3-3.1 3.9 3 .7 4.2 2.5 4.2 4.7zm-7.6-10.4h-5.3V27h5.3c2.3 0 3.4-.7 3.4-2.5.1-1.7-1-2.4-3.4-2.4zm4.5 10.1c0-1.7-1.1-2.5-3.5-2.5H94v4.9h6.1c2.4 0 3.5-.7 3.5-2.4zM112.2 28.4c0-5.5 3.7-9.4 9.4-9.4h.4c5.7 0 9.4 3.9 9.4 9.4s-3.7 9.4-9.4 9.4h-.4c-5.8 0-9.4-3.9-9.4-9.4zm9.7 6.4c3.7 0 6.1-2.6 6.1-6.5s-2.3-6.5-6-6.5h-.4c-3.7 0-6.1 2.6-6.1 6.5s2.3 6.5 6.1 6.5h.3zM136.6 28.4c0-5.5 3.7-9.4 9.4-9.4h.4c5.7 0 9.4 3.9 9.4 9.4s-3.7 9.4-9.4 9.4h-.4c-5.8 0-9.4-3.9-9.4-9.4zm9.7 6.4c3.7 0 6.1-2.6 6.1-6.5s-2.3-6.5-6.1-6.5h-.4c-3.7 0-6.1 2.6-6.1 6.5s2.3 6.5 6.1 6.5h.4zM178.1 37.5h-3.4c-.2 0-.3-.1-.5-.2-2.3-2.7-4.8-5.2-7.5-7.6h-1.5v7.6c0 .1-.1.2-.2.2h-2.6c-.1 0-.2-.1-.3-.2V19.5c0-.1.1-.2.2-.3h2.6c.1 0 .2.1.3.2v7.2h1.5c2.5-2.2 4.7-4.6 6.8-7.2.1-.1.2-.2.4-.2h3.2c.2 0 .2.1.2.2s-.1.1-.1.2c-2.5 3.1-5.2 6-8.2 8.5 3.3 2.7 6.3 5.8 9.1 9 .3.2.2.4 0 .4z">
                                          </path>
                                        </symbol>
                                        <symbol id="shopify-svg__payments-facebook-pay-dark" viewBox="0 14 243 31">
                                          <path style="fill: white"
                                            d="M191.3 37.3V19.2h7.8c2.3 0 4.1.6 5.2 1.6 1.1 1.1 1.7 2.6 1.7 4.5 0 1.8-.6 3.3-1.7 4.5-1.1 1.1-2.8 1.6-5.2 1.6h-4.6v5.9h-3.2zm7.5-15.3h-4.3v6.5h4.3c1.4 0 2.4-.3 3.1-.8.6-.6.9-1.3.9-2.4s-.3-1.9-.9-2.4c-.7-.6-1.7-.9-3.1-.9zM212.3 37.6c-1.4 0-2.3-.4-3.1-1.1-.8-.7-1.1-1.6-1.1-2.8 0-1.1.4-2.1 1.3-2.8.9-.8 2.2-1.1 4.1-1.1h3.3v-.1c0-2-.9-3-2.8-3-.8 0-1.4.1-2 .4s-1 .7-1.4 1.2l-2-1.6c.6-.9 1.3-1.6 2.2-2s2-.7 3.1-.7h.3c1.6 0 3 .5 3.9 1.4 1 .9 1.5 2.3 1.5 4.1v7.7h-2.8v-2c-.5.7-1.1 1.3-1.9 1.7-.7.5-1.6.7-2.6.7zm.8-2.6c.9 0 1.6-.2 2.3-.6.6-.4 1.1-.9 1.4-1.6v-1h-3.1c-.9 0-1.6.1-2 .4-.4.3-.6.7-.6 1.2 0 1.1.6 1.6 2 1.6zM224.7 43c-.4 0-.8 0-1.1-.1v-2.6c.1 0 .3 0 .4.1.1.1.3 0 .4 0 .9 0 1.6-.2 2.1-.6.6-.4 1-1.1 1.4-2-1.1-2.1-2.1-4.4-3-6.6-.9-2.3-1.8-4.5-2.6-6.8h3.3c1 3.4 2.2 6.8 3.6 10.2l3.3-10.2h3.1l-5 13.3c-.6 1.7-1.4 3.1-2.3 4-.9.9-2.1 1.3-3.6 1.3zM20.3 19.5v2.4c0 .1-.1.2-.2.3H9.8v4.9h8.5c.1 0 .2.1.3.2v2.5c0 .1-.1.2-.2.3H9.8v7.2c0 .1-.1.2-.2.2H7c-.2 0-.3-.1-.3-.2V19.5c0-.1.1-.2.2-.3H20c.2.1.3.2.3.3zM41.2 37.5h-2.9c-.2 0-.3-.1-.3-.2-.4-1.5-.9-3.1-1.4-4.6H28c-.5 1.6-1 3.1-1.3 4.6 0 .2-.2.2-.3.2h-2.7c-.2 0-.3-.1-.2-.3 1.8-6 4-11.9 6.7-17.6.1-.2.3-.3.5-.3h3.7c.2 0 .5.1.5.3 2.7 5.7 4.9 11.6 6.6 17.6 0 .2-.1.3-.3.3zm-5.4-7.7c-1-2.6-2-5.3-3.1-7.7h-.6c-1.1 2.4-2.1 5-3.1 7.7h6.8zM45.9 28.5c0-5.7 3.7-9.6 9-9.6h.4c3-.1 5.8 1.5 7.3 4.1.1.2.1.3-.1.3l-2.3 1.1c-.2.1-.3.1-.5-.1v-.1c-.9-1.7-2.6-2.6-4.5-2.6h-.4c-3.3 0-5.7 2.6-5.7 6.5s2.3 6.5 5.7 6.5h.4c2.2 0 3.4-.7 4.5-1.9.1-.1.3-.2.5-.1l2.3 1.1c.1.1.1.1.1.2s-.1.1-.1.2c-1.4 2.1-4.1 3.4-7.2 3.4h-.4c-5.4.3-9-3.4-9-9zM83.3 34.8v2.4c0 .1-.1.2-.2.2H69.4c-.1 0-.2-.1-.2-.2V19.5c0-.1.1-.2.2-.3h13.4c.1 0 .2.1.2.2v2.4c0 .1-.1.2-.2.3H72.2v4.7h8.6c.1 0 .2.1.3.2v2.4c0 .1-.1.2-.2.3h-8.6v4.7h10.8c0 .2.2.3.2.4zM106.7 32.5c0 3.2-2.5 5-6.8 5H91c-.1 0-.2-.1-.3-.2V19.5c0-.1.1-.2.2-.3h8.2c4.2 0 6.5 1.7 6.5 4.7 0 2-1 3.3-3.1 3.9 3 .7 4.2 2.5 4.2 4.7zm-7.6-10.4h-5.3V27h5.3c2.3 0 3.4-.7 3.4-2.5.1-1.7-1-2.4-3.4-2.4zm4.5 10.1c0-1.7-1.1-2.5-3.5-2.5H94v4.9h6.1c2.4 0 3.5-.7 3.5-2.4zM112.2 28.4c0-5.5 3.7-9.4 9.4-9.4h.4c5.7 0 9.4 3.9 9.4 9.4s-3.7 9.4-9.4 9.4h-.4c-5.8 0-9.4-3.9-9.4-9.4zm9.7 6.4c3.7 0 6.1-2.6 6.1-6.5s-2.3-6.5-6-6.5h-.4c-3.7 0-6.1 2.6-6.1 6.5s2.3 6.5 6.1 6.5h.3zM136.6 28.4c0-5.5 3.7-9.4 9.4-9.4h.4c5.7 0 9.4 3.9 9.4 9.4s-3.7 9.4-9.4 9.4h-.4c-5.8 0-9.4-3.9-9.4-9.4zm9.7 6.4c3.7 0 6.1-2.6 6.1-6.5s-2.3-6.5-6.1-6.5h-.4c-3.7 0-6.1 2.6-6.1 6.5s2.3 6.5 6.1 6.5h.4zM178.1 37.5h-3.4c-.2 0-.3-.1-.5-.2-2.3-2.7-4.8-5.2-7.5-7.6h-1.5v7.6c0 .1-.1.2-.2.2h-2.6c-.1 0-.2-.1-.3-.2V19.5c0-.1.1-.2.2-.3h2.6c.1 0 .2.1.3.2v7.2h1.5c2.5-2.2 4.7-4.6 6.8-7.2.1-.1.2-.2.4-.2h3.2c.2 0 .2.1.2.2s-.1.1-.1.2c-2.5 3.1-5.2 6-8.2 8.5 3.3 2.7 6.3 5.8 9.1 9 .3.2.2.4 0 .4z">
                                          </path>
                                        </symbol>
                                        <symbol id="shopify-svg__payments-amazon-pay" viewBox="0 0 102 20">
                                          <path style="fill: rgb(51, 62, 72)"
                                            d="M75.19 1.786c-.994 0-1.933.326-2.815.98v5.94c.896.683 1.82 1.023 2.774 1.023 1.932 0 2.899-1.32 2.899-3.96 0-2.655-.953-3.983-2.858-3.983zm-2.962-.277A5.885 5.885 0 0 1 73.93.444a4.926 4.926 0 0 1 1.85-.362c.672 0 1.282.127 1.827.383a3.763 3.763 0 0 1 1.387 1.108c.378.482.669 1.068.872 1.757.203.689.305 1.466.305 2.332 0 .88-.109 1.675-.326 2.385-.217.71-.522 1.314-.914 1.81a4.137 4.137 0 0 1-1.429 1.16 4.165 4.165 0 0 1-1.87.416c-1.26 0-2.346-.419-3.256-1.256v4.983c0 .284-.14.426-.42.426h-1.24c-.28 0-.42-.142-.42-.426V.827c0-.284.14-.426.42-.426h.925c.28 0 .441.142.483.426l.105.682zm13.194 8.37a4.21 4.21 0 0 0 1.45-.277 5.463 5.463 0 0 0 1.45-.81V6.62c-.35-.085-.719-.152-1.104-.202a8.8 8.8 0 0 0-1.124-.075c-1.583 0-2.374.617-2.374 1.853 0 .54.147.955.441 1.246.294.29.715.437 1.261.437zm-2.458-7.625l-.158.053a.561.561 0 0 1-.179.033c-.182 0-.273-.128-.273-.384V1.38c0-.199.028-.337.084-.415.056-.078.169-.153.337-.224.448-.199 1-.359 1.66-.48.657-.12 1.316-.18 1.974-.18 1.33 0 2.311.277 2.942.83.63.554.945 1.413.945 2.577v7.284c0 .284-.14.426-.42.426h-.903c-.267 0-.42-.135-.463-.405l-.105-.702a5.74 5.74 0 0 1-1.67 1.022 4.908 4.908 0 0 1-1.817.362c-1.009 0-1.807-.288-2.395-.863-.589-.575-.883-1.345-.883-2.31 0-1.037.364-1.864 1.092-2.481.73-.618 1.71-.927 2.942-.927.784 0 1.667.12 2.647.362V3.852c0-.767-.168-1.307-.504-1.619-.336-.313-.925-.469-1.764-.469-.982 0-2.01.163-3.09.49zm14.16 10.84c-.379.98-.816 1.683-1.314 2.109-.496.426-1.144.639-1.943.639-.448 0-.847-.05-1.197-.15a.606.606 0 0 1-.336-.202c-.07-.093-.105-.237-.105-.437V14.5c0-.27.105-.405.315-.405.07 0 .175.014.315.043.14.028.33.043.567.043.532 0 .946-.128 1.24-.384.294-.255.56-.724.798-1.406l.4-1.086-4.056-10.137c-.098-.241-.146-.411-.146-.511 0-.17.097-.256.294-.256h1.26c.224 0 .378.036.463.106.083.072.167.228.251.47l2.942 8.263L99.708.976c.084-.24.168-.397.252-.469.084-.07.238-.106.462-.106h1.177c.196 0 .294.086.294.256 0 .1-.05.27-.147.51l-4.622 11.927M40.15 15.47c-3.761 2.814-9.216 4.31-13.912 4.31-6.583 0-12.51-2.466-16.996-6.572-.352-.322-.038-.763.385-.513 4.84 2.855 10.825 4.574 17.006 4.574 4.17 0 8.753-.877 12.971-2.691.636-.273 1.17.425.547.891">
                                          </path>
                                          <path style="fill: rgb(51, 62, 72)"
                                            d="M41.717 13.657c-.482-.624-3.181-.296-4.394-.148-.368.044-.425-.281-.093-.517 2.153-1.533 5.682-1.09 6.092-.577.413.518-.108 4.104-2.127 5.816-.31.263-.605.122-.468-.225.455-1.15 1.471-3.724.99-4.349M37.429 2.06V.57A.365.365 0 0 1 37.8.193l6.59-.001c.21 0 .38.155.38.376v1.278c-.003.214-.18.494-.496.938L40.86 7.722c1.267-.03 2.607.163 3.757.818.26.148.33.367.35.582v1.59c0 .218-.237.472-.485.34-2.028-1.077-4.718-1.194-6.96.013-.23.124-.47-.126-.47-.345V9.209c0-.242.005-.656.246-1.024l3.953-5.75H37.81a.369.369 0 0 1-.38-.375M13.4 11.365h-2.005a.38.38 0 0 1-.358-.343L11.038.595a.38.38 0 0 1 .387-.375h1.866a.38.38 0 0 1 .365.35v1.36h.037C14.18.615 15.096 0 16.331 0c1.253 0 2.039.614 2.6 1.93C19.418.615 20.521 0 21.7 0c.842 0 1.758.351 2.32 1.141.635.878.505 2.15.505 3.27l-.002 6.58a.38.38 0 0 1-.387.374h-2.001a.378.378 0 0 1-.36-.374V5.463c0-.438.037-1.535-.056-1.952-.15-.703-.6-.9-1.179-.9-.486 0-.991.33-1.197.855-.206.527-.188 1.405-.188 1.997v5.527a.38.38 0 0 1-.386.375h-2.002a.379.379 0 0 1-.36-.374l-.001-5.528c0-1.163.186-2.874-1.235-2.874-1.44 0-1.384 1.668-1.384 2.874l-.001 5.527a.38.38 0 0 1-.387.375m37.059-9.236c-1.478 0-1.571 2.04-1.571 3.312 0 1.273-.02 3.993 1.552 3.993 1.554 0 1.628-2.194 1.628-3.532 0-.877-.038-1.93-.3-2.764-.224-.724-.673-1.01-1.31-1.01zM50.439 0c2.975 0 4.584 2.59 4.584 5.88 0 3.181-1.777 5.705-4.584 5.705-2.918 0-4.508-2.59-4.508-5.814C45.93 2.523 47.539 0 50.439 0zm8.441 11.365h-1.997a.379.379 0 0 1-.36-.374L56.52.561a.381.381 0 0 1 .386-.34L58.764.22c.175.009.32.13.356.291v1.595h.038C59.72.68 60.505 0 61.89 0c.898 0 1.778.329 2.339 1.229.524.834.524 2.237.524 3.247v6.561a.382.382 0 0 1-.385.328H62.36a.38.38 0 0 1-.357-.328V5.376c0-1.141.13-2.809-1.253-2.809-.487 0-.936.33-1.16.834-.281.636-.319 1.272-.319 1.975v5.614a.386.386 0 0 1-.39.375m-24.684.075a.41.41 0 0 1-.473.047c-.665-.56-.785-.82-1.149-1.354-1.1 1.136-1.879 1.477-3.304 1.477-1.687 0-3-1.055-3-3.166 0-1.65.882-2.77 2.138-3.32 1.087-.484 2.606-.572 3.769-.704v-.264c0-.484.037-1.055-.245-1.473-.243-.374-.712-.528-1.124-.528-.765 0-1.444.397-1.611 1.22-.035.183-.167.364-.348.374l-1.943-.214c-.164-.037-.346-.17-.299-.425C27.055.721 29.183 0 31.09 0c.975 0 2.25.263 3.018 1.011.975.924.881 2.155.881 3.497v3.165c0 .952.39 1.37.757 1.882.128.185.156.405-.007.54-.409.348-1.136.988-1.537 1.35l-.005-.005zm-2.02-4.953v-.44c-1.45 0-2.98.314-2.98 2.045 0 .88.45 1.473 1.218 1.473.562 0 1.069-.352 1.387-.923.394-.704.376-1.363.376-2.155zM7.926 11.44a.41.41 0 0 1-.473.047c-.667-.56-.786-.82-1.15-1.354C5.204 11.27 4.425 11.61 3 11.61c-1.688 0-3-1.055-3-3.166 0-1.65.88-2.77 2.137-3.32 1.087-.484 2.606-.572 3.768-.704v-.264c0-.484.038-1.055-.243-1.473-.244-.374-.713-.528-1.125-.528-.764 0-1.444.397-1.61 1.22-.036.183-.168.364-.35.374l-1.94-.214c-.165-.037-.347-.17-.3-.425C.783.721 2.911 0 4.818 0c.975 0 2.25.263 3.018 1.011.975.924.882 2.155.882 3.497v3.165c0 .952.39 1.37.756 1.882.128.185.157.405-.006.54a78.47 78.47 0 0 0-1.537 1.35l-.005-.005zm-2.02-4.953v-.44c-1.45 0-2.982.314-2.982 2.045 0 .88.45 1.473 1.219 1.473.562 0 1.069-.352 1.387-.923.394-.704.375-1.363.375-2.155z">
                                          </path>
                                        </symbol>
                                        <symbol id="shopify-svg__payments-apple-pay-dark" viewBox="0 0 43 19">
                                          <path style="fill: rgb(0, 0, 0)"
                                            d="M6.948 1.409C7.934.147 9.305.147 9.305.147s.193 1.18-.771 2.316c-1.05 1.2-2.228.993-2.228.993s-.236-.93.642-2.047zM3.82 3.663c-1.735 0-3.6 1.51-3.6 4.363 0 2.916 2.186 6.555 3.943 6.555.6 0 1.543-.6 2.485-.6.922 0 1.607.559 2.464.559 1.907 0 3.322-3.826 3.322-3.826s-2.015-.744-2.015-2.936c0-1.944 1.629-2.73 1.629-2.73s-.836-1.447-2.936-1.447c-1.22 0-2.164.661-2.656.661-.622.021-1.5-.6-2.636-.6zM19.64 1.426c2.453 0 4.188 1.788 4.188 4.396 0 2.608-1.755 4.417-4.248 4.417h-2.932v4.564h-1.974V1.426h4.966zm-2.992 7.067h2.473c1.695 0 2.693-.967 2.693-2.65 0-1.683-.978-2.671-2.693-2.671h-2.473v5.321zm7.559 3.429c0-1.767 1.296-2.777 3.65-2.945l2.572-.147v-.78c0-1.156-.738-1.787-1.994-1.787-1.037 0-1.795.568-1.955 1.43h-1.775c.06-1.788 1.656-3.092 3.79-3.092 2.333 0 3.829 1.304 3.829 3.281v6.9h-1.815v-1.684h-.04c-.519 1.094-1.715 1.788-3.012 1.788-1.934.021-3.25-1.178-3.25-2.965zm6.222-.905v-.778l-2.313.168c-1.297.084-1.975.59-1.975 1.494 0 .862.718 1.409 1.815 1.409 1.396-.021 2.473-.968 2.473-2.293zm3.969 7.383v-1.64c.14.041.438.041.598.041.897 0 1.416-.4 1.735-1.472l.14-.526L33.4 4.707h2.054l2.453 8.224h.04L40.4 4.707h1.994l-3.57 10.538c-.818 2.419-1.715 3.197-3.67 3.197-.14.02-.598-.021-.757-.042z">
                                          </path>
                                        </symbol>
                                        <symbol id="shopify-svg__payments-apple-pay-light" viewBox="0 0 43 19">
                                          <path style="fill: rgb(255, 255, 255)"
                                            d="M6.948 1.409C7.934.147 9.305.147 9.305.147s.193 1.18-.771 2.316c-1.05 1.2-2.228.993-2.228.993s-.236-.93.642-2.047zM3.82 3.663c-1.735 0-3.6 1.51-3.6 4.363 0 2.916 2.186 6.555 3.943 6.555.6 0 1.543-.6 2.485-.6.922 0 1.607.559 2.464.559 1.907 0 3.322-3.826 3.322-3.826s-2.015-.744-2.015-2.936c0-1.944 1.629-2.73 1.629-2.73s-.836-1.447-2.936-1.447c-1.22 0-2.164.661-2.656.661-.622.021-1.5-.6-2.636-.6zM19.64 1.426c2.453 0 4.188 1.788 4.188 4.396 0 2.608-1.755 4.417-4.248 4.417h-2.932v4.564h-1.974V1.426h4.966zm-2.992 7.067h2.473c1.695 0 2.693-.967 2.693-2.65 0-1.683-.978-2.671-2.693-2.671h-2.473v5.321zm7.559 3.429c0-1.767 1.296-2.777 3.65-2.945l2.572-.147v-.78c0-1.156-.738-1.787-1.994-1.787-1.037 0-1.795.568-1.955 1.43h-1.775c.06-1.788 1.656-3.092 3.79-3.092 2.333 0 3.829 1.304 3.829 3.281v6.9h-1.815v-1.684h-.04c-.519 1.094-1.715 1.788-3.012 1.788-1.934.021-3.25-1.178-3.25-2.965zm6.222-.905v-.778l-2.313.168c-1.297.084-1.975.59-1.975 1.494 0 .862.718 1.409 1.815 1.409 1.396-.021 2.473-.968 2.473-2.293zm3.969 7.383v-1.64c.14.041.438.041.598.041.897 0 1.416-.4 1.735-1.472l.14-.526L33.4 4.707h2.054l2.453 8.224h.04L40.4 4.707h1.994l-3.57 10.538c-.818 2.419-1.715 3.197-3.67 3.197-.14.02-.598-.021-.757-.042z">
                                          </path>
                                        </symbol>
                                        <symbol id="shopify-svg__payments-paypal" viewBox="0 0 67 19">
                                          <path style="fill: rgb(37, 59, 128)"
                                            d="M8.44.57H3.29a.718.718 0 0 0-.707.61L.502 14.517c-.041.263.16.5.425.5h2.458a.718.718 0 0 0 .707-.61l.561-3.597a.717.717 0 0 1 .706-.611h1.63c3.391 0 5.349-1.658 5.86-4.944.23-1.437.01-2.566-.657-3.357C11.461 1.029 10.162.57 8.44.57zm.594 4.87C8.752 7.308 7.34 7.308 5.976 7.308h-.777l.545-3.485a.43.43 0 0 1 .424-.366h.356c.93 0 1.807 0 2.26.535.27.32.353.794.25 1.45zm14.796-.06h-2.466a.43.43 0 0 0-.424.367l-.109.696-.172-.252c-.534-.783-1.724-1.044-2.912-1.044-2.725 0-5.052 2.084-5.505 5.008-.235 1.46.1 2.854.919 3.827.75.894 1.826 1.267 3.105 1.267 2.195 0 3.412-1.426 3.412-1.426l-.11.692a.432.432 0 0 0 .424.502h2.22a.718.718 0 0 0 .707-.61l1.333-8.526a.43.43 0 0 0-.423-.5zm-3.437 4.849c-.238 1.422-1.356 2.378-2.782 2.378-.716 0-1.288-.232-1.655-.672-.365-.436-.503-1.058-.387-1.75.222-1.41 1.359-2.397 2.763-2.397.7 0 1.269.235 1.644.678.375.448.524 1.073.417 1.763zM36.96 5.38h-2.478a.716.716 0 0 0-.592.318l-3.417 5.085-1.448-4.887a.719.719 0 0 0-.687-.515h-2.435a.433.433 0 0 0-.407.573l2.73 8.09-2.567 3.66a.434.434 0 0 0 .35.684h2.475a.712.712 0 0 0 .588-.31l8.24-12.016a.434.434 0 0 0-.352-.681z">
                                          </path>
                                          <path style="fill: rgb(23, 155, 215)"
                                            d="M45.163.57h-5.15a.717.717 0 0 0-.706.61l-2.082 13.337a.43.43 0 0 0 .423.5h2.642a.502.502 0 0 0 .494-.427l.591-3.78a.717.717 0 0 1 .706-.611h1.63c3.392 0 5.348-1.658 5.86-4.944.231-1.437.009-2.566-.657-3.357C48.183 1.029 46.886.57 45.163.57zm.593 4.87c-.28 1.867-1.692 1.867-3.057 1.867h-.777l.546-3.485a.429.429 0 0 1 .423-.366h.356c.93 0 1.807 0 2.26.535.27.32.353.794.25 1.45zm14.795-.06h-2.464a.428.428 0 0 0-.423.367l-.109.696-.173-.252c-.534-.783-1.723-1.044-2.911-1.044-2.724 0-5.05 2.084-5.504 5.008-.235 1.46.099 2.854.918 3.827.753.894 1.826 1.267 3.105 1.267 2.195 0 3.413-1.426 3.413-1.426l-.11.692a.432.432 0 0 0 .424.502h2.22a.717.717 0 0 0 .707-.61l1.333-8.526a.433.433 0 0 0-.426-.5zm-3.436 4.849c-.237 1.422-1.356 2.378-2.782 2.378-.714 0-1.288-.232-1.655-.672-.365-.436-.502-1.058-.387-1.75.223-1.41 1.359-2.397 2.763-2.397.7 0 1.269.235 1.644.678.377.448.526 1.073.417 1.763zM63.458.935l-2.113 13.582a.43.43 0 0 0 .423.5h2.124a.716.716 0 0 0 .707-.61L66.683 1.07a.432.432 0 0 0-.423-.5h-2.379c-.21 0-.39.156-.423.366z">
                                          </path>
                                        </symbol>
                                        <symbol id="shopify-svg__payments-shop-pay" viewBox="134 256 410 1">
                                          <path
                                            d="M241.22,242.74c-3.07-6.44-8.89-10.6-17.66-10.6a17.58,17.58,0,0,0-13.81,7.1l-.32.39V214.39a.55.55,0,0,0-.55-.55h-12.4a.55.55,0,0,0-.54.55v72.4a.54.54,0,0,0,.54.54h13.28a.55.55,0,0,0,.55-.54V255.92c0-6,4-10.25,10.4-10.25,7,0,8.77,5.76,8.77,11.63v29.49a.54.54,0,0,0,.54.54h13.25a.55.55,0,0,0,.55-.54V255.54c0-1.07,0-2.12-.14-3.14A27.63,27.63,0,0,0,241.22,242.74Z"
                                            style="fill: white"></path>
                                          <path
                                            d="M174.91,253.47s-6.76-1.59-9.25-2.23-6.84-2-6.84-5.29,3.51-4.34,7.07-4.34,7.52.86,7.83,4.81a.57.57,0,0,0,.57.52l13.09-.05a.56.56,0,0,0,.56-.6c-.81-12.64-11.9-17.16-22.13-17.16-12.13,0-21,8-21,16.82,0,6.44,1.82,12.48,16.13,16.68,2.51.73,5.92,1.68,8.9,2.51,3.58,1,5.51,2.51,5.51,4.89,0,2.76-4,4.68-7.93,4.68-5.69,0-9.73-2.11-10.06-5.9a.57.57,0,0,0-.57-.5l-13.06.06a.57.57,0,0,0-.57.59c.6,11.93,12.12,18.36,22.86,18.36,16,0,23.23-9,23.23-17.43C189.27,265.93,188.36,256.91,174.91,253.47Z"
                                            style="fill: white"></path>
                                          <path
                                            d="M343.31,232.12c-6.65,0-12.22,3.68-15.81,8.12v-7.6a.54.54,0,0,0-.53-.54H314.55a.54.54,0,0,0-.54.54v71a.54.54,0,0,0,.54.53h13.29a.53.53,0,0,0,.53-.53V280.3h.2c2.11,3.22,7.88,7.08,15.42,7.08,14.18,0,26-11.76,26-27.65C370,244.48,358.24,232.12,343.31,232.12Zm-1.23,41.73a14.09,14.09,0,1,1,13.74-14.12A13.9,13.9,0,0,1,342.08,273.85Z"
                                            style="fill: white"></path>
                                          <path
                                            d="M274.68,229c-12.39,0-18.57,4.21-23.53,7.58l-.15.1a1.23,1.23,0,0,0-.37,1.63l4.9,8.44a1.24,1.24,0,0,0,.87.6,1.21,1.21,0,0,0,1-.27l.39-.32c2.55-2.14,6.64-5,16.54-5.78,5.51-.44,10.27,1,13.78,4.28,3.86,3.56,6.17,9.31,6.17,15.38,0,11.17-6.58,18.19-17.15,18.33-8.71-.05-14.56-4.59-14.56-11.3,0-3.56,1.61-5.88,4.75-8.2a1.22,1.22,0,0,0,.37-1.56l-4.4-8.32a1.29,1.29,0,0,0-.77-.62,1.24,1.24,0,0,0-1,.13c-4.94,2.93-11,8.29-10.67,18.59.4,13.11,11.3,23.12,25.47,23.53l.71,0H278c16.84-.55,29-13.05,29-30C307,245.66,295.66,229,274.68,229Z"
                                            style="fill: white"></path>
                                          <path
                                            d="M342.08,245.68a14.09,14.09,0,1,0,13.74,14.05A13.84,13.84,0,0,0,342.08,245.68Z"
                                            style="fill: rgb(90, 49, 244)"></path>
                                          <rect x="383.23" y="214.02" width="141.73" height="90.42" rx="14.17"
                                            style="fill: white"></rect>
                                          <path
                                            d="M439.07,246.62c0,9.67-6.77,16.57-16.23,16.57h-8.92a.75.75,0,0,0-.75.75v12.7a.75.75,0,0,1-.75.75h-6.28a.76.76,0,0,1-.75-.75V230.81a.75.75,0,0,1,.75-.75h16.7C432.3,230.06,439.07,237,439.07,246.62Zm-7.78,0c0-5.54-3.79-9.6-8.93-9.6h-8.44a.76.76,0,0,0-.75.75v17.71a.75.75,0,0,0,.75.74h8.44C427.5,256.22,431.29,252.17,431.29,246.62Z"
                                            style="fill: rgb(90, 49, 244)"></path>
                                          <path
                                            d="M440.92,268.6a8.91,8.91,0,0,1,3.72-7.64c2.44-1.83,6.22-2.78,11.83-3l5.95-.2V256c0-3.51-2.36-5-6.15-5s-6.18,1.34-6.74,3.53a.72.72,0,0,1-.72.52h-5.87a.74.74,0,0,1-.75-.85c.88-5.2,5.18-9.15,14.35-9.15,9.74,0,13.25,4.53,13.25,13.18v18.38a.75.75,0,0,1-.75.76h-5.93a.75.75,0,0,1-.75-.76v-1.37a.56.56,0,0,0-1-.39c-1.77,1.93-4.65,3.33-9.24,3.33C445.39,278.2,440.92,274.68,440.92,268.6Zm21.5-4v-1.42l-7.7.4c-4.06.21-6.43,1.9-6.43,4.74,0,2.57,2.17,4,5.95,4C459.38,272.32,462.42,269.54,462.42,264.61Z"
                                            style="fill: rgb(90, 49, 244)"></path>
                                          <path
                                            d="M475.75,291.27v-5.35a.76.76,0,0,1,.9-.75,14.84,14.84,0,0,0,2.75.26,7.11,7.11,0,0,0,7.17-5.07l.39-1.23a.74.74,0,0,0,0-.51l-12.34-31.7a.76.76,0,0,1,.71-1h6a.77.77,0,0,1,.71.49l8.38,22.36a.77.77,0,0,0,1.44,0l7.27-22.3a.75.75,0,0,1,.72-.52H506a.76.76,0,0,1,.71,1l-13.2,35.21c-3,8.18-8.25,10.28-14,10.28a11.17,11.17,0,0,1-3.21-.39A.77.77,0,0,1,475.75,291.27Z"
                                            style="fill: rgb(90, 49, 244)"></path>
                                        </symbol>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <button type="button"
                                  class="shopify-payment-button__button shopify-payment-button__button--unbranded _2ogcW-Q9I-rgsSkNbRiJzA _2EiMjnumZ6FVtlC7RViKtj _2-dUletcCZ2ZL1aaH0GXxT"
                                  data-testid="Checkout-button">
                                  Buy it now</button><button aria-disabled="true" aria-hidden="true"
                                  class="shopify-payment-button__more-options _2ogcW-Q9I-rgsSkNbRiJzA shopify-payment-button__button--hidden"
                                  type="button" data-testid="sheet-open-button">
                                  More payment options
                                </button>
                                <div>
                                  <div></div>
                                </div>
                                <div></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </product-form> -->

                  <link
                    href="//cdn.shopify.com/s/files/1/2713/8608/t/32/assets/component-pickup-availability.css?v=86710350285982409111643172518"
                    rel="stylesheet" type="text/css" media="all" />
                  <!-- <pickup-availability class="product__pickup-availabilities no-js-hidden" data-root-url="/"
                    data-variant-id="32005558337579" data-has-only-default-variant="false">
                    <template>
                      <pickup-availability-preview class="pickup-availability-preview">
                        <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-unavailable"
                          viewBox="0 0 20 20">
                          <svg x="0%" y="0%">
                            <path fill="#DE3618" stroke="#fff"
                              d="M13.94 3.94L10 7.878l-3.94-3.94A1.499 1.499 0 103.94 6.06L7.88 10l-3.94 3.94a1.499 1.499 0 102.12 2.12L10 12.12l3.94 3.94a1.497 1.497 0 002.12 0 1.499 1.499 0 000-2.12L12.122 10l3.94-3.94a1.499 1.499 0 10-2.121-2.12z">
                            </path>
                          </svg>
                        </svg>

                        <div class="pickup-availability-info">
                          <p class="caption-large">
                            Couldn't load pickup availability
                          </p>
                          <button class="pickup-availability-button link link--text underlined-link">
                            Refresh
                          </button>
                        </div>
                      </pickup-availability-preview>
                    </template>
                  </pickup-availability> -->
                </div>
              </div>
              <div class="reassurance-space" style="margin-bottom: 20px">
                <div class="reassurance-block">
                  <div class="reassurance-content row">
                    <div class="reassurance col-lg-6 col-md-12 col-sm-6 col-xs-12">
                      <div class="reassurance-img">
                        <img class="lazyloaded"
                          data-src="//cdn.shopify.com/s/files/1/2713/8608/files/serviceicon1_01d28505-9b13-4435-9fe0-e7a47a5c30f8.png?v=1633925903"
                          alt="Reassurance Image"
                          src="//cdn.shopify.com/s/files/1/2713/8608/files/serviceicon1_01d28505-9b13-4435-9fe0-e7a47a5c30f8.png?v=1633925903" />
                      </div>

                      <div class="reassurance-text">
                        <div class="reassurance-title">Free Delivery</div>

                        <div class="reassurance-desc">Lorem Ipsum dummy</div>
                      </div>
                    </div>
                    <div class="reassurance col-lg-6 col-md-12 col-sm-6 col-xs-12">
                      <div class="reassurance-img">
                        <img class="lazyloaded"
                          data-src="//cdn.shopify.com/s/files/1/2713/8608/files/serviceicon2_f825ab51-81bf-4ef1-8dde-51fc2bbb2127.png?v=1633925913"
                          alt="Reassurance Image"
                          src="//cdn.shopify.com/s/files/1/2713/8608/files/serviceicon2_f825ab51-81bf-4ef1-8dde-51fc2bbb2127.png?v=1633925913" />
                      </div>

                      <div class="reassurance-text">
                        <div class="reassurance-title">Big Savings</div>

                        <div class="reassurance-desc">Lorem Ipsum dummy</div>
                      </div>
                    </div>
                    <div class="reassurance col-lg-6 col-md-12 col-sm-6 col-xs-12">
                      <div class="reassurance-img">
                        <img class="lazyloaded"
                          data-src="//cdn.shopify.com/s/files/1/2713/8608/files/serviceicon3_9d9a069a-7a35-4683-aa06-cdd5c78efb1d.png?v=1633925926"
                          alt="Reassurance Image"
                          src="//cdn.shopify.com/s/files/1/2713/8608/files/serviceicon3_9d9a069a-7a35-4683-aa06-cdd5c78efb1d.png?v=1633925926" />
                      </div>

                      <div class="reassurance-text">
                        <div class="reassurance-title">Customer Support</div>

                        <div class="reassurance-desc">Lorem Ipsum dummy</div>
                      </div>
                    </div>
                    <div class="reassurance col-lg-6 col-md-12 col-sm-6 col-xs-12">
                      <div class="reassurance-img">
                        <img class="lazyloaded"
                          data-src="//cdn.shopify.com/s/files/1/2713/8608/files/serviceicon4_6e2ecb46-c6bb-4014-aa57-523136ab095b.png?v=1633925943"
                          alt="Reassurance Image"
                          src="//cdn.shopify.com/s/files/1/2713/8608/files/serviceicon4_6e2ecb46-c6bb-4014-aa57-523136ab095b.png?v=1633925943" />
                      </div>

                      <div class="reassurance-text">
                        <div class="reassurance-title">Gift Voucher</div>

                        <div class="reassurance-desc">Lorem Ipsum dummy</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="trusted-img" style="margin-bottom: 20px">
                <img class="lazyloaded"
                  data-src="//cdn.shopify.com/s/files/1/2713/8608/files/Trustedimage.png?v=1606213040"
                  alt="Trusted Image" src="//cdn.shopify.com/s/files/1/2713/8608/files/Trustedimage.png?v=1606213040" />
              </div>

              <div class="share_this_btn" style="margin-bottom: 5px">
                <div class="addthis_toolbox addthis_default_style addthis_25x25_style">
                  <a class="addthis_button_facebook addthis_button_preferred_1 at300b" title="Facebook" href="#"><span
                      class="at-icon-wrapper" style="
                        background-color: rgb(59, 89, 152);
                        line-height: 16px;
                        height: 16px;
                        width: 16px;
                      "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 32 32" version="1.1" role="img" aria-labelledby="at-svg-facebook-2"
                        class="at-icon at-icon-facebook" style="width: 16px; height: 16px" title="Facebook"
                        alt="Facebook">
                        <title id="at-svg-facebook-2">Facebook</title>
                        <g>
                          <path
                            d="M22 5.16c-.406-.054-1.806-.16-3.43-.16-3.4 0-5.733 1.825-5.733 5.17v2.882H9v3.913h3.837V27h4.604V16.965h3.823l.587-3.913h-4.41v-2.5c0-1.123.347-1.903 2.198-1.903H22V5.16z"
                            fill-rule="evenodd"></path>
                        </g>
                      </svg></span></a>
                  <a class="addthis_button_twitter addthis_button_preferred_2 at300b" title="Twitter" href="#"><span
                      class="at-icon-wrapper" style="
                        background-color: rgb(29, 161, 242);
                        line-height: 16px;
                        height: 16px;
                        width: 16px;
                      "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 32 32" version="1.1" role="img" aria-labelledby="at-svg-twitter-3"
                        class="at-icon at-icon-twitter" style="width: 16px; height: 16px" title="Twitter" alt="Twitter">
                        <title id="at-svg-twitter-3">Twitter</title>
                        <g>
                          <path
                            d="M27.996 10.116c-.81.36-1.68.602-2.592.71a4.526 4.526 0 0 0 1.984-2.496 9.037 9.037 0 0 1-2.866 1.095 4.513 4.513 0 0 0-7.69 4.116 12.81 12.81 0 0 1-9.3-4.715 4.49 4.49 0 0 0-.612 2.27 4.51 4.51 0 0 0 2.008 3.755 4.495 4.495 0 0 1-2.044-.564v.057a4.515 4.515 0 0 0 3.62 4.425 4.52 4.52 0 0 1-2.04.077 4.517 4.517 0 0 0 4.217 3.134 9.055 9.055 0 0 1-5.604 1.93A9.18 9.18 0 0 1 6 23.85a12.773 12.773 0 0 0 6.918 2.027c8.3 0 12.84-6.876 12.84-12.84 0-.195-.005-.39-.014-.583a9.172 9.172 0 0 0 2.252-2.336"
                            fill-rule="evenodd"></path>
                        </g>
                      </svg></span></a>
                  <a class="addthis_button_print addthis_button_preferred_3 at300b" title="Print" href="#"><span
                      class="at-icon-wrapper" style="
                        background-color: rgb(115, 138, 141);
                        line-height: 16px;
                        height: 16px;
                        width: 16px;
                      "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 32 32" version="1.1" role="img" aria-labelledby="at-svg-print-4"
                        class="at-icon at-icon-print" style="width: 16px; height: 16px" title="Print" alt="Print">
                        <title id="at-svg-print-4">Print</title>
                        <g>
                          <path
                            d="M24.67 10.62h-2.86V7.49H10.82v3.12H7.95c-.5 0-.9.4-.9.9v7.66h3.77v1.31L15 24.66h6.81v-5.44h3.77v-7.7c-.01-.5-.41-.9-.91-.9zM11.88 8.56h8.86v2.06h-8.86V8.56zm10.98 9.18h-1.05v-2.1h-1.06v7.96H16.4c-1.58 0-.82-3.74-.82-3.74s-3.65.89-3.69-.78v-3.43h-1.06v2.06H9.77v-3.58h13.09v3.61zm.75-4.91c-.4 0-.72-.32-.72-.72s.32-.72.72-.72c.4 0 .72.32.72.72s-.32.72-.72.72zm-4.12 2.96h-6.1v1.06h6.1v-1.06zm-6.11 3.15h6.1v-1.06h-6.1v1.06z">
                          </path>
                        </g>
                      </svg></span></a>
                  <a class="addthis_button_email addthis_button_preferred_4 at300b" target="_blank" title="Email"
                    href="#"><span class="at-icon-wrapper" style="
                        background-color: rgb(132, 132, 132);
                        line-height: 16px;
                        height: 16px;
                        width: 16px;
                      "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 32 32" version="1.1" role="img" aria-labelledby="at-svg-email-5"
                        class="at-icon at-icon-email" style="width: 16px; height: 16px" title="Email" alt="Email">
                        <title id="at-svg-email-5">Email</title>
                        <g>
                          <g fill-rule="evenodd"></g>
                          <path
                            d="M27 22.757c0 1.24-.988 2.243-2.19 2.243H7.19C5.98 25 5 23.994 5 22.757V13.67c0-.556.39-.773.855-.496l8.78 5.238c.782.467 1.95.467 2.73 0l8.78-5.238c.472-.28.855-.063.855.495v9.087z">
                          </path>
                          <path
                            d="M27 9.243C27 8.006 26.02 7 24.81 7H7.19C5.988 7 5 8.004 5 9.243v.465c0 .554.385 1.232.857 1.514l9.61 5.733c.267.16.8.16 1.067 0l9.61-5.733c.473-.283.856-.96.856-1.514v-.465z">
                          </path>
                        </g>
                      </svg></span></a>
                  <a class="addthis_button_pinterest_share addthis_button_preferred_5 at300b" target="_blank"
                    title="Pinterest" href="#"><span class="at-icon-wrapper" style="
                        background-color: rgb(203, 32, 39);
                        line-height: 16px;
                        height: 16px;
                        width: 16px;
                      "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 32 32" version="1.1" role="img" aria-labelledby="at-svg-pinterest_share-6"
                        class="at-icon at-icon-pinterest_share" style="width: 16px; height: 16px" title="Pinterest"
                        alt="Pinterest">
                        <title id="at-svg-pinterest_share-6">Pinterest</title>
                        <g>
                          <path
                            d="M7 13.252c0 1.81.772 4.45 2.895 5.045.074.014.178.04.252.04.49 0 .772-1.27.772-1.63 0-.428-1.174-1.34-1.174-3.123 0-3.705 3.028-6.33 6.947-6.33 3.37 0 5.863 1.782 5.863 5.058 0 2.446-1.054 7.035-4.468 7.035-1.232 0-2.286-.83-2.286-2.018 0-1.742 1.307-3.43 1.307-5.225 0-1.092-.67-1.977-1.916-1.977-1.692 0-2.732 1.77-2.732 3.165 0 .774.104 1.63.476 2.336-.683 2.736-2.08 6.814-2.08 9.633 0 .87.135 1.728.224 2.6l.134.137.207-.07c2.494-3.178 2.405-3.8 3.533-7.96.61 1.077 2.182 1.658 3.43 1.658 5.254 0 7.614-4.77 7.614-9.067C26 7.987 21.755 5 17.094 5 12.017 5 7 8.15 7 13.252z"
                            fill-rule="evenodd"></path>
                        </g>
                      </svg></span></a>
                  <a class="addthis_button_compact at300m" href="#"><span class="at-icon-wrapper" style="
                        background-color: rgb(255, 101, 80);
                        line-height: 16px;
                        height: 16px;
                        width: 16px;
                      "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 32 32" version="1.1" role="img" aria-labelledby="at-svg-addthis-1"
                        class="at-icon at-icon-addthis" style="width: 16px; height: 16px" title="More" alt="More">
                        <title id="at-svg-addthis-1">AddThis</title>
                        §
                        <g>
                          <path d="M18 14V8h-4v6H8v4h6v6h4v-6h6v-4h-6z" fill-rule="evenodd"></path>
                        </g>
                      </svg></span></a>
                  <!-- <a class="addthis_counter addthis_bubble_style"></a> -->
                  <div class="atclear"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- <product-modal id="ProductModal-template--14383183396907__main" class="product-media-modal media-modal">
          <div class="product-media-modal__dialog" role="dialog" aria-label="Media gallery" aria-modal="true"
            tabindex="-1">
            <button id="ModalClose-template--14383183396907__main" type="button" class="product-media-modal__toggle"
              aria-label="Close">
              <svg aria-hidden="true" focusable="false" role="presentation" class="icon" viewBox="0 0 16 17">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z"
                  fill="currentColor"></path>
              </svg>
            </button>

            <div class="product-media-modal__content" role="document" aria-label="Media gallery" tabindex="0"></div>
          </div>
        </product-modal> -->

        <!-- <ishimodal-dialog id="PopupModal-wishlist_sizechart" class="product-popup-modal toggle-dropdown">
          <div role="dialog" aria-label="Sizechart" aria-modal="true" class="product-popup-modal__content"
            tabindex="-1">
            <button id="ModalClose-wishlist_sizechart" type="button" class="product-popup-modal__toggle"
              aria-label="Close">
              <svg aria-hidden="true" focusable="false" role="presentation" class="icon" viewBox="0 0 16 17">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z"
                  fill="currentColor"></path>
              </svg>
            </button>
            <div class="product-popup-modal__content-info">
              <div class="wishlist_sizechart">
                <div class="modal-img col-md-12 col-lg-6">
                  <img src="https://cdn.shopify.com/s/files/1/0054/0567/1479/files/sizechart.png?v=1604665385"
                    data-widths="[480]" />
                </div>
                <div class="modal-text col-md-12 col-lg-6">
                  <div class="custom_size_chart_des">
                    <h4>Measurement Term Definitions</h4>
                    <div class="custom-text-right-table">
                      <table class="table">
                        <thead class="thead-light">
                          <tr>
                            <th scope="col">Size</th>
                            <th scope="col">Chest</th>
                            <th scope="col">Brand Size</th>
                            <th scope="col">Shoulder</th>
                            <th scope="col">Length</th>
                            <th scope="col">Sleeve Length</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>38</td>
                            <td>40.2</td>
                            <td>38</td>
                            <td>17.9</td>
                            <td>29.9</td>
                            <td>24</td>
                          </tr>
                          <tr>
                            <td>39</td>
                            <td>41.3</td>
                            <td>39</td>
                            <td>18.2</td>
                            <td>30.1</td>
                            <td>24.5</td>
                          </tr>
                          <tr>
                            <td>40</td>
                            <td>42.5</td>
                            <td>40</td>
                            <td>18.5</td>
                            <td>30.3</td>
                            <td>25</td>
                          </tr>
                          <tr>
                            <td>42</td>
                            <td>44.9</td>
                            <td>42</td>
                            <td>19.1</td>
                            <td>30.7</td>
                            <td>25.5</td>
                          </tr>
                          <tr>
                            <td>44</td>
                            <td>47.2</td>
                            <td>44</td>
                            <td>19.7</td>
                            <td>31.1</td>
                            <td>26</td>
                          </tr>
                          <tr>
                            <td>46</td>
                            <td>49.6</td>
                            <td>46</td>
                            <td>20.3</td>
                            <td>31.5</td>
                            <td>26.5</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="custom-text-right">
                      <p>
                        <strong>Effective Top Tube Length:</strong> Lorem Ipsum
                        is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s.
                      </p>
                      <p>
                        <strong>Seat Tube Length:</strong> dummy text of the
                        printing and typesetting industry when an unknown
                        printer took a galley of type and scrambled but also the
                        leap into electronic typesetting, remaining essentially
                        unchanged.
                      </p>
                      <p>
                        <strong>Head Tube Length:</strong> Ipsum passages and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions.
                      </p>
                      <p>
                        <strong>Head Angle:</strong> Letraset sheets containing
                        Lorem Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                      </p>
                      <p>
                        <strong>Fork Rake (rake):</strong> It has survived not
                        only five centuries popularised of Letraset sheets
                        containing and more recently with desktop publishing
                        software like Aldus PageMaker including versions.
                      </p>
                      <p>
                        <strong>Stand Over Height:</strong> galley of type and
                        scrambled it to make a type specimen book. It was
                        popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ishimodal-dialog> -->
      </section>
      <section id="shopify-section-template--14383183396907__product-tab" class="shopify-section">
        <div class="page-width">
          <div class="row">
            <div class="ishi-product-tab">
              <ul class="ishi-tabs nav ishi-nav-tabs tab-id">
                <li class="active ishi-tab-item">
                  <a class="ishi-nav-link" data-href="#tab-1">Description</a>
                </li>

                <li class="ishi-tab-item">
                  <a class="ishi-nav-link review-tab" data-href="#tab-2">Reviews</a>
                </li>

                <li class="ishi-tab-item">
                  <a class="ishi-nav-link" data-href="#tab-3">Shipping &amp; Returns</a>
                </li>


              </ul>
              <div class="ishi-tab-content">
                <div id="tab-1" class="active ishi-tab-pane ishi-fade">
                  <div v-html="product[locale].productDescription" class="listing-details"></div>
                </div>

                <div id="tab-2" class="ishi-tab-pane ishi-fade">
                  <div id="shopify-product-reviews" data-id="4528375136299">
                    <div class="spr-container">
                      <div class="spr-header">
                        <h2 class="spr-header-title">Customer Reviews</h2>
                        <div class="spr-summary rte">
                          <span class="spr-starrating spr-summary-starrating" aria-label="4.0 of 5 stars" role="img">
                            <i class="spr-icon spr-icon-star" aria-hidden="true"></i><i class="spr-icon spr-icon-star"
                              aria-hidden="true"></i><i class="spr-icon spr-icon-star" aria-hidden="true"></i><i
                              class="spr-icon spr-icon-star" aria-hidden="true"></i><i
                              class="spr-icon spr-icon-star-empty" aria-hidden="true"></i>
                          </span>
                          <span class="spr-summary-caption"><span class="spr-summary-actions-togglereviews">Based on 1
                              review</span> </span><span class="spr-summary-actions">
                            <a href="#" class="spr-summary-actions-newreview"
                              onclick="SPR.toggleForm(4528375136299);return false">Write a review</a>
                          </span>
                        </div>
                      </div>

                      <div class="spr-content">
                        <div class="spr-form" id="form_4528375136299" style="display: none">
                          <form method="post" action="//productreviews.shopifycdn.com/api/reviews/create"
                            id="new-review-form_4528375136299" class="new-review-form"
                            onsubmit="SPR.submitForm(this);return false;">
                            <input type="hidden" name="review[rating]" /><input type="hidden" name="product_id"
                              value="4528375136299" />
                            <h3 class="spr-form-title">Write a review</h3>
                            <fieldset class="spr-form-contact">
                              <div class="spr-form-contact-name">
                                <label class="spr-form-label" for="review_author_4528375136299">Name</label>
                                <input class="spr-form-input spr-form-input-text" id="review_author_4528375136299"
                                  type="text" name="review[author]" value="" placeholder="Enter your name" />
                              </div>
                              <div class="spr-form-contact-email">
                                <label class="spr-form-label" for="review_email_4528375136299">Email</label>
                                <input class="spr-form-input spr-form-input-email" id="review_email_4528375136299"
                                  type="email" name="review[email]" value="" placeholder="john.smith@example.com" />
                              </div>
                            </fieldset>

                            <fieldset class="spr-form-review">
                              <div class="spr-form-review-rating">
                                <label class="spr-form-label" for="review[rating]">Rating</label>
                                <div class="spr-form-input spr-starrating">
                                  <a href="#" onclick="SPR.setRating(this);return false;"
                                    class="spr-icon spr-icon-star spr-icon-star-empty" data-value="1"
                                    aria-label="1 of 5 stars">&nbsp;</a>
                                  <a href="#" onclick="SPR.setRating(this);return false;"
                                    class="spr-icon spr-icon-star spr-icon-star-empty" data-value="2"
                                    aria-label="2 of 5 stars">&nbsp;</a>
                                  <a href="#" onclick="SPR.setRating(this);return false;"
                                    class="spr-icon spr-icon-star spr-icon-star-empty" data-value="3"
                                    aria-label="3 of 5 stars">&nbsp;</a>
                                  <a href="#" onclick="SPR.setRating(this);return false;"
                                    class="spr-icon spr-icon-star spr-icon-star-empty" data-value="4"
                                    aria-label="4 of 5 stars">&nbsp;</a>
                                  <a href="#" onclick="SPR.setRating(this);return false;"
                                    class="spr-icon spr-icon-star spr-icon-star-empty" data-value="5"
                                    aria-label="5 of 5 stars">&nbsp;</a>
                                </div>
                              </div>

                              <div class="spr-form-review-title">
                                <label class="spr-form-label" for="review_title_4528375136299">Review Title</label>
                                <input class="spr-form-input spr-form-input-text" id="review_title_4528375136299"
                                  type="text" name="review[title]" value="" placeholder="Give your review a title" />
                              </div>

                              <div class="spr-form-review-body">
                                <label class="spr-form-label" for="review_body_4528375136299">
                                  Body of Review
                                  <span role="status" aria-live="polite" aria-atomic="true">
                                    <span class="spr-form-review-body-charactersremaining">(1500)</span>
                                    <span class="visuallyhidden">characters remaining</span>
                                  </span>
                                </label>
                                <div class="spr-form-input">
                                  <textarea class="spr-form-input spr-form-input-textarea"
                                    id="review_body_4528375136299" data-product-id="4528375136299" name="review[body]"
                                    rows="10" placeholder="Write your comments here"></textarea>
                                </div>
                              </div>
                            </fieldset>

                            <fieldset class="spr-form-actions">
                              <input type="submit"
                                class="spr-button spr-button-primary button button-primary btn btn-primary"
                                value="Submit Review" />
                            </fieldset>
                          </form>
                        </div>
                        <div class="spr-reviews" id="reviews_4528375136299">
                          <div class="spr-review" id="spr-review-97164263">
                            <div class="spr-review-header">
                              <span class="spr-starratings spr-review-header-starratings" aria-label="4 of 5 stars"
                                role="img"><i class="spr-icon spr-icon-star" aria-hidden="true"></i><i
                                  class="spr-icon spr-icon-star" aria-hidden="true"></i><i
                                  class="spr-icon spr-icon-star" aria-hidden="true"></i><i
                                  class="spr-icon spr-icon-star" aria-hidden="true"></i><i
                                  class="spr-icon spr-icon-star-empty" aria-hidden="true"></i></span>
                              <h3 class="spr-review-header-title">Fdsvg</h3>
                              <span class="spr-review-header-byline"><strong>sfnfgn</strong> on
                                <strong>Sep 15, 2020</strong></span>
                            </div>

                            <div class="spr-review-content">
                              <p class="spr-review-content-body">
                                fytrbu6ydbbhd
                              </p>
                            </div>
                            <div class="spr-review-footer rte">
                              <a href="#" class="spr-review-reportreview"
                                onclick="SPR.reportReview(97164263);return false" id="report_97164263"
                                data-msg="This review has been reported">Report as Inappropriate</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="tab-3" class="ishi-tab-pane ishi-fade">
                  <h4>Returns Policy</h4>
                  <p>
                    You may return most new, unopened items within 30 days of
                    delivery for a full refund. We'll also pay the return
                    shipping costs if the return is a result of our error (you
                    received an incorrect or defective item, etc.).
                  </p>
                  <p>
                    You should expect to receive your refund within four weeks
                    of giving your package to the return shipper, however, in
                    many cases you will receive a refund more quickly. This time
                    period includes the transit time for us to receive your
                    return from the shipper (5 to 10 business days), the time it
                    takes us to process your return once we receive it (3 to 5
                    business days), and the time it takes your bank to process
                    our refund request (5 to 10 business days).
                  </p>
                  <p>
                    If you need to return an item, simply login to your account,
                    view the order using the 'Complete Orders' link under the My
                    Account menu and click the Return Item button. We'll notify
                    you via e-mail of your refund once we've received and
                    processed the returned item.
                  </p>
                  <h4>Shipping</h4>
                  <p>
                    We can ship to virtually any address in the world. Note that
                    there are restrictions on some products, and some products
                    cannot be shipped to international destinations.
                  </p>
                  <p>
                    When you place an order, we will estimate shipping and
                    delivery dates for you based on the availability of your
                    items and the shipping options you choose. Depending on the
                    shipping provider you choose, shipping date estimates may
                    appear on the shipping quotes page.
                  </p>
                  <p>
                    Please also note that the shipping rates for many items we
                    sell are weight-based. The weight of any such item can be
                    found on its detail page. To reflect the policies of the
                    shipping companies we use, all weights will be rounded up to
                    the next full pound.
                  </p>
                </div>

                <div id="tab-4" class="ishi-tab-pane ishi-fade">
                  This is a custom product tab. You can set different content
                  for tabs for each product. You can add content of the tabs in
                  the admin on product configuration page.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="shopify-section-template--14383183396907__product-recommendations"
        class="shopify-section spaced-section product-recommendations" style="margin-top:3em;">
        <ProductRecommendation />
      </section>
    </div>
  </main>
</template>

<style scoped lang="scss">
</style>
