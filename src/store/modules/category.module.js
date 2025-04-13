import CategoryService from '@/apis/category.js'
export const namespaced = true

const initialState = () => {
  return {
    categories: [],
    category: {},
    products: [],
  }
}

export const state = initialState()

export const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  },
  SET_CATEGORY(state, category) {
    state.category = category
  },
  SET_CATEGORY_PRODUCTS(state, products) {
    state.products = products
  },
  RESET() {
    const newState = initialState()
    Object.keys(newState).forEach((key) => {
      state[key] = newState[key]
    })
  },
}

export const actions = {
  async getCategories({ commit }, payload = "") {
    const { data } = await CategoryService.getCategories(payload)
    commit('SET_CATEGORIES', data)
    return data
  },
  async getCategory({ commit }, slug) {
    const { data } = await CategoryService.getCategoryBySlug(slug)
    commit('SET_CATEGORY', data)
    return data
  },
  async getCategoryProducts({ commit }, payload) {
    const { data } = await CategoryService.getCategoryProducts(payload)
    commit('SET_CATEGORY_PRODUCTS', data)
    return data
  },
}

export const getters = {
  categories(state) {
    return state.categories;
  },
  getCategoryBySlug: (state) => (slug) => {
    return state.categories.find(category => category.slug === slug);
  },
  category(state) {
    return state.category;
  },
  categoryProducts(state) {
    return state.products;
  },
}

export default {
  namespaced,
  state,
  mutations,
  actions,
  getters,
}
