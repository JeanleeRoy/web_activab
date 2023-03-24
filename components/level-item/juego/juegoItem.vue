<template>
  <div>
    <template v-if="type === 'puzzle'">
      <AVPuzzle @is-completed="validateState" />
    </template>
    <template v-if="type === 'memory'">
      <AVMemory v-bind="game.props" @is-completed="validateState" />
    </template>
  </div>
</template>

<script>
import AVPuzzle from '~/components/AVgames/AVPuzzle.vue'
import AVMemory from '~/components/AVgames/AVMemory.vue'

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
  components: { AVPuzzle, AVMemory },
}
</script>
