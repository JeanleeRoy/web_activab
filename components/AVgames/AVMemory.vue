<template>
  <div class="flex flex-col gap-8 pb-4">
    <h2 class="text-3xl font-semibold text-center">{{ title }}</h2>
    <MemoryGame
      v-if="cards?.length"
      :pairs="pairs"
      :cards="cards"
      :initial-hint-time="initialTime"
      :cover-image="coverImage"
      @completed="onCompleted"
    />
  </div>
</template>

<script>
import MemoryGame from '~/components/memoryGame.vue'

export default {
  name: 'AVMemory',
  emits: ['is-completed'],
  components: { MemoryGame },
  props: {
    title: {
      type: String,
      default: 'Memory Game',
    },
    pairs: {
      type: Number,
      default: 4,
    },
    cards: {
      type: Array,
      default: () => [],
    },
    coverImage: {
      type: String,
      default: 'img/a.jpg',
    },
    initialTime: {
      type: Number,
      default: 2000,
    },
  },
  methods: {
    onCompleted(val) {
      // console.log('Memory Game completed', val)
      this.$emit('is-completed', val)
    },
  },
}
</script>

<style scoped></style>
