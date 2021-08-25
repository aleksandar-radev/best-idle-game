import { reactive } from 'vue'
import mineMain from './mine/mine'
// import h from './helpers'

export default function (app, options) {
  const state = {
    activeMenu: 'Mine', // initial active menu, for start screen
    setActiveMenu (menuItem) {
      this.activeMenu = menuItem
    },
    getHeaderHeight () {
      return document.querySelector('header').offsetHeight
    }
  }

  const main = {
    coins: 10,
    scroll: true,
    mine: mineMain
  }

  const methods = {
    main (mainType) {
      mainType.active = true
      const searching = 'Searching...'

      if (mainType.material === searching) {
        mainType.material = mainType.getRandomMaterial()
      } else {
        mainType.material = searching
      }

      if (mainType.material === searching) { // rerun the function
        mainType.finding = setTimeout(() => { this.main(mainType) }, mainType.tool.getFindingTime())
      } else {
        const currentMaterialHp = mainType.getMaterialHp()
        mainType.hp = currentMaterialHp
        mainType.maxHp = currentMaterialHp
        mainType.breaking = setInterval(() => { breaking(mainType) }, mainType.tool.getAps())
      }
    },
    stopMain (mainType) {
      mainType.material = null
      mainType.active = false
      mainType.hp = null
      mainType.maxHp = null
      clearTimeout(mainType.finding)
      clearInterval(mainType.breaking)
    }
  }

  const breaking = (mainType) => {
    mainType.hp -= mainType.tool.getPower()

    if (mainType.hp < 0) mainType.hp = 0
    if (mainType.hp === 0) {
      const area = mainType.getActiveArea()
      const drop = mainType.getMaterialDropQuantity()
      mainType.materials[mainType.material].quantity += drop
      mainType.materials[mainType.material].totalDropped += drop

      mainType.log.push(`${drop} ${mainType.material} obtained`)

      // add drop if on the last level
      if (area.level === area.totalLevel) {
        // limit to the maximum
        if (area.materialsDropped < area.requiredMaterialsForNextLevel) {
          if (area.materialsDropped + drop > area.requiredMaterialsForNextLevel) {
            area.materialsDropped = area.requiredMaterialsForNextLevel
          } else {
            area.materialsDropped += drop
          }
        }
      }

      mainType.increaseToolXp()

      methods.main(mainType)
      clearInterval(mainType.breaking)
    }
  }

  app.config.globalProperties.$state = reactive({ ...state })
  app.config.globalProperties.$methods = reactive({ ...methods })
  app.config.globalProperties.$main = reactive({ ...main })

  return app
}
