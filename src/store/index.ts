import { createStore } from 'vuex'

export default createStore({
  state: {
    author:'mrwh',
    count:0
  },
  mutations: {
    add (state, payload) {
      state.count = payload.count
    },
    min (state, payload) {
      state.count = payload.count
    }
  },
  actions: {
    async add(ctx) {
      ctx.commit('add', {
        count: 100
      })
    }
  },
  modules: {
  }
})
