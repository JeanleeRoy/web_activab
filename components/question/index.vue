<template>
  <div class="flex flex-wrap w-full max-w-2xl">
    <h1
      class="w-full mb-4 text-center text-3xl font-semibold"
      v-html="question.text"
    ></h1>
    <img class="w-full rounded-3xl" :src="require(`~/assets/${question.image}`)" />
    <form class="w-full p-4 mt-2 md:p-6 rounded-lg bg-gray-50">
      <MultipleChoice
        :options="options"
        v-model="isValidAnswer"
        @optionSelected="getChoice"
      />
    </form>
  </div>
</template>

<script>
import MultipleChoice from '~/components/question/mutipleChoice.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Question',
  components: { MultipleChoice },
  emits: ['handleValid', 'answered'],
  props: {
    question: {
      type: Object,
      require: true,
      default() {
        return {
          slug: 'pregunta_1',
          text: '¿Qué nombre elegir?',
          body: '',
          hint: '',
          type: 'multiple_choice',
          image: 'lectura_1/pregunta_1.jpg',
          parent: 'lectura_1',
        }
      },
    },
  },
  model: {
    prop: 'valid',
    event: 'handleValid',
  },
  computed: {
    ...mapGetters({
      getAnswers: 'answers/getAnswersByParentAndQuestion',
    }),
  },
  data: () => ({
    options: [],
    isValidAnswer: null,
  }),
  watch: {
    isValidAnswer(newVal) {
      this.$emit('handleValid', newVal)
    },
    question: {
      handler() {
        this.fetchAnswers()
      },
    },
  },
  mounted() {
    this.fetchAnswers()
  },
  methods: {
    fetchAnswers() {
      this.options = this.getAnswers(this.question.parent, this.question.slug)
    },
    getChoice(choice) {
      // console.log('question answered: ', choice)
      this.$emit('answered', choice)
    },
  },
  beforeUnmount() {
    console.log('Before Unmount question')
  },
  unmounted() {
    console.log('Unmounted question')
  },
}
</script>

<style lang="scss" scoped></style>
