
const helperMethods = {
  getRandomMaterial (materials = []) {
    const chances = []
    let total = 0
    for (const key in materials) {
      total += materials[key].chance
      chances.push(total)
    }

    const rand = Math.random() * chances[chances.length - 1]

    return Object.keys(materials)[chances.filter(el => el <= rand).length]
  }
}

export default helperMethods
