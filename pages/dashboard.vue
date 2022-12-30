<template>
  <div class="w-full min-h-screen">
    <SiteHeader />
    <div class="w-full max-w-7xl p-4 my-8 mx-auto">
      <h2 class="text-2xl font-bold mb-8 px-8">¡Hola <span class="text-blue-600">{{ name }}</span>!</h2>
      <LevelGrid />
    </div>
  </div>
</template>

<script>
import LevelGrid from '~/components/level/levelGrid.vue'

export default {
  name: 'Dashboard',
  data: () => ({
    user: null,
  }),
  head() {
    return {
      title: 'Dashboard',
    }
  },
  computed: {
    name() {
      return this.user?.user_metadata.fullname?.split(' ')[0]
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
        this.$router.push('/login')
      }
    },
  },
  components: { LevelGrid },
}
</script>

<style scoped>
.dashboard {
  background-image: url('../static/dashboard_ba.png');
  background-size: cover;
  background-position: center bottom;
}
</style>
