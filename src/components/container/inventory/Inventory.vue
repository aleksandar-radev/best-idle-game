<template lang="">
<div v-for="type in Object.keys(all)" :key="type">
  <div class="bg-gray-400" @click="toggleShown(type)">{{ type }}</div>
  <div v-if="all[type].shown" class="grid bg-gray-200 sm:grid-cols-3 grid-cols-1">
    <div v-for="material in availableMaterials(type)" :key="material">
      <div v-if="material.quantity !== 0" class="grid grid-flow-col mx-4 my-0.5 border-b-2 border-indigo-500">
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
          shown: true,
          materials: main[type].materials
        }
      }
    })
    return {
      all
    }
  },
  created () {
    return {}
  },
  computed: {
    availableMaterials: function () {
      return type => {
        const materialsWithQuantity = {}
        for (const material in this.all[type].materials) {
          const mat = this.all[type].materials[material]
          if (mat.quantity !== 0) {
            materialsWithQuantity[material] = mat
          }
        }
        console.log(materialsWithQuantity)
        return materialsWithQuantity
      }
    }
  }
}
</script>

<style module lang="scss">
</style>
