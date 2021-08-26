import { Upgrades } from '../classes/upgrades'

function requiredMaterial (x, y) {
  return {
    required: x,
    requiredOnLevel: x,
    requiredTotal: y
  }
}

const upgrades = new Upgrades({
  increasePickaxePower: {
    name: 'Increase pickaxe power',
    level: 0,
    currentBonus: 0,
    bonusOnLevel: 2,
    value: 'flat',
    requiredMaterials: {
      stone: requiredMaterial(1, 1),
      ironOre: requiredMaterial(1, 0),
      stick: requiredMaterial(1, 1)
    }
  },
  increasePickaxeAtackSpeed: {
    name: 'Increase pickaxe atack speed',
    level: 0,
    currentBonus: 0,
    bonusOnLevel: 0.01,
    value: 'percent',
    requiredMaterials: {
      copper: requiredMaterial(1, 1),
      silver: requiredMaterial(1, 0),
      stick: requiredMaterial(1, 1)
    }
  },
  upgradeTier: {
    name: 'Upgrade tier',
    level: 0,
    currentBonus: 0,
    bonusOnLevel: 1,
    value: 'flat',
    requiredLevel: 50,
    requiredMaterials: {

    }
  },
  decreaseLookingForMaterialTime: {
    name: 'Decrease finding time',
    level: 0,
    currentBonus: 0,
    bonusOnLevel: 0.01,
    value: 'percent',
    requiredMaterials: {
      copper: requiredMaterial(1, 1)
    }
  },
  upgradePickaxe: {
    name: 'Upgrade pickaxe',
    level: 0,
    currentBonus: 0,
    bonusOnLevel: 1,
    value: 'flat',
    requiredTier: 50,
    requiredMaterials: {
    }
  },
  addChanceForDoubleMaterial: {
    name: 'Add chance for double material',
    level: 0,
    currentBonus: 0,
    bonusOnLevel: 1,
    value: 'flat',
    requiredMaterials: {
      stone: requiredMaterial(10, 5)
    }
  },
  increaseStoneDrop: {
    name: 'Increase stone drop',
    level: 0,
    currentBonus: 0,
    bonusOnLevel: 1,
    value: 'flat',
    requiredMaterials: {
      stone: requiredMaterial(100, 100)
    }
  },
  increaseIronOreDrop: {
    name: 'increase iron drop',
    level: 0,
    currentBonus: 0,
    bonusOnLevel: 1,
    value: 'flat',
    requiredMaterials: {
      ironOre: requiredMaterial(100, 100)
    }
  },
  increaseCopperDrop: {
    name: 'Increase copper drop',
    level: 0,
    currentBonus: 0,
    bonusOnLevel: 1,
    value: 'flat',
    requiredMaterials: {
      copper: requiredMaterial(100, 100)
    }
  },
  increaseSilverDrop: {
    name: 'Increase silver drop',
    level: 0,
    currentBonus: 0,
    bonusOnLevel: 1,
    value: 'flat',
    requiredMaterials: {
      silver: requiredMaterial(100, 100)
    }
  },
  increaseGoldDrop: {
    name: 'Increase gold drop',
    level: 0,
    currentBonus: 0,
    bonusOnLevel: 1,
    value: 'flat',
    requiredMaterials: {
      gold: requiredMaterial(100, 100)
    }
  },
  increasePlatinumDrop: {
    name: 'Increase platinum drop',
    level: 0,
    currentBonus: 0,
    bonusOnLevel: 1,
    value: 'flat',
    requiredMaterials: {
      platinum: requiredMaterial(100, 100)
    }
  },
  increaseChanceToFindDiamond: {
    name: 'Increase change to find diamond',
    level: 0,
    currentBonus: 0,
    bonusOnLevel: 0.05,
    value: 'percent',
    requiredMaterials: {
      silver: requiredMaterial(50, 50),
      gold: requiredMaterial(50, 50),
      platinum: requiredMaterial(50, 50),
      diamond: requiredMaterial(5, 5)
    }
  },
  increaseChanceToFindAzurite: {
    name: 'Increase chance to find azurite',
    level: 0,
    currentBonus: 0,
    bonusOnLevel: 0.05,
    value: 'percent',
    requiredMaterials: {

    }
  },
  increaseChanceToFindOnyx: {
    name: 'Increase chance to find onyx',
    level: 0,
    currentBonus: 0,
    bonusOnLevel: 0.05,
    value: 'percent',
    requiredMaterials: {

    }
  },
  increaseChanceToFindBlackStarDiopside: {
    name: 'Increase chance to find black star diopside',
    level: 0,
    currentBonus: 0,
    bonusOnLevel: 0.05,
    value: 'percent',
    requiredMaterials: {

    }
  }
})

export default upgrades
