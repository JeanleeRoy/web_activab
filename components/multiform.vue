<template>
  <div>
    <div class="w-full p-4 shadow-md bg-yellow-300">
      <div class="flex justify-between w-full max-w-5xl mx-auto">
        <h2 class="text-xl font-semibold">Preguntas sobre la Lectura {{ lecture }}</h2>
        <button class="flex items-center" @click="hide">
          Regresar<span class="material-symbols-outlined"> expand_more </span>
        </button>
      </div>
    </div>

    <div v-if="hasQuestions" class="w-full min-h-max bg-gray-100">
      <div
        v-if="showQuestions"
        class="flex flex-wrap justify-center w-full max-w-2xl mx-auto gap-y-4 p-4"
      >
        <Question
          v-if="curQuestion"
          :question="curQuestion"
          v-model="answers[curPosition].isCorrect"
          class="mx-auto"
          :class="animation"
        />
        <Button
          v-if="showNext"
          :disabled="curAnswer.isCorrect === null"
          :value="'Siguiente'"
          @click.native="nextStep"
        />
        <Button
          v-if="showSubmmit"
          :disabled="curAnswer.isCorrect === null"
          :value="'Enviar'"
          @click.native="showQuestions = false"
        />
      </div>

      <div v-else class="w-full max-w-2xl mx-auto pt-16 md:pt-24 lg:pt-32">
        <div class="flex- flex-wrap w-full space-y-4">
          <h3 class="text-center font-semibold text-xl">Resultados</h3>
          <div class="w-full max-w-2xl border-2 border-gray-400">
            <div
              v-for="ans in answers"
              class="flex w-full py-4 px-8 border-2 border-b-gray-400"
            >
              <p class="w-3/4">{{ ans.name }} -</p>
              <div class="w-1/4">
                <p class="flex items-center space-x-2">
                  <template v-if="ans.isCorrect">
                    <span class="inline-block text-yellow-400">Correcto</span>
                    <span class="inline-block text-yellow-400 material-symbols-outlined">
                      sentiment_very_satisfied
                    </span>
                  </template>
                  <template v-else>
                    <span class="inline-block text-red-500">Incorrecto</span>
                    <span class="inline-block text-red-500 material-symbols-outlined">
                      sentiment_dissatisfied
                    </span>
                  </template>
                </p>
              </div>
            </div>
          </div>
          <div class="flex justify-center w-full pt-8">
            <Button />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Multiform',
  props: {
    lecture: {
      type: String,
      // required: true,
      default: 'lectura_a',
    },
  },
  model: {
    prop: 'show',
    event: 'changeShow',
  },
  data: () => ({
    questions: [],
    answers: [],
    curPosition: 0,
    animation: 'animate-in',
    showQuestions: true,
  }),
  computed: {
    ...mapGetters({
      getQuestions: 'questions/getQuestionsByParent',
    }),
    showNext() {
      return this.curPosition < this.questions.length - 1
    },
    showSubmmit() {
      return this.curPosition === this.questions.length - 1
    },
    hasQuestions() {
      return this.questions.length > 0
    },
    curQuestion() {
      if (!this.hasQuestions) return null
      console.log('curQuestion', this.questions[this.curPosition])
      return this.questions[this.curPosition]
    },
    curAnswer() {
      return this.answers[this.curPosition]
    },
  },
  watch: {
    answers: {
      handler(newVals) {
        console.log('answers ', newVals)
      },
      deep: true,
    },
  },
  mounted() {
    this.fetchQuestions()
  },
  methods: {
    fetchQuestions() {
      this.questions = this.getQuestions(this.lecture)
      this.answers = this.questions.map(question => {
        return { name: question.text, isCorrect: null }
      })
    },
    nextStep() {
      this.animation = 'animation-out'
      setTimeout(() => {
        this.animation = 'animation-in'
        this.curPosition += 1
      }, 600)
    },
    reset() {
      this.questions = []
      this.answers = []
      // this.fetchQuestions()
    },
    hide() {
      this.$emit('changeShow', false)
      this.reset()
      this.curPosition = 0
    },
  },
}
</script>

<style scoped>
.animation-in {
  transform-origin: left;
  animation: in 0.6s ease-in-out;
}
.animation-out {
  transform-origin: bottom left;
  animation: out 0.6s ease-in-out;
}
@keyframes in {
  0% {
    opacity: 0;
    transform: scaleX(0);
  }
  100% {
    opacity: 1;
    transform: scaleX(1);
  }
}

@keyframes out {
  0% {
    opacity: 1;
    transform: scaleX(1);
  }
  100% {
    opacity: 0;
    transform: scaleX(0);
  }
}
</style>
