<template lang="">
<div class="grid" @click="startAction">
  <div class="self-center" v-bind="material">
    {{ material ?? `Click here to start ${getAction()}` }}
    {{ getMaterial() }}
  </div>
</div>
</template>

<script>

export default {
  name: 'Material',
  components: {},
  props: {
    type: String
  },
  methods: {
    getAction () {
      return this.action.charAt(0).toUpperCase() + this.action.slice(1)
    },
    startAction () {
      this.$methods.main(this.type)
      console.log(this.$main[this.type].material)
    },
    getMaterial () {
      return this.$main[this.type].material
    }
  },
  data () {
    return {
      action: this.$main[this.type].action,
      material: this.$main[this.type].material
    }
  },
  created () {
  }
}
</script>

<style module lang="scss">

</style>
