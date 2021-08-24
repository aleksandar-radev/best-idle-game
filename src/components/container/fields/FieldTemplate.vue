<template lang="">
<div class="grid overflow-hidden" style="grid-template-rows: 35% 25% 30% 10%; grid-template-columns: repeat(3, 33.3%)">
  <Tool class=" outline-black" :tool="this.tool"/>
  <Areas class="row-span-2 col-span-2 outline-black" :areas="this.areas"/>
  <Material class=" outline-black" :type="this.type"/>
  <Log class="col-span-3 outline-black" :type="'mine'"/>
  <HealthBar class="col-span-3 outline-black asd" :type="this.type"/>
</div>
</template>

<script>
import Log from './components/Log.vue'
import Areas from './components/Areas.vue'
import Tool from './components/Tool.vue'
import Material from './components/Material.vue'
import HealthBar from './components/HealthBar.vue'

export default {
  name: 'FieldTemplate',
  components: {
    Tool,
    Areas,
    Log,
    Material,
    HealthBar
  },
  props: {
    stats: Object
  },
  methods: {},
  data () {
    return {
      areas: this.stats.areas,
      tool: this.stats.tool,
      type: this.stats.type
    }
  },
  created () {
    return {}
  }
}
</script>

<style module lang="scss">

</style>
