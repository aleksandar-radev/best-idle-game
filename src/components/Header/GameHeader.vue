<template lang="">
<header class="grid grid-cols-3 sm:grid-cols-6">
  <MenuItem v-for="item in menuItems"
  @click="setActive(item.name)" :key="item" :name=item.name
  :class="this.$store.state.activeMenu == item.name ? 'bg-green-400' : ''"
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
    setActive (itemName) {
      this.$store.commit('setActiveMenu', itemName)
    }
  },
  data () {
    return {
      menuItems: Container.components
    }
  }
}
</script>

<style module lang="scss">
</style>
