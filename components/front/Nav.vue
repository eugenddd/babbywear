<script>
export default {
  data() {
    return {
      cart: false,
      showCart: false,
    };
  },
  mounted() {
    $(document).ready(function () {
      $(document).on("click", ".ishi-product-nav-link", function () {
        $(this).parents(".ishi-product-nav-tabs").find(".ishi-product-tab-item").removeClass("active");
        $(this).parents(".ishi-product-tab-item").addClass("active");

        $(this).parents(".ishi-featured-product-tab").find(".ishi-product-tab-pane").removeClass("active");
        var target = $(this).data("href");
        $(target).addClass("active");
      });
    });
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
  },
  watch: {
    cartProducts(newCount, oldCount) {

      console.log(`We have ${newCount.productTitle} fruits now, yay!`);

      // this.open

      setTimeout(() => {
        this.showCart = true
        this.cart = true
        this.$refs.focusTrap.classList.add("animate", "active");
      }, 1000);
      // this.$nextTick(() => {
      //   this.showCart = true;


      //   this.$refs.focusTrap.addEventListener(
      //     "transitionend",
      //     () => {

      //       // this.$refs.showCart.focus();
      //       // trapFocus(this.$refs.showCart);
      //       // $refs.focusTrap.activate()
      //       this.$refs.focusTrap.classList.add("animate", "active");

      //     },
      //     { once: true }
      //   );

      //   document.body.addEventListener("click", this.onBodyClick);

      // });
    },
  },

  methods: {
    open() {
      this.cart = !this.cart;
    },
    removeFromCart(id) {
      // alert('working on it..')
      // this.cart = true;
      this.$store.commit("cart/removeFromCart", id);
    },
  },
};
</script>

<template>
  <header class="site-header" style="padding:1rem 0em;">

    <div class="header-top hidden-lg-down ">
      <div class="site-header-inner">
        <div class="page-width">
          <div class="row">
            <div id="_desktop_logo" class="header-logo-section col-lg-4">
              <h1 class="h2 header__logo" itemscope="" itemtype="http://schema.org/Organization">
                <div class="hidden-lg-down">
                  <a href="/" itemprop="url" class="header__logo-image">
                    <img class="hidden-lg-down"
                      src="//cdn.shopify.com/s/files/1/2713/8608/files/Logo_large_d43c2a63-feb3-4bc2-ae9d-ee878d6aee47_large_1_large.png?v=1643341334"
                      alt="Ishi_Shopify001" itemprop="logo" style="max-width: 27%; width: 190px" />
                  </a>
                </div>
                <div class="hidden-lg-up">
                  <a href="/" itemprop="url" class="header__logo-image">
                    <img class="hidden-lg-up"
                      src="//cdn.shopify.com/s/files/1/2713/8608/files/Logo_large_d43c2a63-feb3-4bc2-ae9d-ee878d6aee47_large_1_large.png?v=1643341334"
                      alt="Ishi_Shopify001" itemprop="logo" style="max-width: 45%" />
                  </a>
                </div>
              </h1>
            </div>
            <div id="_desktop_search" class="site-header__search hidden-lg-down col-lg-4">
              <div class="search-title clearfix" data-href="#search-container-full" data-toggle="popover"
                aria-expanded="false">
                <span class="search-toggle hidden-lg-down">
                  <svg aria-hidden="true" focusable="false" role="presentation" class="icon" viewBox="0 0 1200 1200">
                    <svg x="20%" y="22%">
                      <path d="M606.209,578.714L448.198,423.228C489.576,378.272,515,318.817,515,253.393C514.98,113.439,399.704,0,257.493,0
               C115.282,0,0.006,113.439,0.006,253.393s115.276,253.393,257.487,253.393c61.445,0,117.801-21.253,162.068-56.586
               l158.624,156.099c7.729,7.614,20.277,7.614,28.006,0C613.938,598.686,613.938,586.328,606.209,578.714z M257.493,467.8
               c-120.326,0-217.869-95.993-217.869-214.407S137.167,38.986,257.493,38.986c120.327,0,217.869,95.993,217.869,214.407
               S377.82,467.8,257.493,467.8z"></path>
                    </svg>
                  </svg>
                </span>
                <span class="search-toggle hidden-lg-up">
                  <svg aria-hidden="true" focusable="false" role="presentation" class="icon" viewBox="0 0 1200 1200">
                    <svg x="24%" y="24%">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M606.209,578.714L448.198,423.228C489.576,378.272,515,318.817,515,253.393C514.98,113.439,399.704,0,257.493,0
         C115.282,0,0.006,113.439,0.006,253.393s115.276,253.393,257.487,253.393c61.445,0,117.801-21.253,162.068-56.586
         l158.624,156.099c7.729,7.614,20.277,7.614,28.006,0C613.938,598.686,613.938,586.328,606.209,578.714z M257.493,467.8
         c-120.326,0-217.869-95.993-217.869-214.407S137.167,38.986,257.493,38.986c120.327,0,217.869,95.993,217.869,214.407
         S377.82,467.8,257.493,467.8z"></path>
                    </svg>
                  </svg>
                </span>
              </div>
              <div id="search-container-full" class="search-info toggle-dropdown">
                <form action="/search" method="get" class="search-header search search--focus" role="search"
                  style="position: relative">
                  <input type="hidden" name="type" value="product" />
                  <input class="search-header__input search__input" name="q" placeholder="Search" aria-label="Search"
                    autocomplete="off" />
                  <button class="search-header__submit search__submit btn--link" type="submit">
                    <i class="fa fa-search" aria-hidden="true"></i>
                    <span class="icon__fallback-text hidden">Search</span>
                  </button>
                  <ul class="search-results" style="
                      position: absolute;
                      left: 0px;
                      top: 42px;
                      display: none;
                    "></ul>
                </form>
              </div>
            </div>
            <div class="hidden-lg-down header-right col-lg-4">
              <div id="ishiheadercontactblock">
                <div class="call">
                  <div class="call-img">
                    <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
                      <symbol id="email" viewBox="0 0 70 70">
                        <title>email</title>
                        <path d="M0,8.5v2.291v38.418V51.5h60v-2.291V10.791V8.5H0z M36.625,30.564l-5.446,5.472c-0.662,0.615-1.698,0.614-2.332,0.026
	l-5.473-5.498l0.048-0.047L3.647,10.5h52.719L36.577,30.518L36.625,30.564z M20.524,30.533L2,48.355V11.923L20.524,30.533z
	 M21.934,31.95l5.523,5.549c0.709,0.661,1.619,0.993,2.533,0.993c0.923,0,1.85-0.339,2.581-1.02l5.496-5.522L56.304,49.5H3.686
	L21.934,31.95z M39.477,30.534L58,11.922v36.433L39.477,30.534z"></path>
                      </symbol>
                    </svg>
                    <svg class="icon" viewBox="0 0 40 40">
                      <use xlink:href="#email" x="7%" y="7%"></use>
                    </svg>
                  </div>
                  <span class="call-text-title">
                    <span class="main-title">Email Us</span>
                    <span class="call-num">info@example.com</span>
                  </span>
                </div>
              </div>

              <div @click="open" id="_desktop_cart" class="cart_info">
                <div class="cart-display" id="cart-icon-bubble" data-href="#cart-notification" data-toggle="popover"
                  aria-expanded="false">
                  <span class="cart-logo">
                    <span class="hidden-lg-down">
                      <svg aria-hidden="true" focusable="false" role="presentation" class="icon" viewBox="0 0 600 600">
                        <svg x="10%" y="14%">
                          <path
                            d="m150.355469 322.332031c-30.046875 0-54.402344 24.355469-54.402344 54.402344 0 30.042969 24.355469 54.398437 54.402344 54.398437 30.042969 0 54.398437-24.355468 54.398437-54.398437-.03125-30.03125-24.367187-54.371094-54.398437-54.402344zm0 88.800781c-19 0-34.402344-15.402343-34.402344-34.398437 0-19 15.402344-34.402344 34.402344-34.402344 18.996093 0 34.398437 15.402344 34.398437 34.402344 0 18.996094-15.402344 34.398437-34.398437 34.398437zm0 0">
                          </path>
                          <path
                            d="m446.855469 94.035156h-353.101563l-7.199218-40.300781c-4.4375-24.808594-23.882813-44.214844-48.699219-48.601563l-26.101563-4.597656c-5.441406-.96875-10.632812 2.660156-11.601562 8.097656-.964844 5.441407 2.660156 10.632813 8.101562 11.601563l26.199219 4.597656c16.53125 2.929688 29.472656 15.871094 32.402344 32.402344l35.398437 199.699219c4.179688 23.894531 24.941406 41.324218 49.199219 41.300781h210c22.0625.066406 41.546875-14.375 47.902344-35.5l47-155.800781c.871093-3.039063.320312-6.3125-1.5-8.898438-1.902344-2.503906-4.859375-3.980468-8-4zm-56.601563 162.796875c-3.773437 12.6875-15.464844 21.367188-28.699218 21.300781h-210c-14.566407.039063-27.035157-10.441406-29.5-24.800781l-24.699219-139.398437h336.097656zm0 0">
                          </path>
                          <path
                            d="m360.355469 322.332031c-30.046875 0-54.402344 24.355469-54.402344 54.402344 0 30.042969 24.355469 54.398437 54.402344 54.398437 30.042969 0 54.398437-24.355468 54.398437-54.398437-.03125-30.03125-24.367187-54.371094-54.398437-54.402344zm0 88.800781c-19 0-34.402344-15.402343-34.402344-34.398437 0-19 15.402344-34.402344 34.402344-34.402344 18.996093 0 34.398437 15.402344 34.398437 34.402344 0 18.996094-15.402344 34.398437-34.398437 34.398437zm0 0">
                          </path>
                        </svg>
                      </svg>
                    </span>
                    <span class="hidden-lg-up">
                      <svg aria-hidden="true" focusable="false" role="presentation" class="icon" viewBox="0 0 550 550">
                        <svg x="20%" y="20%">
                          <path d="M306.4,313.2l-24-223.6c-0.4-3.6-3.6-6.4-7.2-6.4h-44.4V69.6c0-38.4-31.2-69.6-69.6-69.6c-38.4,0-69.6,31.2-69.6,69.6
                     v13.6H46c-3.6,0-6.8,2.8-7.2,6.4l-24,223.6c-0.4,2,0.4,4,1.6,5.6c1.2,1.6,3.2,2.4,5.2,2.4h278c2,0,4-0.8,5.2-2.4
                     C306,317.2,306.8,315.2,306.4,313.2z M223.6,123.6c3.6,0,6.4,2.8,6.4,6.4c0,3.6-2.8,6.4-6.4,6.4c-3.6,0-6.4-2.8-6.4-6.4
                     C217.2,126.4,220,123.6,223.6,123.6z M106,69.6c0-30.4,24.8-55.2,55.2-55.2c30.4,0,55.2,24.8,55.2,55.2v13.6H106V69.6z
                     M98.8,123.6c3.6,0,6.4,2.8,6.4,6.4c0,3.6-2.8,6.4-6.4,6.4c-3.6,0-6.4-2.8-6.4-6.4C92.4,126.4,95.2,123.6,98.8,123.6z M30,306.4
                     L52.4,97.2h39.2v13.2c-8,2.8-13.6,10.4-13.6,19.2c0,11.2,9.2,20.4,20.4,20.4c11.2,0,20.4-9.2,20.4-20.4c0-8.8-5.6-16.4-13.6-19.2
                     V97.2h110.4v13.2c-8,2.8-13.6,10.4-13.6,19.2c0,11.2,9.2,20.4,20.4,20.4c11.2,0,20.4-9.2,20.4-20.4c0-8.8-5.6-16.4-13.6-19.2V97.2
                     H270l22.4,209.2H30z"></path>
                        </svg>
                      </svg>
                    </span>
                  </span>
                  <div class="cart-price-content hidden-lg-down">
                    <span class="title">Shopping Cart</span>

                    <span class="cart__subtotal">{{ $n(cartTotal, "currency") }}
                    </span>
                    -
                    <span class="item-count">{{ cartCount }} item</span>
                  </div>
                </div>
                <!-- v-show="cart" ref="showCart" -->
                <focus-trap v-show="showCart" ref="focusTrap" class="cart-notification-wrapper">

                  <div id="cart-notification" :class="{ 'focus-inset toggle-dropdown': cart }"
                    class="cart-notification focus-inset">
                    <modal-dialog>
                      <div class="slimScrollDiv">
                        <div id="cart-notification-default"></div>
                      </div>
                      <div id="cart-notification-product">
                        <div class="cart-notification__header">
                          <h2 class="cart-notification__heading caption-large alert-success" style="font-size: 1em">
                            <svg aria-hidden="true" focusable="false" role="presentation" class="icon"
                              viewBox="0 0 12 9">
                              <svg x="0%" y="5%">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M11.35.643a.5.5 0 01.006.707l-6.77 6.886a.5.5 0 01-.719-.006L.638 4.845a.5.5 0 11.724-.69l2.872 3.011 6.41-6.517a.5.5 0 01.707-.006h-.001z"
                                  fill="currentColor"></path>
                              </svg>
                            </svg>

                            Your cart has been modified !
                          </h2>
                        </div>
                        <div v-for="productCart in cartProducts" :key="productCart" class="slimScrollDiv">
                          <div id="cart-notification-product-32005549031467" class="cart-notification-product">
                            <!-- <a href="" class="cart-notification-item"> -->
                            <img class="cart-notification-product__image" :src="productCart.images[0]" alt="" width="70"
                              height="91" loading="lazy" />

                            <div class="cart-notification-product__info">
                              <h3 class="cart-notification-product__name h4">
                                {{ productCart.productTitle }}
                              </h3>
                              <div class="cart-notification-product__qty-price h4">
                                {{ productCart.quantity }} X
                                {{ $n(productCart.productPrice, "currency") }}
                              </div>
                            </div>
                            <!-- </a> -->
                            <span @click="removeFromCart(productCart.id)" data-variantid="32005549031467">
                              <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-remove"
                                viewBox="0 0 16 16">
                                <path
                                  d="M14 3h-3.53a3.07 3.07 0 00-.6-1.65C9.44.82 8.8.5 8 .5s-1.44.32-1.87.85A3.06 3.06 0 005.53 3H2a.5.5 0 000 1h1.25v10c0 .28.22.5.5.5h8.5a.5.5 0 00.5-.5V4H14a.5.5 0 000-1zM6.91 1.98c.23-.29.58-.48 1.09-.48s.85.19 1.09.48c.2.24.3.6.36 1.02h-2.9c.05-.42.17-.78.36-1.02zm4.84 11.52h-7.5V4h7.5v9.5z"
                                  fill="currentColor"></path>
                                <path
                                  d="M6.55 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5zM9.45 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5z"
                                  fill="currentColor"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div id="cart-notification-button">
                        <div class="cart-footer">
                          <span class="subtotal"> Total </span>
                          <span class="total_price">
                            {{ $n(cartTotal, "currency") }}
                          </span>
                        </div>
                        <p>Taxes and shipping calculated at checkout</p>
                        <div class="cart-notification__links">
                          <a href="/cart" class="button button--secondary">
                            Your Cart</a>
                          <a href="/checkout" class="button">Checkout</a>
                        </div>
                      </div>

                    </modal-dialog>

                  </div>
                </focus-trap>
                <div>
                  <div v-if="showCart && cartTotal === 0" class="cart-notification-wrapper">
                    <div id="cart-notification" class="cart-notification">
                      <!-- focus-inset toggle-dropdown -->
                      <div class="slimScrollDiv cart-empty-notification">
                        <div id="cart-notification-default">
                          <div class="cart-notification__header cart-empty">
                            <h2 class="cart-notification__heading caption-large">
                              Your Cart is currently empty!
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div id="cart-notification-product"></div>
                      <div id="cart-notification-button"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="mobile_top_menu_wrapper" class="hidden-lg-up" style="display: none">
      <div id="top_menu_closer" class="hidden-lg-up">
        <svg aria-hidden="true" focusable="false" role="presentation" class="icon" viewBox="0 0 16 17">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z"
            fill="currentColor"></path>
        </svg>
      </div>
      <div id="_mobile_top_menu" class="js-top-menu mobile"></div>
      <div id="_mobile_localization" class="header__localization"></div>
    </div>
    <div class="mobile-menu-overlay hidden-lg-up"></div>
    <div class="mobile-navmenu hidden-lg-up">
      <div class="mobile-width">
        <div class="page-width">
          <div class="row">
            <div class="mobile-width-left">
              <div id="menu-icon" class="menu-icon hidden-lg-up">
                <svg aria-hidden="true" focusable="false" role="presentation" class="icon" viewBox="0 0 750 750">
                  <svg x="25%" y="27%">
                    <g>
                      <rect y="46.06" width="344.339" height="29.52"></rect>
                    </g>
                    <g>
                      <rect y="156.506" width="344.339" height="29.52"></rect>
                    </g>
                    <g>
                      <rect y="268.748" width="344.339" height="29.531"></rect>
                    </g>
                  </svg>
                </svg>
              </div>
              <div id="_mobile_search">
                <div class="search-title clearfix" data-href="#search-container-full" data-toggle="popover"
                  aria-expanded="false">
                  <span class="search-toggle hidden-lg-down">
                    <svg aria-hidden="true" focusable="false" role="presentation" class="icon" viewBox="0 0 1200 1200">
                      <svg x="20%" y="22%">
                        <path d="M606.209,578.714L448.198,423.228C489.576,378.272,515,318.817,515,253.393C514.98,113.439,399.704,0,257.493,0
               C115.282,0,0.006,113.439,0.006,253.393s115.276,253.393,257.487,253.393c61.445,0,117.801-21.253,162.068-56.586
               l158.624,156.099c7.729,7.614,20.277,7.614,28.006,0C613.938,598.686,613.938,586.328,606.209,578.714z M257.493,467.8
               c-120.326,0-217.869-95.993-217.869-214.407S137.167,38.986,257.493,38.986c120.327,0,217.869,95.993,217.869,214.407
               S377.82,467.8,257.493,467.8z"></path>
                      </svg>
                    </svg>
                  </span>
                  <span class="search-toggle hidden-lg-up">
                    <svg aria-hidden="true" focusable="false" role="presentation" class="icon" viewBox="0 0 1200 1200">
                      <svg x="24%" y="24%">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M606.209,578.714L448.198,423.228C489.576,378.272,515,318.817,515,253.393C514.98,113.439,399.704,0,257.493,0
         C115.282,0,0.006,113.439,0.006,253.393s115.276,253.393,257.487,253.393c61.445,0,117.801-21.253,162.068-56.586
         l158.624,156.099c7.729,7.614,20.277,7.614,28.006,0C613.938,598.686,613.938,586.328,606.209,578.714z M257.493,467.8
         c-120.326,0-217.869-95.993-217.869-214.407S137.167,38.986,257.493,38.986c120.327,0,217.869,95.993,217.869,214.407
         S377.82,467.8,257.493,467.8z"></path>
                      </svg>
                    </svg>
                  </span>
                </div>
                <div id="search-container-full" class="search-info toggle-dropdown">
                  <form action="/search" method="get" class="search-header search search--focus" role="search"
                    style="position: relative">
                    <input type="hidden" name="type" value="product" />
                    <input class="search-header__input search__input" name="q" placeholder="Search" aria-label="Search"
                      autocomplete="off" />
                    <button class="search-header__submit search__submit btn--link" type="submit">
                      <i class="fa fa-search" aria-hidden="true"></i>
                      <span class="icon__fallback-text hidden">Search</span>
                    </button>
                    <ul class="search-results" style="
                        position: absolute;
                        left: 0px;
                        top: 42px;
                        display: none;
                      "></ul>
                  </form>
                </div>
              </div>
            </div>
            <div id="_mobile_logo" class="header-logo-section">
              <div class="h2 header__logo" itemscope="" itemtype="http://schema.org/Organization">
                <div class="hidden-lg-down">
                  <a href="/" itemprop="url" class="header__logo-image">
                    <img class="hidden-lg-down"
                      src="//cdn.shopify.com/s/files/1/2713/8608/files/Logo_large_d43c2a63-feb3-4bc2-ae9d-ee878d6aee47_large_1_large.png?v=1643341334"
                      alt="Ishi_Shopify001" itemprop="logo" style="max-width: 100%; width: 180px" />
                  </a>
                </div>
                <div class="hidden-lg-up">
                  <a href="/" itemprop="url" class="header__logo-image">
                    <img class="hidden-lg-up"
                      src="//cdn.shopify.com/s/files/1/2713/8608/files/Logo_large_large_6327badb-5f95-4d82-b785-13b1b1367b1c_large.png?v=1643341345"
                      alt="Ishi_Shopify001" itemprop="logo" style="max-width: 100%" />
                  </a>
                </div>
              </div>
            </div>

            <div class="mobile-width-right">
              <div id="_mobile_user_info">
                <div class="userinfo-title clearfix" data-toggle="popover" aria-expanded="false"
                  data-href="#user-notification">
                  <span class="userinfo-toggle hidden-lg-down">Account </span>
                  <span class="userinfo-toggle hidden-lg-up">
                    <svg aria-hidden="true" focusable="false" role="presentation" class="icon" viewBox="0 0 480 480">
                      <svg x="22%" y="22%">
                        <path d="M187.497,152.427H73.974c-38.111,0-69.117,31.006-69.117,69.117v39.928h251.758v-39.928
                 C256.614,183.433,225.608,152.427,187.497,152.427z M241.614,246.473H19.856v-24.928c0-29.84,24.277-54.117,54.117-54.117h113.523
                 c29.84,0,54.117,24.277,54.117,54.117L241.614,246.473L241.614,246.473z"></path>
                        <path d="M130.735,145.326c40.066,0,72.663-32.597,72.663-72.663S170.802,0,130.735,0S58.072,32.596,58.072,72-.663
                 S90.669,145.326,130.735,145.326z M130.735,15c31.796,0,57.663,25.867,57.663,57.663s-25.867,57.663-57.663,57.663
                 s-57.663-25.868-57.663-57.663S98.939,15,130.735,15z"></path>
                      </svg>
                    </svg>
                  </span>
                </div>
                <div id="user-notification" class="toggle-dropdown">
                  <link
                    href="//cdn.shopify.com/s/files/1/2713/8608/t/32/assets/page-account.css?v=160686326329420194631643172524"
                    rel="stylesheet" type="text/css" media="all" />
                  <div class="customer login ishi-panel-container">
                    <div id="ishi-login-panel" class="ishi-panel-data ishi-panel-data-default active">
                      <h2>Login</h2>
                      <form method="post" action="/account/login" id="customer_login" accept-charset="UTF-8"
                        novalidate="novalidate">
                        <input type="hidden" name="form_type" value="customer_login" /><input type="hidden" name="utf8"
                          value="✓" />
                        <div class="field">
                          <input type="email" name="customer[email]" id="CustomerEmail" autocomplete="email"
                            autocorrect="off" autocapitalize="off" placeholder="Email" />
                          <label for="CustomerEmail"> Email </label>
                        </div>
                        <div class="field">
                          <input type="password" value="" name="customer[password]" id="CustomerPassword"
                            autocomplete="current-password" placeholder="Password" />
                          <label for="CustomerPassword"> Password </label>
                        </div>

                        <p data-action="ishi-panel" aria-controls="#ishi-recover-panel" class="forgot">
                          Forgot your password?
                        </p>
                        <button class="btn">Sign in</button>

                        <p data-action="ishi-panel" aria-controls="#ishi-register-panel">
                          Create account
                        </p>
                      </form>
                    </div>

                    <div id="ishi-recover-panel" class="ishi-panel-data ishi-panel-data-slide">
                      <h2>Reset your password</h2>
                      <p>We will send you an email to reset your password</p>
                      <form method="post" action="/account/recover" accept-charset="UTF-8">
                        <input type="hidden" name="form_type" value="recover_customer_password" /><input type="hidden"
                          name="utf8" value="✓" />
                        <div class="field">
                          <input type="email" value="" name="email" id="RecoverEmail" autocorrect="off"
                            autocapitalize="off" autocomplete="email" placeholder="Email" />
                          <label for="RecoverEmail"> Email </label>
                        </div>
                        <button>Submit</button>

                        <p data-action="ishi-panel" aria-controls="#ishi-login-panel">
                          Cancel
                        </p>
                      </form>
                    </div>

                    <div id="ishi-register-panel" class="ishi-panel-data ishi-panel-data-slide">
                      <h2>Create account</h2>
                      <form method="post" action="/account" id="create_customer" accept-charset="UTF-8"
                        novalidate="novalidate">
                        <input type="hidden" name="form_type" value="create_customer" /><input type="hidden" name="utf8"
                          value="✓" />
                        <div class="field">
                          <input type="text" name="customer[first_name]" id="RegisterForm-FirstName"
                            autocomplete="given-name" placeholder="First name" />
                          <label for="RegisterForm-FirstName">
                            First name
                          </label>
                        </div>
                        <div class="field">
                          <input type="text" name="customer[last_name]" id="RegisterForm-LastName"
                            autocomplete="family-name" placeholder="Last name" />
                          <label for="RegisterForm-LastName"> Last name </label>
                        </div>
                        <div class="field">
                          <input type="email" name="customer[email]" id="RegisterForm-email" spellcheck="false"
                            autocapitalize="off" autocomplete="email" aria-required="true" placeholder="Email" />
                          <label for="RegisterForm-email"> Email </label>
                        </div>
                        <div class="field">
                          <input type="password" name="customer[password]" id="RegisterForm-password"
                            aria-required="true" placeholder="Password" />
                          <label for="RegisterForm-password"> Password </label>
                        </div>
                        <button class="btn">Create</button>
                        <p data-action="ishi-panel" aria-controls="#ishi-login-panel" class="new-account">
                          Already Have an Account ?
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div id="_mobile_cart" class="cart_info">
                <div @click="open" class="cart-display" id="cart-icon-bubble" data-href="#cart-notification"
                  data-toggle="popover" aria-expanded="false">
                  <span class="cart-logo">
                    <span class="hidden-lg-down">
                      <svg aria-hidden="true" focusable="false" role="presentation" class="icon" viewBox="0 0 600 600">
                        <svg x="10%" y="14%">
                          <path
                            d="m150.355469 322.332031c-30.046875 0-54.402344 24.355469-54.402344 54.402344 0 30.042969 24.355469 54.398437 54.402344 54.398437 30.042969 0 54.398437-24.355468 54.398437-54.398437-.03125-30.03125-24.367187-54.371094-54.398437-54.402344zm0 88.800781c-19 0-34.402344-15.402343-34.402344-34.398437 0-19 15.402344-34.402344 34.402344-34.402344 18.996093 0 34.398437 15.402344 34.398437 34.402344 0 18.996094-15.402344 34.398437-34.398437 34.398437zm0 0">
                          </path>
                          <path
                            d="m446.855469 94.035156h-353.101563l-7.199218-40.300781c-4.4375-24.808594-23.882813-44.214844-48.699219-48.601563l-26.101563-4.597656c-5.441406-.96875-10.632812 2.660156-11.601562 8.097656-.964844 5.441407 2.660156 10.632813 8.101562 11.601563l26.199219 4.597656c16.53125 2.929688 29.472656 15.871094 32.402344 32.402344l35.398437 199.699219c4.179688 23.894531 24.941406 41.324218 49.199219 41.300781h210c22.0625.066406 41.546875-14.375 47.902344-35.5l47-155.800781c.871093-3.039063.320312-6.3125-1.5-8.898438-1.902344-2.503906-4.859375-3.980468-8-4zm-56.601563 162.796875c-3.773437 12.6875-15.464844 21.367188-28.699218 21.300781h-210c-14.566407.039063-27.035157-10.441406-29.5-24.800781l-24.699219-139.398437h336.097656zm0 0">
                          </path>
                          <path
                            d="m360.355469 322.332031c-30.046875 0-54.402344 24.355469-54.402344 54.402344 0 30.042969 24.355469 54.398437 54.402344 54.398437 30.042969 0 54.398437-24.355468 54.398437-54.398437-.03125-30.03125-24.367187-54.371094-54.398437-54.402344zm0 88.800781c-19 0-34.402344-15.402343-34.402344-34.398437 0-19 15.402344-34.402344 34.402344-34.402344 18.996093 0 34.398437 15.402344 34.398437 34.402344 0 18.996094-15.402344 34.398437-34.398437 34.398437zm0 0">
                          </path>
                        </svg>
                      </svg>
                    </span>
                    <span class="hidden-lg-up">
                      <svg aria-hidden="true" focusable="false" role="presentation" class="icon" viewBox="0 0 550 550">
                        <svg x="20%" y="20%">
                          <path d="M306.4,313.2l-24-223.6c-0.4-3.6-3.6-6.4-7.2-6.4h-44.4V69.6c0-38.4-31.2-69.6-69.6-69.6c-38.4,0-69.6,31.2-69.6,69.6
                     v13.6H46c-3.6,0-6.8,2.8-7.2,6.4l-24,223.6c-0.4,2,0.4,4,1.6,5.6c1.2,1.6,3.2,2.4,5.2,2.4h278c2,0,4-0.8,5.2-2.4
                     C306,317.2,306.8,315.2,306.4,313.2z M223.6,123.6c3.6,0,6.4,2.8,6.4,6.4c0,3.6-2.8,6.4-6.4,6.4c-3.6,0-6.4-2.8-6.4-6.4
                     C217.2,126.4,220,123.6,223.6,123.6z M106,69.6c0-30.4,24.8-55.2,55.2-55.2c30.4,0,55.2,24.8,55.2,55.2v13.6H106V69.6z
                     M98.8,123.6c3.6,0,6.4,2.8,6.4,6.4c0,3.6-2.8,6.4-6.4,6.4c-3.6,0-6.4-2.8-6.4-6.4C92.4,126.4,95.2,123.6,98.8,123.6z M30,306.4
                     L52.4,97.2h39.2v13.2c-8,2.8-13.6,10.4-13.6,19.2c0,11.2,9.2,20.4,20.4,20.4c11.2,0,20.4-9.2,20.4-20.4c0-8.8-5.6-16.4-13.6-19.2
                     V97.2h110.4v13.2c-8,2.8-13.6,10.4-13.6,19.2c0,11.2,9.2,20.4,20.4,20.4c11.2,0,20.4-9.2,20.4-20.4c0-8.8-5.6-16.4-13.6-19.2V97.2
                     H270l22.4,209.2H30z"></path>
                        </svg>
                      </svg>
                    </span>
                  </span>
                  <div v-if="cart" :class="{ 'toggle-dropdown active': cart }"
                    class="cart-price-content hidden-lg-down">
                    <span class="title">Shopping Cart</span>

                    <span class="cart__subtotal">$0.00</span> -
                    <span class="item-count">0 item</span>
                  </div>
                  <div>
                    <!-- focus-inset toggle-dropdown -->

                    <!-- <div class="cart-notification-wrapper">
                      <div id="cart-notification" class="cart-notification">
                        
                        <div class="slimScrollDiv cart-empty-notification">
                          <div id="cart-notification-default">
                            <div class="cart-notification__header cart-empty">
                              <h2 class="cart-notification__heading caption-large">
                                Your Cart is currently empty!
                              </h2>
                            </div>
                          </div>
                        </div>
                        <div id="cart-notification-product"></div>
                        <div id="cart-notification-button"></div>
                      </div>
                    </div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
#nav {
  /* background-color: var(--p-surface); */
  background: #493866 !important;
  box-shadow: var(--p-shadow-top-bar);
  display: flex;
  justify-content: space-between;
  padding: 0 2%;
  height: 3.5rem;
  position: relative;
  align-items: center;
  transition: var(--p-duration-200) background-color var(--p-ease-in-out);
}

.logo {
  font-size: 1.2em;
  font-weight: 550;
}

.right-nav-items {
  display: flex;
  gap: 1em;
  align-items: center;
}

ul,
li {
  list-style: none;
}
</style>
