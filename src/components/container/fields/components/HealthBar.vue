<template lang="">
<div>
  {{ mainType.hp }} / {{ mainType.maxHp }}
</div>
</template>

<script>
//  import MenuItem from './GameHeaderMenuItem.vue'

export default {
  name: 'HealthBar',
  components: {},
  props: {
    type: String
  },
  methods: {},
  data () {
    return {
      mainType: this.$main[this.type]
    }
  },
  created () {
    return {}
  }
}
</script>

<style module lang="scss">

</style>
