<template lang="">
<div class="grid overflow-y-auto"
  @mouseover="$main.scroll = false"
  @mouseout="$main.scroll = true">
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
  methods: {
  },
  data () {
    return {
      mainType: this.$main[this.type]
    }
  },
  updated: function () {
    this.$nextTick(function () {
      if (this.$main.scroll) {
        this.$el.scrollTop = this.$el.scrollHeight
      }
    })
  }
}
</script>

<style module lang="scss">
</style>
