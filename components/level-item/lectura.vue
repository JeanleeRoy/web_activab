<template>
  <div class="relative w-full my-4 overflow-hidden">
    <h2 class="font-bold text-center text-4xl">El primer día de clases de Juan</h2>
    <img
      class="w-full mx-auto escalar z-0"
      :src="require(`~/assets/lectura_${this.levelItem.level}/lectura.png`)"
      alt="lectura"
    />
    <Button
      v-if="showNext"
      class="absolute left-1/2 bottom-0 mx-auto z-10"
      style="transform: translateX(-50%)"
      @click.native="nextItem"
      >Continuar</Button
    >
  </div>
</template>

<script>
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
  computed: {
    lecture() {
      return `lectura_${this.id}`
    },
  },
  mounted() {
    this.user = this.$supabase.auth.currentUser
  },
  methods: {
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
}
</script>

<style scoped>
.escalar {
  transform: scale(1.25);
  z-index: -10 !important;
}
</style>
