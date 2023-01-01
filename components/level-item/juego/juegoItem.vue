<template>
  <div>
    <template v-if="type === 'puzzle'">
      <AVPuzzle @is-completed="validateState" />
    </template>
  </div>
</template>

<script>
import AVPuzzle from '~/components/AVgames/AVPuzzle.vue'

export default {
  name: 'JuegoItem',
  emits: ['completed'],
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    completed: false,
  }),
  methods: {
    validateState(isCompleted) {
      if (isCompleted) {
        console.log('JuegoItem isCompleted', isCompleted)
        this.$emit('completed', isCompleted)
        this.completed = isCompleted
      }
    },
  },
  components: { AVPuzzle },
}
</script>
