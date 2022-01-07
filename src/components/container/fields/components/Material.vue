<template lang="">
<div class="grid select-none" @click="startAction">
  <div class="self-center">
    {{ material ?? `Click here to start poop ${action}` }}
  </div>
</div>
</template>

<script>
// import h from '@/store/helpers'
export default {
  name: 'Material',
  components: {},
  props: {
    type: String
  },
  methods: {
    startAction () {
      if (this.mainType.active) {
        this.$methods.stopMain(this.mainType)
      } else {
        this.$methods.main(this.mainType)
      }
    }
  },
  data () {
    return {
      mainType: this.$main[this.type]
    }
  },
  created () {
  },
  computed: {
    material () {
      return this.mainType.material
    },
    action () {
      const action = this.mainType.action
      return action.charAt(0).toUpperCase() + action.slice(1)
    }
  }
}
</script>

<style module lang="scss">
</style>
