import { createStore } from 'vuex'

export default createStore({
  state: {
    activeMenu: 'Inventory'
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
