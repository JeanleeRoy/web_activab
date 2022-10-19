<template>
  <div class="preguntad-page w-full min-h-screen">
    <div class="w-full max-w-xl mx-auto p-8">
      <div class="flex flex-wrap w-full p-8 bg-green-300 rounded-3xl mt-28">
        <h1 class="w-full mb-4 text-center text-3xl font-semibold">
          ¿Qué significa la palabra piscicultura?
        </h1>
        <img src="../static/lectura_a/pregunta_4.jpg" />
        <form
          class="w-full p-4 mt-2 md:p-6 rounded-lg bg-gray-50"
          @submit.prevent="onClick"
        >
          <div class="flex flex-col space-y-4">
            <div class="bg-indigo-200 px-6 py-3 rounded-lg">
              <input id="chcx_1" v-model="option" type="radio" value="1" />
              <label class="ml-2" for="chcx_1"
                >crianza de peces en tanques o recintos para el consumo humano</label
              >
            </div>
            <div class="bg-indigo-200 px-6 py-3 rounded-lg">
              <input id="chcx_2" v-model="option" type="radio" value="2" />
              <label class="ml-2" for="chcx_2">crianza de cuyes / conejos</label>
            </div>
            <div class="bg-indigo-200 px-6 py-3 rounded-lg">
              <input id="chcx_3" v-model="option" type="radio" value="3" />
              <label class="ml-2" for="chcx_3">crianza de cuyes</label>
            </div>
          </div>
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
  name: 'preguntad',
  data: () => ({
    option: null,
  }),
  methods: {
    onClick() {
      this.$router.push('/preguntae')
    },
  },
}
</script>

<style>
.preguntad-page {
  background-image: url('../static/a.png');
  background-size: cover;
  background-position: center bottom;
}
</style>
