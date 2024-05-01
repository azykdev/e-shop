import SmartphoneService from "@/services/smartphones"

const state = {
  dialog: false,
  smartphones: [],
  smartphone: null
}

const getters = {
  
}

const mutations = {
  SET_DIALOG(state, dialog) {
    state.dialog = dialog
    if (dialog === false) {
      state.smartphone = null
    }
  },

  getSmartphonesStart(state) {
    state.smartphones = null
  },
  getSmartphonesSuccess(state, payload) {
    state.smartphones = payload
  },

  getSmartphoneStart(state) {
    state.smartphone = null
  },
  getSmartphoneSuccess(state, payload) {
    state.smartphone = payload
  }
}

const actions = {
  getSmartphones({ commit }) {
    return new Promise((resolve) => {
      commit("getSmartphonesStart")
      SmartphoneService.getSmartphones().then((res) => {
        commit("getSmartphonesSuccess", res.data)
        resolve(res)
      })
    })
  },

  getSmartphone({ commit }, id) {
    return new Promise((resolve) => {
      commit("getSmartphoneStart")
      SmartphoneService.getSmartphone(id).then((res) => {
        commit("getSmartphoneSuccess", res.data)
        resolve(res)
      })
    })
  },

  postSmartphone({ commit }, data) {
    return new Promise((resolve) => {
      SmartphoneService.postSmartphone(data).then((res) => {
        commit("SET_DIALOG", false)
        resolve(res)
      })
    })
  },

  deleteSmartphone({ commit }, id) {
    return new Promise((resolve) => {
      SmartphoneService.deleteSmartphone(id).then((res) => {
        resolve(res)
      })
    })
  },

  putSmartphone({ commit }, data) {
    return new Promise((resolve) => {
      SmartphoneService.putSmartphone(data.id, data).then((res) => {
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
