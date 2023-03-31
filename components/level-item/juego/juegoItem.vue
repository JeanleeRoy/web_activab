<template>
  <div>
    <template v-if="type === 'puzzle'">
      <AVPuzzle v-bind="game.props" @is-completed="validateState" />
    </template>
    <template v-if="type === 'memory'">
      <AVMemory v-bind="game.props" @is-completed="validateState" />
    </template>
    <template v-if="type === 'maze'">
      <AvMaze v-bind="game.props" @is-completed="validateState" />
    </template>
    <template v-if="type === 'hangman'">
      <AVHangman v-bind="game.props" @is-completed="validateState" />
    </template>
  </div>
</template>

<script>
import AVPuzzle from '~/components/AVgames/AVPuzzle.vue'
import AVMemory from '~/components/AVgames/AVMemory.vue'
import AvMaze from '~/components/AVgames/AVMaze.vue'
import AVHangman from '~/components/AVgames/AVHangman.vue'

export default {
  name: 'JuegoItem',
  emits: ['completed'],
  props: {
    game: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    completed: false,
  }),
  computed: {
    type() {
      return this.game.type
    },
  },
  methods: {
    validateState(isCompleted) {
      if (isCompleted) {
        console.log('JuegoItem isCompleted', isCompleted)
        this.$emit('completed', isCompleted)
        this.completed = isCompleted
      }
    },
  },
  components: { AVPuzzle, AVMemory, AvMaze, AVHangman },
}
</script>
