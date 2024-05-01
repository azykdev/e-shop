import LaptopsService from "@/services/laptops"

const state = {
  dialog: false,
  laptops: [],
  laptop: null
}

const getters = {
  
}

const mutations = {
  SET_DIALOG(state, dialog) {
    state.dialog = dialog
    if (dialog === false) {
      state.laptop = null
    }
  },

  getLaptopsStart(state) {
    state.laptops = null
  },
  getLaptopsSuccess(state, payload) {
    state.laptops = payload
  },

  getLaptopStart(state) {
    state.laptop = null
  },
  getLaptopSuccess(state, payload) {
    state.laptop = payload
  }
}

const actions = {
  getLaptops({ commit }) {
    return new Promise((resolve) => {
      commit("getLaptopsStart")
      LaptopsService.getLaptops().then((res) => {
        commit("getLaptopsSuccess", res.data)
        resolve(res)
      })
    })
  },

  getLaptop({ commit }, id) {
    return new Promise((resolve) => {
      commit("getLaptopStart")
      LaptopsService.getLaptop(id).then((res) => {
        commit("getLaptopSuccess", res.data)
        resolve(res)
      })
    })
  },

  postLaptop({ commit }, data) {
    return new Promise((resolve) => {
      LaptopsService.postLaptop(data).then((res) => {
        commit("SET_DIALOG", false)
        resolve(res)
      })
    })
  },

  deleteLaptop({ commit }, id) {
    return new Promise((resolve) => {
      LaptopsService.deleteLaptop(id).then((res) => {
        resolve(res)
      })
    })
  },

  putLaptop({ commit }, data) {
    return new Promise((resolve) => {
      LaptopsService.putLaptop(data.id, data).then((res) => {
        commit("SET_DIALOG", false)
        resolve(res)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
