<template>
  <div class="puzzle-width flex flex-col gap-4 mx-auto">
    <h2 class="text-3xl font-semibold text-center">Rompecabezas</h2>
    <div class="puzzle-width puzzle-height mx-auto max-w-full">
      <VueSlidePuzzle
        :ratio="ratio"
        :mode="mode"
        :src="imageUrl"
        @card-drop="onCardMoved"
        @card-touchend="onCardMoved"
      />
    </div>
    <div>
      <p><b>Pista:</b> Intenta arrastrar las piezas :D</p>
    </div>
  </div>
</template>

<script>
import { VueSlidePuzzle } from 'vue-slide-puzzle'
import 'vue-slide-puzzle/dist/VueSlidePuzzle.css'
export default {
  name: 'AVPuzzle',
  emits: ['is-completed'],
  props: {
    mode: {
      type: String,
      default: 'near',
    },
    ratio: {
      type: Number,
      default: 3,
    },
    imageUrl: {
      type: String,
      default:
        'https://github.com/JeanleeRoy/web_activab/blob/master/assets/img/0.jpg?raw=true',
    },
  },
  methods: {
    onCardMoved(val) {
      // console.log('AVPuzzle isCompleted', val)
      this.$emit('is-completed', val.gameSuccess)
    },
  },
  components: { VueSlidePuzzle },
}
</script>

<style lang="scss">
.puzzle-width {
  width: 300px;
  @media screen and (min-width: 480px) {
    width: 460px;
  }
  @media screen and (min-width: 640px) {
    width: 600px;
  }
  @media screen and (min-width: 960px) {
    width: 825px;
  }
}
.puzzle-height {
  height: 220px;
  @media screen and (min-width: 480px) {
    height: 320px;
  }
  @media screen and (min-width: 640px) {
    height: 435px;
  }
  @media screen and (min-width: 960px) {
    height: 600px;
  }
}
</style>
