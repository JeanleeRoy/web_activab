<template>
  <div class="w-full max-w-xl mx-auto p-8">
    <div class="flex flex-wrap w-full p-8 bg-white rounded-3xl mt-28">
      <h2 class="font-bold text-center text-4xl">Resuelve el rompecabezas</h2>
      <img src="~/static/lectura_a/rompecabezaa.jpg" />
      <Button style="transform: translateX(125%)" @click.native="nextItem">
        Continuar
      </Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Juego',
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
