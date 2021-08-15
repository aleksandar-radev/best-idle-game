<template lang="">
<div v-for="type in Object.keys(all)" :key="type">
  <div class="bg-gray-400" @click="toggleShown(type)">{{ type }}</div>
  <div v-if="all[type].shown" class="grid bg-gray-200 sm:grid-cols-3 grid-cols-1">
    <div v-for="material in all[type].materials" :key="material">
      <div v-if="material.quantity != 0" class="grid grid-flow-col mx-4 my-0.5 border-b-2 border-indigo-500">
        <div class="text-left">{{ material.name }}</div><div class="text-right">{{ material.quantity }}</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Inventory',
  components: {},
  props: {},
  methods: {
    toggleShown (type) {
      this.all[type].shown = !this.all[type].shown
    }
  },
  data () {
    const main = this.$main
    const all = {}
    Object.keys(main).forEach((type) => {
      if (Object.prototype.hasOwnProperty.call(main[type], 'materials')) {
        all[type] = {
          materials: main[type].materials,
          shown: true
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
