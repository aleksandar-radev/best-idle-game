<template lang="">
<div class="grid grid-cols-2">
  <ToolStats class="bg-red-50 span"/>
  <Areas class="bg-green-100"/>
  <Material class="bg-green-400"/>
</div>
</template>

<script>
import Areas from './components/Areas.vue'
import Material from './components/Material.vue'
import ToolStats from './components/ToolStats.vue'

export default {
  name: 'Mine',
  components: {
    ToolStats,
    Areas,
    Material
  },
  props: {},
  methods: {},
  data () {
    return {}
  },
  created () {
    return {}
  }
}
</script>

<style module lang="scss">

</style>
