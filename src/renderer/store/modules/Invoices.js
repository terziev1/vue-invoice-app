import uuid from 'uuid/v4'
const state = {
  invoices: []
}

const actions = {
  ADD_INVOICE ({ commit }, invoice) {
    commit('ADD_INVOICE', invoice)
  },
  COMPLETE_INVOICE ({ commit }, id) {
    commit('COMPLETE_TODO', id)
  },
  CLEAR_INVOICE ({ commit }) {
    commit('CLEAR_INVOICE')
  }
}

const mutations = {
  ADD_INVOICE (state, invoice) {
    state.invoices = [ ...state.invoices, { id: uuid(), invoice } ]
  },
  COMPLETE_INVOICE (state, id) {
    state.invoices = state.invoices.filter((invoice) => invoice.id !== id)
  },
  CLEAR_INVOICE (state) {
    state.invoices = []
  }
}

export default {
  state,
  actions,
  mutations
}
