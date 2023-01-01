<template>
  <div class="w-full min-h-screen">
    <SiteHeader />
    <div v-if="validLevel && levelItem" class="w-full max-w-7xl p-4 my-8 mx-auto">
      <Lectura
        v-if="levelItem.type === 'lecturas'"
        :level-item="levelItem"
        :show-next="showNext"
      />
      <Juego
        v-if="levelItem.type === 'games'"
        :level-item="levelItem"
        :show-next="showNext"
      />
      <Preguntas
        v-if="levelItem.type === 'questions'"
        :level-item="levelItem"
        :show-next="showNext"
      />
    </div>
  </div>
</template>

<script lang="js">
import Lectura from '~/components/level-item/lectura.vue'
import Juego from '~/components/level-item/juego'
import Preguntas from '~/components/level-item/preguntas.vue'

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
      .single()
    this.level = level

    const { data: profile } = await this.$supabase
      .from('profiles')
      .select('current_level')
      .eq('id', this.user.id)
      .single()
    this.validLevel = this.level.id <= profile.current_level

    const { data: levelItem } = await this.$supabase
      .from('level_items')
      .select('*')
      .eq('level', this.levelId)
      .eq('orden', this.itemOrder)
      .single()
    this.showNext = levelItem.orden < this.level.total_items
    console.log('showNext', this.showNext)
    this.levelItem = levelItem
  },
  methods: {},
  components: { Lectura, Juego, Preguntas },
}
</script>
