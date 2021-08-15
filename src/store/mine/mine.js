import mineAreas from './areas'
import mineMaterials from './materials'
import mineTool from './tool'
import { Main } from '../classes'

const main = new Main({
  active: false,
  finding: null, // timeout
  breaking: null, // interval
  activeArea: 0,
  material: null,
  action: 'mining',
  type: 'mine',
  hp: null,
  maxHp: null,

  areas: mineAreas,
  materials: mineMaterials,
  tool: mineTool

})

export default main
