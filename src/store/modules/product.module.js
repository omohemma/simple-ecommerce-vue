import ProductService from '@/apis/product.js'
import { saveStateToLocalStorage } from '@/store/_utils.js'

export const namespaced = true

const persistedFavoriteProducts = JSON.parse(localStorage.getItem('favoriteProducts')) || []
const persistedLastViewedProducts = JSON.parse(localStorage.getItem('lastViewedProducts')) || []
const initialState = () => {
  return {
    products: [],
    favoriteProducts: persistedFavoriteProducts,
    product: {},
    lastViewedProducts: persistedLastViewedProducts,
  }
}

export const state = initialState()

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
  },
  SET_FAVORITE_PRODUCTS(state, products) {
    state.favoriteProducts = products
    saveStateToLocalStorage(products, 'favoriteProducts')
  },
  SET_LAST_VIEWED_PRODUCTS(state, products) {
    state.lastViewedProducts = products
    saveStateToLocalStorage(products, 'lastViewedProducts')
  },
  SET_PRODUCT(state, product) {
    state.product = product
  },
  RESET() {
    const newState = initialState()
    Object.keys(newState).forEach((key) => {
      state[key] = newState[key]
    })
  },
}

export const actions = {
  async getProducts({ commit }, payload) {
    const { data } = await ProductService.getProducts(payload)
    commit('SET_PRODUCTS', data)
    return data
  },
  async addProductToFavorites({ commit }, id) {
    let product = {}
    if (state.products.length === 0) {
      product = state.product
    } else {
      product = state.products.find((product) => product.id === id)
    }
    commit('SET_FAVORITE_PRODUCTS', [...state.favoriteProducts, product])
  },
  async removeProductFromFavorites({ commit }, id) {
    commit(
      'SET_FAVORITE_PRODUCTS',
      state.favoriteProducts.filter((product) => product.id !== id),
    )
  },
  async getProduct({ commit }, slug) {
    const { data } = await ProductService.getProductBySlug(slug)
    commit('SET_PRODUCT', data)
    return data
  },
  async addProductToVisitedItems({ commit }) {
    const product = state.product
    // don't add duplicate object
    if (state.lastViewedProducts.find((item) => item.id === product.id)) return
    commit('SET_LAST_VIEWED_PRODUCTS', [...state.lastViewedProducts, product])
  },
}

export const getters = {
  products(state) {
    return state.products
  },
  favoriteProducts(state) {
    return state.favoriteProducts
  },
  isProductFavorite: (state) => (id) => {
    return !!state.favoriteProducts.find((product) => product.id === id)
  },
  product(state) {
    return state.product
  },
  lastViewedProducts(state) {
    if (state.lastViewedProducts.length > 4) return state.lastViewedProducts.slice(0, 4)
    return state.lastViewedProducts
  },
}

export default {
  namespaced,
  state,
  mutations,
  actions,
  getters,
}
