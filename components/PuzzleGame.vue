<template>
  <div class="game-wrapper">
    <board-grid />
    <puzzle-grid />
  </div>
</template>

<script>
import BoardGrid from './puzzle/BoardGrid.vue'
import PuzzleGrid from './puzzle/PuzzleGrid.vue'
import GameMixin from './puzzle/GameMixin'
export default {
  mixins: [GameMixin],
  mounted() {
    this.prepareGame()
  },
  components: {
    'board-grid': BoardGrid,
    'puzzle-grid': PuzzleGrid,
  },
}
</script>

<style lang="scss">
.game-wrapper {
  display: block;
  float: none;
  margin: 0 auto;
  padding: 0;
}
</style>
