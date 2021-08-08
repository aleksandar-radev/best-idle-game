<template lang="">
<div class="grid sm:grid-cols-2 overflow-x-auto" style="grid-auto-rows: 50%">
  <Area v-for="(area, index) in areas" :key="area" :areas="areas" :index="index" />
</div>
</template>

<script>
import Area from './Area.vue'

export default {
  name: 'Areas',
  components: {
    Area
  },
  props: {
    areas: Object
  },
  methods: {},
  data () {
    return {}
  },
  created () {
    console.log(this.areas[0])
    return {}
  }
}
</script>

<style lang="scss">

</style>
