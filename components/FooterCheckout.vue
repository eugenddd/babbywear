<template>
  <div class="checkout-footer">
    <span>
      <nuxt-link class="footer-link" to="">Shipping & Returns</nuxt-link>
      <nuxt-link class="footer-link" to="">Privacy and Seurity</nuxt-link>
      <nuxt-link class="footer-link" to="">Terms and Conditions</nuxt-link>
      <nuxt-link class="footer-link" to="">Report Listing</nuxt-link>
      <nuxt-link class="footer-link" to="">Track Order</nuxt-link>
      <nuxt-link class="footer-link" to="">Contact Us</nuxt-link>
    </span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.checkout-footer {
  padding: 0.5em 0%;
  .footer-link {
    font-size: 0.8em;
    font-weight: 600;
    padding: 0.72em;
  }
  @media (min-width: 65em) {
    span {
      padding: 1em 0%;
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: auto;
    }
  }
  @media (max-width: 65em) {
    span {
      margin: auto;
      display: flex;
      flex-direction: column;
      gap: 0em;
      margin: auto;
      width: 100%;
      // max-width: 350px;
    }
    .footer-link {
      padding: 1em;
      border: 1px solid rgb(235, 235, 235);
      background-color: rgb(255, 255, 255);
    }
  }
}
</style>
