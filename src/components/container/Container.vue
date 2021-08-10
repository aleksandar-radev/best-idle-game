<template lang="">
<div class="grid overflow-x-auto bg-red-100">
  <component :is='getActiveMenu()'></component>
  </div>
</template>

<script>
import Inventory from './inventory/Inventory.vue'
import Upgrades from './upgrades/Upgrades.vue'
import Mine from './fields/mine/Mine.vue'

export default {
  name: 'Container',
  components: {
    Inventory,
    Upgrades,
    Mine
  },
  props: {},
  methods: {
    getActiveMenu () {
      return this.$state.activeMenu
    },
    setHeight () {
      // height = total screen height - header - margin top + bot
      // on Home.vue (4 + 4) ***have to fix later
      this.$el.style.height = `calc(100vh - ${this.getHeaderHeight()}px - 8px)`
    }
  },
  data () {
    return {
    }
  },
  setup () {
    return {

    }
  },
  mounted () {
    let resizeTimer
    this.setHeight()
    window.addEventListener('resize', (e) => {
      if (resizeTimer) clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => { this.setHeight() }, 250)
    })
  }
}
</script>

<style module lang="scss">

</style>
