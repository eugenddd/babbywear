<template>
  <div>
    <Nav />
    <CategoryNav />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Nav from "../components/front/Nav.vue";
import categoryNav from "../components/front/categoryNav.vue";
import Footer from "../components/front/Footer.vue";
import CategoryNav from "../components/front/categoryNav.vue";
export default {
  name: "Product",
  components: { Nav, categoryNav, Footer, CategoryNav },
};
</script>

<style scoped>
</style>