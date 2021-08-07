<template lang="">
<div>
  <Tool />
  <Areas :areas="this.areas"/>
  <Log />
</div>
</template>

<script>
import Log from './components/Log.vue'
import Areas from './components/Areas.vue'
import Tool from './components/Tool.vue'

export default {
  name: 'FieldTemplate',
  components: {
    Tool,
    Areas,
    Log
  },
  props: {
    stats: Object
  },
  methods: {},
  data () {
    return {
      areas: this.stats.areas
    }
  },
  created () {
    console.log(this.areas)
    return {}
  }
}
</script>

<style module lang="scss">

</style>
