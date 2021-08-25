<template lang="">
<div class="grid outline-black select-none p-4"
    :class="{'bg-gray-300' : isActive()}"
    style="grid-template-rows: 15% 30% 35% 20%">
  <div>
    {{ area.name }}
  </div>

  <div class="grid grid-cols-2 overflow-hidden">
    <div title="Area current level / Area max level" class="col-span-2">
      <input type="number" min="1" :max="area.totalLevel" class="inline w-12 bg-transparent" v-model="area.level" @input="setLevel">
      / {{ area.totalLevel }}
    </div>

    <div>
      <img src="@/assets/leftArrow.png" class="h-7 m-auto" @click="decreaseLevel">
    </div>
    <div>
      <img src="@/assets/rightArrow.png" class="h-7 m-auto" @click="increaseLevel">
    </div>
  </div>

  <div v-if="area.unlocked" class="bg-green-500" @click="this.setActive">
    {{ "Area unlocked"}}
  </div>
  <div v-else-if="previousArea !== undefined" class="m-1 bg-gray-400" @click="this.setActive">
    Locked. Level <strong>{{`${area.previousAreaLevelRequired}`}}</strong> {{`${previousArea.name}`}} required
  </div>

  <div v-if="area.level === area.totalLevel">
    {{ `${area.materialsDropped} / ${area.requiredMaterialsForNextLevel}` }}
  </div>
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
      if (this.area.unlocked) {
        this.$main.mine.activeArea = this.area.index
      }
    },
    increaseLevel () {
      if (!this.area.unlocked) return
      if (this.area.level === this.area.totalLevel &&
       this.area.materialsDropped === this.area.requiredMaterialsForNextLevel) {
        this.area.materialsDropped = 0
        this.area.totalLevel++
        this.area.level++
      } else if (this.area.level < this.area.totalLevel) {
        this.area.level++
      }
    },
    decreaseLevel () {
      if (!this.area.unlocked) return
      if (this.area.level > 1) this.area.level--
    },
    setLevel (e) {
      if (e.target.value >= this.area.totalLevel) this.area.level = this.area.totalLevel
    }
  },
  data () {
    return {
      area: this.areas[this.index],
      previousArea: this.areas[Number(this.index) - 1],
      nextArea: this.areas[Number(this.index) + 1]
    }
  },
  created () {
    return {}
  },
  updated () {
    this.$nextTick(function () {
      if (this.nextArea && this.area.level >= this.nextArea.previousAreaLevelRequired) {
        this.nextArea.unlocked = true
      }
    })
  }
}
</script>

<style module lang="scss">
</style>
