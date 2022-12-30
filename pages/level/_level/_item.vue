<template>
  <div class="w-full min-h-screen">
    <SiteHeader />
    <div v-if="validLevel && levelItem" class="w-full max-w-7xl p-4 my-8 mx-auto">
      <Lectura
        v-if="levelItem.type === 'lecturas'"
        :level-item="levelItem"
        :show-next="showNext"
      />
      <Juego v-if="levelItem.type === 'games'" :level-item="levelItem" />
      <!-- <LevelGrid /> -->
    </div>
  </div>
</template>

<script lang="js">
import Lectura from '~/components/level-item/lectura.vue'
import Juego from '~/components/level-item/juego.vue'

export default {
  name: 'LevelItemView',
  data: () => ({
    user: null,
    level: null,
    levelItem: null,
    validLevel: false,
    showNext: false,
  }),
  head() {
    return {
      title: 'Recurso',
    }
  },
  computed: {
    type() {},
  },
  mounted() {
    this.user = this.$supabase.auth.currentUser
  },
  async asyncData({ params }) {
    const levelId = params.level
    const itemOrder = params.item
    return { levelId, itemOrder }
  },
  async fetch() {
    const { data: level } = await this.$supabase
      .from('levels')
      .select('*')
      .eq('id', this.levelId)
    this.level = level[0]

    const { data: current_level } = await this.$supabase
      .from('profiles')
      .select('current_level')
      .eq('id', this.user.id)
    this.validLevel = this.level.id <= current_level[0].current_level

    const { data: levelItems } = await this.$supabase
      .from('level_items')
      .select('*')
      .eq('level', this.levelId)
      .eq('orden', this.itemOrder)
    this.levelItem = levelItems[0]
    this.showNext = this.levelItem.orden < this.level.total_items
  },
  methods: {},
  components: { Lectura, Juego },
}
</script>
