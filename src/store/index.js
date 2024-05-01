import { createStore } from 'vuex'
import laptops from './modules/laptops'
import smartphones from './modules/smartphones'
import electronics from './modules/electronics'

// Create a new store instance.
const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    laptops,
    smartphones,
    electronics
  },
})

export default store
