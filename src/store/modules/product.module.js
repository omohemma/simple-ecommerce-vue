
export const namespaced = true;

const initialState = () => {
  return {
    products: [],
  };
};

export const state = initialState();

export const mutations = {
  RESET() {
    const newState = initialState();
    Object.keys(newState).forEach((key) => {
      state[key] = newState[key];
    });
  },
};

export const actions = {
};

export const getters = {};
