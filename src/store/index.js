import { reactive } from 'vue'
import mineMain from './mine/mine'
import h from './helpers'
export default function (app, options) {
  const state = {
    activeMenu: 'Inventory', // initial active menu, for start screen
    setActiveMenu (menuItem) {
      this.activeMenu = menuItem
    },
    getHeaderHeight () {
      return document.querySelector('header').offsetHeight
    }
  }

  const main = {
    coins: 10,
    mine: { ...mineMain }
  }

  const methods = {
    main (mainType) {
      const areaMaterials = mainType.areas[mainType.activeArea].materials
      mainType.material = 'Searching...'
      mainType.setInterval(() => {
        mainType.material = h.getRandomMaterial(areaMaterials)
      }, 2000)
    }
  }

  app.config.globalProperties.$state = reactive({ ...state })
  app.config.globalProperties.$methods = reactive({ ...methods })
  app.config.globalProperties.$main = reactive({ ...main })

  return app
}
