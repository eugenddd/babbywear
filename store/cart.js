import { getCartById } from "../server-middleware/api/v1/controllers/cart";

export const state = () => ({
  cart: [
    // {
    //   id: 1,
    //   productImage:
    //     "https://cdn.shopify.com/s/files/1/2713/8608/files/gallery3.png?v=1599818471",
    //   productTitle: "OK Product",
    //   productPrice: 100,
    //   quantity: 3,
    // },
    // {
    //   id: 2,
    //   productImage:
    //     "https://cdn.shopify.com/s/files/1/2713/8608/files/gallery3_320x320.png?v=1599818471",
    //   productTitle: "OK Product",
    //   productPrice: 100,
    //   quantity: 1,
    // },
    // {
    //   id: 3,
    //   productImage:
    //     "https://cdn.shopify.com/s/files/1/2713/8608/files/gallery4_320x320.png?v=1599818511",
    //   productTitle: "OK Product",
    //   productPrice: 100,
    //   quantity: 1,
    // },
    // {
    //   id: 4,
    //   productImage:
    //     "https://cdn.shopify.com/s/files/1/2713/8608/files/gallery1_320x320.png?v=1599818371",
    //   productTitle: "OK Product",
    //   productPrice: 100,
    //   quantity: 3,
    // },
    // {
    //   id: 5,
    //   productImage:
    //     "https://cdn.shopify.com/s/files/1/2713/8608/files/gallery1_320x320.png?v=1599818371",
    //   productTitle: "OK Product",
    //   productPrice: 500,
    //   quantity: 3,
    // },
  ],
  productsIDs: [],
  cartTotal: 0,
  cartTotalItems: "",
  lang: "en",
});

export const getters = {
  cartProducts: (state) => state.cart,
  cartCount: (state) => state.cart.length,
  cartTotal: (state) =>
    state.cart.reduce((acc, curr) => {
      return (
        acc + parseInt(curr["ro"].priceDiscountedTo) * parseInt(curr.quantity)
      );
    }, 0),
};

export const mutations = {
  setProductsIDs: (state, payload) => {
    state.productsIDs = payload;
  },
  emptyCart: (state) => {
    state.cart = [];
  },
  setCart: (state, product) => {
    state.cart.push(product);
  },
  removeFromCart: (state, id) => {
    const item = state.cart.findIndex((product) => product.id == id);
    state.cart.splice(item, 1);
    console.log(state.cart);
  },
  minusQuantity: (state, id) => {
    const item = state.cart.findIndex((product) => product.id == id);
    state.cart[item].quantity--;
    if (state.cart[item].quantity < 1) {
      commit("removeFromCart", id);
      alert("ok");
    }
  },
  addQuantity: (state, id) => {
    const item = state.cart.findIndex((product) => product.id == id);
    state.cart[item].quantity++;
  },
};

export const actions = {
  async getCartById({ commit }, id) {
    try {
      // let localCartData = localStorage.getItem("cart");

      await this.$axios.$get(`/api/product/${id}`).then((response) => {
        console.log("cartVuex", response.data);
        commit("setCart", response.data);
        // alert("hi");
      });
    } catch (err) {
      console.log(err);
    }
  },

  async addToCart({ commit }, product) {
    commit("setCart", product);
    // localStorage.setItem("product", JSON.stringify(product));
    // console.log(product);
    await this.$axios
      .$post("/api/cart", {
        products: {
          product: product._id,
          quantity: product.quantity,
        },
      })
      .then((response) => {
        localStorage.setItem("cart", JSON.stringify(response.products));
        commit("setProductsIDs", products.product);
      });

    // const cart = [...state.cart];
    // const productIndex = cart.findIndex((item) => item.id === product.id);
    // if (productIndex === -1) {
    //   cart.push({
    //     ...product,
    //     quantity: 1,
    //   });
    // } else {
    //   cart[productIndex].quantity++;
    // }
    // this.$axios.$get("/product/").then((res) => {
    //   console.log(res);
    // }
  },
};
