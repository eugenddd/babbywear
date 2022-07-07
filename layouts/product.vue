<template>
  <div>
    <Nav />
    <CategoryNav />
    <Nuxt />
    <Footer />
    <FooterBottom />
  </div>
</template>

<script>
import Nav from "../components/front/Nav.vue";
import Footer from "../components/front/Footer.vue";
import CategoryNav from "../components/front/categoryNav.vue";
import FooterBottom from "../components/front/footerBottom.vue"
export default {
  name: "Product",
  components: { Nav, CategoryNav, Footer, FooterBottom },
};
</script>

<style scoped>
</style>
