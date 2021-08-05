<template lang="">
<div class="grid overflow-x-auto bg-red-100">
  <component :is='getActiveMenu()'></component>
    <br>asd<br>asd<br>asd<br>asd<br>asd<br>asd<br>asd<br>asd<br>asd<br>asd<br>asd<br>asd<br>asd<br>asd<br>asd<br>asd<br>asd<br>asd<br>asd<br>asd<br>asd<br>asd<br>asd<br>asd<br>asd<br>asd<br>asd<br>asd<br>asd<br>asd<br>asd<br>asd<br>asd<br>asd<br>asd<br>asd<br>asd<br>asd<br>asd<br>asd<br>asd<br>asd<br>asd<br>asd<br>asd<br>asd<br>asd
  </div>
</template>

<script>
import Inventory from './Inventory/Inventory.vue'
import Mining from './Mining/Mining.vue'

export default {
  name: 'Container',
  components: {
    Inventory,
    Mining
  },
  props: {},
  methods: {
    getActiveMenu () {
      return this.$store.state.activeMenu
    },
    setHeight () {
      this.$el.style.height = `calc(100vh - ${this.getHeaderHeight()}px)`
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
      resizeTimer = setTimeout(() => { this.setHeight() }, 200)
    })
  }
}
</script>

<style module lang="scss">

</style>
