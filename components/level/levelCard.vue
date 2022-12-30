<template>
  <div
    class="w-fit"
    :class="{ 'pointer-events-none opacity-50 select-none': disabled }"
    @click="goToLevel"
  >
    <div
      class="group relative w-48 h-48 bg-gray-200 rounded-3xl cursor-pointer shadow-lg overflow-hidden hover:shadow-2xl transition-all ease-in-out duration-300"
    >
      <img
        class="w-full h-full fit-object-contain p-2 rotate-12"
        :src="imageUrl"
        :alt="levelText"
      />
      <div
        class="absolute flex items-center justify-center z-10 top-0 left-0 w-full h-full p-8 bg-transparent text-transparent transition-all ease-in-out duration-300 group-hover:bg-yellow-400 group-hover:bg-opacity-90 group-hover:text-white text-center text-5xl font-bold"
      >
        {{ level }}
      </div>
    </div>
    <h3 class="w-48 mt-5 inline-flex justify-center">{{ levelText }}</h3>
  </div>
</template>

<script>
export default {
  name: 'levelCard',
  props: {
    level: {
      type: Number,
      required: true,
    },
    levelText: {
      type: String,
      default: '- Nivel -',
    },
    imageUrl: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    number: 0,
  }),
  methods: {
    goToLevel() {
      this.$router.push(`/level/${this.level}`)
    },
  },
}
</script>
