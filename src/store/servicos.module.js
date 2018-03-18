import API from '@/config/http'
import ENDPOINTS from '@/config/endpoints'

const state = {
  servicos: []
}

const getters = {
  getServicos(state) {
    return state.servicos
  }
}

const mutations = {
  setServicos: (state, data) => state.servicos = data
}

const actions = {

  fetchServicoCompleteDetails ({ commit }, servico_id) {
    return new Promise((resolve, reject) => {
      commit('setLoading', true)
      API.get(`${ENDPOINTS.SERVICOS}/${servico_id}?include=grupo.orgao,locais.conteudos`)
        .then(response => {
          commit('setLoading', false)
          resolve(response.data)
        })
        .catch(errors => {
          commit('setLoading', false)
          reject(errors)
        })
    })
  },

}

export default { state, getters, mutations, actions }