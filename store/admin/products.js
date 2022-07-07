export const state = () => ({
  product: null,
  products: [],
});

export const mutations = {
  setProduct(state, product) {
    state.product = product;
  }, // setProduct
  setProducts(state, products) {
    state.products = products;
  }, // setProducts
};

export const actions = {
  async getProduct({ commit }, id) {
    const product = await this.$axios.$get(`/products/${id}`);
    commit("setProduct", product);
  }, // getProduct
  async getProducts({ commit }) {
    const products = await this.$axios.$get("/products");
    commit("setProducts", products);
  }, // getProducts
};
