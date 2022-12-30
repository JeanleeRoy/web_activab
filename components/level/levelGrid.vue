<template>
  <div class="w-full">
    <div v-if="levels && profile" class="flex flex-wrap justify-around gap-16">
      <div v-for="level in levels">
        <LevelCard
          :level="level.id"
          :level-text="level.name"
          :image-url="level.image_url"
          :disabled="level.disabled"
        />
      </div>
    </div>
  </div>
</template>

<script>
import LevelCard from './levelCard.vue'

export default {
  computed: {
    // getter current user
    // user() {
    //   return this.$store.getters['getUser']
    // },
  },
  mounted() {
    this.user = this.$supabase.auth.currentUser
  },
  data: () => ({
    levels: null,
    user: null,
    profile: null,
  }),
  async fetch() {
    const { data: levels } = await this.$supabase
      .from('levels')
      .select('*')
      .order('id', { ascending: true })
    const { data: profile } = await this.$supabase
      .from('profiles')
      .select('current_level')
      .eq('id', this.user.id)
    if (levels && profile) {
      this.levels = levels.map(lvl => {
        return {
          disabled: lvl.id > profile[0].current_level,
          ...lvl,
        }
      })
      this.profile = profile
    }
  },
  methods: {
    goToLevel() {
      this.$router.push(`/level/${this.id}`)
    },
  },
  components: { LevelCard },
}
</script>
