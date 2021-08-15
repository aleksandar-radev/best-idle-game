import materials from './materials.js'

const areas = {
  0: {
    materials: {
      stone: { stats: materials.stone, chance: 1000 },
      ironOre: { stats: materials.ironOre, chance: 800 },
      copper: { stats: materials.copper, chance: 700 },
      silver: { stats: materials.silver, chance: 500 },
      gold: { stats: materials.gold, chance: 400 },
      platinum: { stats: materials.platinum, chance: 250 },
      lead: { stats: materials.lead, chance: 180 },
      titanium: { stats: materials.titanium, chance: 140 },
      bronze: { stats: materials.bronze, chance: 90 },
      cobalt: { stats: materials.cobalt, chance: 60 },
      nickel: { stats: materials.nickel, chance: 2 },
      diamond: { stats: materials.diamond, chance: 1 }
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
      titanium: { stats: materials.titanium, chance: 400 },
      chromite: { stats: materials.chromite, chance: 200 },
      lithium: { stats: materials.lithium, chance: 250 },
      manganese: { stats: materials.manganese, chance: 120 },
      nickel: { stats: materials.nickel, chance: 60 },
      quartz: { stats: materials.quartz, chance: 90 },
      zinc: { stats: materials.zinc, chance: 150 },
      perlite: { stats: materials.perlite, chance: 40 },
      obsidian: { stats: materials.obsidian, chance: 75 },
      azurite: { stats: materials.azurite, chance: 140 },
      citrine: { stats: materials.citrine, chance: 80 },
      turquoise: { stats: materials.turquoise, chance: 30 }
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
      turquoise: { stats: materials.turquoise, chance: 1000 },
      diamond: { stats: materials.diamond, chance: 700 },
      pyrite: { stats: materials.pyrite, chance: 680 },
      amethyst: { stats: materials.amethyst, chance: 500 },
      ruby: { stats: materials.ruby, chance: 370 },
      sapphire: { stats: materials.sapphire, chance: 180 },
      emerald: { stats: materials.emerald, chance: 310 },
      amber: { stats: materials.amber, chance: 220 },
      aquamarine: { stats: materials.aquamarine, chance: 150 },
      sunstone: { stats: materials.sunstone, chance: 90 },
      moonstone: { stats: materials.moonstone, chance: 50 },
      onyx: { stats: materials.onyx, chance: 2 }
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
      topaz: { stats: materials.topaz, chance: 2000 },
      bloodstone: { stats: materials.bloodstone, chance: 1750 },
      sulfur: { stats: materials.sulfur, chance: 1300 },
      zeolite: { stats: materials.zeolite, chance: 600 },
      lapisLazuli: { stats: materials.lapisLazuli, chance: 800 },
      cavansite: { stats: materials.cavansite, chance: 550 },
      garnet: { stats: materials.garnet, chance: 300 },
      howlite: { stats: materials.howlite, chance: 190 },
      zircon: { stats: materials.zircon, chance: 80 },
      tanzanite: { stats: materials.tanzanite, chance: 50 },
      blackStarDiopside: { stats: materials.blackStarDiopside, chance: 1 }
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
      topaz: { stats: materials.topaz, chance: 2000 },
      bloodstone: { stats: materials.bloodstone, chance: 1750 },
      sulfur: { stats: materials.sulfur, chance: 1300 },
      zeolite: { stats: materials.zeolite, chance: 600 },
      lapisLazuli: { stats: materials.lapisLazuli, chance: 800 },
      cavansite: { stats: materials.cavansite, chance: 550 },
      garnet: { stats: materials.garnet, chance: 300 },
      howlite: { stats: materials.howlite, chance: 190 },
      zircon: { stats: materials.zircon, chance: 80 },
      tanzanite: { stats: materials.tanzanite, chance: 50 },
      blackStarDiopside: { stats: materials.blackStarDiopside, chance: 1 }
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
