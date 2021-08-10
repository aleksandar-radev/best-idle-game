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
    this.store = this.$store.data.mine
    return {
      stats: {
        areas: this.store.areas,
        tool: this.store.tool,
        materials: this.store.materials
      }
    }
  },
  created () {
    return {}
  }
}
</script>

<style module lang="scss">
</style>
