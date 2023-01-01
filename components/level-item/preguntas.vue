<template>
  <div class="w-full max-w-7xl mx-auto px-4">
    <AVmultiform :min-socore="minScore" @completed="onQuestionsCompleted" />
    <div v-if="completed" class="flex justify-center mt-6">
      <GameButton
        v-if="showNext && approved"
        :animate="true"
        :disabled="!approved"
        @click.native="goNextItem"
      >
        Continuar
      </GameButton>
      <Button v-if="!approved" @click.native="returnToLevel"> Retornar </Button>
    </div>
  </div>
</template>

<script>
import AVmultiform from '~/components/AVquestions/AVmultiform.vue'
import GameButton from '~/components/GameButton.vue'

export default {
  name: 'IndexPage',
  components: { AVmultiform, GameButton },
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
  computed: {
    minScore() {
      return this.question ? this.question.min_score : 3
    },
  },
  data: () => ({
    user: null,
    completed: false,
    approved: false,
    question: null,
  }),
  methods: {
    onQuestionsCompleted(result) {
      console.log('onQuestionsCompleted', result)
      this.completed = true
      if (result.score >= this.minScore) {
        this.approved = true
      }
    },
    returnToLevel() {
      this.$router.push(`/level/${this.levelItem.level}`)
    },
    async goNextItem() {
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
}
</script>
