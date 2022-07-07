<template>
  <div class="page-not-found">
    <div class="text">
      <h1>Error 404 - Page not found</h1>
      <span>If you feel that is a error, please contact the website owner!</span>
    </div>
  </div>
</template>

<script>
export default {
  layout: "pages",
  title: "404",
  meta: {
    title: "404",
    description: "Page not found",
    keywords: "404, page, not, found",
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped lang="scss">
.page-not-found {

  display: flex;
  justify-content: center;
    text-align: center;
    margin: auto;
      padding: 10rem 0;
  .text {
    display: grid;
    grid-gap: 1em;
    h1 {
      font-size: 1.95rem;
    }
    span {
      font-weight: 550 !important;
    }
  }
}
</style>
