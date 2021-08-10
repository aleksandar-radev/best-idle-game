import { reactive } from 'vue'
import mineAreas from './mine/areas'
import mineMaterials from './mine/materials'
import mineTool from './mine/tool'

export default function (app, options) {
  const state = {
    activeMenu: 'Mine', // initial active menu, for start screen
    setActiveMenu (menuItem) {
      this.activeMenu = menuItem
    }
  }

  const data = {
    mine: {
      areas: mineAreas,
      materials: mineMaterials,
      tool: mineTool
    }
  }

  const methods = {

  }

  app.config.globalProperties.$store = reactive({
    state,
    data,
    methods
  })

  return app
}
