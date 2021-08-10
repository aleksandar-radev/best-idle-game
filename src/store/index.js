import { reactive } from 'vue'
import mineMain from './mine'

export default function (app, options) {
  const state = {
    activeMenu: 'Mine', // initial active menu, for start screen
    setActiveMenu (menuItem) {
      this.activeMenu = menuItem
    }
  }

  const methods = {
  }

  const main = {
    coins: 10,
    mine: { ...mineMain }
  }

  app.config.globalProperties.$state = reactive({ ...state })
  app.config.globalProperties.$methods = reactive({ ...methods })
  app.config.globalProperties.$main = reactive({ ...main })

  return app
}
