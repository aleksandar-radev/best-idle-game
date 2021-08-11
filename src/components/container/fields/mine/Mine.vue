<template lang="">
  <FieldTemplate :stats="this.stats"/>
</template>

<script>
import FieldTemplate from '../FieldTemplate.vue'

export default {
  name: 'mine',
  components: {
    FieldTemplate
  },
  props: {},
  methods: {},
  data () {
    const self = this.$main.mine
    return {
      stats: {
        areas: self.areas,
        tool: self.tool,
        materials: self.materials,
        type: this.$options.name.toLowerCase()
      }
    }
  },
  created () {
  }
}
</script>

<style module lang="scss">
</style>
