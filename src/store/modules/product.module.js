import ProductService from '@/apis/product.js'
import { saveStateToLocalStorage } from '@/store/_utils.js'

export const namespaced = true

const persistedFavoriteProducts = JSON.parse(localStorage.getItem('favoriteProducts')) || []
const initialState = () => {
  return {
    products: [],
    favoriteProducts: persistedFavoriteProducts,
  }
}

export const state = initialState()

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
  },
  SET_FAVORITE_PRODUCTS(state, products) {
    state.favoriteProducts = products
    saveStateToLocalStorage(products)
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
}

export default {
  namespaced,
  state,
  mutations,
  actions,
  getters,
}
