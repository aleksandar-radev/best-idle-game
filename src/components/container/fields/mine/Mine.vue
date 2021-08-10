<template lang="">
  <FieldTemplate :stats="this.stats"/>
</template>

<script>
import FieldTemplate from '../FieldTemplate.vue'

export default {
  name: 'Mine',
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
        materials: self.materials
      }
    }
  },
  created () {
  }
}
</script>

<style module lang="scss">
</style>
