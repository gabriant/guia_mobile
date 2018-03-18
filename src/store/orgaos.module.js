import API from '@/config/http'
import ENDPOINTS from '@/config/endpoints'
// import Framework7 from 'framework7/dist/framework7.esm.bundle.js'

// var app = new Framework7()

const state = {
  orgaos: []
}

const getters = {
  getOrgaos(state) {
    return state.orgaos
  }
}

const mutations = {
  setOrgaos: (state, data) => state.orgaos = data
}

const actions = {
  // GET:/orgaos
  //   ?include=grupos
  //   ?include=grupos.servicos
  fetchOrgaos({ commit }, includes = null) {
    let url = ENDPOINTS.ORGAOS
    if (includes) url += `?include=${includes}`

    return new Promise((resolve, reject) => {
      // commit('setLoading', true)
      // app.preloader.show()
      API.get(url)
        .then(response => {
          commit('setOrgaos', response.data.results)
          commit('setLoading', false)
          // app.preloader.hide()
          resolve(response.data.results)
        })
        .catch(errors => {
          commit('setLoading', false)
          // app.preloader.hide()
          reject(errors)
        })
    })
  },

  // GET: /orgaos/{orgaoID}

}

export default { state, getters, mutations, actions }