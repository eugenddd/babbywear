<template>
  <v-container fluid>
    <div class="container-fluid">
      <div class="listing-page">
        <!-- {{ currentListing }} -->
        <div
          id="active-listings-now"
          style="display:flex; flex-direction:column; justify-content:start; gap:1em;"
        >
          <!-- {{ $store.state.listing.currentListing }} -->
          <div id="collapse-active-listings">
            <!-- <div class="collapse">
						<h5>
							Productos de la misma categoría
						</h5>
					</div> -->

            <!-- <div class="collapsible">
						<h5
							:class="visible ? null : 'collapsed'"
							:aria-expanded="visible ? 'true' : 'false'"
							aria-controls="collapse-4"
							@click="visible = !visible"
						>
							Productos de la misma categoría
						</h5>
					</div> -->
            <!-- <b-collapse id="collapse-4" v-model="visible" class="mt-2">
						<b-card>I should start open!</b-card>
					</b-collapse> -->

            <div class="collapsible">
              <ActiveOnSaleItems
                :listings="listings"
                class="active-listings"
                style="height:60%"
              />
            </div>
          </div>

          <!-- <div class="checkout-steps ">

				</div> -->
        </div>

        <div class="product-data">
          <!-- https://blog.lichter.io/posts/dynamic-images-vue-nuxt/ -->

          <div
            class="free-shipping-text"
            style=" z-index:4;"
          >
            <span>{{ $t("layout.page-sets.free-shipping") }}</span>&nbsp;&nbsp;
            <span><img
                :src="require(`~/assets/imgs/${layout_imgs[locale].standard}`)"
                alt=""
              /></span>
          </div>
          <client-only
            v-if="this.images !== ''"
            placeholder="Loading..."
          >
            <agile
              id="carousel"
              ref="main"
              :fade="true"
              :options="options1"
              :as-nav-for="asNavFor1"
            >
              <span
                class="slide"
                v-for="(slide, index) in this.slides"
                :key="index"
                :class="`slide--${index}`"
              >
                <img :src="`${slide.img}`" />
              </span>
            </agile>

            <div class="features-listing">
              <div>
                Global Express Shipping
              </div>
              <button class="btn btn-success feature-listing--1">
                Descuento 35%
              </button>
            </div>

            <br />

            <agile
              ref="thumbnails"
              :options="options2"
              :as-nav-for="asNavFor2"
            >
              <div
                class="slide--thumbniail"
                v-for="(slide, index) in this.slides"
                :key="index"
                :class="`slide--${index}`"
                :as-nav-for="[$refs.main]"
                :slides-to-show="5"
                autoplay
                @click="$refs.thumbnails.goTo(index)"
              >
                <img
                  :src="`${slide.img}`"
                  style="border-radius: 4px;"
                />
              </div>
            </agile>
          </client-only>

          <div
            v-else
            style="background-color:grey; height:50vh; width:100%; min-width:350px; max-width:600px !important;"
          >
            Saluttt
          </div>

          <section class="description">
            <div class="title-product">
              <h1 class="product-title--primary">
                {{ capitalize(this.listing[locale].productTitle) }}
              </h1>

              <h2 class="product-title--second">
                {{ capitalize(this.listing[locale].secondTitle) }}
              </h2>
            </div>
            <div class="buyer--motivation">
              <div class="already-sold-items">
                <span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnqCYEMUuliYDd-5izlRMrlt9_jGcW7c1J7Q&usqp=CAU"
                    alt=""
                  />
                  <h6 class="number-items-sold">
                    9271 solds
                  </h6>
                </span>
              </div>
              <div class="secure">
                <img src="https://trustlock.co/wp-content/uploads/2019/01/free-website-trust-badges-100-money-back-guarantee-white-green.png" />
                <img src="https://www.veeble.org/blog/wp-content/uploads/2018/06/ssl-secure.png" />
                <img src="https://png.pngitem.com/pimgs/s/93-932042_5-star-trustpilot-flag-hd-png-download.png" />
              </div>
            </div>

            <div
              v-html="this.listing[locale].productDescription"
              class="listing-details"
            >
              <!-- <div style="box-sizing: content-box"></div> -->
            </div>
          </section>
        </div>

        <div class="checkout-steps">
          <div class="checkout-right-in-page">
            <div class="checkout-title">
              {{ $t("layout.checkout-steps.title") }}
            </div>
            <div
              v-if="activeModal === true"
              class="modal-container"
            >
              <div class="top-of-modal">
                <div
                  @click="closeModal"
                  class="xclose"
                ></div>
              </div>

              <Billing class="modal-content" />
            </div>
            <div
              v-if="checkoutSteps === true"
              class="body-elements"
            >
              <div class="secured-checkout">
                <h5>
                  {{ $t("layout.checkout-steps.why-us.title") }}
                </h5>
                <span class="grid-item">
                  <img
                    class="features-img"
                    :src="require(`~/assets/imgs/fast_delivery.png`)"
                    alt=""
                  />
                  <span>{{ $t("layout.checkout-steps.why-us.returns") }}</span>
                </span>
                <span class="grid-item">
                  <img
                    class="features-img"
                    :src="require(`~/assets/imgs/track_order.png`)"
                    alt=""
                  />
                  <span>{{ $t("layout.checkout-steps.why-us.track") }}</span>
                </span>
                <span class="grid-item">
                  <img
                    class="features-img"
                    :src="require(`~/assets/imgs/buyer_protection.png`)"
                    alt=""
                  />
                  <span>{{ $t("layout.checkout-steps.why-us.protection") }}</span>
                </span>
              </div>
              <div class="delivery-time custom-control custom-radio  ">
                <h5>
                  {{ $t("layout.checkout-steps.shipping-fee.title") }}
                </h5>
                <div class="premium-shipping-price">
                  <span style="align-self: center; align-content:center; align-items:center; align-content:center; ">
                    <input
                      type="radio"
                      checked
                      class="custom-control-input"
                      id="defaultGroupExample1"
                      name="groupOfDefaultRadios"
                    />

                    <label
                      class="custom-control-label"
                      for="defaultGroupExample1"
                    >Global Express Pro</label>
                  </span>

                  <!-- <span>(3 - 7 days) </span> -->
                  <span>&euro;0.00</span>
                </div>

                <div
                  class="premium-shipping-price"
                  style="display: flex; justify-content: space-between"
                >
                  <span style="align-self: center; align-items:center; align-content:center;">
                    <input
                      type="radio"
                      class="custom-control-input"
                      id="defaultGroupExample2"
                      name="groupOfDefaultRadios"
                    />
                    <label
                      class="custom-control-label"
                      for="defaultGroupExample2"
                    >{{
											$t("layout.checkout-steps.shipping-fee.standard")
										}}</label>
                  </span>

                  <!--
                 :src="
                      `~/assets/imgs/` +
                        $t(
                          'layout.checkout-steps.shipping-fee.standard-image'
                        ) +
                        `.png`
                    " -->
                  <!-- <span><strong>around 3 - 5 Days</strong></span> -->
                  <span>&euro;3.50</span>
                </div>
                <div class="premium-shipping-price">
                  <span style="display: flex; gap:.5em; align-self: center; align-items:center; align-content:center;">
                    <input
                      type="radio"
                      class="custom-control-input"
                      id="defaultGroupExample3"
                      name="groupOfDefaultRadios"
                    />
                    <label
                      class="custom-control-label"
                      for="defaultGroupExample3"
                    >GLS
                      {{
											$t("layout.checkout-steps.shipping-fee.express")
										}}</label>
                  </span>
                  <!-- <span>(1 - 2 days) </span> -->
                  <span>&euro;5.00</span>
                </div>
              </div>

              <div class="estimate-delivery ">
                <h5>
                  {{ $t("layout.checkout-steps.estimate-delivery") }}
                </h5>
                <div class="between">
                  Prevista entre el jue. 11 feb. y el lun. 15 feb.
                </div>
                <!-- <div class="late-delivery">
                Some orders can have a late
              </div> -->
              </div>

              <div class="prices-section sticky ">
                <h5>
                  {{ $t("layout.checkout-steps.total.title") }}
                </h5>
                <div class="price-now">
                  <span>{{ $t("layout.checkout-steps.total.price") }}</span>
                  <!-- <span> &euro;4.99</span> -->
                  <span>
                    &euro;
                    {{
										listingPricesConverter(
											this.listing[locale].priceDiscountedTo
										)
									}}</span>
                </div>
                <div
                  class="price-now"
                  style="color: grey"
                >
                  <span>{{
									$t("layout.checkout-steps.total.shipping-cost")
								}}</span>
                  <span> &euro;0.00</span>
                </div>
                <div class="price-now">
                  <span>{{ $t("layout.checkout-steps.total.total") }}</span>
                  <!-- <span>&euro;4.99</span> -->
                  <span v-if="this.locale === 'es' ? '&euro;' : 'ron'">
                    &euro;
                    {{
										listingPricesConverter(
											this.listing[locale].priceDiscountedTo
										)
									}}</span>
                </div>
              </div>

              <div class="action-checkout">
                <nuxt-link
                  :to="{
									name: `checkout-billing-billing___${locale}`,
									params: { locale: locale, listingData: data },
									query: { id: id },
								}"
                  class="btn button--blue"
                >
                  {{ $t("layout.checkout-steps.actions.btn-shipping-details") }}
                  &#8594;
                </nuxt-link>
                <!-- :to={localePath('/checkout/billing/')} -->
                <!-- <nuxt-link
                :to="{
                  name: 'product-id',
                  params: { id: product.id, slug: product.name.toLowerCase() }
                }"
                >{{ product.name }}</nuxt-link
              > -->

                <!-- {{$i18n.locales}} -->
                <!-- <nuxt-link
                :to="localePath('/paypal-checkout/')"
                style="background-color: #fac515;
  color: black; font-weight:700; margin:auto; "
                class="btn"
              >
                {{ $t("layout.checkout-steps.actions.btn-paypal-express") }}
              </nuxt-link> -->
                <nuxt-link
                  :to="localePath('/paypal-checkout/')"
                  class=" btn-paypal button--blue paypal-button paypal-button-color-gold"
                  aria-label="PayPal"
                >
                  <img
                    class="paypal-payment-logo"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAxcHgiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAxMDEgMzIiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHhtbG5zPSJodHRwOiYjeDJGOyYjeDJGO3d3dy53My5vcmcmI3gyRjsyMDAwJiN4MkY7c3ZnIj48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDEyLjIzNyAyLjggTCA0LjQzNyAyLjggQyAzLjkzNyAyLjggMy40MzcgMy4yIDMuMzM3IDMuNyBMIDAuMjM3IDIzLjcgQyAwLjEzNyAyNC4xIDAuNDM3IDI0LjQgMC44MzcgMjQuNCBMIDQuNTM3IDI0LjQgQyA1LjAzNyAyNC40IDUuNTM3IDI0IDUuNjM3IDIzLjUgTCA2LjQzNyAxOC4xIEMgNi41MzcgMTcuNiA2LjkzNyAxNy4yIDcuNTM3IDE3LjIgTCAxMC4wMzcgMTcuMiBDIDE1LjEzNyAxNy4yIDE4LjEzNyAxNC43IDE4LjkzNyA5LjggQyAxOS4yMzcgNy43IDE4LjkzNyA2IDE3LjkzNyA0LjggQyAxNi44MzcgMy41IDE0LjgzNyAyLjggMTIuMjM3IDIuOCBaIE0gMTMuMTM3IDEwLjEgQyAxMi43MzcgMTIuOSAxMC41MzcgMTIuOSA4LjUzNyAxMi45IEwgNy4zMzcgMTIuOSBMIDguMTM3IDcuNyBDIDguMTM3IDcuNCA4LjQzNyA3LjIgOC43MzcgNy4yIEwgOS4yMzcgNy4yIEMgMTAuNjM3IDcuMiAxMS45MzcgNy4yIDEyLjYzNyA4IEMgMTMuMTM3IDguNCAxMy4zMzcgOS4xIDEzLjEzNyAxMC4xIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDM1LjQzNyAxMCBMIDMxLjczNyAxMCBDIDMxLjQzNyAxMCAzMS4xMzcgMTAuMiAzMS4xMzcgMTAuNSBMIDMwLjkzNyAxMS41IEwgMzAuNjM3IDExLjEgQyAyOS44MzcgOS45IDI4LjAzNyA5LjUgMjYuMjM3IDkuNSBDIDIyLjEzNyA5LjUgMTguNjM3IDEyLjYgMTcuOTM3IDE3IEMgMTcuNTM3IDE5LjIgMTguMDM3IDIxLjMgMTkuMzM3IDIyLjcgQyAyMC40MzcgMjQgMjIuMTM3IDI0LjYgMjQuMDM3IDI0LjYgQyAyNy4zMzcgMjQuNiAyOS4yMzcgMjIuNSAyOS4yMzcgMjIuNSBMIDI5LjAzNyAyMy41IEMgMjguOTM3IDIzLjkgMjkuMjM3IDI0LjMgMjkuNjM3IDI0LjMgTCAzMy4wMzcgMjQuMyBDIDMzLjUzNyAyNC4zIDM0LjAzNyAyMy45IDM0LjEzNyAyMy40IEwgMzYuMTM3IDEwLjYgQyAzNi4yMzcgMTAuNCAzNS44MzcgMTAgMzUuNDM3IDEwIFogTSAzMC4zMzcgMTcuMiBDIDI5LjkzNyAxOS4zIDI4LjMzNyAyMC44IDI2LjEzNyAyMC44IEMgMjUuMDM3IDIwLjggMjQuMjM3IDIwLjUgMjMuNjM3IDE5LjggQyAyMy4wMzcgMTkuMSAyMi44MzcgMTguMiAyMy4wMzcgMTcuMiBDIDIzLjMzNyAxNS4xIDI1LjEzNyAxMy42IDI3LjIzNyAxMy42IEMgMjguMzM3IDEzLjYgMjkuMTM3IDE0IDI5LjczNyAxNC42IEMgMzAuMjM3IDE1LjMgMzAuNDM3IDE2LjIgMzAuMzM3IDE3LjIgWiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMwMDMwODciIGQ9Ik0gNTUuMzM3IDEwIEwgNTEuNjM3IDEwIEMgNTEuMjM3IDEwIDUwLjkzNyAxMC4yIDUwLjczNyAxMC41IEwgNDUuNTM3IDE4LjEgTCA0My4zMzcgMTAuOCBDIDQzLjIzNyAxMC4zIDQyLjczNyAxMCA0Mi4zMzcgMTAgTCAzOC42MzcgMTAgQyAzOC4yMzcgMTAgMzcuODM3IDEwLjQgMzguMDM3IDEwLjkgTCA0Mi4xMzcgMjMgTCAzOC4yMzcgMjguNCBDIDM3LjkzNyAyOC44IDM4LjIzNyAyOS40IDM4LjczNyAyOS40IEwgNDIuNDM3IDI5LjQgQyA0Mi44MzcgMjkuNCA0My4xMzcgMjkuMiA0My4zMzcgMjguOSBMIDU1LjgzNyAxMC45IEMgNTYuMTM3IDEwLjYgNTUuODM3IDEwIDU1LjMzNyAxMCBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA2Ny43MzcgMi44IEwgNTkuOTM3IDIuOCBDIDU5LjQzNyAyLjggNTguOTM3IDMuMiA1OC44MzcgMy43IEwgNTUuNzM3IDIzLjYgQyA1NS42MzcgMjQgNTUuOTM3IDI0LjMgNTYuMzM3IDI0LjMgTCA2MC4zMzcgMjQuMyBDIDYwLjczNyAyNC4zIDYxLjAzNyAyNCA2MS4wMzcgMjMuNyBMIDYxLjkzNyAxOCBDIDYyLjAzNyAxNy41IDYyLjQzNyAxNy4xIDYzLjAzNyAxNy4xIEwgNjUuNTM3IDE3LjEgQyA3MC42MzcgMTcuMSA3My42MzcgMTQuNiA3NC40MzcgOS43IEMgNzQuNzM3IDcuNiA3NC40MzcgNS45IDczLjQzNyA0LjcgQyA3Mi4yMzcgMy41IDcwLjMzNyAyLjggNjcuNzM3IDIuOCBaIE0gNjguNjM3IDEwLjEgQyA2OC4yMzcgMTIuOSA2Ni4wMzcgMTIuOSA2NC4wMzcgMTIuOSBMIDYyLjgzNyAxMi45IEwgNjMuNjM3IDcuNyBDIDYzLjYzNyA3LjQgNjMuOTM3IDcuMiA2NC4yMzcgNy4yIEwgNjQuNzM3IDcuMiBDIDY2LjEzNyA3LjIgNjcuNDM3IDcuMiA2OC4xMzcgOCBDIDY4LjYzNyA4LjQgNjguNzM3IDkuMSA2OC42MzcgMTAuMSBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5MC45MzcgMTAgTCA4Ny4yMzcgMTAgQyA4Ni45MzcgMTAgODYuNjM3IDEwLjIgODYuNjM3IDEwLjUgTCA4Ni40MzcgMTEuNSBMIDg2LjEzNyAxMS4xIEMgODUuMzM3IDkuOSA4My41MzcgOS41IDgxLjczNyA5LjUgQyA3Ny42MzcgOS41IDc0LjEzNyAxMi42IDczLjQzNyAxNyBDIDczLjAzNyAxOS4yIDczLjUzNyAyMS4zIDc0LjgzNyAyMi43IEMgNzUuOTM3IDI0IDc3LjYzNyAyNC42IDc5LjUzNyAyNC42IEMgODIuODM3IDI0LjYgODQuNzM3IDIyLjUgODQuNzM3IDIyLjUgTCA4NC41MzcgMjMuNSBDIDg0LjQzNyAyMy45IDg0LjczNyAyNC4zIDg1LjEzNyAyNC4zIEwgODguNTM3IDI0LjMgQyA4OS4wMzcgMjQuMyA4OS41MzcgMjMuOSA4OS42MzcgMjMuNCBMIDkxLjYzNyAxMC42IEMgOTEuNjM3IDEwLjQgOTEuMzM3IDEwIDkwLjkzNyAxMCBaIE0gODUuNzM3IDE3LjIgQyA4NS4zMzcgMTkuMyA4My43MzcgMjAuOCA4MS41MzcgMjAuOCBDIDgwLjQzNyAyMC44IDc5LjYzNyAyMC41IDc5LjAzNyAxOS44IEMgNzguNDM3IDE5LjEgNzguMjM3IDE4LjIgNzguNDM3IDE3LjIgQyA3OC43MzcgMTUuMSA4MC41MzcgMTMuNiA4Mi42MzcgMTMuNiBDIDgzLjczNyAxMy42IDg0LjUzNyAxNCA4NS4xMzcgMTQuNiBDIDg1LjczNyAxNS4zIDg1LjkzNyAxNi4yIDg1LjczNyAxNy4yIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDA5Y2RlIiBkPSJNIDk1LjMzNyAzLjMgTCA5Mi4xMzcgMjMuNiBDIDkyLjAzNyAyNCA5Mi4zMzcgMjQuMyA5Mi43MzcgMjQuMyBMIDk1LjkzNyAyNC4zIEMgOTYuNDM3IDI0LjMgOTYuOTM3IDIzLjkgOTcuMDM3IDIzLjQgTCAxMDAuMjM3IDMuNSBDIDEwMC4zMzcgMy4xIDEwMC4wMzcgMi44IDk5LjYzNyAyLjggTCA5Ni4wMzcgMi44IEMgOTUuNjM3IDIuOCA5NS40MzcgMyA5NS4zMzcgMy4zIFoiPjwvcGF0aD48L3N2Zz4="
                    alt="global express shop, express checkout with Paypal"
                    aria-label="Global Expres Shop accepts PayPal payments"
                  />
                </nuxt-link>
                <span class="anuncement-under-paypal-btn">For PayPal payments: We ship only to address from your PayPal
                  account.</span>
              </div>
            </div>

            <!-- <div class="payment-logos">
          <img
            src="https://m.vova.com/public/a/images/footer-accept.jpg?af4c95975?format=webp"
            alt="payment-logos"
          />
        </div> -->
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";

import { mdbContainer, mdbAccordion } from "mdbvue";
import ActiveOnSaleItems from "../../../components/ActiveOnSaleItems.vue";
import Billing from "../../checkout/billing/_billing";
// const { console } = log;

export default {
  loading: true,
  layout: "product",
  // middleware: "redirect",
  components: {
    mdbContainer,
    mdbAccordion,
    ActiveOnSaleItems,
    Billing,
  },

  data() {
    return {
      listing: {},
      structuredData: {
        "@context": "http://schema.org",
        "@type": "Product",
        name: "",
        image: [
          "https://example.com/photos/1x1/photo.jpg",
          "https://example.com/photos/4x3/photo.jpg",
          "https://example.com/photos/16x9/photo.jpg",
        ],
        // description: this.listing[this.lang].secondTitle,
        sku: "0446310786",
        brand: {
          "@type": "Brand",
          name: "ACME",
        },
        offers: {
          "@type": "Offer",
          url: "https://example.com/anvil",
          priceCurrency: "USD",
          price: "119.99",
          priceValidUntil: "2020-11-20",
          itemCondition: "https://schema.org/NewCondition",
          availability: "https://schema.org/InStock",
        },
      },
      visible: true,
      layout_imgs: {
        es: {
          standard: "correos.png",
          express: "gls.png",
        },
        ro: {
          standard: "posta_romana.png",
          express: "gls.png",
        },
        en: {
          standard: "United_Postal_Service.png",
          express: "FedEx.png",
        },
        gb: {
          standard: "Postal Service Parcel",
          express: "FedEx.png",
        },
        de: {
          standard: "DHL.png",
          express: "FedEx.png",
        },
      },
      checkoutSteps: true,
      activeModal: false,
      langListing: "",
      images: [],
      listing: "",
      lang: "",
      asNavFor1: [],
      asNavFor2: [],
      options1: {
        dots: false,
        fade: true,
        navButtons: false,
      },
      options2: {
        autoplay: true,
        centerMode: true,
        dots: false,
        navButtons: false,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: null,
            settings: {
              slidesToShow: 5,
            },
          },

          {
            // breakpoint: 200,
            settings: {
              navButtons: true,
            },
          },
        ],
      },
      slides: [
        {
          img: "https://ae01.alicdn.com/kf/H4ae3af737822463aa818a505a3f69594Q.jpg",
        },
        {
          img: "https://ae01.alicdn.com/kf/H31060ce2c9a54e54b2b24f26cbb041d2W/Funda-de-silicona-l-quida-Original-para-iPhone-funda-suave-cuadrada-de-lujo-para-iPhone-11.jpg",
        },
        {
          img: "https://ae01.alicdn.com/kf/Hf131e93039f64f5c97d711576869a4c09/Funda-de-silicona-l-quida-Original-para-iPhone-funda-suave-cuadrada-de-lujo-para-iPhone-11.jpg",
        },
        {
          img: "https://ae01.alicdn.com/kf/H31060ce2c9a54e54b2b24f26cbb041d2W/Funda-de-silicona-l-quida-Original-para-iPhone-funda-suave-cuadrada-de-lujo-para-iPhone-11.jpg",
        },
        {
          img: "https://ae01.alicdn.com/kf/H31060ce2c9a54e54b2b24f26cbb041d2W/Funda-de-silicona-l-quida-Original-para-iPhone-funda-suave-cuadrada-de-lujo-para-iPhone-11.jpg",
        },
        {
          img: "https://ae01.alicdn.com/kf/H31060ce2c9a54e54b2b24f26cbb041d2W/Funda-de-silicona-l-quida-Original-para-iPhone-funda-suave-cuadrada-de-lujo-para-iPhone-11.jpg",
        },
        {
          img: "https://ae01.alicdn.com/kf/H31060ce2c9a54e54b2b24f26cbb041d2W/Funda-de-silicona-l-quida-Original-para-iPhone-funda-suave-cuadrada-de-lujo-para-iPhone-11.jpg",
        },
      ],
    };
  },
  // validate({ params, query }) {
  // if (params.slug === "") throw new Error("404 Page not found!");
  // else return isNaN(params.id);
  // },

  head() {
    return {
      script: [{ type: "application/ld+json", json: this.structuredData }],
      title: this.listing[this.lang].productTitle,
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      meta: [
        {
          hid: "og:description",
          property: "og:description",
          content: this.listing[this.lang].secondTitle,
        },
        {
          property: "og:title",
          hid: "og:title",
          content: this.listing[this.lang].productTitle,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.images[1],
        },
      ],
    };
  },

  // http://localhost:3000/es/watches/listing/reloj-inteligente-deportivo-cardiac-ritm-control?id=6026c7b07ec0b005a43e19d7

  // https://github.com/nuxt/nuxt.js/issues/1492
  async asyncData({ app, params, $axios, error, redirect }) {
    // const id = query.id;
    const slug = params.slug;
    const locale = app.i18n.locale;
    // log(`ID: ${id}, Slug: ${slug}, Lang: ${locale}`);
    // console.log(`state: ${store.state.currentListing}`);
    const listings = await $axios.$get(`http://localhost:3001/api/products/`);
    const data = await $axios.$get(`http://localhost:3001/api/product/${slug}`);
    
    // await store.dispatch("GET_LISTINGS");
    // if (category !== params.category) return redirect(404, `/?id=${id}`);
    if (data[locale].slug !== slug) return redirect(404, `/?title=${slug}`);
    return {
      listings,
      data,
      locale,
      // id,
    };
  },

  beforeRouteLeave(to, from, next) {
    if (to.name.includes("checkout-billing")) {
      if (process.browser) {
        // console.log("Process in browser");
        const checkPage = document.getElementsByName(".body-elements");
        if (typeof checkPage != "undefined" && checkPage != null) {
          console.log("in billing | shipping hook");
        } else {
          console.log("in _slug | shipping hook ");
        }
      }
      // log("Modal open!");
      this.displayBillingModal(to);
    } else {
      next();
    }
  },
  created() {
    // console.log(`zzzz`, this.$store.state.currentListing);
    this.listing = this.data; // data is intercepted from  asyncData return
    // console.log(this.listing);
    this.images = this.data.images;
    this.urlImgId = this.data.imagesPathId;
    this.structuredData.name = this.listing[this.locale].productTitle;
    // console.log(`listing data ${this.listing[this.locale].productTitle}`);
    // console.log(this.images);
    this.lang = this.locale;
    // this.activeModal = false;

    // log(this.listing);
    // console.log(this.lang);
    // this.sortLang(this.lang);
  },

  mounted() {
    setTimeout(() => {
      console.log(this);
      this.asNavFor1.push(this.$refs.thumbnails);
      this.asNavFor2.push(this.$refs.main);
    }, 2000);
    // console.log(`state ${context.store.state.listing.currentListing}`);
  },
  computed: {
    // listing() {
    //   return this.$store.state.currentListing;
    // },
  },

  methods: {
    displayBillingModal(route) {
      this.checkoutSteps = false;
      this.activeModal = true;
      window.history.pushState({}, null, route.path);
    },
    closeModal() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        setTimeout(() => this.$nuxt.$loading.finish(), 500);
      });
      this.activeModal = false;
      this.checkoutSteps = true;
      window.history.go(-1);
    },
    capitalize: (string) => {
      if (typeof string !== "string") return "";
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    listingPricesConverter: (price) => {
      // log(`Price ${price}`);
      return price;
    },

    // animated on sale items
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  // font-family: sans-serif;
  list-style: none;
  text-decoration: none;
  -moz-transition: width 1s ease-in-out, left 1.5s ease-in-out;
  -webkit-transition: width 1s ease-in-out, left 1.5s ease-in-out;
  -moz-transition: width 1s ease-in-out, left 1.5s ease-in-out;
  -o-transition: width 1s ease-in-out, left 1.5s ease-in-out;
  transition: width 1s ease-in-out, left 1.5s ease-in-out;
}

.container-imgs {
  width: 100%;

  max-width: auto;
  margin: auto;
  .in-container-imgs {
    width: 100%;
    max-width: auto;
    margin: auto;
  }
}

.modal-container {
  // margin: 0.6em;
  // position: fixed;
  // min-width: 21.7em;
  // width: 100%;
  // max-width: 25.5em;
  border-top: none;
  z-index: 1;
  margin-top: -1.6em;
  // height: 60vh;
  // margin-top: 2em;
}

.top-of-modal {
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  z-index: 4;
}

.xclose {
  content: url("https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Eo_circle_yellow_letter-x.svg/1024px-Eo_circle_yellow_letter-x.svg.png");
  // position: absolute;
  // z-index: inherit;
  margin-top: -1.5em;
  // padding-right: 0.9em;
  // padding-left: 0.9em;
  // border: 1px solid rgb(236, 236, 236);
  width: 45px !important;
  height: 45px;
  padding: 0.15em;
  cursor: pointer;
  // height: 20px;

  // font-size: 1em;
  border-radius: 50%;
  // padding-bottom: 0.8em;
}

.xclose {
  .xclose > .text:hover {
    color: black;
  }
}

.xclose > .text {
  // margin: auto;
  // margin-top: -0.3em;
  // margin-left: -0.3em;
  font-size: 1.4em;
  // font-weight: 800;
  // margin: auto;
  // margin-right: 1em;
}

.modal-route {
  border-radius: 10px;
  border: 2px solid #edf3ff;

  // height: 100%;
  // position: absolute;

  // margin-right: 2.2em;
  color: white;
  right: 0;
  background: rgba($color: #000000, $alpha: 0.9);
  .modal-content {
    // z-index: 4;
    // overflow-y: auto;
    // width: 38.5em;
    // position: absolute;
    // top: 50%;
    // left: 50%;
    transform: translate(-50%, -50%);
    background: white;
  }
}

.title {
  display: block;
  font-weight: 300;
  // font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 600;
  // font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.container-fluid {
  padding: 0.5% 1%;
}

.listing-page {
  display: grid;
  // grid-gap: 0.5em;
  grid-template-areas: "listings description checkout";
  grid-template-columns: 300px 1fr;
  grid-gap: 0.8em;
  font-size: 0.9em;
  box-sizing: border-box;
  margin: auto;
}
// /* "nav nav checkout" */

.product-data {
  // margin: 1em;
  padding: 0.45em;
  background-color: rgb(255, 255, 255);
  grid-area: description;
  box-sizing: content-box;
  min-width: 340px;
  max-width: 700px;
  // padding: 0.2em 0%;
  .description {
    // padding: 1em 0%;
  }

  .free-shipping-text {
    top: -2px;
    position: -webkit-sticky;
    max-width: 450px;
    display: flex;
    align-items: center;
    gap: 20px;
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    border-radius: 5px;
    border: 1px solid rgb(141, 141, 141);
    font-size: 0.82em;
    padding: 0.4em;
    // z-index: 0;
    // text-align: center;
    font-weight: 550;
    opacity: 0.8;
    // padding-top: 3.5em;
    position: relative;
    span:nth-child(2) {
      img {
        width: 50px;
        height: 20px;
        margin-right: 0.3em;
      }
    }
  }
  .title-product {
    // margin-top: 0.5em;
    display: grid;
    grid-gap: 0.5em;
  }
}

.features-listing {
  // padding: 1em;
  z-index: 4;
  margin-top: -2.7em;
  display: flex;
  justify-content: space-between;
  color: white;
  // height: 49px;
  align-items: center;
  font-weight: 700;
  // border-bottom: 2px solid rgb(226, 226, 226);
  width: 100%;
}

.feature-listing--1 {
  height: 30px;
  font-weight: 600;
  font-size: 12px;
  border-right: 2px;
  // border: 2px solid white;
  color: white;
  padding: 0.3em 2%;
  position: relative;
}

.buyer--motivation {
  // display: grid;
  display: flex;
  flex-direction: column-reverse;
  grid-gap: 1em;
}

.product-title--primary {
  line-height: 35px !important;
  margin-top: 0.5em;
  font-size: 1.5em;
  font-weight: 550;
}

.product-title--second {
  line-height: 30px !important;
  font-size: 1em;
  font-weight: 600;
}

.already-sold-items {
  display: flex;
  align-items: center;
  gap: 10px;
  // margin-left: 0.8em;
  width: 300px;
  height: 20px;
  margin-bottom: 1em;

  img {
    width: 100px;
    height: 20px;
  }
}

h6.number-items-sold {
  font-size: 1em;
  font-weight: 550;
  color: green;
}

// .description {
//   position: relative;
//   margin: 0 auto 50px;
//   border-radius: 2px;
//   box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
//   box-sizing: border-box;
//   width: 90vw;
// }
.listing-details {
  box-sizing: border-box;
  margin: auto;
  width: 100% !important;
  max-width: auto;
  overflow: hidden;
  .html-data {
    box-sizing: border-box;
    .listing-details {
      font-size: 2em !important;
      // font-family: "Market Sans", "Helvetica Neue", Helvetica, Arial, Roboto,
      // 	sans-serif;
    }
    // width: inherit;
    // width: 10%;
    // * > img {
    //   max-width: 15em !important;
    //   // height: auto !important;
    // }
  }
}

@media (min-width: 70em) {
  .checkout-steps {
    // font-size: 1.05em;
    // margin-top: 0.5em;
    grid-area: checkout;
    box-sizing: border-box;
    width: 100%;
    max-width: auto;
    min-width: 25em !important;
    // width: 32.5em;
    // min-width: 0.5em;

    // max-height: 30em;
    text-align: left;
    // margin: 1em;
  }

  #active-listings-now {
    grid-area: listings;
    box-sizing: content-box;
    .active-listings {
      // max-width: 290px;
      box-sizing: content-box;
      position: relative;
      position: -webkit-sticky;
      position: sticky;
      top: 0;
    }
  }

  #active-listings-now {
    grid-area: listings;
    box-sizing: border-box;
    width: 100%;
    // min-width: auto;
    // min-width: 300px !important;
    // min-width: 22.5em;
    // max-width: 24.5em;

    text-align: left;
    -moz-transition: width 1s ease-in-out, left 1.5s ease-in-out;
    -webkit-transition: width 1s ease-in-out, left 1.5s ease-in-out;
    -moz-transition: width 1s ease-in-out, left 1.5s ease-in-out;
    -o-transition: width 1s ease-in-out, left 1.5s ease-in-out;
    transition: width 1s ease-in-out, left 1.5s ease-in-out;
  }
  .active-listings {
    // border: 1px solid rgb(228, 228, 228);
    // padding: 1em 0.1%;
    // max-width: 24.5em;
    // min-width: 16em;
  }
}

// @media (min-width: 50em) {
//   .checkout-steps {
//     // min-width: 24em !important;
//     min-width: 24em !important;
//   }
//   .active-listing {
//     max-width: 20em !important;
//   }
// }

.checkout-right-in-page,
.active-listings {
  position: relative;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}

.grid-item {
  display: flex;
}

.grid-item > span,
.grid-item > img {
  // opacity: 0.9;
  // font-weight: 600;
  opacity: 0.8;
}

.body-elements {
  margin: auto;
  // position: fixed;
  // min-width: 400px;
  box-sizing: border-box;
  // border-radius: 4px;
  display: grid;
  // border: 1px solid #f1f1f1;
  overflow-y: auto;
  // overflow-x: auto;
  height: 90vh;
  max-height: 94vh;
  border: 1px solid rgb(219, 228, 225);
  // background-color: #edf3f3;
  // height: 100%;
}

.checkout-title {
  // border-top-left-radius: 10px;
  // border-top-right-radius: 10px;
  // border-bottom: 1px solid rgb(221, 221, 221);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(255, 255, 255);
  background-color: rgb(39, 39, 39);
  // height: 2.5em;
  text-align: center;
  align-self: center;
  font-size: 1.25em;
  padding: 0.5em 5%;
  font-weight: 550;
}

.secured-checkout {
  display: grid;
  grid-gap: 0.2em;
  // grid-columns: minmax(15px, auto);
  padding: 0.5em 3.5%;
  // margin: 0.5em;
  // border-radius: 0px;
  // background-color: #ffffff;
  // border: 1.5px solid #ececec;
}

.sticky {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  // top: 0;
}

.prices-section {
  display: grid;
  // grid-gap: 0.1em;
  // padding: 0.6em 2.5%;
  // margin: 0.5em;
  // border-radius: 4px;
  // background-color: #ffffff;
  // border: 1.5px solid #ececec;
}

// .prices-section > div:nth-child(4) > span:nth-child(1) {
//   // font-weight: 700;
//   // font-size: 0.9em;
//   // color: rgb(11, 138, 17);
// }

.prices-section > div:nth-child(4) > span:nth-child(2) {
  font-weight: 600;
  font-size: 1.25em;
  color: rgb(71, 71, 71);
}

.price-now {
  display: flex;
  justify-content: space-between;
}

.price-now > span:nth-child(1) {
  font-size: 0.655em;
}

.price-now > span:nth-child(1),
.price-now > span:nth-child(1) {
  font-weight: 650;
  font-size: 0.655em;
}

.secured-checkout,
.prices-section,
.delivery-time,
.estimate-delivery {
  // opacity: 0.95;
  display: grid;
  grid-gap: 0.2em;
  padding: 0 3.5%;
  margin: 0.5em 1.5%;
  border-radius: 4px;
  border-radius: 4px;
  background: #f7f7f7;
  border: 1px solid #fbfbfb;
  box-shadow: 1px 1px 0.1px 0.3px #dbdbdb;
  span {
    // border: 1px solid grey;
    font-weight: 600;
  }
  // color: rgb(82, 82, 82);
  // font-size: 0.8em;
}

.delivery-time > div {
  padding-left: 1.8em;
}

.custom-control-input {
  // padding-top: 0.3em;
}
.grid-item > span,
.delivery-time > div > span:nth-child(1),
.estimate-delivery > div > span:nth-child(1),
.prices-section > div > span:nth-child(1) {
  font-size: 11.8px;
  font-weight: 600;
  // z-index: 4;
}

.secured-checkout > h5,
.prices-section > h5,
.delivery-time > h5,
.estimate-delivery > h5 {
  // opacity: 0.88;
  font-size: 0.92em;
  font-weight: 700;
  opacity: none;
  align-content: center;
  align-items: center;
  align-self: center;
  border-bottom: 1px solid rgb(235, 235, 235);
  padding-top: 0.4em;
  padding-bottom: 0.4em;
  // background-color: rgb(252, 252, 252);
}

.premium-shipping-price {
  display: flex;
  justify-content: space-between;
  align-self: center;
  align-content: center;
  align-items: center;
  border: 1px solid rgb(241, 241, 241);
  // padding: 0.25em;
}

.premium-shipping-price:hover {
  cursor: pointer;
  background: rgb(241, 245, 245);
}

.delivery-time > div {
  font-weight: 700;
  opacity: 0.85;
}

// .delivery-time > div:nth-child(1) > span {
// 	font-weight: 450;
// 	font-size: 0.92em;
// }

// .estimate-delivery > span:nth-child(1) {
//   font-weight: 550;
//   font-size: 0.8em;
// }

.between {
  font-weight: 600;
  // font-size: 0.82em;
  opacity: 0.9;
  font-size: 0.8em;
  // font-size: 0.85em;
}
.late-delivery {
  font-size: 0.65em;
  opacity: 0.7;
  font-weight: 600;
}

// .between > .firstArriveDate,
// .secondAriveDate {
//   // color: rgb(0, 0, 0);
//   // font-weight: 650;
//   font-size: 0.8em;
// }

.features-img {
  width: 21.5px;
  height: 21.5px;
  margin-right: 0.6em;
  margin-top: -0.15em;
}

.features-img > span:nth-child(3) {
  width: 18.5px;
  height: 18.5px;
}

.container {
  /*margin-top: 4em;*/
  // display: grid;
  // grid-gap: 0.5em;
}

img {
  width: 100%;
  max-width: auto;
}

.secure {
  /*max-width: 100px;*/
  /*max-height: 50px;*/
  display: flex;
  /* justify-content: center; */
  justify-content: space-evenly;
}

.secure > img {
  max-width: 100px;
  max-height: 50px;
  margin: 0.2em;
}

.action-checkout {
  padding: 0em 2%;
  width: 100%;
  display: grid;
  grid-gap: 0.5em;
  max-width: auto;
  // justify-items: center;
}
.action-checkout > button {
  font-weight: 800;
  font-size: 0.88em;
  color: rgb(236, 2, 2);
}

.action-checkout,
.payment-logos {
  margin: auto;
}

.payment-logos > img {
  width: 100%;
  text-align: center;
}

@media (max-width: 60em) {
  .listing-page {
    width: 100%;
    max-width: auto;
    display: grid;
    grid-gap: 1em;
    grid-template-areas:
      "description checkout"
      "listings checkout";
    // padding: 0.5em 0.1%;
    grid-template-columns: 500px 2fr;
  }

  .listings {
    grid-area: listings;
    // display: none;
    width: 100%;
  }

  .product-data {
    grid-area: description;
    min-width: 30.5em;
    width: 100%;
  }

  .checkout-steps {
    grid-area: checkout;
    // height: 60em;
  }

  .body-elements {
    display: grid;
    width: 100%;
    margin: auto;
    // border-radius: 5px;
    border: 1px solid rgb(223, 223, 223);
  }
}

@media (max-width: 37em) {
  .container-fluid {
    padding: 0em 2%;
  }
  .listing-page {
    display: grid;
    justify-content: center;
    grid-template-areas:
      "description"
      "checkout"
      "listings";

    // margin: auto;
    // width: 100% !important;
    // max-width: auto;
  }

  .checkout-steps {
    grid-area: checkout;
    width: auto !important;
    max-width: auto;
    box-sizing: border-box;
    // width: 18em;
  }

  .active-listings {
    padding: 1em 0%;
  }

  .body-elements {
    // position: relative;
    // height: 100%;
    // min-height: 500px;
    // min-height: 100vh;
    // max-height: 600px;
    width: auto;
    max-width: auto !important;
  }

  .listings {
    grid-area: listings;
    height: 100%;
    // display: visible;
  }
}

.footer {
  /* bottom: 0; */
  display: flex;
  /* justify-content: space-around; */
  // padding: 0.7em;
  /* line-height: 1.2em; */
}

.footer > a {
  // margin-right: 2em;
  font-size: 0.72em;
  color: rgb(255, 255, 255);
}

.anuncement-under-paypal-btn {
  font-size: 0.6em;
  font-weight: 550;
  color: grey;
  text-align: center;
}
// carousel

.main {
  // margin-bottom: 30px;
}

.thumbnails {
  margin: 0 -5px;
  width: calc(100% + 10px);
}

.agile__nav-button {
  background: transparent;
  border: none;
  color: #ccc;
  cursor: pointer;
  font-size: 24px;
  transition-duration: 0.3s;
}

// .agile__actions {
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin: auto;
//   position: relative;
//   // margin-top: -20em;
//   z-index: 4;
//   // position: absolute;
//   // top: 50%;
//   // bottom: 50%;
// }

.thumbnails .agile__nav-button {
  // margin-top: 20em;
  margin-left: 50px;
  position: absolute;
  top: 510%;
  transform: translateY(-50%);
}
.thumbnails .agile__nav-button--prev {
  left: -45px;
}
.thumbnails .agile__nav-button--next {
  right: -45px;
}
.agile__nav-button:hover {
  color: #888;
}
.agile__dot {
  margin: 0 10px;
}
.agile__dot button {
  background-color: #eee;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 10px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  transition-duration: 0.3s;
  width: 10px;
}
.agile__dot--current button,
.agile__dot:hover button {
  background-color: #888;
}

.slide {
  font-weight: 300;
  margin: auto;
  width: 100%;
  // padding: 5px;
  max-width: 1200px;
  transition: opacity 0.3s;
  align-items: center;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  height: 600px;
  justify-content: center;
}
.slide--thumbniail {
  cursor: pointer;
  height: 80px;
  margin: 5px;
  padding: 0 2px;
  transition: opacity 0.3s;
  // border: 1px solid rgb(241, 241, 241);
}
.slide--thumbniail:hover {
  opacity: 0.75;
}
// .slide img {
//   height: 100%;
//   object-fit: fill;
//   object-position: center;
//   width: 100%;
//   max-width: auto;
// }

@media (max-width: 60em) {
  .slide {
    height: 64vh;
  }
}
.slide img {
  border-radius: 4px;
  height: 100%;
  width: 100%;
  object-fit: contain;
  position: absolute;
  left: 0;
  top: 0;
  // width: 100%;
  height: 100%;
  -o-object-fit: fill;
  object-fit: fill;
  -o-object-position: center;
  object-position: center;
  display: block;
  margin: 0em auto;
  // width: 90%;
  max-width: 800px;
}

.agile--ssr .agile__slides > * {
  overflow: hidden;
  width: 0;
}

.agile--ssr .agile__slides > *:first-child {
  width: 100%;
  height: 100vh;
}

.collapsible {
  background-color: rgb(248, 248, 248);
  // color: white;
  cursor: pointer;
  padding: 4px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
}
</style>
