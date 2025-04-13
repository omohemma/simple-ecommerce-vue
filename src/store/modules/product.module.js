import ProductService from '@/apis/product.js'

export const namespaced = true;

const initialState = () => {
  return {
    products: [],
  };
};

export const state = initialState();

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
  },
  RESET() {
    const newState = initialState();
    Object.keys(newState).forEach((key) => {
      state[key] = newState[key];
    });
  },
};

export const actions = {
  async getProducts({ commit }, payload) {
    const { data } = await ProductService.getProducts(payload)
    commit('SET_PRODUCTS', data)
    return data
  },
};

export const getters = {
  products(state) {
    return state.products;
  },
};

export default {
  namespaced,
  state,
  mutations,
  actions,
  getters,
}
