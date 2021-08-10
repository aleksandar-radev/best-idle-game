import materials from './materials.js'

const areas = {
  0: {
    materials: {
      stone: { ...materials.stone, chance: 1000 },
      ironOre: { ...materials.ironOre, chance: 800 },
      copper: { ...materials.copper, chance: 700 },
      silver: { ...materials.silver, chance: 500 },
      gold: { ...materials.gold, chance: 400 },
      platinum: { ...materials.platinum, chance: 250 },
      lead: { ...materials.lead, chance: 180 },
      titanium: { ...materials.titanium, chance: 140 },
      bronze: { ...materials.bronze, chance: 90 },
      cobalt: { ...materials.cobalt, chance: 60 },
      nickel: { ...materials.nickel, chance: 2 },
      diamond: { ...materials.diamond, chance: 1 }
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
      titanium: { ...materials.titanium, chance: 400 },
      chromite: { ...materials.chromite, chance: 200 },
      lithium: { ...materials.lithium, chance: 250 },
      manganese: { ...materials.manganese, chance: 120 },
      nickel: { ...materials.nickel, chance: 60 },
      quartz: { ...materials.quartz, chance: 90 },
      zinc: { ...materials.zinc, chance: 150 },
      perlite: { ...materials.perlite, chance: 40 },
      obsidian: { ...materials.obsidian, chance: 75 },
      azurite: { ...materials.azurite, chance: 140 },
      citrine: { ...materials.citrine, chance: 80 },
      turquoise: { ...materials.turquoise, chance: 30 }
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
      turquoise: { ...materials.turquoise, chance: 1000 },
      diamond: { ...materials.diamond, chance: 700 },
      pyrite: { ...materials.pyrite, chance: 680 },
      amethyst: { ...materials.amethyst, chance: 500 },
      ruby: { ...materials.ruby, chance: 370 },
      sapphire: { ...materials.sapphire, chance: 180 },
      emerald: { ...materials.emerald, chance: 310 },
      amber: { ...materials.amber, chance: 220 },
      aquamarine: { ...materials.aquamarine, chance: 150 },
      sunstone: { ...materials.sunstone, chance: 90 },
      moonstone: { ...materials.moonstone, chance: 50 },
      onyx: { ...materials.onyx, chance: 2 }
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
      topaz: { ...materials.topaz, chance: 2000 },
      bloodstone: { ...materials.bloodstone, chance: 1750 },
      sulfur: { ...materials.sulfur, chance: 1300 },
      zeolite: { ...materials.zeolite, chance: 600 },
      lapisLazuli: { ...materials.lapisLazuli, chance: 800 },
      cavansite: { ...materials.cavansite, chance: 550 },
      garnet: { ...materials.garnet, chance: 300 },
      howlite: { ...materials.howlite, chance: 190 },
      zircon: { ...materials.zircon, chance: 80 },
      tanzanite: { ...materials.tanzanite, chance: 50 },
      blackStarDiopside: { ...materials.blackStarDiopside, chance: 1 }
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
      topaz: { ...materials.topaz, chance: 2000 },
      bloodstone: { ...materials.bloodstone, chance: 1750 },
      sulfur: { ...materials.sulfur, chance: 1300 },
      zeolite: { ...materials.zeolite, chance: 600 },
      lapisLazuli: { ...materials.lapisLazuli, chance: 800 },
      cavansite: { ...materials.cavansite, chance: 550 },
      garnet: { ...materials.garnet, chance: 300 },
      howlite: { ...materials.howlite, chance: 190 },
      zircon: { ...materials.zircon, chance: 80 },
      tanzanite: { ...materials.tanzanite, chance: 50 },
      blackStarDiopside: { ...materials.blackStarDiopside, chance: 1 }
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
