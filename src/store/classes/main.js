
export class Main {
  constructor (props) {
    Object.assign(this, props)
  }

  getRandomMaterial () {
    const materials = this.getActiveArea().materials
    const chances = []
    let total = 0
    for (const key in materials) {
      total += materials[key].chance
      chances.push(total)
    }

    const rand = Math.random() * chances[chances.length - 1]

    return Object.keys(materials)[chances.filter(el => el <= rand).length]
  }

  getMaterialHp () {
    return this.materials[this.material].hp
  }

  getMaterialDropQuantity () {
    return this.materials[this.material].drop
  }

  getActiveArea () {
    return this.areas[this.activeArea]
  }

  getAreas () {
    return this.areas
  }

  increaseToolXp () {
    // it is -1 because on lvl 1 there should be no bonus (CHANGEABLE if needed)
    const xp = Math.floor((this.materials[this.material].xp +
      (this.getActiveArea().level - 1) * this.materials[this.material].xp) *
      this.tool.bonusXpFromTier)
    this.tool.increaseXp(xp)
  }
}
