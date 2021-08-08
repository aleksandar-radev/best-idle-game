<template lang="">
  <FieldTemplate :stats="this.stats"/>
</template>

<script>
import FieldTemplate from '../FieldTemplate.vue'
import areas from './areas.js'
import tool from './tool.js'
import materials from './materials.js'

export default {
  name: 'Mine',
  components: {
    FieldTemplate
  },
  props: {},
  methods: {},
  data () {
    return {
      stats: {
        areas,
        tool,
        materials
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
