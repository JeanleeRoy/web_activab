<template>
  <div class="lectura-a w-full min-h-screen">
    <div class="w-full max-w-4xl mx-auto p-8">
      <div class="flex flex-wrap w-full p-8 bg-indigo-300 rounded-3xl mt-28">
        <img class="w-full escalar" src="../static/lectura_a/Lectura_1.png" />
        <form class="w-full p-4 md:p-6 rounded-lg" @submit.prevent="onClick">
          <div class="sm:w-10/12 mx-auto flex justify-around">
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
  name: 'LecturaA',
  methods: {
    onClick() {
      this.$router.push('/preitemb')
    },
  },
}
</script>
<style>
.lectura-a {
  background-image: url('../static/a.png');
  background-size: cover;
  background-position: center bottom;
}

.escalar {
  transform: scale(1.25);
}
</style>
