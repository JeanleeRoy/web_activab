<template>
  <div class="preguntab-page w-full min-h-screen">
    <div class="w-full max-w-xl mx-auto p-8">
      <div class="flex flex-wrap w-full p-8 bg-white rounded-3xl mt-28">
        <h1 class="w-full mb-4 text-center text-3xl font-semibold">
          Resuelve el rompecabezas
        </h1>
        <img src="../static/lectura_a/rompecabezaa.jpg" />
        <form
          class="w-full p-4 mt-2 md:p-6 rounded-lg bg-gray-50"
          @submit.prevent="onClick"
        >
          <div class="sm:w-10/12 mt-4 mx-auto flex justify-around mt-8">
            <button
              class="w-2/5 sm:w-3/7 min-w-min w-50 px-4 pt-1 pb-2 text-lg font-semibold bg-yellow-400 hover:bg-yellow-300 rounded-lg"
            >
              back
            </button>
            <button
              type="submit"
              class="w-2/5 sm:w-3/7 min-w-min w-50 px-4 pt-1 pb-2 text-lg font-semibold bg-yellow-400 hover:bg-yellow-300 rounded-lg"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PreguntaB',
  data: () => ({
    option: null,
  }),
  methods: {
    onClick() {
      this.$router.push('/preguntac')
    },
  },
}
</script>

<style>
.preguntab-page {
  background-image: url('../static/a.png');
  background-size: cover;
  background-position: center bottom;
}
</style>
