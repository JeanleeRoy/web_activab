<template>
  <div class="flex flex-col space-y-4">
    <template v-for="option in options">
      <label
        :for="option.id"
        :key="option.id"
        class="flex bg-indigo-200 px-6 py-3 rounded-lg cursor-pointer"
      >
        <input :id="option.id" v-model="selection" type="radio" :value="option.id" />
        <p class="ml-2">{{ option.text }}</p>
      </label>
    </template>
  </div>
</template>

<script>
export default {
  name: 'MultipleChoice',
  emits: ['validateAnswer', 'optionSelected'],
  props: {
    options: {
      require: true,
      type: Array,
      default() {
        return [
          {
            id: 'opt_id',
            text: 'Option text',
            value: 'option value',
          },
        ]
      },
    },
  },
  model: {
    prop: 'valid',
    event: 'validateAnswer',
  },
  computed: {
    correctAnswers() {
      return this.options.reduce((acc, option) => {
        if (option.isCorrect) acc.push(option.id)
        return acc
      }, [])
    },
  },
  data: () => ({
    selection: null,
  }),
  watch: {
    selection(newValue) {
      if (newValue) {
        this.$emit('validateAnswer', this.verifyAnswer())
        this.$emit('optionSelected', {
          value: newValue,
          isCorrect: this.verifyAnswer(),
        })
      }
    },
  },
  methods: {
    verifyAnswer() {
      // console.log('verifyAnswer', this.correctAnswers, this.selection)
      return this.correctAnswers.includes(this.selection)
    },
  },
}
</script>

<style lang="scss" scoped>
$shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.1);

label {
  transition: all ease 0.18s;
  &:has(input:checked) {
    box-shadow: $shadow-md;
    transform: translateY(-2px);
    background-color: rgb(3, 170, 3);
  }
}
</style>
