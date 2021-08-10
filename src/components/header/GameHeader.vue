<template lang="">
<header class="grid grid-cols-3 sm:grid-cols-6">
  <MenuItem v-for="item in menuItems"
  @click="setActiveMenu(item.name)" :key="item" :name=item.name
  :class="this.$state.activeMenu == item.name ? 'bg-green-400' : ''"
  class="hover:bg-green-200 text-xl overflow-hidden px-3 select-none"/>
</header>
</template>

<script>
import Container from '../container/Container.vue'
import MenuItem from './GameHeaderMenuItem.vue'

export default {
  name: 'GameHeader',
  components: {
    MenuItem
  },
  props: {},
  methods: {
    setActiveMenu (itemName) {
      this.$state.setActiveMenu(itemName)
    }
  },
  data () {
    return {
      menuItems: Container.components
    }
  },
  created () {
  }
}
</script>

<style module lang="scss">
</style>
