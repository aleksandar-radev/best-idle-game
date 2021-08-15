
export class Main {
  constructor (props) {
    Object.assign(this, props)
  }

  getActiveArea () {
    return this.areas[this.activeArea]
  }

  getAreas () {
    return this.areas
  }
}
