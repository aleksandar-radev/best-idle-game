<template lang="">
<div class="grid grid-cols-3 sm:grid-cols-6">
  <MenuItem v-for="item in menuItems"
  @click="setActive(item)" :key="item" :name=item
  :class="this.$store.state.activeMenu == item ? 'bg-green-400' : ''"
  class="hover:bg-green-200" />
</div>
</template>

<script>
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
      menuItems: ['Inventory', 'Mining', 'Woodcutting', 'deda', 'deda', 'deda', 'deda', 'deda']
    }
  }
}
</script>

<style module lang="scss">
</style>
