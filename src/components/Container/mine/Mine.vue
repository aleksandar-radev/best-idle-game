<template lang="">
<div class="grid grid-cols-2">
  <ToolStats class="bg-red-50"/>
  <Areas class="bg-green-100"/>
</div>
</template>

<script>
import Areas from './components/Areas.vue'
import ToolStats from './components/ToolStats.vue'

export default {
  name: 'Mine',
  components: {
    ToolStats,
    Areas
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
