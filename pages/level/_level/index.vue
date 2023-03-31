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

      <div class="grid gap-16 sm:grid-cols-2">
        <div class="hidden w-full p-8 rounded-3xl bg-gray-200 sm:block">
          <img class="h-full w-full object-contain" :src="level?.image_url" alt="" />
        </div>
        <div>
          <p>{{ level?.description }}</p>
          <LevelItemsGrid :level="Number(id)" />
          <div v-if="validNextLevel && Number(id) < 20" class="flex justify-center pt-4 pb-8">
            <GameButton :disabled="false" @click="goNextLevel">
              Siguiente Nivel
            </GameButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GameButton from '~/components/GameButton.vue'
import LevelItemsGrid from '~/components/level/levelItemsGrid.vue'

export default {
  computed: {
    lecture() {
      return `lectura_${this.id}`
    },
    validNextLevel() {
      return this.currentLevel ? this.level.id + 1 <= this.currentLevel : false
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
    currentLevel: null,
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
    this.currentLevel = current_level[0].current_level
    this.validLevel = this.level.id <= this.currentLevel
  },
  methods: {
    goNextLevel() {
      this.$router.push(`/level/${this.level.id + 1}`)
    },
  },
  components: { LevelItemsGrid, GameButton },
}
</script>

<style lang="scss" scoped></style>
