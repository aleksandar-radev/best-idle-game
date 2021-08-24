<template lang="">
<div class="grid overflow-y-auto">
  <div v-for="msg in mainType.log" :key="msg">
    {{ msg }}
  </div>
</div>
</template>

<script>
//  import MenuItem from './GameHeaderMenuItem.vue'

export default {
  name: 'Log',
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
    // if (scroll) sa('.log')[mainType.index].scrollTop = sa('.log')[mainType.index].scrollHeight
    return {}
  }
}
</script>

<style module lang="scss">

</style>
