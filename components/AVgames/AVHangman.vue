<template>
  <div>
    <div class="mb-8">
      <h2 class="mb-4 text-3xl font-semibold text-center">Adivina la palabra</h2>
      <p v-if="description" class="mx-auto text-md max-w-xl text-center">
        {{ description }}
      </p>
    </div>
    <HangManGame
      :words="words"
      @restart="$emit('restart')"
      @word-completed="onCompleted"
    />
  </div>
</template>

<script>
import HangManGame from '~/components/HangManGame.vue'

export default {
  name: 'AVHangman',
  components: { HangManGame },
  emits: ['isCompleted', 'restart'],
  props: {
    words: {
      type: Array,
      default: () => ['Hola', 'Mundo'],
    },
    description: {
      type: String,
      required: false,
    },
  },
  methods: {
    onCompleted(val) {
      console.log('Word completed', val)
      this.$emit('is-completed', true)
    },
  },
}
</script>
