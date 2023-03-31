<template>
  <div class="pb-4">
    <b class="block mb-2">
      {{ wordArray.length == 1 ? 'Palabra' : 'Frase' }}
    </b>
    <div class="flex justify-center flex-wrap gap-3">
      <div v-for="(word, i) in wordArray" :key="i">
        <Button
          v-for="(_, j) in word"
          color="primary"
          :size="fails < 0 ? 'md' : 'sm'"
          class="letters"
        >
          {{ letters[letterIndex(i, j)] }}
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '~/components/button.vue'

export default {
  name: 'Letters',
  components: { Button },
  props: {
    letters: String,
    word: String,
    fails: Number,
  },
  computed: {
    wordArray() {
      return this.word.split(' ')
    },
  },
  methods: {
    letterIndex(i, j) {
      let offset = 0
      for (let k = 0; k < i; k++) {
        offset += this.wordArray[k].length
      }
      return offset + i + j
    },
  },
}
</script>

<style scoped>
button {
  font-family: Consolas, 'Courier New', Courier, monospace;
  margin-left: 4px;
  pointer-events: none;
  transition: all 0.15s ease-in-out;
}
.space {
  display: inline-block;
  margin-left: 20px;
}
</style>
