<template>
  <div class="w-full max-w-4xl mx-auto p-8">
    <div class="relative flex flex-wrap w-full p-8 bg-indigo-300 rounded-3xl mt-10">
      <div v-if="visible" class="h-[500px]" style="width: 825px">
        <Maze
          v-if="!finished"
          class="rounded-2xl px-4"
          style="height: 500px; background-color: rgba(255, 255, 255, 0.5)"
          :strategy="strategy"
          :difficulty="mode"
          @init="init"
          @finish="onCompleted"
          :image-path="avatarImage"
          :goal-image-path="goalImage"
        />
        <div v-else>
          <div class="h-20">
            <h2 class="text-center text-2xl">Felicidades, has terminado el juego :D</h2>
          </div>
        </div>
      </div>
      <button class="absolute -top-3 -right-4" @click="reload">
        <img
          class="h-10 w-10 object-contain duration-100"
          :src="reloadIcon"
          alt="Recargar juego"
          title="Actualizar laberinto"
        />
      </button>
    </div>
  </div>
</template>

<script>
// Reference: https://github.com/meganetaaan/vue-maze
import Maze from 'vue-maze'

export default {
  name: 'Game-2',
  emits: ['is-completed'],
  components: { Maze },
  props: {
    mode: {
      type: String,
      default: 'easy',
    },
    avatarImage: {
      type: String,
      default: 'https://cdn-icons-png.flaticon.com/512/1683/1683769.png',
    },
    goalImage: {
      type: String,
      default: 'https://cdn-icons-png.flaticon.com/512/1775/1775888.png',
    },
    reloadIcon: {
      type: String,
      default: 'https://cdn-icons-png.flaticon.com/512/10151/10151918.png',
    },
  },
  data: () => ({
    finished: false,
    visible: true,
    strategy: 'dig',
  }),

  methods: {
    init(val) {
      console.log('Game initialized', val)
    },
    onCompleted(val) {
      this.finished = true
      console.log('Game completed', val)
      this.$emit('is-completed', true)
    },
    reload() {
      console.log('reloadMaze')
      this.visible = false
      this.finished = false
      this.$nextTick(() => {
        this.visible = true
      })
    },
  },
}
</script>
