<template lang="">
<div class="grid overflow-y-auto"
  @mouseover="$main.scroll = false"
  @mouseout="$main.scroll = true">
  <div v-for="(msg, index) in log" :key="index">
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
      mainType: this.$main[this.type],
      MAX_LOG_MESSAGES: 100
    }
  },
  updated: function () {
    this.$nextTick(function () {
      if (this.$main.scroll) {
        this.$el.scrollTop = this.$el.scrollHeight
      }
    })
  },
  computed: {
    log: function () {
      return this.mainType.log.filter((msg, index) => {
        return index >= this.mainType.log.length - this.MAX_LOG_MESSAGES
      })
    }
  }
}
</script>

<style module lang="scss">
</style>
