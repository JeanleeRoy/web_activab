<template>
  <div>
    <div v-if="hasQuestions" class="w-full min-h-max">
      <div
        v-if="showQuestions"
        class="flex flex-wrap justify-center w-full max-w-2xl mx-auto gap-y-4 p-4"
      >
        <template v-for="(question, index) in questions">
          <Question
            v-if="index === curPosition"
            :question="curQuestion"
            class="mx-auto"
            :class="animation"
            @answered="handleAnswer"
          />
          <Button
            v-if="showNextQuestion && index === curPosition"
            :disabled="answers[curPosition].isCorrect === null"
            @click.native="goStep(index + 1)"
          >
            Siguiente
          </Button>
        </template>
        <Button
          v-if="showSubmmit"
          :disabled="curAnswer.isCorrect === null"
          @click.native="processAnswers"
        >
          Revisar
        </Button>
      </div>

      <div v-else class="w-full max-w-2xl mx-auto pt-16 md:pt-16 lg:pt-16">
        <div class="animation-in flex- flex-wrap w-full space-y-4">
          <h3 class="text-center font-semibold text-3xl">Resultados</h3>
          <div class="text-center">
            <p v-if="approved">
              <span v-if="score === questions.length">¡Felicidades!</span>
              <span v-else>¡Buen trabajo!</span>
            </p>
            <p v-else>Podemos mejorar</p>
          </div>
          <p
            class="w-fit font-bold text-center mx-auto px-4 py-2 rounded-lg"
            :class="approved ? 'bg-green-500' : 'bg-pink-600'"
          >
            {{ score }} / {{ answers.length }}
          </p>
          <div class="w-full max-w-2xl border-2 border-gray-400">
            <div
              v-for="ans in answers"
              :key="ans.name"
              class="flex w-full py-4 px-8 border-2 border-b-gray-400"
            >
              <p class="w-3/4">{{ ans.name }}</p>
              <div class="w-1/4">
                <p class="flex items-center space-x-2">
                  <template v-if="ans.isCorrect">
                    <span class="inline-block text-yellow-400">Correcto</span>
                    <span class="inline-block text-yellow-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#fbbf24"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path
                          d="M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm1-10.06L14.06 11l1.06-1.06L16.18 11l1.06-1.06-2.12-2.12L13 9.94zm-4.12 0L9.94 11 11 9.94 8.88 7.82 6.76 9.94 7.82 11l1.06-1.06zM12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"
                        />
                      </svg>
                    </span>
                  </template>
                  <template v-else>
                    <span class="inline-block text-red-500">Incorrecto</span>
                    <span class="inline-block text-red-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#ef4444"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <circle cx="15.5" cy="9.5" r="1.5" />
                        <circle cx="8.5" cy="9.5" r="1.5" />
                        <path
                          d="M12 14c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5zm-.01-12C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
                        />
                      </svg>
                    </span>
                  </template>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { mapGetters } from 'vuex'

export default {
  name: 'Multiform',
  emits: ['completed'],
  props: {
    slug: {
      type: String,
      default: 'lectura_1',
    },
    minScore: {
      type: Number,
      default: 1,
    },
  },
  data: () => ({
    questions: [],
    answers: [],
    curPosition: 0,
    animation: 'animate-in',
    showQuestions: true,
    score: null
  }),
  computed: {
    ...mapGetters({
      getQuestions: 'questions/getQuestionsByParent',
    }),
    showNextQuestion() {
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
      // console.log('curQuestion', this.questions[this.curPosition])
      return this.questions[this.curPosition]
    },
    curAnswer() {
      return this.answers[this.curPosition]
    },
    approved() {
      return this.score >= this.minScore
    },
  },
  mounted() {
    this.fetchQuestions()
  },
  methods: {
    fetchQuestions() {
      this.questions = this.getQuestions(this.slug)
      this.answers = this.questions.map(question => {
        return { name: question.text, isCorrect: null }
      })
    },
    goStep(position) {
      if (this.curAnswer.isCorrect === null) return
      this.animation = 'animation-out'
      setTimeout(() => {
        this.animation = 'animation-in'
        this.curPosition = position
      }, 600)
    },
    handleAnswer(answer) {
      // console.log('AVmultiform answer', answer)
      this.answers[this.curPosition].isCorrect = answer.isCorrect
    },
    processAnswers() {
      this.showQuestions = false
      this.score = this.answers.reduce((result, ans) => {
        return result + Number(ans.isCorrect)
      }, 0)
      this.$emit('completed', {
        score: this.score,
        total: this.answers.length,
      })
    },
    reset() {
      this.questions = []
      this.answers = []
      // this.fetchQuestions()
    },
  },
}
</script>

<style scoped>
.animation-in {
  transform-origin: right;
  animation: in 0.6s ease-in-out;
  z-index: 1;
}
.animation-out {
  opacity: 0;
  transform-origin: bottom left;
  animation: out 0.6s ease-in-out;
  z-index: 0;
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
  99% {
    opacity: 0;
    transform: scaleX(0);
  }
}
</style>
