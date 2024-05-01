import ElectronicsService from "@/services/electronics"

const state = {
  dialog: false,
  electronics: [],
  electronic: null
}

const getters = {
  
}

const mutations = {
  SET_DIALOG(state, dialog) {
    state.dialog = dialog
    if (dialog === false) {
      state.electronic = null
    }
  },

  getElectronicsStart(state) {
    state.electronics = null
  },
  getElectronicsSuccess(state, payload) {
    state.electronics = payload
  },

  getElectronicStart(state) {
    state.electronic = null
  },
  getElectronicSuccess(state, payload) {
    state.electronic = payload
  }
}

const actions = {
  getElectronics({ commit }) {
    return new Promise((resolve) => {
      commit("getElectronicsStart")
      ElectronicsService.getElectronics().then((res) => {
        commit("getElectronicsSuccess", res.data)
        resolve(res)
      })
    })
  },

  getElectronic({ commit }, id) {
    return new Promise((resolve) => {
      commit("getElectronicStart")
      ElectronicsService.getElectronic(id).then((res) => {
        commit("getElectronicSuccess", res.data)
        resolve(res)
      })
    })
  },

  postElectronic({ commit }, data) {
    return new Promise((resolve) => {
      ElectronicsService.postElectronic(data).then((res) => {
        commit("SET_DIALOG", false)
        resolve(res)
      })
    })
  },

  deleteElectronic({ commit }, id) {
    return new Promise((resolve) => {
      ElectronicsService.deleteElectronic(id).then((res) => {
        resolve(res)
      })
    })
  },

  putElectronic({ commit }, data) {
    return new Promise((resolve) => {
      ElectronicsService.putElectronic(data.id, data).then((res) => {
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
