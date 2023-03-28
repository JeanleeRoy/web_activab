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
            <div class="flex flex-col w-full rounded-lg overflow-hidden sm:flex-row">
              <label
                for="email-address"
                class="w-full text-sm min-w-min py-2 px-4 text-white bg-black font-bold sm:w-1/3 sm:text-base"
                >Usuario</label
              >
              <input
                id="email-address"
                v-model="data.username"
                type="text"
                required
                class="w-full py-2 px-4 focus:outline-none bg-gray-200 sm:w-2/3"
                placeholder="Tu DNI es..."
              />
            </div>
            <div class="flex flex-col w-full rounded-lg overflow-hidden sm:flex-row">
              <label
                for="password"
                class="w-full text-sm min-w-min py-2 px-4 text-white bg-black font-bold sm:w-1/3 sm:text-base"
                >Contraseña</label
              >
              <input
                id="password"
                v-model="data.password"
                type="password"
                required
                class="w-full py-2 px-4 focus:outline-none bg-gray-200 sm:w-2/3"
                placeholder="Tu clave secreta..."
              />
            </div>
          </div>
          <div v-if="error.show" class="mt-4 text-red-500">
            <p class="text-center">{{ error.message }}</p>
          </div>
          <div class="mt-8 mx-auto flex justify-around gap-x-2 sm:w-3/4">
            <GameButton className="px-5" :disabled="false" @click="onExit">
              Salir
            </GameButton>
            <GameButton type="submit" :disabled="false" :loading="isLoading">
              Ingresar
            </GameButton>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import GameButton from '~/components/GameButton.vue'

export default {
  name: 'LoginPage',

  components: { GameButton },

  data: () => ({
    data: {
      username: null,
      password: null,
    },
    error: {
      show: false,
      message: 'Usuario o contraseña inválido',
    },
    isLoading: false,
  }),

  head() {
    return {
      title: 'Login',
    }
  },

  middleware: 'dashboard',

  methods: {
    async onLogin() {
      this.isLoading = true
      const { user, error } = await this.$supabase.auth.signIn({
        email: this.data.username + '@activab.com',
        password: this.data.password,
      })
      this.isLoading = false
      if (error) {
        this.error.show = true
      } else {
        this.$router.push('/dashboard')
      }
    },
    onExit() {
      this.$router.push('/')
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
