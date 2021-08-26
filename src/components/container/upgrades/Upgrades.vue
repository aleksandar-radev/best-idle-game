<template lang="">
<div v-for="type in Object.keys(all)" :key="type">
  <div class="bg-gray-400" @click="toggleShown(type)">{{ type }}</div>
  <div v-if="all[type].shown" class="grid bg-gray-200 sm:grid-cols-3 grid-cols-1">
    <div v-for="upgrade in all[type].upgrades" :key="upgrade"
    class="grid">

      <div class="text-left">{{ upgrade.name }}</div>
      <div class="">{{ upgrade.level }}</div>
      <div class="text-left">{{ upgrade.level }}</div>

    </div>
  </div>
</div>
</template>

<script>
//  import MenuItem from './GameHeaderMenuItem.vue'

export default {
  name: 'Upgrades',
  components: {},
  props: {},
  methods: {
    toggleShown (type) {
      this.all[type].shown = !this.all[type].shown
    }
  },
  data () {
    const all = {}
    Object.keys(this.$main).forEach((type) => {
      // use if main has other objects different than farming ones
      // if (Object.prototype.hasOwnProperty.call(main[type], 'materials')) {
      if (this.$main[type] instanceof Object) {
        all[type] = {
          shown: true,
          upgrades: this.$main[type].upgrades
        }
      }
    })
    return {
      all
    }
  },
  created () {
    return {}
  }
}
</script>

<style module lang="scss">
</style>
