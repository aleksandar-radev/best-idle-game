<template lang="">
<div class="grid grid-cols-3 sm:grid-cols-6">
  <MenuItem v-for="item in menuItems"
  @click="setActive(item.name)" :key="item" :name=item.name
  :class="this.$store.state.activeMenu == item.name ? 'bg-green-400' : ''"
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
      menuItems: {
        inventory: {
          name: 'Inventory'
        },
        upgrades: {
          name: 'Upgrades'
        },
        mining: {
          name: 'Mining'
        },
        woodcutting: {
          name: 'Woodcutting'
        },
        hunting: {
          name: 'Hunting'
        },
        shop: {
          name: 'Shop'
        },
        statistics: {
          name: 'Statitics'
        }
      }
    }
  },
  created () {}
}
</script>

<style module lang="scss">
</style>
