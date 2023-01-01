<template>
  <div class="relative w-full mt-4 overflow-hidden">
    <h2 class="font-bold text-center text-4xl">El primer día de clases de Juan</h2>
    <img
      class="w-full mx-auto escalar z-0"
      :src="require(`~/assets/lectura_${this.levelItem.level}/lectura.png`)"
      alt="lectura"
    />
    <div
      class="absolute left-1/2 bottom-0 mx-auto z-10 mb-8"
      style="transform: translateX(-50%)"
    >
      <GameButton
        v-if="showNext"
        id="readingGameBtn"
        :animate="true"
        :disabled="!readTimeCompleted"
        @click.native="nextItem"
      >
        Continuar
      </GameButton>
    </div>
  </div>
</template>

<script>
import GameButton from '../GameButton.vue'

export default {
  name: 'Lectura',
  props: {
    levelItem: {
      type: Object,
      required: true,
    },
    showNext: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    user: null,
    readTimeCompleted: false,
    readingTime: 5, //seconds
  }),
  mounted() {
    this.user = this.$supabase.auth.currentUser
    this.setReadingTime()
  },
  methods: {
    setReadingTime() {
      setTimeout(() => {
        this.readTimeCompleted = true
      }, this.readingTime * 1000)
    },
    async nextItem() {
      // await this.updateHistory()
      this.$router.push(`/level/${this.levelItem.level}/${this.levelItem.orden + 1}`)
    },
    async updateHistory() {
      console.log('update history')
      // store action: updateUserHistory
      await this.$store.dispatch('updateUserHistory', {
        user_id: this.user.id,
        level: this.levelItem.level,
        level_item: this.levelItem.id,
        completed: true,
        score: 0,
      })
    },
  },
  components: { GameButton },
}
</script>

<style scoped>
.escalar {
  transform: scale(1.25);
  z-index: -10 !important;
}
</style>
