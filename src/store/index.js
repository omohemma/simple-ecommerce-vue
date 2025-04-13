import { createStore } from 'vuex'
import modules from "./modules";

const debug = process.env.NODE_ENV !== "production";

// Create a new store instance.
const store = createStore({
  modules,
  strict: debug,
});

export default store;
