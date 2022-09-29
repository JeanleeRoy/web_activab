<template>
  <div class="login-page w-full min-h-screen">
    <div class="w-full max-w-xl mx-auto p-8">
      <div class="flex flex-wrap w-full p-8 bg-red-400 rounded-3xl mt-28">
        <h1 class="w-full mb-4 text-center text-3xl font-semibold">
          ¡Bienvenidos a ActiVAB!
        </h1>
        <form
          class="w-full p-4 mt-2 md:p-6 rounded-lg bg-gray-50"
          @submit.prevent="onLogin"
        >
          <div class="flex flex-col space-y-4">
            <div class="flex w-full rounded-lg overflow-hidden">
              <label
                for="email-address"
                class="w-1/3 min-w-min py-2 px-4 text-white bg-black font-bold"
                >Nombre</label
              >
              <input
                id="email-address"
                v-model="data.username"
                type="text"
                class="w-2/3 py-2 px-4 focus:outline-none bg-gray-200"
                placeholder="Tu nombre es..."
              />
            </div>
            <div class="flex w-full rounded-lg overflow-hidden">
              <label
                for="email-address"
                class="w-1/3 min-w-min py-2 px-4 text-white bg-black font-bold"
                >Contraseña</label
              >
              <input
                id="email-address"
                v-model="data.password"
                type="password"
                class="w-2/3 py-2 px-4 focus:outline-none bg-gray-200"
                placeholder="Tu clave secreta..."
              />
            </div>
          </div>
          <div class="sm:w-10/12 mt-4 mx-auto flex justify-around mt-8">
            <button
              class="w-2/5 sm:w-3/7 min-w-min w-50 px-4 pt-1 pb-2 text-lg font-semibold bg-yellow-400 hover:bg-yellow-300 rounded-lg"
            >
              Salir
            </button>
            <button
              type="submit"
              class="w-2/5 sm:w-3/7 min-w-min w-50 px-4 pt-1 pb-2 text-lg font-semibold bg-yellow-400 hover:bg-yellow-300 rounded-lg"
            >
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data: () => ({
    data: {
      username: null,
      password: null,
    },
  }),
  methods: {
    onLogin() {
      this.$router.push('/dashboard')
    },
  },
}
</script>

<style>
.login-page {
  background-image: url('../static/login-bg.png');
  background-size: cover;
  background-position: center bottom;
}
</style>
