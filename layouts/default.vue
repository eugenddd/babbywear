<template>
  <div id="my-store">
    <Nav />
    <!-- <nuxt-link v-for="locale in $i18n.locales" :v-if="locale.code !== $i18n.locale" :key="locale.code"
      :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link> -->

    <CategoryNav />
    <FrontSlides />

    <!-- <nuxt-link :to="
      localePath({ name: 'category-slug', params: { slug: category.slug } })
    ">
      {{ category.title }}
    </nuxt-link> -->
    <div style="display:flex; flex-direction:column; gap:1rem; padding: 2.5rem 0;">
      <ByAges />
      <PopularProducts />
      <Nuxt />
      <Recomandation />
    </div>
    <div>
      <OurGallery />
      <Footer />
      <FooterBottom />
    </div>
  </div>
</template>

<script>
import Nav from "../components/front/Nav.vue";
import CategoryNav from "../components/front/categoryNav.vue";
import FrontSlides from "../components/front/frontSlides.vue";
import ByAges from "../components/front/byAges.vue";
import PopularProducts from "../components/front/popularProducts.vue";
import Recomandation from "../components/front/recomandation.vue";
import OurGallery from "../components/front/ourGallery.vue";
import FooterBottom from "../components/front/footerBottom.vue";
import Footer from "../components/front/Footer.vue";
export default {
  components: {
    Nav,
    CategoryNav,
    FrontSlides,
    ByAges,
    PopularProducts,
    Recomandation,
    OurGallery,
    FooterBottom,
    Footer,
  },
  scrollToTop: true,
  data() {
    return {
      ip: null,
    };
  },
  //  asyncData({app, store}){
  //   const lang = app.i18n.locale;
  //   //  store.dispatch("settings/setLang", lang);
  //   // return {locale};
  // },
  created() {
    this.fetchIpData();

    // store.dispatch("settings/setLang", this.$i18n.locale);
    // alert(this.lang)

  },
  mounted() {
    let localCart = localStorage.getItem("cart");
    // alert(localCart)
    this.$store.dispatch('cart/getCartById', localCart.products._id[0]);
    console.log(`My IP: ${this.ip}`);

    // console.log(`LANG: ${this.lang}`);


  },
  computed: {
    // getLocale() {
    //   return this.$store.getters['settings/getLang'];
    // },
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },
  methods: {
    async fetchIpData() {
      const ip = await this.$axios.$get("http://icanhazip.com");
      this.ip = ip;
    },
  },
};
</script>
<style lang="scss">
// @font-face {
//   font-family: "Market Sans";
//   src: url("https://ir.ebaystatic.com/cr/v/c1/market-sans/v1.0/MarketSans-Regular-WebS.eot");
//   src: url("https://ir.ebaystatic.com/cr/v/c1/market-sans/v1.0/MarketSans-Regular-WebS.eot?#iefix")
//       format("embedded-opentype"),
//     url("https://ir.ebaystatic.com/cr/v/c1/market-sans/v1.0/MarketSans-Regular-WebS.woff2")
//       format("woff2"),
//     url("https://ir.ebaystatic.com/cr/v/c1/market-sans/v1.0/MarketSans-Regular-WebS.woff")
//       format("woff"),
//     url("https://ir.ebaystatic.com/cr/v/c1/market-sans/v1.0/MarketSans-Regular-WebS.ttf")
//       format("truetype"),
//     url("https://ir.ebaystatic.com/cr/v/c1/market-sans/v1.0/MarketSans-Regular-WebS.svg#MarketSans-Regular-WebS")
//       format("svg");
//   font-weight: normal;
//   font-style: normal;
//   font-display: optional;
// }

// @font-face {
//   font-family: "Market Sans";
//   src: url("https://ir.ebaystatic.com/cr/v/c1/market-sans/v1.0/MarketSans-SemiBold-WebS.eot");
//   src: url("https://ir.ebaystatic.com/cr/v/c1/market-sans/v1.0/MarketSans-SemiBold-WebS.eot?#iefix")
//       format("embedded-opentype"),
//     url("https://ir.ebaystatic.com/cr/v/c1/market-sans/v1.0/MarketSans-SemiBold-WebS.woff2")
//       format("woff2"),
//     url("https://ir.ebaystatic.com/cr/v/c1/market-sans/v1.0/MarketSans-SemiBold-WebS.woff")
//       format("woff"),
//     url("https://ir.ebaystatic.com/cr/v/c1/market-sans/v1.0/MarketSans-SemiBold-WebS.ttf")
//       format("truetype"),
//     url("https://ir.ebaystatic.com/cr/v/c1/market-sans/v1.0/MarketSans-SemiBold-WebS.svg#MarketSans-SemiBold-WebS")
//       format("svg");
//   font-weight: bold;
//   font-style: normal;
//   font-display: optional;
// }

body {
  // font-family: "Market Sans", "Helvetica Neue", Helvetica, Arial, Roboto;
  // background-color: #edf3f3;
  color: rgb(39, 37, 47);
  height: 100vh;
  margin: 0;
}

// .dev-nav {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0em 1.5%;
//   /* text-align: center; */
//   a {
//     margin: 0.5em;
//   }

//   .languages {
//     display: flex;
//     align-items: center;
//   }
// }

// button {
// 	background-color: #fdc91e;
// 	color: black;
// 	border-radius: none;
// }
.paypal-button.paypal-button-color-gold {
  background: #ffc439;
}

.paypal-button * {
  cursor: pointer;
}

.paypal-button {
  display: inline-block;
  text-align: center;
  box-sizing: border-box;
  border: none;
  // vertical-align: top;
  cursor: pointer;
  overflow: hidden;

  img {
    max-width: 18%;
    align-self: center;
    align-content: center;
    vertical-align: middle;
    vertical-align: -webkit-baseline-middle;
  }
}

img {}

.checkout-steps {
  // font-family: "Market Sans", "Helvetica Neue", Helvetica, Arial, Roboto,
  //   sans-serif;
  // padding: 0 2%;
  // font-size: 1em;
}
</style>
