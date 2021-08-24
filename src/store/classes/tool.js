
export class Tool {
  constructor (props) {
    Object.assign(this, props)
  }

  getFindingTime () {
    return this.findingTime
  }

  getAps () {
    return this.aps
  }

  getPower () {
    const damageFromUpgrades = () => this.upgrade.index * 3 / 10 + 1
    const damageFromTier = () => 0.9 + this.xp.tier / 10

    return Math.floor((
      this.damage.power +
      this.damage.powerFromLevels * damageFromUpgrades() +
      this.damage.powerFromUpgrades) *
      damageFromTier())
  }

  increaseXp (xp) {
    this.xp.currentXp += xp
  }
}
