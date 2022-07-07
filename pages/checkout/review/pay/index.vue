<template>
  <div class="checkout-page">
    <div class="two-col-auto-grid">
      {{ lang }}
      <div class="left">
        <!-- <div class="" style="display:flex; justify-content:space-around;">
          <span>CHECKOUT</span>
          <span>Feedback</span>
        </div> -->

        <div style="grid-area: reviews; display:flex; margin-bottom:1.2em; font-weight:700; font-size:.88em;">
          {{ $t("checkout.back") }} la billing
        </div>
        <div class="checkout-left-side">
          <div class="pay-with">
            <div class="border-top">
              <h5>{{ $t("checkout.payWith") }}</h5>
            </div>
            <div class="pay-at-home">
              <input
                @change="setPayment"
                v-model="paymentMethod"
                value="payAtHome"
                type="radio"
                disabled
              />

              <span style="display:grid; display:flex; align-items:center;  margin: auto; margin-left:0; ">
                <span>{{ $t("checkout.paymentMethods.payInHand") }}</span>
                <!-- <span>we have stoped temorary </span> -->
              </span>
            </div>
            <div class="pay-with-card">
              <input
                @change="setPayment"
                v-model="paymentMethod"
                value="visa"
                type="radio"
              />
              <span><img
                  src="https://www.freepnglogos.com/uploads/visa-and-mastercard-logo-26.png"
                  alt=""
                /></span>
            </div>
            <div class="pay-with-paypal">
              <input
                @change="setPayment"
                v-model="paymentMethod"
                value="paypal"
                type="radio"
              />
              <span>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAxcHgiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAxMDEgMzIiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHhtbG5zPSJodHRwOiYjeDJGOyYjeDJGO3d3dy53My5vcmcmI3gyRjsyMDAwJiN4MkY7c3ZnIj48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDEyLjIzNyAyLjggTCA0LjQzNyAyLjggQyAzLjkzNyAyLjggMy40MzcgMy4yIDMuMzM3IDMuNyBMIDAuMjM3IDIzLjcgQyAwLjEzNyAyNC4xIDAuNDM3IDI0LjQgMC44MzcgMjQuNCBMIDQuNTM3IDI0LjQgQyA1LjAzNyAyNC40IDUuNTM3IDI0IDUuNjM3IDIzLjUgTCA2LjQzNyAxOC4xIEMgNi41MzcgMTcuNiA2LjkzNyAxNy4yIDcuNTM3IDE3LjIgTCAxMC4wMzcgMTcuMiBDIDE1LjEzNyAxNy4yIDE4LjEzNyAxNC43IDE4LjkzNyA5LjggQyAxOS4yMzcgNy43IDE4LjkzNyA2IDE3LjkzNyA0LjggQyAxNi44MzcgMy41IDE0LjgzNyAyLjggMTIuMjM3IDIuOCBaIE0gMTMuMTM3IDEwLjEgQyAxMi43MzcgMTIuOSAxMC41MzcgMTIuOSA4LjUzNyAxMi45IEwgNy4zMzcgMTIuOSBMIDguMTM3IDcuNyBDIDguMTM3IDcuNCA4LjQzNyA3LjIgOC43MzcgNy4yIEwgOS4yMzcgNy4yIEMgMTAuNjM3IDcuMiAxMS45MzcgNy4yIDEyLjYzNyA4IEMgMTMuMTM3IDguNCAxMy4zMzcgOS4xIDEzLjEzNyAxMC4xIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDM1LjQzNyAxMCBMIDMxLjczNyAxMCBDIDMxLjQzNyAxMCAzMS4xMzcgMTAuMiAzMS4xMzcgMTAuNSBMIDMwLjkzNyAxMS41IEwgMzAuNjM3IDExLjEgQyAyOS44MzcgOS45IDI4LjAzNyA5LjUgMjYuMjM3IDkuNSBDIDIyLjEzNyA5LjUgMTguNjM3IDEyLjYgMTcuOTM3IDE3IEMgMTcuNTM3IDE5LjIgMTguMDM3IDIxLjMgMTkuMzM3IDIyLjcgQyAyMC40MzcgMjQgMjIuMTM3IDI0LjYgMjQuMDM3IDI0LjYgQyAyNy4zMzcgMjQuNiAyOS4yMzcgMjIuNSAyOS4yMzcgMjIuNSBMIDI5LjAzNyAyMy41IEMgMjguOTM3IDIzLjkgMjkuMjM3IDI0LjMgMjkuNjM3IDI0LjMgTCAzMy4wMzcgMjQuMyBDIDMzLjUzNyAyNC4zIDM0LjAzNyAyMy45IDM0LjEzNyAyMy40IEwgMzYuMTM3IDEwLjYgQyAzNi4yMzcgMTAuNCAzNS44MzcgMTAgMzUuNDM3IDEwIFogTSAzMC4zMzcgMTcuMiBDIDI5LjkzNyAxOS4zIDI4LjMzNyAyMC44IDI2LjEzNyAyMC44IEMgMjUuMDM3IDIwLjggMjQuMjM3IDIwLjUgMjMuNjM3IDE5LjggQyAyMy4wMzcgMTkuMSAyMi44MzcgMTguMiAyMy4wMzcgMTcuMiBDIDIzLjMzNyAxNS4xIDI1LjEzNyAxMy42IDI3LjIzNyAxMy42IEMgMjguMzM3IDEzLjYgMjkuMTM3IDE0IDI5LjczNyAxNC42IEMgMzAuMjM3IDE1LjMgMzAuNDM3IDE2LjIgMzAuMzM3IDE3LjIgWiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMwMDMwODciIGQ9Ik0gNTUuMzM3IDEwIEwgNTEuNjM3IDEwIEMgNTEuMjM3IDEwIDUwLjkzNyAxMC4yIDUwLjczNyAxMC41IEwgNDUuNTM3IDE4LjEgTCA0My4zMzcgMTAuOCBDIDQzLjIzNyAxMC4zIDQyLjczNyAxMCA0Mi4zMzcgMTAgTCAzOC42MzcgMTAgQyAzOC4yMzcgMTAgMzcuODM3IDEwLjQgMzguMDM3IDEwLjkgTCA0Mi4xMzcgMjMgTCAzOC4yMzcgMjguNCBDIDM3LjkzNyAyOC44IDM4LjIzNyAyOS40IDM4LjczNyAyOS40IEwgNDIuNDM3IDI5LjQgQyA0Mi44MzcgMjkuNCA0My4xMzcgMjkuMiA0My4zMzcgMjguOSBMIDU1LjgzNyAxMC45IEMgNTYuMTM3IDEwLjYgNTUuODM3IDEwIDU1LjMzNyAxMCBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA2Ny43MzcgMi44IEwgNTkuOTM3IDIuOCBDIDU5LjQzNyAyLjggNTguOTM3IDMuMiA1OC44MzcgMy43IEwgNTUuNzM3IDIzLjYgQyA1NS42MzcgMjQgNTUuOTM3IDI0LjMgNTYuMzM3IDI0LjMgTCA2MC4zMzcgMjQuMyBDIDYwLjczNyAyNC4zIDYxLjAzNyAyNCA2MS4wMzcgMjMuNyBMIDYxLjkzNyAxOCBDIDYyLjAzNyAxNy41IDYyLjQzNyAxNy4xIDYzLjAzNyAxNy4xIEwgNjUuNTM3IDE3LjEgQyA3MC42MzcgMTcuMSA3My42MzcgMTQuNiA3NC40MzcgOS43IEMgNzQuNzM3IDcuNiA3NC40MzcgNS45IDczLjQzNyA0LjcgQyA3Mi4yMzcgMy41IDcwLjMzNyAyLjggNjcuNzM3IDIuOCBaIE0gNjguNjM3IDEwLjEgQyA2OC4yMzcgMTIuOSA2Ni4wMzcgMTIuOSA2NC4wMzcgMTIuOSBMIDYyLjgzNyAxMi45IEwgNjMuNjM3IDcuNyBDIDYzLjYzNyA3LjQgNjMuOTM3IDcuMiA2NC4yMzcgNy4yIEwgNjQuNzM3IDcuMiBDIDY2LjEzNyA3LjIgNjcuNDM3IDcuMiA2OC4xMzcgOCBDIDY4LjYzNyA4LjQgNjguNzM3IDkuMSA2OC42MzcgMTAuMSBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5MC45MzcgMTAgTCA4Ny4yMzcgMTAgQyA4Ni45MzcgMTAgODYuNjM3IDEwLjIgODYuNjM3IDEwLjUgTCA4Ni40MzcgMTEuNSBMIDg2LjEzNyAxMS4xIEMgODUuMzM3IDkuOSA4My41MzcgOS41IDgxLjczNyA5LjUgQyA3Ny42MzcgOS41IDc0LjEzNyAxMi42IDczLjQzNyAxNyBDIDczLjAzNyAxOS4yIDczLjUzNyAyMS4zIDc0LjgzNyAyMi43IEMgNzUuOTM3IDI0IDc3LjYzNyAyNC42IDc5LjUzNyAyNC42IEMgODIuODM3IDI0LjYgODQuNzM3IDIyLjUgODQuNzM3IDIyLjUgTCA4NC41MzcgMjMuNSBDIDg0LjQzNyAyMy45IDg0LjczNyAyNC4zIDg1LjEzNyAyNC4zIEwgODguNTM3IDI0LjMgQyA4OS4wMzcgMjQuMyA4OS41MzcgMjMuOSA4OS42MzcgMjMuNCBMIDkxLjYzNyAxMC42IEMgOTEuNjM3IDEwLjQgOTEuMzM3IDEwIDkwLjkzNyAxMCBaIE0gODUuNzM3IDE3LjIgQyA4NS4zMzcgMTkuMyA4My43MzcgMjAuOCA4MS41MzcgMjAuOCBDIDgwLjQzNyAyMC44IDc5LjYzNyAyMC41IDc5LjAzNyAxOS44IEMgNzguNDM3IDE5LjEgNzguMjM3IDE4LjIgNzguNDM3IDE3LjIgQyA3OC43MzcgMTUuMSA4MC41MzcgMTMuNiA4Mi42MzcgMTMuNiBDIDgzLjczNyAxMy42IDg0LjUzNyAxNCA4NS4xMzcgMTQuNiBDIDg1LjczNyAxNS4zIDg1LjkzNyAxNi4yIDg1LjczNyAxNy4yIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDA5Y2RlIiBkPSJNIDk1LjMzNyAzLjMgTCA5Mi4xMzcgMjMuNiBDIDkyLjAzNyAyNCA5Mi4zMzcgMjQuMyA5Mi43MzcgMjQuMyBMIDk1LjkzNyAyNC4zIEMgOTYuNDM3IDI0LjMgOTYuOTM3IDIzLjkgOTcuMDM3IDIzLjQgTCAxMDAuMjM3IDMuNSBDIDEwMC4zMzcgMy4xIDEwMC4wMzcgMi44IDk5LjYzNyAyLjggTCA5Ni4wMzcgMi44IEMgOTUuNjM3IDIuOCA5NS40MzcgMyA5NS4zMzcgMy4zIFoiPjwvcGF0aD48L3N2Zz4="
                  alt="global express shop, express checkout with Paypal"
                  aria-label="PayPal"
                /></span>
            </div>
            <div
              class="pay-with-bank"
              style="display: grid;"
            >
              <span>
                <input
                  @change="setPayment"
                  v-model="paymentMethod"
                  v-b-toggle.collapse-1
                  value="bank"
                  type="radio"
                />
                <span>
                  <img
                    src="https://mma.prnewswire.com/media/363517/ing_financial_holdings_corporation_logo.jpg"
                    alt=""
                  /><img src="https://www.tremend.com/sites/default/files/brd_logo.png" /><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Raiffeisen_Bank.svg/1024px-Raiffeisen_Bank.svg.png" /></span></span>

              <span>v-b-toggle.collapse-1
                <b-collapse
                  id="collapse-1"
                  class="mt-2"
                >
                  <b-card style="padding:0em 1.8%;">
                    <h5 style="font-weight:600; font-size:1em;">
                      Selecteaza banca
                    </h5>
                    <div style="display:flex; flex-direction:row; justify-content:space-between; ">
                      <span class="bank--name"><img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/ING_Group_N.V._Logo.svg/1280px-ING_Group_N.V._Logo.svg.png"
                          alt=""
                        /></span>
                      <span class="bank--name"><img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Raiffeisen_Bank.svg/1280px-Raiffeisen_Bank.svg.png"
                          alt=""
                        /></span>
                      <span class="bank--name"><img
                          src="https://www.brd.ro/sites/all/themes/brd/img/logo-mic.png"
                          alt=""
                        /></span>
                    </div>
                    <!-- <p class="card-text">Collapse contents Here</p>

                    <b-button v-b-toggle.collapse-1-inner size="xs"
                      >Toggle Inner Collapse</b-button
                    >
                    <b-collapse id="collapse-1-inner" class="mt-2">
                      <b-card>Hello!</b-card>
                    </b-collapse> -->
                  </b-card>
                </b-collapse>
              </span>
            </div>

            <div class="pay-later">
              <input
                @change="setPayment"
                v-model="paymentMethod"
                value="paylater"
                type="radio"
              />
              <span>
                <img
                  style="background:black; border-radius:10px; padding:.2em;"
                  src="https://www.edigitalagency.com.au/wp-content/uploads/afterpay-logo-white-png.png"
                  alt=""
                />
                <span>{{ $t("checkout.paymentMethods.payLater") }}
                  <!-- <span style="font-size:.65em; margin:.2em; color:gred;"
                    >( You must be logged in )</span
                  > -->
                </span>
              </span>
            </div>
          </div>

          <div class="ship-to">
            <div class="border-top">
              <h5>{{ $t("checkout.ship") }}</h5>
            </div>
            <div style="opacity:.75;">
              <span style="font-size:.75em; font-weight:600;">Rosa Maria Gonzalez</span>
              <span style="font-size:.75em; font-weight:600;">Espana, Santander</span>
              <span style="font-size:.75em; font-weight:600;">Avenida Reina Victoria 13</span>
              <span style="font-size:.75em; font-weight:600;">Cantabria, 39312</span>
              <span style="font-size:.75em; font-weight:600;">643-(***)-305</span>
              <a href="#">Schimba adresa</a>
            </div>
          </div>
          <div class="review-item-and-shipping">
            <div class="border-top">
              <h5>{{ $t("checkout.reviewItem") }}</h5>
            </div>
            <div
              class="body-listing-review-order"
              style="margin-bottom:.8em;"
            >
              <img
                src="https://ae01.alicdn.com/kf/H06236b3e1a4b42beb64f13398e2cb362e/Funda-de-silicona-l-quida-Original-para-iPhone-funda-suave-cuadrada-de-lujo-para-iPhone-11.jpg"
                alt=""
              />
              <div
                class="left-body"
                style="display:grid; opacity:.75;"
              >
                <h6
                  class="ordered-item-title"
                  style="font-weight:750; font-size:.92em; margin-bottom:.5em;"
                >
                  Funda Silicona Liquida iPhone 12
                </h6>
                <span style="font-size:.82em; font-weight:600;">
                  Shipping cost 0 Eur
                </span>
                <span style="font-size:.82em; font-weight:600;">
                  Delivery time 3 days
                </span>
                <span style="font-size:.82em; font-weight:600;">
                  Returns 30 days</span>
                <span style="font-size:.82em; font-weight:600;">
                  Product Number #7493023032</span>
              </div>
            </div>
          </div>
          <div class="gift-cards-coupons">
            <div class="border-top">
              <h5>{{ $t("checkout.giftCard.title") }}</h5>
            </div>
            <div class="">
              <input
                type="text"
                class="form-control"
                placeholder="Add your gift card number"
              />
              <p>{{ $t("checkout.giftCard.msg") }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="right ">
        <div style="grid-area: reviews; display:flex; text-align:right; direction: rtl; margin-bottom:1.2em; ">
          <a
            href=""
            style="font-weight:700; font-size:.75em;"
          >{{
						$t("checkout.review")
					}}</a>
        </div>
        <div class="checkout-right-side">
          <div
            class="confirm-and-pay"
            style="display:grid; grid-gap:.2em;"
          >
            <div
              class="item-price-ship"
              style="display:grid; grid-gap:.2em; font-weight:lighter;"
            >
              <div style="display:flex; justify-content:space-between;">
                <span>{{ $t("checkout.subtotal") }}</span>
                <span>&euro;6.95</span>
              </div>

              <div style="display:flex; justify-content:space-between;">
                <span>{{ $t("checkout.shipping") }}</span>
                <span>&euro;0.00</span>
              </div>
            </div>
            <hr />
            <div
              class="order-total"
              style="display:flex; justify-content:space-between;"
            >
              <span>{{ $t("checkout.ordertotal") }}</span>
              <span><strong>&euro;6.95</strong></span>
            </div>
            <div
              class=""
              style=""
            >
              <nuxt-link
                :to="localePath('/checkout/thank-you')"
                class="md-raised btn button--blue"
                :disabled="isDisabled"
                style="color:white; width:100%; max-width:auto;"
              >
                <span style="font-weight:700;">{{
									$t("checkout.button")
								}}</span>
              </nuxt-link>
            </div>
            <div style="color:red; display:grid; gap-gap:.5em; font-weight: 500; font-size:.75em; text-align:center">
              <span
                v-if="paymentMethod == ''"
                style="padding-top:-2em; font-weight:700;"
              >{{ $t("checkout.errMsg") }}</span>
              <!-- <span>* Add Shipping Address</span> -->
            </div>
          </div>
        </div>
        <img
          style="width:22.5em; opacity:.35;"
          src="https://www.pngitem.com/pimgs/m/353-3532513_payment-powered-by-stripe-hd-png-download.png"
          alt=""
        />
      </div>
    </div>
    <CheckoutFooter
      class="two-col-auto-grid"
      style="margin:auto;"
    />
  </div>
</template>

<script>
import CheckoutFooter from "~/components/FooterCheckout";
import MdButton from "vue-material/dist/components";
export default {
  layout: "default",
  components: {
    MdButton,
    CheckoutFooter,
  },
  data() {
    return {
      paymentMethod: false,
      paymentSubmited: false,
    };
  },
  asyncData({ params, req, res, redirect, error }) {
    if (process.server) {
      return { locale: params.locale };
    }
  },
  computed: {
    isDisabled: function () {
      return !this.paymentMethod.length > 0;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
  methods: {
    back: () => {
      window.history.back();
    },
    setPayment: function (e) {
      this.paymentMethod = [e.target.value];
      console.log(this.paymentMethod);
    },
    selectPaymentMethod: () => {
      // select payment method
      // check if a method payment is already checked
      // that can be possible by checking if data => paymentMethod is empty or not,
      // if empty paymentMethod, append it
    },
  },
};
</script>

<style scoped lang="scss" >
.checkout-page {
  position: relative;
  // color: #000000;
  // background-color: #fafafa;
  padding: 2em 0.1%;
  -webkit-text-size-adjust: 100%;
  font-size: 0.93em;
}

.two-col-auto-grid {
  // display: grid;
  gap: 2em;
  width: 100%;
  max-width: auto;
  display: flex;
  gap: 0.9em;
  justify-content: center;
  grid-template-areas:
    "logo title"
    "back reviews"
    "checkoutLeftSide  checkoutRightSide"
    ". .  secured";
}

.big-logo {
  font-size: 1.5em;
  font-weight: 700;
  display: flex;
  // justify-content: space-between;
  color: rgb(29, 29, 29);
  h5:nth-child(1) {
    grid-area: logo;
    // border-left: 1px solid rgb(236, 236, 236);
    // border-right: 1px solid rgb(236, 236, 236);
  }
  h5:nth-child(2) {
    grid-area: title;
    text-align: right;
    direction: rtl;
  }
}

.back,
.reviews {
  // margin: 1em;
}
@media (min-width: 60em) {
  .two-col-auto-grid {
    padding: 1em 18%;
  }
  .left {
    // width: 100%;
    width: 100%;
    // max-width: 38em;
    min-width: 35em;
    // width: 3em;
  }
  .side {
    display: flex;

    width: 100%;
    min-width: 16em;
    // padding: 1em;
    // width: 22em;
  }
}

@media (min-width: 50em) {
  .checkout-page {
    padding: 2em 2%;
  }
  .left {
    // width: 100%;
    width: 100%;
    // max-width: auto;
    // min-width: 25em;
    // width: 30em;
  }
  .right {
    // width: 30em;
    display: flex;
    flex-direction: column;
  }
}

.checkout-left-side {
  border: 1px solid rgb(243, 243, 243);
  grid-area: checkoutLeftSide;
  position: relative;
  display: grid;
  grid-gap: 0.5em;
  width: 100%;
  max-width: auto;

  .review-item-and-shipping {
    // padding: 0.2em;

    // border-bottom: 1.5px solid rgb(240, 240, 240);
    .body-listing-review-order {
      display: flex;
      img {
        width: 75px;
        height: 75px;
      }
      .left-body {
        font-size: 0.82em;

        .ordered-item-title {
          margin: auto;
          margin-left: 0;
          padding-left: 0;
        }
      }
    }
  }

  .border-top {
    // background-color: rgb(249, 251, 252);
    // padding: 0.3em;
    // margin-left: 0.15em;
    // margin-top: 0.2em;
    // margin-bottom: 0.2em;
  }
  .pay-with-card {
    // border-top: 1px solid rgb(230, 230, 230);
  }

  .pay-at-home {
    span:nth-child(1) {
      // background: rgb(255, 182, 23);
      // color: white;
      // padding: 0.5em;
      height: 30px;
      opacity: 0.95;
      border-radius: 20px;
      font-size: 0.905em;
      font-weight: 600;
      // border: 1px solid rgb(235, 235, 235);
    }
    span:nth-child(2) {
      // background: rgb(248, 171, 6);
      color: black;
      opacity: 0.7;
      border-radius: 20px;
      font-size: 0.9em;
      margin-left: 1em;
    }
  }

  .pay-at-home,
  .pay-with-card,
  .pay-with-paypal,
  .pay-later,
  .pay-with-bank {
    display: flex;
    align-self: center;
    align-content: center;
    align-items: center;
    border-top: 1px solid rgb(233, 233, 233);
    margin-left: 0.5em;

    // border-top: 1px solid rgb(230, 230, 230);
    // border-bottom: 1px solid rgb(221, 221, 221);
    // border-top: 1px solid rgb(228, 228, 228);
    // border-bottom: 1px solid rgb(228, 228, 228);
    // padding-left: 0.22em;
    // margin-left: 0.3em;
    // background-color: rgb(248, 248, 248);
    &:hover {
      background-color: rgb(239, 247, 248);

      cursor: pointer;
    }
    span {
      padding-top: 0.5em;
      padding-bottom: 0.45em;
      input {
        padding-right: 0.3em;
      }
      img {
        margin: 0.2em;
        margin-left: 0.9em;
        width: 90px;
        height: 20px;
      }
    }
    span {
      margin: 0.2em;
      font-size: 0.85em;
      font-weight: 600;
    }
  }

  .pay-with-bank {
    span {
      img {
        width: 72px;
        height: 17.5px;
      }
    }
    span > span {
      opacity: 0.6;
    }
  }
  .pay-later {
    span {
      img {
        margin-right: 1em;
      }
    }
    span > span {
      opacity: 0.6;
    }
  }
  .ship-to {
    display: grid;

    div:nth-child(2) {
      // background-color: rgb(255, 255, 255);

      padding: 0 2.5%;
      font-size: 0.92em;
      opacity: 0.95;
      display: flex;
      flex-direction: column;

      a {
        font-size: 0.75em;
        font-weight: 700;
      }
    }
  }

  .pay-with,
  .ship-to,
  .review-item-and-shipping,
  .gift-cards-coupons {
    // border-radius: 5px;
    // display: inline-block;
    // box-sizing: border-box;
    // border-radius: 4px;
    // padding: 0.5em;
    // color: black;

    background-color: rgb(255, 255, 255);
    // border-bottom: 1px solid rgb(230, 230, 230);

    display: grid;
    h5 {
      border-bottom: 1.5px solid rgb(240, 240, 240);
    }
    // grid-gap: 0.5em;
    span {
    }
  }
}

.right {
  // border-collapse: collapse;
  width: 100%;
  max-width: auto;
  max-width: 22em;
}

.checkout-right-side {
  border: 1px solid rgb(226, 226, 226);
  // border-radius: 4px;
  background-color: rgb(255, 255, 255);
  padding: 1em;

  // height: 16em;
  .confirm-and-pay {
    .item-price-ship {
      span {
        font-weight: 400;
      }
    }
    .order-total {
      align-items: center;
    }
    .order-total > span:nth-child(1) {
      font-weight: 550;
      font-size: 0.9em;
      opacity: 1;
    }
    .order-total > span:nth-child(2) {
      font-weight: 750;
      font-size: 1.35em;
    }
  }
}

.secured {
  grid-area: secured;
}

@media (max-width: 55em) {
  .two-col-auto-grid {
    padding: 0em 2%;
    // position: relative;
    display: flex; // aici
    flex-direction: column;
    gap: 1.5em;
    // grid-gap: 2em; // aici
    grid-template-areas:
      "."
      "."
      "checkout-right-side"
      "checkoutLeftSide";
  }
  .right {
    width: 100%;
    max-width: auto;
  }
  .left {
    grid-area: checkoutLeftSide;
    width: 100%;
    max-width: auto;

    .pay-with {
      display: grid;
      // grid-gap: 0.2em;
      span {
        // border-bottom: 1px solid grey;
        display: flex;
        align-items: center;
      }
    }
    .ship-to {
      display: grid;

      div {
        span {
          font-size: 0.82em;
          font-weight: 550;
          // opacity: 0.6;
        }
      }
    }

    .checkout-left-side {
      // position: relative;
      // margin: auto;
      // display: grid;
      // grid-gap: 1em;
      width: 100%;
      max-width: auto;
    }

    .pay-with-card {
      // background: url(https://secureir.ebaystatic.com/cr/v/c1/payment-sprites-0.1.60.svg)
      //   89.41419% 7.73841% no-repeat;
      // width: 41.96px;
      // height: 25.95px;
      // vertical-align: middle;
      // display: inline-block;
      span {
        img {
          margin-left: -0.03em;
        }
      }
    }
    .review-item-and-shipping {
    }

    .pay-with,
    .ship-to,
    .review-item-and-shipping,
    .gift-cards-coupons {
      // border: 1px solid rgb(230, 230, 230);
      // border-radius: 4px;
      // padding: 0.5em;
      background-color: white;
      span {
        // padding: 0.25em;
      }
    }
  }

  .right {
    width: 100%;
    max-width: auto;
  }

  .checkout-right-side {
    grid-area: checkoutRightSide;
    border: 1px solid rgb(230, 230, 230);
    border-radius: 4px;
    background-color: white;
    width: 100%;
    // padding: 1em;
    max-width: auto;

    // height: 15em;
    .confirm-and-pay {
    }
  }
}

a {
  text-decoration: none;
  font-size: 0.85em;
  font-weight: 500;
  // color: #13a0b9 !important;
  opacity: 0.95;
}

h5 {
  // font-family: "Market Sans", "Helvetica Neue", Helvetica, Arial, Roboto,
  // sans-serif;
  // padding: 0.5em 0%;
  margin-top: 0.5em;
  padding-bottom: 0.8em;
  font-size: 0.85em;
  font-weight: 600;
  display: flex;
  align-content: center;
  // border-bottom: 1px solid rgb(218, 218, 218);
  // border-bottom: 1px solid rgb(230, 230, 230);
  color: black;
  padding-left: 0.5em;
  padding-top: 0.2em;
  // margin-left: 1em;
  // margin-top: 1.2em;
  width: 100%;
  max-width: auto;
}

.gift-cards-coupons > div:nth-child(2) {
  padding: 0.5em 2.5%;
  input {
    font-size: 0.8em;
  }
  p {
    padding: 0.5em 0%;
    font-size: 0.75em;
  }
}

button,
.btn {
  transition-duration: 0.2s;
  width: auto;
  max-width: 100%;
  height: 40px;
  font-weight: 800;
  font-size: 0.92em;
  margin: 0 auto;
  // padding: 0;
  // display: table-cell;
  vertical-align: middle;
  background-color: rgb(11, 205, 240) !important;
  // color: black;
}

button:disabled {
  color: grey;
}

.bank--name {
  padding: 0em 5%;
  border: 1px solid rgb(243, 243, 243);
  // margin: auto;
  width: 80px;
  height: 80px;
  padding: auto;
  img {
    // margin: auto;
    width: 80px;
    height: 80px;
    padding: auto;
    // padding: 1em;
    // width: 100%;
    // max-width: auto;
    // margin: 1em;
    // height: 100px;
    // padding: 1em;
  }
}
</style>
