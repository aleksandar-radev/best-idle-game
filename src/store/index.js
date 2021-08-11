import { reactive } from 'vue'
import mineMain from './mine'
import h from './helpers'

export default function (app, options) {
  const state = {
    activeMenu: 'mine', // initial active menu, for start screen
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
    main (type) {
      const areaMaterials = main[type].areas[main[type].activeArea].materials
      // setInterval(() => {
      const mat = h.getRandomMaterial(areaMaterials)
      main[type].material = mat
      console.log(main[type].material)
      // }, 5000)
    }
  }

  app.config.globalProperties.$state = reactive({ ...state })
  app.config.globalProperties.$methods = reactive({ ...methods })
  app.config.globalProperties.$main = reactive({ ...main })

  return app
}
