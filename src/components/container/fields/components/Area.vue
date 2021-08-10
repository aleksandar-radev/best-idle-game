<template lang="">
<div class="grid outline-black select-none p-4"
    :class="{'bg-gray-300' : isActive()}"
    style="grid-template-rows: 15% 30% 35% 20%"
    @click="this.setActive">
  <div>{{ area.name }}</div>

  <div class="grid grid-cols-2 overflow-hidden">

    <div title="Area current level / Area max level" class="col-span-2">
      <div contenteditable="true" class="inline"> {{ area.level }}</div>
      / {{ area.totalLevel }}
    </div>

    <div>
      <img src="@/assets/leftArrow.png" class="h-7 m-auto" @click="decreaseAreaLevel">
    </div>
    <div>
      <img src="@/assets/rightArrow.png" class="h-7 m-auto" @click="increaseAreaLevel">
    </div>
  </div>

  <div v-if="area.unlocked" class="bg-green-500">{{ "Area unlocked"}}</div>
  <div v-else-if="previousArea !== undefined" class="m-1 bg-gray-400">
    Locked. Level <strong>{{`${area.previousAreaLevelRequired}`}}</strong> {{`${previousArea.name}`}} required
  </div>

  <div> {{ `${area.materialsDropped} / ${area.requiredMaterialsForNextLevel}` }}</div>
</div>
</template>

<script>
export default {
  name: 'Area',
  components: {},
  props: {
    areas: Object,
    index: String
  },
  methods: {
    isActive () {
      return this.$main.mine.activeArea === this.area.index
    },
    setActive () {
      this.$main.mine.activeArea = this.area.index
    },
    increaseAreaLevel () {
      if (this.area.level === this.area.totalLevel) {
        this.area.totalLevel++
      }
      this.area.level++
    },
    decreaseAreaLevel () {
      if (this.area.level > 1) this.area.level--
    }
  },
  data () {
    return {
      area: this.areas[this.index],
      previousArea: this.areas[Number(this.index) - 1]
    }
  },
  created () {
    return {}
  }
}
</script>

<style module lang="scss">
</style>
