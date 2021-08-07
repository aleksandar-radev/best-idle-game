<template lang="">
<div class="grid grid-cols-2">
  <FieldTemplate class="bg-red-50 span" :stats="this.stats"/>
</div>
</template>

<script>
import FieldTemplate from '../FieldTemplate.vue'
import areas from './areas'

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
        areas
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
