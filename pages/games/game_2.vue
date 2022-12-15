<template>
  <div class="game-2 w-full min-h-screen">
    <div class="w-full max-w-4xl mx-auto p-8">
      <div class="flex flex-wrap w-full p-8 bg-indigo-300 rounded-3xl mt-10">
        <div style="width: 825px">
          <Maze
            v-if="!finished"
            style="height: 500px"
            difficulty="easy"
            @finish="onFinish"
            image-path="https://github.com/JeanleeRoy/web_activab/blob/master/assets/img/0.jpg?raw=true"
            goal-image-path="https://github.com/JeanleeRoy/web_activab/blob/master/assets/img/0.jpg?raw=true"
          />
          <div v-else>
            <h2>Se acabó</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Maze from 'vue-maze'
export default {
  name: 'Game-2',
  components: { Maze },
  data: () => ({
    finished: false,
  }),
  methods: {
    onFinish() {
      this.finished = true
    },
  },
}
</script>
<style>
.game-2 {
  background-image: url('@/assets/b.png');
  background-size: cover;
  background-position: center bottom;
}
</style>
