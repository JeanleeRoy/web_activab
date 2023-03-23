<template>
  <div>
    <MemoryGame
      v-if="cards?.length"
      :pairs="pairs"
      :cards="cards"
      :initial-hint-time="1800"
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
