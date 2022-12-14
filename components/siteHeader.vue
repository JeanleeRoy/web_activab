<template>
  <nav class="w-full bg-yellow-300">
    <div class="flex justify-between items-center w-full p-4 max-w-7xl mx-auto">
      <b class="text-2xl">ActiVAB</b>
      <div v-if="user" class="flex gap-x-4">
        <p>{{ username }}</p>
        <p>{{ dni }}</p>
      </div>
      <button class="px-4 py-1 rounded-lg bg-yellow-400 hover:bg-gray-200" @click="signOut">
        Salir
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'SiteHeader',

  data: () => ({
    user: null,
  }),

  head() {
    return {
      title: 'Dashboard',
    }
  },

  computed: {
    username() {
      return this.user.user_metadata.fullname
    },
    dni() {
      return this.user.user_metadata.dni
    },
  },

  async fetch() {
    const data = await this.$supabase.auth.currentUser
    if (data) {
      this.user = data
    }
  },

  methods: {
    async signOut() {
      const { error } = await this.$supabase.auth.signOut()
      if (!error) {
        this.$router.push('/')
      }
    },
  },
}
</script>

<style scoped></style>
