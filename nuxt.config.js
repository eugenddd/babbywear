import { env } from "shelljs";
import path from "path";
import fs from "fs";
let development = process.env.NODE_ENV !== "production";

export default {
  ssr: true,
  buildDir: "dist",
  telemetry: false,
  debug: false,
  serverMiddleware: [{ handler: "~/server-middleware/app.js" }],
  head: {
    title: "Global Express Shop",
    titleTemplate: "My amazing Nuxt application | %s",
    htmlAttrs: {
      lang: "ro",
      amp: true,
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        type: "font/woff2",
        href: "https://fonts.shopifycdn.com/nunito/nunito_n4.eeda324bc2f350e5c92cf5ef4a0712035386bd19.woff2?h1=aXNoaS1zaG9waWZ5MDAxLmFjY291bnQubXlzaG9waWZ5LmNvbQ&hmac=a34c115b250e77f391f00d048df08677d1c2e7cacfab0b796f2b284c9ce0fe33",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
      },
    ],
    script: [
      // { hid: "stripe", src: "https://js.stripe.com/v3/", defer: true },
      {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        type: "text/javascript",
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
        type: "text/javascript",
      },
      {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
        type: "text/javascript",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/2713/8608/t/32/assets/shop.js?v=153864595384552893281643437686",
        type: "text/javascript",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/2713/8608/t/32/assets/cart-notification.js?v=108987702215664772911643172516",
        type: "text/javascript",
      },

      {
        src: "https://cdn.shopify.com/s/files/1/2713/8608/t/28/assets/includes.min.js?v=84266046833714934021641789677",
        type: "text/javascript",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/2713/8608/t/28/assets/global.js?v=152947517960482005941641794209",
        type: "text/javascript",
      },
      // {
      //   src: "https://cdn.shopify.com/s/files/1/2713/8608/t/32/assets/pickup-availability.js?v=106503768932782885821643172526",
      //   type: "text/javascript",
      // },
      {
        src: "https://cdn.shopify.com/s/files/1/2713/8608/t/32/assets/product-form.js?v=61456333774875089901643172526",
        type: "text/javascript",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/2713/8608/t/32/assets/elevatezoom.js?v=123299089282303306721643172521",
        type: "text/javascript",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/2713/8608/t/32/assets/facets.js?v=122409976893616604771643172521",
        type: "text/javascript",
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)

  css: [
    "~assets/style/global",
    "~assets/style/front/base",
    "~assets/style/front/theme",
    "~assets/style/front/includes",
    "~assets/style/front/page-account",
  ],
  // "~assets/style/splide"
  loading: {
    name: "cube-grid",
    color: "#002044",
    height: "2px",
    throttle: 0,
  },
  // loading: "~/components/Loading.vue",
  // middleware: "onlyBilling",
  router: {
    // middleware: "i18n",
    routerNameSplitter: "/",
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  // { src: "~/plugins/ElementTipTap.js" }
  plugins: [
    { src: "~/plugins/VueAgile", ssr: false },
    { src: "plugins/Owl.js", ssr: false },
    "~plugins/Axios",
    "~plugins/TrapFocus",
  ],
  // { src: "~/plugins/VueSplide", ssr: false },
  generate: {
    fallback: true,
    router: ["/", "en", "ro", "es"],
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  buildModules: [
    ["@nuxtjs/vuetify"],
    [
      "@nuxtjs/fontawesome",
      {
        component: "spr",
        suffix: true,
      },
    ],
  ],
  modules: [
    ["@nuxtjs/google-analytics", { ua: "X1234567" }],
    // "nuxt-element-ui",
    "mdbvue/nuxt",
    "@nuxtjs/component-cache",
    ["@nuxtjs/component-cache", { maxAge: 1000 * 60 * 60 }],
    ["vue-scrollto/nuxt", { duration: 300 }],
    "@nuxtjs/proxy",
    "@nuxtjs/axios",
    "@nuxt/http",
    "@nuxtjs/cloudinary",
    [
      "nuxt-i18n",
      {
        seo: true,
        strategy: "prefix_except_default",
        defaultLocale: "en",
        vueI18n: {
          numberFormats: {
            es: {
              currency: {
                style: "currency",
                currency: "EUR",
              },
            },
            ro: {
              currency: {
                style: "currency",
                currency: "RON",
              },
            },
            en: {
              currency: {
                style: "currency",
                currency: "USD",
              },
            },
          },
        },
        locales: [
          {
            code: "ro",
            name: "Romana",
            iso: "ro-RO",
            file: "ro.js",
            domain: "ro.mydomain.com",
            isCatchallLocale: true,
          },
          {
            code: "en",
            iso: "en-US",
            name: "English",
            file: "en.js",
            domain: "mydomain.com",
          },
          {
            code: "es",
            name: "Español",
            iso: "es-ES",
            file: "es.js",
            domain: "es.mydomain.com",
          },
        ],
        lazy: true,
        differentDomains: false,
        langDir: "locales/",
        detectBrowserLanguage: true,
        detectBrowserLanguage: {
          useCookie: true,
          cookieCrossOrigin: false,
          cookieKey: "lang",
          onlyOnRoot: true,
        },
      },
    ],
  ],
  cloudinary: {
    cloudName: "degqema1i",
    apiSecret: "Eb8z-ZiGDGGUZuC9xVyNarBJmuY",
    apiKey: "827895617894314",
    secure: false,
    privateCDN: true,
    useComponent: true,
    // secureDistribution: "globalexpreshop.com"
  },
  hooks: {
    build: {
      before() {
        const { $cloudinary } = require("@nuxtjs/cloudinary");
        const assetsFolder = path.join(__dirname, "assets/images");

        fs.readdir(assetsFolder, async (err, files) => {
          if (err) return;

          /* Upload to Cloudinary */
          const uploadedAssets = await Promise.all(
            files.map((file) =>
              $cloudinary.upload(path.join(assetsFolder, file))
            )
          );

          /* Do something with the assets' info returned */
          console.log(uploadedAssets);
        });
      },
    },
  },

  // mdbvue: {
  //   icons: true, // FA5
  //   roboto: true, // font Roboto
  //   css: true, // MDB CSS
  //   bootstrap: true, // Bootstrap CSS
  //   script: true,
  // },

  http: {
    proxy: true, // Can be also an object with default options
  },

  server: {
    port: 3000,
    host: "0.0.0.0",
  },

  // env: {
  //   baseUrl: "http://localhost:3001/",
  // },

  axios: {
    baseURL: "https://0.0.0.0:3001", // Used as fallback if no runtime config is provided
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: "https://0.0.0.0:3001/",
    },
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: "https://0.0.0.0:3001",
    },
  },

  // proxy: {
  //   "/api": {
  //     target: process.env.baseUrl,
  //     secure: false,
  //     // pathRewrite: { "^/api/": "/" },
  //     changeOrigin: true,
  //     // headers: { Connection: "keep-alive" },
  //     onProxyReq: function log(proxyReq, req, res) {
  //       // console.log(req.body);
  //       // console.log(proxyReq.getHeader("Content-Type"));
  //       if (!req.body || !Object.keys(req.body).length) {
  //         return;
  //       }
  //       const contentType = proxyReq.getHeader("Content-Type");
  //       const writeBody = (bodyData) => {
  //         proxyReq.setHeader("Content-Length", Buffer.byteLength(bodyData));
  //         proxyReq.write(bodyData);
  //       };
  //       if (
  //         contentType.includes("application/json") ||
  //         contentType.includes("application/x-www-form-urlencoded")
  //       ) {
  //         writeBody(JSON.stringify(req.body));
  //       }
  //     },
  //   },
  // },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // extractCSS: true,
    // optimization: {
    //   splitChunks: {
    //     name: true,
    //   },
    // },
    postcss: {
      plugins: {
        "postcss-custom-properties": false,
      },
    },
    loader: {
      file: { esModule: false },
    },
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif|svg)$/,
          user: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]?[hash:5]",
              },
            },
          ],
        },
      ],
    },
    extend(config, ctx) {
      config.node = {
        fs: "empty",
      };
    },
    transpile: ["vue-agile"],
    transpile: ["mdbvue/lib/components"],
    // transpile: ["@splidejs/vue-splide"]
  },
};
