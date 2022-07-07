<template >
  <v-app>
    <div class="admin-container">
      <div class="admin-nav" style="padding:0 1.5%;">
        <div style="display:flex; gap:1.5em;  cursor: pointer; ">
          <a href="/admin" style="font-size: 1.05em; font-weight: 700;">Pro Admin</a>

        </div>
        <div class="right-nav-admin">

          <div>
            <a href="/" target="_blank" style="font-weight:500; font-size:.85rem;">View Store</a>
          </div>
          <!-- <div style="
              font-size: 0.75em;
              font-weight: 700;
              display: flex;
              gap: 0.5em;
            ">
            <span class="Polaris-Icon_yj27d Polaris-Icon--colorHighlight_2qv4t Polaris-Icon--applyColor_2y25n"><span
                class="Polaris-VisuallyHidden_yrtt5"></span><svg viewBox="0 0 20 20" class="Polaris-Icon__Svg_375hu"
                focusable="false" aria-hidden="true">
                <path
                  d="M3.249 2.001h13.868a.5.5 0 0 1 .428.758l-2.545 4.241 3.35 4.188a.5.5 0 0 1-.39.812l-12.49.001 1.507 6.782a1 1 0 1 1-1.953.434l-4-18a1 1 0 0 1 1.953-.434l.272 1.218z">
                </path>
              </svg>
            </span>
            Setup
          </div> -->
          <div style="font-size: 0.9em; font-weight: 700">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }" style="display:flex;">
                <v-avatar color="primary" class="white--text" size="40" light v-bind="attrs" v-on="on">GE</v-avatar>
                <v-div v-bind="attrs" v-on="on"> </v-div>
              </template>

              <v-list dark>
                <v-list-item v-for="(item, index) in items" :key="index">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

          </div>
        </div>
      </div>

      <div class="admin-layout">
        <div id="menu">
          <LeftSide style="background-color: rgb(0, 0, 0); height:100vh" />
        </div>
        <Nuxt id="page" />
      </div>

    </div>
  </v-app>
</template>

<script>
import LeftSide from "../components/admin/leftSide";
export default {
  name: "Admin",
  components: {
    LeftSide,
  },
  data: () => ({
    items: [
      { title: "Account" },
      { title: "API's" },
      { title: "Documentation" },
      { title: "Logout" },
    ],
  }),
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "ShopifySans";
  src: url("https://cdn.shopify.com/static/fonts/ShopifySans--light.woff2") format("woff2");
  font-style: normal;
  font-weight: 300;
  font-display: swap;
}

@font-face {
  font-family: "ShopifySans";
  src: url("https://cdn.shopify.com/static/fonts/ShopifySans--regular.woff2") format("woff2");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: "ShopifySans";
  src: url("https://cdn.shopify.com/static/fonts/ShopifySans--medium.woff2") format("woff2");
  font-style: normal;
  font-weight: 500;
  font-display: swap;
}

@font-face {
  font-family: "ShopifySans";
  src: url("https://cdn.shopify.com/static/fonts/ShopifySans--bold.woff2") format("woff2");
  font-style: normal;
  font-weight: 700;
  font-display: swap;
}

@font-face {
  font-family: "ShopifySans";
  src: url("https://cdn.shopify.com/static/fonts/ShopifySans--extrabold.woff2") format("woff2");
  font-style: normal;
  font-weight: 800;
  font-display: swap;
}

@font-face {
  font-family: "ShopifySans";
  src: url("https://cdn.shopify.com/static/fonts/ShopifySans--black.woff2") format("woff2");
  font-style: normal;
  font-weight: 900;
  font-display: swap;
}

body {
  font-family: ShopifySans, Helvetica, Arial, sans-serif !important;
  // font-family: "Market Sans", "Helvetica Neue", Helvetica, Arial, Roboto,
  //   sans-serif !important;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  font-weight: normal;
  font-style: normal;
  font-display: optional;
  word-spacing: 1.8px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.admin-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--p-surface);
  box-shadow: var(--p-shadow-top-bar);
  padding: 0em 0%;
  height: 3.5rem;
  position: relative;
  transition: var(--p-duration-200) background-color var(--p-ease-in-out);
}

.right-nav-admin {
  display: flex;
  align-items: center;
  gap: 1em;
}

::placeholder {
  color: black;
}

.admin-layout {
  background-color: rgb(234, 234, 234) !important;
  display: grid;
  grid-template-areas:
    "nav nav"
    "menu page";
  grid-template-rows: 5px 1fr 10px;
  grid-template-columns: 220px 2fr;
  grid-gap: 0em;
  margin: auto;
  // padding: 0em 1.5%;
  // height: 100vh;
  color: white;
  // max-height: auto;
}

@media (max-width: 1000px) {
  .admin-layout {
    display: grid;
    grid-gap: 1em;
    grid-template-areas:
      "nav"
      "page";
    grid-template-columns: repeat(1, 1fr);
  }

  #menu {
    // background-color: rgb(0, 0, 0);
    grid-area: menu;
    display: flex;
    flex-direction: column;
    // gap: 1em;
    border-radius: 10px;
    width: 12em;
    border-right: 1px solid rgb(207, 30, 30);
    height: 100vh;
    // background:white;
    max-width: auto;
    display: none;
  }
}

#menu {
  grid-area: menu;
  border-right: 1px solid #ccc;
}

#page {
  // background-color: rgb(0, 0, 0);
  // background-color: rgb(241, 241, 241);
  grid-area: page;
  padding: 1em 1%;
  width: 100%;
  border-left: 1px solid #0000 !important;
}

.Polaris-Icon_yj27d {
  display: block;
  height: 1.25rem;
  margin: auto;
  max-height: 100%;
  max-width: 100%;
  width: 1.25rem;
}
</style>
