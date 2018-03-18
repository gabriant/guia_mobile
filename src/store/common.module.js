import API from '@/config/http'
import ENDPOINTS from '@/config/endpoints'

const state = {
  loading: false,
}

const getters = {
  isLoading (state) { return state.loading },
}

const mutations = {
  setLoading: (state, payload) => state.loading = payload ,
}

const actions = {
  setLoading ({commit}, payload) {
    commit('setLoading', payload)
  },

  getSearch({ commit }, [resource = 'servicos', text = '']) {
    return new Promise((resolve, reject) => {
      commit('setLoading', true)
      let endpoint = resource.toUpperCase() + '_SEARCH'
      API.get(ENDPOINTS[endpoint] + text)
        .then(response => {
          commit('setLoading', false)
          resolve(response.data.results)
        })
        .catch(errors => {
          commit('setLoading', false)
          reject(errors)
        })
    })
  }

}

export default { state, getters, mutations, actions }