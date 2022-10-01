export const state = () => ({
  data: null,
})

export const getters = {
  getData(state) {
    return state.data
  },
}

export const mutations = {
  setData(state, payload) {
    state.data = payload
  },
}
