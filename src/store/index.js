import { createStore } from 'vuex'

export default createStore({
  state: {
    activeMenu: 'Mining'
  },
  mutations: {
    setActiveMenu (state, menuItem) {
      state.activeMenu = menuItem
    }
  },
  actions: {

  },
  modules: {

  }
})
