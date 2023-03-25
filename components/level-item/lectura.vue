<template>
  <div class="relative w-full mt-4 overflow-hidden">
    <h2 class="relative font-bold text-center px-4 text-2xl sm:text-3xl md:text-4xl">
      {{ lecture?.title || '...' }}

      <div class="absolute w-full left-0 flex justify-center p-4">
        <a
          class="flex items-center gap-x-4 z-10 text-lg text-blue-400"
          :href="`${path}/${lectureName}/${lectureName}.pdf`"
        >
          <img class="inline-block h-7" src="~/assets/img/download.png" />
          <span> Descargar lectura </span>
        </a>
      </div>
    </h2>
    <img
      class="w-full mx-auto escalar -z-1 mt-10 xs:mt-8 sm:mt-4 md:mt-0"
      :src="require(`~/assets/${lectureName}/lectura.png`)"
      alt="lectura"
    />
    <div
      class="absolute left-1/2 -bottom-8 mx-auto z-10 mb-8 xs:-bottom-6 sm:-bottom-4 md:-bottom-0"
      style="transform: translateX(-50%)"
    >
      <GameButton
        v-if="showNext && showBtn"
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
import { mapGetters } from 'vuex'

export default {
  name: 'Lectura',
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
    lecture: null,
    readTimeCompleted: false,
    readingTime: 5, //seconds
    showBtn: false,
    path: 'https://github.com/JeanleeRoy/web_activab/raw/dev/assets',
  }),
  computed: {
    lectureName() {
      return `lectura_${this.levelItem.level}`
    },
    ...mapGetters({
      getLecture: 'lectures/getLecture',
    }),
  },
  mounted() {
    // this.user = this.$supabase.auth.currentUser
    this.lecture = this.getLecture(this.lectureName)
    this.setReadingTime()
    setTimeout(() => {
      this.showBtn = true
    }, 1000)
  },
  methods: {
    setReadingTime() {
      setTimeout(() => {
        this.readTimeCompleted = true
      }, this.readingTime * 1000)
    },
    async nextItem() {
      // await this.updateHistory()
      this.$emit('completed', {
        completed: true,
        score: 0,
      })
      this.$router.push(`/level/${this.levelItem.level}/${this.levelItem.orden + 1}`)
    },
    async updateHistory() {
      // console.log('update history')
      // store action: updateUserHistory
      await this.$store.dispatch('updateUserHistory', {
        user_id: this.user.id,
        level: this.levelItem.level,
        level_item: this.levelItem.id,
        level_type: this.levelItem.type,
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
