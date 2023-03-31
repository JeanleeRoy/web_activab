<template>
  <div class="w-full min-h-screen">
    <SiteHeader />
    <div v-if="validLevel && levelItem" class="w-full max-w-7xl px-1.5 py-4 my-8 mx-auto sm:px-4">
      <Lectura
        v-if="levelItem.type === 'lecturas'"
        :level-item="levelItem"
        :show-next="showNext"
        @completed="updateHistory"
      />
      <Juego
        v-if="levelItem.type === 'games'"
        :level-item="levelItem"
        :show-next="showNext"
        @completed="updateHistory"
      />
      <Preguntas
        v-if="levelItem.type === 'questions'"
        :level-item="levelItem"
        :show-next="showNext"
        @completed="updateHistory"
      />
      <template v-if="activeNextLevel">
        <div>
          <div class="flex justify-center pt-4 pb-8">
            <GameButton
              v-if="levelId == 20"
              :disabled="false"
              :animate="true"
              @click="endGame"
            >
              Finalizar
            </GameButton>
            <GameButton v-else :disabled="false" :animate="true" @click="goNextLevel">
              Siguiente Nivel
            </GameButton>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="js">
import Lectura from '~/components/level-item/lectura.vue'
import Juego from '~/components/level-item/juego'
import Preguntas from '~/components/level-item/preguntas.vue'
import GameButton from '~/components/GameButton.vue'

export default {
  name: 'LevelItemView',
  async asyncData({ params }) {
    const levelId = params.level
    const itemOrder = params.item
    return { levelId, itemOrder }
  },
  data: () => ({
    user: null,
    level: null,
    levelItem: null,
    validLevel: false,
    showNext: false,
    activeNextLevel: false,
  }),
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
  methods: {
    async updateHistory(payload) {
      const { completed, score } = payload
      console.log('update history')
      // store action: updateUserHistory
      await this.$store.dispatch('updateUserHistory', {
        user_id: this.user.id,
        level: this.levelItem.level,
        level_item: this.levelItem.id,
        item_type: this.levelItem.type,
        completed,
        score,
      })
      // update level when user complete all level items
      if (completed && !this.showNext) {
        await this.updateUserLevel()
        this.activeNextLevel = true
      }
    },
    async updateUserLevel() {
      // console.log('update user level')
      // store action: updateUserLevel
      await this.$store.dispatch('updateUserLevelTo', {
        user_id: this.user.id,
        level: this.levelItem.level + 1,
      })
    },
    goNextLevel() {
      this.$router.push(`/level/${this.levelItem.level + 1}`)
    },
    endGame() {
      this.$router.push(`/dashboard`)
    },
  },
  components: { Lectura, Juego, Preguntas, GameButton },
}
</script>
