import materials from './materials.js'

const areas = {
  0: {
    materials: {
      0: { ...materials.stone, chance: 1000 },
      1: { ...materials.ironOre, chance: 800 },
      2: { ...materials.copper, chance: 700 },
      3: { ...materials.silver, chance: 500 },
      4: { ...materials.gold, chance: 400 },
      5: { ...materials.platinum, chance: 250 },
      6: { ...materials.lead, chance: 180 },
      7: { ...materials.titanium, chance: 140 },
      8: { ...materials.bronze, chance: 90 },
      9: { ...materials.cobalt, chance: 60 },
      10: { ...materials.nickel, chance: 2 },
      11: { ...materials.diamond, chance: 1 }
    },
    name: 'Underground mine',
    index: 0,
    level: 1,
    totalLevel: 1,
    materialsDropped: 0,
    requiredMaterialsForNextLevel: 20,
    unlocked: true
  },
  1: {
    materials: {
      0: { ...materials.titanium, chance: 400 },
      1: { ...materials.chromite, chance: 200 },
      2: { ...materials.lithium, chance: 250 },
      3: { ...materials.manganese, chance: 120 },
      4: { ...materials.nickel, chance: 60 },
      5: { ...materials.quartz, chance: 90 },
      6: { ...materials.zinc, chance: 150 },
      7: { ...materials.perlite, chance: 40 },
      8: { ...materials.obsidian, chance: 75 },
      9: { ...materials.azurite, chance: 140 },
      10: { ...materials.citrine, chance: 80 },
      11: { ...materials.turquoise, chance: 30 }
    },
    name: 'Surface mine',
    index: 1,
    level: 1,
    totalLevel: 1,
    previousAreaLevelRequired: 30,
    materialsDropped: 0,
    requiredMaterialsForNextLevel: 20,
    unlocked: false
  },
  2: {
    materials: {
      0: { ...materials.turquoise, chance: 1000 },
      1: { ...materials.diamond, chance: 700 },
      2: { ...materials.pyrite, chance: 680 },
      3: { ...materials.amethyst, chance: 500 },
      4: { ...materials.ruby, chance: 370 },
      5: { ...materials.sapphire, chance: 180 },
      6: { ...materials.emerald, chance: 310 },
      7: { ...materials.amber, chance: 220 },
      8: { ...materials.aquamarine, chance: 150 },
      9: { ...materials.sunstone, chance: 90 },
      10: { ...materials.moonstone, chance: 50 },
      11: { ...materials.onyx, chance: 2 }
    },
    name: 'In-situ mine',
    index: 2,
    level: 1,
    totalLevel: 1,
    previousAreaLevelRequired: 40,
    materialsDropped: 0,
    requiredMaterialsForNextLevel: 20,
    unlocked: false
  },
  3: {
    materials: {
      0: { ...materials.topaz, chance: 2000 },
      1: { ...materials.bloodstone, chance: 1750 },
      2: { ...materials.sulfur, chance: 1300 },
      3: { ...materials.zeolite, chance: 600 },
      4: { ...materials.lapisLazuli, chance: 800 },
      5: { ...materials.cavansite, chance: 550 },
      6: { ...materials.garnet, chance: 300 },
      7: { ...materials.howlite, chance: 190 },
      8: { ...materials.zircon, chance: 80 },
      9: { ...materials.tanzanite, chance: 50 },
      10: { ...materials.blackStarDiopside, chance: 1 }
    },
    name: 'Bingham Canyon mine',
    index: 3,
    level: 1,
    totalLevel: 1,
    previousAreaLevelRequired: 50,
    materialsDropped: 0,
    requiredMaterialsForNextLevel: 20,
    unlocked: false
  },
  4: {
    materials: {
      0: { ...materials.topaz, chance: 2000 },
      1: { ...materials.bloodstone, chance: 1750 },
      2: { ...materials.sulfur, chance: 1300 },
      3: { ...materials.zeolite, chance: 600 },
      4: { ...materials.lapisLazuli, chance: 800 },
      5: { ...materials.cavansite, chance: 550 },
      6: { ...materials.garnet, chance: 300 },
      7: { ...materials.howlite, chance: 190 },
      8: { ...materials.zircon, chance: 80 },
      9: { ...materials.tanzanite, chance: 50 },
      10: { ...materials.blackStarDiopside, chance: 1 }
    },
    name: 'Krion mine',
    index: 4,
    level: 1,
    totalLevel: 1,
    previousAreaLevelRequired: 50,
    materialsDropped: 0,
    requiredMaterialsForNextLevel: 20,
    unlocked: false
  }
}

export default areas
