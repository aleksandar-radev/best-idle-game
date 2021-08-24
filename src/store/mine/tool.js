import { Tool } from '../classes/tool'

const tool = new Tool({
  index: 0,
  upgrade: {
    index: 0,
    list: ['Wooden pickaxe', 'Stone pickaxe',
      'Iron pickaxe', 'Gold pickaxe',
      'Platinum pickaxe', 'Diamond pickaxe']
  },
  xp: {
    level: 1,
    tier: 1,
    currentXp: 0,
    neededXp: 20,
    totalXP: 0,
    initialNeededXp: 20,
    neededXpOnLevel: 20
  },
  damage: {
    power: 50,
    initialPower: 5,
    powerOnLevel: 1,
    initialPowerOnLevel: 1,
    powerFromLevels: 0,
    powerFromUpgrades: 0
  },
  aps: 2_00,
  findingTime: 2_000,
  chanceForDoubleMaterial: 0
})

export default tool
