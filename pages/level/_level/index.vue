<template>
  <div class="w-full min-h-screen">
    <SiteHeader />
    <div class="w-full max-w-7xl p-4 my-8 mx-auto">
      <div class="border-2 border-yellow-400 p-6 text-center mb-8 rounded-lg">
        <h2 class="text-4xl font-bold">
          Nivel
          <span class="bg-yellow-400 text-white px-2 py-px rounded-lg">{{ id }}</span>
        </h2>
      </div>

      <div class="grid grid-cols-2 gap-16">
        <div class="w-full p-8 rounded-3xl bg-gray-200">
          <img :src="level?.image_url" alt="" />
        </div>
        <div>
          <p>{{ level?.description }}</p>
          <LevelItemsGrid :level="Number(id)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LevelItemsGrid from '~/components/level/levelItemsGrid.vue'

export default {
  computed: {
    lecture() {
      return `lectura_${this.id}`
    },
  },
  async mounted() {
    if (!this.id) {
      this.$router.push('/dashboard')
    }
    this.user = this.$supabase.auth.currentUser
  },
  data: () => ({
    validLevel: true,
    user: null,
    level: null,
  }),
  async asyncData({ params }) {
    const id = params.level
    return { id }
  },
  async fetch() {
    const { data: level } = await this.$supabase
      .from('levels')
      .select('*')
      .eq('id', this.id)
    this.level = level[0]
    const { data: current_level } = await this.$supabase
      .from('profiles')
      .select('current_level')
      .eq('id', this.user.id)
    this.validLevel = this.level.id <= current_level[0].current_level
  },
  components: { LevelItemsGrid },
}
</script>

<style lang="scss" scoped></style>
