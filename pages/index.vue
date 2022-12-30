<template>
  <main></main>
</template>

<script>
import { VueSlidePuzzle } from 'vue-slide-puzzle'
import 'vue-slide-puzzle/dist/VueSlidePuzzle.css'
import MemoryGame from '~/components/memoryGame.vue'
import HangManGame from '~/components/HangManGame.vue'
import PuzzleGame from '~/components/PuzzleGame.vue'
export default {
  name: 'IndexPage',
  components: { VueSlidePuzzle, MemoryGame, HangManGame, PuzzleGame },
  middleware: ['authenticated', 'dashboard'],
}
</script>
