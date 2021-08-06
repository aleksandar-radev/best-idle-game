<template lang="">
<div>
  <Log />
  <Areas />
</div>
</template>

<script>
import Log from './components/Log.vue'
import Areas from './components/Areas.vue'

export default {
  name: 'FieldTemplate',
  components: {
    Log,
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
