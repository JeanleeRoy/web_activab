<template>
  <div
    class="relative w-fit"
    :class="{ 'pointer-events-none opacity-50 select-none': disabled }"
    @click="goToLevelItem"
  >
    <img
      v-if="isDone"
      src="~/assets/img/icons/validated.png"
      class="absolute top-0 right-0 w-8 h-8 z-10"
      alt="done"
      title="Elemento completado"
    />
    <div
      class="group border-4 border-yellow-300 w-36 h-36 bg-gray-200 rounded-full cursor-pointer shadow-lg overflow-hidden hover:shadow-xl transition-all ease duration-300"
    >
      <img
        class="w-full h-full fit-object-cover p-2"
        :src="require(`~/assets/img/game-item/${imageName}`)"
        alt="Recurso"
      />
    </div>
    <h3 class="w-36 mt-5 inline-flex justify-center font-bold">{{ getLevelItemNameName() }}</h3>
  </div>
</template>

<script>
const itemTypes = ['lecturas', 'games', 'questions']

export default {
  name: 'levelItem',
  props: {
    type: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    level: {
      type: Number,
      required: true,
    },
    levelItem: {
      type: Number,
      required: true,
    },
    completed: {
      type: Boolean,
      required: false,
    },
  },
  computed: {
    imageName() {
      return itemTypes.includes(this.type) ? `${this.type}.png` : 'default.png'
    },
    isDone() {
      return this.completed
    },
  },
  data: () => ({
    number: 0,
  }),
  methods: {
    goToLevelItem() {
      this.$router.push(`/level/${this.level}/${this.levelItem}`)
    },
    getLevelItemNameName() {
      switch (this.type) {
        case 'lecturas':
          return 'Lectura'
        case 'games':
          return 'Juego'
        case 'questions':
          return 'Preguntas'
        default:
          return 'Recurso'
      }
    },
  },
}
</script>

<style scoped>
.group:hover {
  animation: bamboleo 0.8s ease-in-out infinite;
}

/* animation  bamboleo */
@keyframes bamboleo {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(7deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-7deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
