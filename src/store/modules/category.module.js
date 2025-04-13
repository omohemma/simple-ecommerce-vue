import CategoryService from '@/apis/category.js'
export const namespaced = true

const initialState = () => {
  return {
    categories: [],
  }
}

export const state = initialState()

export const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories
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
}

export const getters = {
  categories(state) {
    return state.categories;
  },
}

export default {
  namespaced,
  state,
  mutations,
  actions,
  getters,
}
