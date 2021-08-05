import { createStore } from 'vuex'

export default createStore({
  state: {
    // initial active menu, for start screen
    activeMenu: 'Mine'
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
