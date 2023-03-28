<template>
  <main>
    <div class="p-8 md:p-16">
      <!-- <GameButton :disabled="false"> Continuar </GameButton> -->
      <!-- <AVmultiform /> -->
      <!-- <AVMemory
        :cards="cards"
        :pairs="pairs"
        cover-image="https://cdn-icons-png.flaticon.com/512/7186/7186917.png"
      /> -->
      <!-- <AVMaze /> -->
      <HangManGame />
    </div>
  </main>
</template>

<script>
import { VueSlidePuzzle } from 'vue-slide-puzzle'
import 'vue-slide-puzzle/dist/VueSlidePuzzle.css'
import HangManGame from '~/components/HangManGame.vue'
import PuzzleGame from '~/components/PuzzleGame.vue'
import AVmultiform from '~/components/AVquestions/AVmultiform.vue'
import AVMemory from '~/components/AVgames/AVMemory.vue'
import AVMaze from '~/components/AVgames/AVMaze.vue'
export default {
  name: 'IndexPage',
  components: { VueSlidePuzzle, AVMemory, HangManGame, PuzzleGame, AVmultiform, AVMaze },
  middleware: ['authenticated', 'dashboard'],
  data: () => ({
    pairs: 3,
    cards: [
      {
        img: 'lectura_3/game/ingeniero.jpg',
        tag: 1,
      },
      { img: 'lectura_3/game/maestro.jpg', tag: 2 },
      { img: 'lectura_3/game/medico.jpg', tag: 3 },
      // { img: 'lectura_3/games/ingeniero.jpg', tag: 4 },
      { img: 'lectura_3/game/ingeniero_text.jpg', tag: 1 },
      { img: 'lectura_3/game/maestro_text.jpg', tag: 2 },
      { img: 'lectura_3/game/medico_text.jpg', tag: 3 },
      // { img: 'lectura_3/games/ingeniero.jpg', tag: 4 },
    ],
  }),
}
</script>
