import { createStore } from 'vuex'
import laptops from './modules/laptops'
import smartphones from './modules/smartphones'

// Create a new store instance.
const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    laptops,
    smartphones
  },
})

export default store
