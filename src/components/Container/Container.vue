<template lang="">
  <component :is='getActiveMenu()'></component>
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
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style module lang="scss">

</style>
