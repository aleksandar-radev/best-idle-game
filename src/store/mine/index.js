import mineAreas from './areas'
import mineMaterials from './materials'
import mineTool from './tool'

const main = {
  active: false,
  activeArea: 0,
  material: null,
  action: 'mining',
  type: 'mine',

  areas: mineAreas,
  _materials: mineMaterials,
  tool: mineTool
}

export default main
