<template>
  <div>
    <div class="mb-8">
      <h2 class="mb-4 text-3xl font-semibold text-center">
        {{ title }}
      </h2>
      <div
        v-if="hint.text || hint.image"
        class="mx-auto flex flex-col gap-4 items-center justify-center max-w-xl sm:flox-row"
      >
        <p
          v-if="hint.text"
          class="text-md text-center w-full"
        >
          {{ hint.text }}
        </p>
        <div
          v-if="hint.image"
          class="w-full flex justify-center"
        >
          <img class="rounded-lg" style="max-width: 180px" :src="getImgUrl(hint.image)" />
        </div>
      </div>
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
    title: {
      type: String,
      default: 'Adivina la palabra',
    },
    words: {
      type: Array,
      default: () => ['Hola', 'Mundo'],
    },
    hint: {
      type: Object,
      required: false,
    },
  },
  methods: {
    getImgUrl: function (img) {
      // external img
      if (img.match(/^(http|https):\/\//)) return img
      // local img
      return require(`~/assets/${img}`)
    },
    onCompleted(val) {
      console.log('Word completed', val)
      this.$emit('is-completed', true)
      window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>
