<template>
  <div class="game-1 w-full min-h-screen">
    <div class="w-full max-w-4xl mx-auto p-8">
      <div class="flex flex-wrap w-full p-8 bg-indigo-300 rounded-3xl mt-28">
        <div style="width: 825px; height: 600px">
          <VueSlidePuzzle
            :ratio="3"
            mode="near"
            src="https://github.com/JeanleeRoy/web_activab/blob/master/assets/img/0.jpg?raw=true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PuzzleGame from '~/components/PuzzleGame.vue'
import { VueSlidePuzzle } from 'vue-slide-puzzle'
import 'vue-slide-puzzle/dist/VueSlidePuzzle.css'
export default {
  name: 'Game-1',
  components: { VueSlidePuzzle },
}
</script>
<style>
.game-1 {
  background-image: url('@/assets/b.png');
  background-size: cover;
  background-position: center bottom;
}
</style>
