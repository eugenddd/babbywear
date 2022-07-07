<script>
export default {
  layout: "product",
  data() {
    return {
      lang: null,
    };
  },
  mounted() {
    this.lang = this.$nuxt.context.app.i18n.locale;
    let localCart = localStorage.getItem("cart");
    this.$store.dispatch('cart/getCartById', localCart.products._id[0]);
  },
  computed: {
    cartCount() {
      return this.$store.getters["cart/cartCount"];
    },
    cartTotal() {
      return this.$store.getters["cart/cartTotal"];
    },
    cartProducts() {
      return this.$store.getters["cart/cartProducts"];
    },
    cartProductsCount() {
      return this.$store.getters["cart/cartProductsCount"];
    },
    cartProductsTotal() {
      return this.$store.getters["cart/cartProductsTotal"];
    },
    eachProductCartTotal() {
      return this.$store.getters["cart/eachProductCartTotal"];
    },
  },
  methods: {
    emptyCart() {
      this.$store.commit("emptyCart");
    },
    removeFromCart(id) {
      // alert('working on it..')
      // this.cart = true;
      this.$store.commit("cart/removeFromCart", id);
    },
    minusQuantity(id, quantity) {
      // alert('min')
      if (quantity <= 0) {
        this.removeFromCart(id);
      }
      this.$store.commit("cart/minusQuantity", id);
    },
    addQuantity(id) {
      this.$store.commit("cart/addQuantity", id);
      // alert('plus')
    },
  },
};
</script>

<template>
  <main id="MainContent" class="content-for-layout focus-none" role="main" tabindex="-1">
    <div class="normal_main_content page-width">
      <h1 class="page-title center">Your Shopping Cart</h1>

      {{ lang }}
      {{ cartProducts[this.lang] }}
      <div id="shopify-section-template--14383183069227__cart-items" class="shopify-section">
        <div class="page-width">
          <div class="cart__contents critical-hidden">
            <div class="cart__items" id="main-cart-items" data-id="template--14383183069227__cart-items">
              <div class="js-contents">
                <table class="cart-items">
                  <thead class="cart__header">
                    <tr>
                      <th class="product-info" colspan="2" scope="col">
                        Product
                      </th>
                      <th class="product-price" scope="col">Price</th>
                      <th class="product-quantity hidden-sm-down" scope="col">
                        Quantity
                      </th>
                      <th class="total-product hidden-sm-down" scope="col">
                        Total
                      </th>
                    </tr>
                  </thead>

                  <tbody v-for="cartProduct in cartProducts" :key="cartProduct">
                    <tr class="cart-item" id="CartItem-1">
                      <td class="cart__image-wrapper cart-flex-item">
                        <a href="/products/t-back-type-short-aline?variant=32005549031467" class="cart-item__link"
                          aria-hidden="true" tabindex="-1"></a>
                        <img class="cart-item__image lazyloaded" :data-src="cartProduct.images[0]" alt="" loading="lazy"
                          width="120" :src="cartProduct.images[0]" />
                      </td>

                      <td class="cart__meta cart-flex-item">
                        <a href="/products/t-back-type-short-aline?variant=32005549031467"
                          class="cart-item__name break">{{ cartProduct[lang].productTitle }}</a>
                        <dl></dl>
                        <ul class="discounts list-unstyled" role="list" aria-label="Discount"></ul>

                        <div class="cart-item__error" id="Line-item-error-1" role="alert">
                          <small class="cart-item__error-text"></small>

                          <svg aria-hidden="true" focusable="false" role="presentation" viewBox="0 0 13 13"
                            class="icon icon-error">
                            <svg x="0%" y="0%">
                              <circle cx="6.5" cy="6.50049" r="5.5" stroke="white" stroke-width="2"></circle>
                              <circle cx="6.5" cy="6.5" r="5.5" fill="#EB001B" stroke="#EB001B" stroke-width="0.7">
                              </circle>
                              <path
                                d="M5.87413 3.52832L5.97439 7.57216H7.02713L7.12739 3.52832H5.87413ZM6.50076 9.66091C6.88091 9.66091 7.18169 9.37267 7.18169 9.00504C7.18169 8.63742 6.88091 8.34917 6.50076 8.34917C6.12061 8.34917 5.81982 8.63742 5.81982 9.00504C5.81982 9.37267 6.12061 9.66091 6.50076 9.66091Z"
                                fill="white"></path>
                              <path
                                d="M5.87413 3.17832H5.51535L5.52424 3.537L5.6245 7.58083L5.63296 7.92216H5.97439H7.02713H7.36856L7.37702 7.58083L7.47728 3.537L7.48617 3.17832H7.12739H5.87413ZM6.50076 10.0109C7.06121 10.0109 7.5317 9.57872 7.5317 9.00504C7.5317 8.43137 7.06121 7.99918 6.50076 7.99918C5.94031 7.99918 5.46982 8.43137 5.46982 9.00504C5.46982 9.57872 5.94031 10.0109 6.50076 10.0109Z"
                                fill="white" stroke="#EB001B" stroke-width="0.7"></path>
                            </svg>
                          </svg>
                        </div>
                      </td>

                      <td class="cart__price-wrapper cart-flex-item product-price">
                        <div class="cart-item__price-wrapper">
                          <span class="price price--end">
                            {{
                                $n(
                                  cartProduct[lang].priceDiscountedTo,
                                  "currency"
                                )
                            }}
                          </span>
                        </div>
                        <div class="cart__edit hidden-sm-up">
                          <button type="button" class="btn btn--secondary btn--small js-edit-toggle cart__edit--active"
                            data-target="line1">
                            <span class="cart__edit-text--edit"><i class="fa fa-pencil" aria-hidden="true"></i></span>
                            <span class="cart__edit-text--cancel"><i class="fa fa-times" aria-hidden="true"></i></span>
                          </button>
                        </div>
                      </td>

                      <td class="cart__update-wrapper cart-flex-item product-quantity">
                        <label class="medium-down" for="Quantity-1">
                          Quantity
                        </label>
                        <div class="quantity">
                          <button v-on:click.prevent="
                            minusQuantity(
                              cartProduct.id,
                              cartProduct[lang].quantity
                            )
                          " class="quantity__button no-js-hidden" name="minus" type="button">
                            <span class="visually-hidden">Decrease quantity for
                              {{ cartProduct[lang].productTitle }}</span>
                            −
                          </button>
                          <input class="quantity__input" type="number" name="updates[]" :value="cartProduct.quantity"
                            min="0" :aria-label="`Quantity for ${cartProduct[lang].productTitle}`"
                            :id="`Quantity-${cartProduct.quantity}`" data-index="1" />
                          <button v-on:click.prevent="addQuantity(cartProduct.id)" class="quantity__button no-js-hidden"
                            name="plus" type="button">
                            <span class="visually-hidden">Increase quantity for
                              {{ cartProduct.productTitle }}</span>
                            +
                          </button>
                        </div>
                      </td>

                      <td class="small--hide total-product">
                        <div class="loading-overlay hidden">
                          <div class="loading-overlay__spinner">
                            <svg aria-hidden="true" focusable="false" role="presentation" class="spinner"
                              viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                              <circle class="path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>
                            </svg>
                          </div>
                        </div>

                        <div class="cart-item__price-wrapper small-hide">
                          <span class="price price--center">
                            {{
                                $n(
                                  cartProduct.productPrice * cartProduct.quantity,
                                  "currency"
                                )
                            }}
                          </span>
                        </div>
                        <div style="cursor: pointer" @click="removeFromCart(cartProduct.id)" id="Remove-1"
                          data-index="1">
                          <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-remove"
                            viewBox="0 0 16 16">
                            <path
                              d="M14 3h-3.53a3.07 3.07 0 00-.6-1.65C9.44.82 8.8.5 8 .5s-1.44.32-1.87.85A3.06 3.06 0 005.53 3H2a.5.5 0 000 1h1.25v10c0 .28.22.5.5.5h8.5a.5.5 0 00.5-.5V4H14a.5.5 0 000-1zM6.91 1.98c.23-.29.58-.48 1.09-.48s.85.19 1.09.48c.2.24.3.6.36 1.02h-2.9c.05-.42.17-.78.36-1.02zm4.84 11.52h-7.5V4h7.5v9.5z"
                              fill="currentColor"></path>
                            <path
                              d="M6.55 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5zM9.45 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5z"
                              fill="currentColor"></path>
                          </svg>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="totals">
                  <h3 class="totals__subtotal">Subtotal</h3>
                  <p class="totals__subtotal-value">
                    {{ $n(cartTotal, "currency") }}
                  </p>
                </div>
              </div>
            </div>

            <p class="visually-hidden" id="cart-live-region-text" aria-live="polite" role="status"></p>
            <p class="visually-hidden" id="shopping-cart-line-item-status" aria-live="polite" aria-hidden="true"
              role="status">
              Loading...
            </p>
          </div>

          <div v-if="cartTotal === 0" class="cart__warnings">
            <h1>Your cart is empty</h1>
            <a href="/collections/all" class="btn"> Continue Shopping </a>
          </div>
        </div>

        <!-- <script
          src="//cdn.shopify.com/s/files/1/2713/8608/t/32/assets/cart.js?v=72586374255972128511643431074"
          defer="defer"
        ></script> -->
      </div>
      <div v-show="cartTotal > 0" id="shopify-section-template--14383183069227__cart-footer"
        class="shopify-section cart__footer-wrapper spaced-section">
        <div class="page-width" id="main-cart-footer" data-id="template--14383183069227__cart-footer">
          <div class="row cart__footer">
            <div class="cart_reassurance col-lg-8 col-md-6">
              <div class="reassurance-block">
                <div class="reassurance-content row">
                  <div class="reassurance col-lg-6 col-md-12 col-sm-6 col-xs-12">
                    <div class="reassurance-img">
                      <img class="ls-is-cached lazyloaded"
                        data-src="//cdn.shopify.com/s/files/1/2713/8608/files/serviceicon1_01d28505-9b13-4435-9fe0-e7a47a5c30f8.png?v=1633925903"
                        alt="Reassurance Image"
                        src="//cdn.shopify.com/s/files/1/2713/8608/files/serviceicon1_01d28505-9b13-4435-9fe0-e7a47a5c30f8.png?v=1633925903" />
                    </div>

                    <div class="reassurance-text">
                      <div class="reassurance-title">Free Delivery</div>

                      <div class="reassurance-desc">
                        Free delivery for purchases over than 120€ .
                      </div>
                    </div>
                  </div>

                  <div class="reassurance col-lg-6 col-md-12 col-sm-6 col-xs-12">
                    <div class="reassurance-img">
                      <img class="ls-is-cached lazyloaded"
                        data-src="//cdn.shopify.com/s/files/1/2713/8608/files/serviceicon3_9d9a069a-7a35-4683-aa06-cdd5c78efb1d.png?v=1633925926"
                        alt="Reassurance Image"
                        src="//cdn.shopify.com/s/files/1/2713/8608/files/serviceicon3_9d9a069a-7a35-4683-aa06-cdd5c78efb1d.png?v=1633925926" />
                    </div>

                    <div class="reassurance-text">
                      <div class="reassurance-title">Customer Support</div>

                      <div class="reassurance-desc">
                        Find help anytime you need via email, or schedule a
                        call.
                      </div>
                    </div>
                  </div>
                  <!-- <div class="reassurance col-lg-6 col-md-12 col-sm-6 col-xs-12">
                    <div class="reassurance-img">
                      <img class="ls-is-cached lazyloaded"
                        data-src="//cdn.shopify.com/s/files/1/2713/8608/files/serviceicon4_6e2ecb46-c6bb-4014-aa57-523136ab095b.png?v=1633925943"
                        alt="Reassurance Image"
                        src="//cdn.shopify.com/s/files/1/2713/8608/files/serviceicon4_6e2ecb46-c6bb-4014-aa57-523136ab095b.png?v=1633925943" />
                    </div>

                    <div class="reassurance-text">
                      <div class="reassurance-title">Gift Voucher</div>

                      <div class="reassurance-desc">Lorem Ipsum dummy</div>
                    </div>
                  </div> -->
                </div>
              </div>
            </div>
            <div class="cart__blocks col-lg-4 col-md-6">
              <div class="cart__note field">
                <label for="Cart-note">Special Instructions</label>
                <textarea class="text-area text-area--resize-vertical field__input" name="note" id="Cart-note"
                  placeholder="Special Instructions"></textarea>
              </div>
              <div class="js-contents">
                <small class="tax-note caption-large rte">Taxes and shipping calculated at checkout
                </small>
              </div>
              <div class="cart__ctas">
                <noscript>
                  <button type="submit" class="cart__update-button button button--secondary" form="cart">
                    Update
                  </button>
                </noscript>

                <div class="" style="display:grid; grid-gap:1em;">
                  <button type="submit" class="" style="
                    background: #5b68c3;
                    color: white;
                    font-size: 18px;
                    font-weight: 650;
                    width:250px;
                    padding: 0.8em 4%;
                    border-radius: 5px;
                    outline: none;
                    border: none;
                    margin:auto;
                  " name="" form="cart">
                    Proceed to Checkout
                  </button>

                  <button type="submit" class="" style="
                    background: yellow;
                    color: white;
                    font-size: 18px;
                    font-weight: 650;
                    width:250px;
                    padding: 0.8em 4%;
                    border-radius: 5px;
                    outline: none;
                    border: none;
                    margin:auto;
                  " name="" form="cart">
                    Pay with PayPal
                  </button>
                </div>





                <div id="smart-button-container">
                  <div style="text-align: center">
                    <div id="paypal-button-container"></div>
                  </div>
                </div>

                <a href="/collections/all" class="underlined-link">Continue Shopping</a>
              </div>

              <div id="cart-errors"></div>
            </div>
          </div>
        </div>
      </div>
      <section v-show="cartTotal > 0" id="shopify-section-template--14383183069227__collection-list"
        class="shopify-section collection-list-section">
        <div class="collection-list-wrapper page-width">
          <div class="row" style="display: grid">
            <div class="section-header center">
              <h2 class="home-title">Collection <span>List.</span></h2>
            </div>

            <div class="slider-mobile-gutter">
              <ul
                class="collection-list grid collection-width-4 slider slider--tablet grid--peek negative-margin--small"
                id="Slider-template--14383183069227__collection-list" role="list">
                <li
                  class="collection-list__item grid__item col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 slider__slide">
                  <a href="/collections/babyboy" class="card">
                    <div class="collection-grid-item">
                      <div class="collection-grid-item__overlay media media--square">
                        <img srcset="
                            //cdn.shopify.com/s/files/1/2713/8608/products/14_a29ed86a-dc13-4b76-a6ea-c2f19e82c9e1_165x.png?v=1599889537 165w,
                            //cdn.shopify.com/s/files/1/2713/8608/products/14_a29ed86a-dc13-4b76-a6ea-c2f19e82c9e1_330x.png?v=1599889537 330w,
                            //cdn.shopify.com/s/files/1/2713/8608/products/14_a29ed86a-dc13-4b76-a6ea-c2f19e82c9e1_535x.png?v=1599889537 535w,
                            //cdn.shopify.com/s/files/1/2713/8608/products/14_a29ed86a-dc13-4b76-a6ea-c2f19e82c9e1_720x.png?v=1599889537 720w,
                            //cdn.shopify.com/s/files/1/2713/8608/products/14_a29ed86a-dc13-4b76-a6ea-c2f19e82c9e1.png?v=1599889537      771w
                          "
                          data-src="//cdn.shopify.com/s/files/1/2713/8608/products/14_a29ed86a-dc13-4b76-a6ea-c2f19e82c9e1_533x.png?v=1599889537"
                          sizes="(min-width: 1100px)535px, (min-width: 750px) calc((100vw - 10rem) / 2), calc(100vw - 3rem)"
                          alt="Babyboy" height="1000" width="771" loading="lazy"
                          class="motion-reduce ls-is-cached lazyloaded"
                          src="//cdn.shopify.com/s/files/1/2713/8608/products/14_a29ed86a-dc13-4b76-a6ea-c2f19e82c9e1_533x.png?v=1599889537" />

                        <div class="collection-item">20 Item</div>
                      </div>
                      <div class="collection-grid-item__title-wrapper">
                        <h3 class="collection-grid-item__title">Babyboy</h3>
                        <span class="btn"> SHOP THE COLLECTION </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li
                  class="collection-list__item grid__item col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 slider__slide">
                  <a href="/collections/babygirl" class="card">
                    <div class="collection-grid-item">
                      <div class="collection-grid-item__overlay media media--square">
                        <img srcset="
                            //cdn.shopify.com/s/files/1/2713/8608/products/18_a12b553f-c277-41f0-bf29-00e05db8cacd_165x.png?v=1599889665 165w,
                            //cdn.shopify.com/s/files/1/2713/8608/products/18_a12b553f-c277-41f0-bf29-00e05db8cacd_330x.png?v=1599889665 330w,
                            //cdn.shopify.com/s/files/1/2713/8608/products/18_a12b553f-c277-41f0-bf29-00e05db8cacd_535x.png?v=1599889665 535w,
                            //cdn.shopify.com/s/files/1/2713/8608/products/18_a12b553f-c277-41f0-bf29-00e05db8cacd_720x.png?v=1599889665 720w,
                            //cdn.shopify.com/s/files/1/2713/8608/products/18_a12b553f-c277-41f0-bf29-00e05db8cacd.png?v=1599889665      771w
                          "
                          data-src="//cdn.shopify.com/s/files/1/2713/8608/products/18_a12b553f-c277-41f0-bf29-00e05db8cacd_533x.png?v=1599889665"
                          sizes="(min-width: 1100px)535px, (min-width: 750px) calc((100vw - 10rem) / 2), calc(100vw - 3rem)"
                          alt="Babygirl" height="1000" width="771" loading="lazy"
                          class="motion-reduce ls-is-cached lazyloaded"
                          src="//cdn.shopify.com/s/files/1/2713/8608/products/18_a12b553f-c277-41f0-bf29-00e05db8cacd_533x.png?v=1599889665" />

                        <div class="collection-item">20 Item</div>
                      </div>
                      <div class="collection-grid-item__title-wrapper">
                        <h3 class="collection-grid-item__title">Babygirl</h3>
                        <span class="btn"> SHOP THE COLLECTION </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li
                  class="collection-list__item grid__item col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 slider__slide">
                  <a href="/collections/babywear" class="card">
                    <div class="collection-grid-item">
                      <div class="collection-grid-item__overlay media media--square">
                        <img srcset="
                            //cdn.shopify.com/s/files/1/2713/8608/products/20_da050523-d119-4eef-a055-305bc95e9698_165x.png?v=1599890046 165w,
                            //cdn.shopify.com/s/files/1/2713/8608/products/20_da050523-d119-4eef-a055-305bc95e9698_330x.png?v=1599890046 330w,
                            //cdn.shopify.com/s/files/1/2713/8608/products/20_da050523-d119-4eef-a055-305bc95e9698_535x.png?v=1599890046 535w,
                            //cdn.shopify.com/s/files/1/2713/8608/products/20_da050523-d119-4eef-a055-305bc95e9698_720x.png?v=1599890046 720w,
                            //cdn.shopify.com/s/files/1/2713/8608/products/20_da050523-d119-4eef-a055-305bc95e9698.png?v=1599890046      771w
                          "
                          data-src="//cdn.shopify.com/s/files/1/2713/8608/products/20_da050523-d119-4eef-a055-305bc95e9698_533x.png?v=1599890046"
                          sizes="(min-width: 1100px)535px, (min-width: 750px) calc((100vw - 10rem) / 2), calc(100vw - 3rem)"
                          alt="Babywear" height="1000" width="771" loading="lazy"
                          class="motion-reduce ls-is-cached lazyloaded"
                          src="//cdn.shopify.com/s/files/1/2713/8608/products/20_da050523-d119-4eef-a055-305bc95e9698_533x.png?v=1599890046" />

                        <div class="collection-item">20 Item</div>
                      </div>
                      <div class="collection-grid-item__title-wrapper">
                        <h3 class="collection-grid-item__title">Babywear</h3>
                        <span class="btn"> SHOP THE COLLECTION </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li
                  class="collection-list__item grid__item col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 slider__slide">
                  <a href="/collections/new-babywear" class="card">
                    <div class="collection-grid-item">
                      <div class="collection-grid-item__overlay media media--square">
                        <img srcset="
                            //cdn.shopify.com/s/files/1/2713/8608/products/11_54e00385-1269-479f-845d-ce679baeaa6d_165x.png?v=1599888286 165w,
                            //cdn.shopify.com/s/files/1/2713/8608/products/11_54e00385-1269-479f-845d-ce679baeaa6d_330x.png?v=1599888286 330w,
                            //cdn.shopify.com/s/files/1/2713/8608/products/11_54e00385-1269-479f-845d-ce679baeaa6d_535x.png?v=1599888286 535w,
                            //cdn.shopify.com/s/files/1/2713/8608/products/11_54e00385-1269-479f-845d-ce679baeaa6d_720x.png?v=1599888286 720w,
                            //cdn.shopify.com/s/files/1/2713/8608/products/11_54e00385-1269-479f-845d-ce679baeaa6d.png?v=1599888286      771w
                          "
                          data-src="//cdn.shopify.com/s/files/1/2713/8608/products/11_54e00385-1269-479f-845d-ce679baeaa6d_533x.png?v=1599888286"
                          sizes="(min-width: 1100px)535px, (min-width: 750px) calc((100vw - 10rem) / 2), calc(100vw - 3rem)"
                          alt="New Babywear" height="1000" width="771" loading="lazy"
                          class="motion-reduce ls-is-cached lazyloaded"
                          src="//cdn.shopify.com/s/files/1/2713/8608/products/11_54e00385-1269-479f-845d-ce679baeaa6d_533x.png?v=1599888286" />

                        <div class="collection-item">20 Item</div>
                      </div>
                      <div class="collection-grid-item__title-wrapper">
                        <h3 class="collection-grid-item__title">
                          New Babywear
                        </h3>
                        <span class="btn"> SHOP THE COLLECTION </span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
              <div class="slider-buttons no-js-hidden">
                <div class="slider-counter caption">
                  <span class="slider-counter--current">1</span>
                  <span aria-hidden="true"> / </span>
                  <span class="visually-hidden">of</span>
                  <span class="slider-counter--total">1</span>
                </div>
                <button type="button" class="slider-button slider-button--prev" name="previous" aria-label="Slide left"
                  disabled="disabled">
                  <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-caret"
                    viewBox="0 0 10 6">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"
                      fill="currentColor"></path>
                  </svg>
                </button>
                <button type="button" class="slider-button slider-button--next" name="next" aria-label="Slide right"
                  disabled="disabled">
                  <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-caret"
                    viewBox="0 0 10 6">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"
                      fill="currentColor"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style>
#shopify-section-template--14383183069227__collection-list {
  margin-bottom: 70px;
}

@media (max-width: 767px) {
  #shopify-section-template--14383183069227__collection-list {
    margin-bottom: 30px;
  }
}
</style>
