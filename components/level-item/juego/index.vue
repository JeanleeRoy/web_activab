<template>
  <div class="w-full max-w-7xl mx-auto px-4">
    <div>
      <JuegoItem :type="'puzzle'" @completed="onGameCompleted" />
    </div>
    <div v-if="showNext" class="flex justify-center mt-6">
      <GameButton :animate="true" :disabled="disableNext" @click.native="goNextItem">
        Continuar
      </GameButton>
    </div>
  </div>
</template>

<script lang="js">
import JuegoItem from './juegoItem.vue'

export default {
  name: 'Juego',
  emits: ['completed'],
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
    disableNext: true,
  }),
  mounted() {
    // this.user = this.$supabase.auth.currentUser
    // console.log(this.showNext)
  },
  methods: {
    onGameCompleted(isCompleted) {
      if (isCompleted) {
        console.log('Juego isCompleted', isCompleted)
        this.$emit('completed', {
          completed: true,
          score: 0,
        })
        this.disableNext = false
      }
    },
    async goNextItem() {
      // await this.updateHistory()
      this.$router.push(`/level/${this.levelItem.level}/${this.levelItem.orden + 1}`)
    },
    async updateHistory() {
      // console.log('update history')
      // store action: updateUserHistory
      await this.$store.dispatch('updateUserHistory', {
        user_id: this.user.id,
        level: this.levelItem.level,
        level_item: this.levelItem.id,
        item_type: this.levelItem.type,
        completed: true,
        score: 0,
      })
    },
  },
  components: { JuegoItem },
}
</script>
