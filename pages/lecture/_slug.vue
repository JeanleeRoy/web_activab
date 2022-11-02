<template>
  <div class="lectura w-screen min-h-screen relative">
    <div class="w-full max-w-4xl mx-auto p-8">
      <div class="flex flex-wrap w-full py-8 px-3 gap-y-4 rounded-3xl my-4">
        <img
          class="w-full escalar z-0"
          :src="require(`~/assets/lectura_${this.id}/lectura.png`)"
        />
        <div class="sm:w-10/12 mx-auto flex justify-around">
          <button
            @click="showQuestions = true"
            class="w-2/5 sm:w-3/7 min-w-min cursor-pointer px-4 pt-1 pb-2 text-lg font-semibold bg-yellow-400 hover:bg-yellow-300 rounded-lg z-10"
          >
            Preguntas
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="showQuestions"
      class="questions z-50 bg-gray-100"
      :class="{ 'show-up': showQuestions }"
    >
      <Multiform :lecture="lecture" v-model="showQuestions" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    lecture() {
      return `lectura_${this.id}`
    },
  },
  data: () => ({
    showQuestions: null,
  }),
  async asyncData({ params }) {
    const id = params.slug
    return { id }
  },
}
</script>

<style lang="scss" scoped>
.lectura {
  background-image: url('~/static/b.png');
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.escalar {
  transform: scale(1.25);
}

.questions {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-origin: bottom;
  transform: scaleY(0);
  transition: all ease 0.2s;
  animation: show-up ease-in-out 0.5s;
  &.show-up {
    transform: scaleY(1);
  }
}

@keyframes show-up {
  0% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
}
</style>
