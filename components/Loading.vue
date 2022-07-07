<template lang="html">
  <div class="loading-page" v-if="loading">
    <p>Loading...</p>
    <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Loader.gif" />
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.loading-page {
  z-index: 4;
  position: fixed;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: auto;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding-top: 200px;
  font-family: sans-serif;
  p {
    font-size: 1em;
    font-weight: 700;
  }
  img {
    width: 160px;
    height: 120px;
  }
}
</style>
