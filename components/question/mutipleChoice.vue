<template>
  <div class="flex flex-col space-y-4">
    <template v-for="option in options">
      <label
        :for="option.id"
        class="flex bg-indigo-200 px-6 py-3 rounded-lg cursor-pointer"
      >
        <input :id="option.id" v-model="selection" type="radio" :value="option.value" />
        <p class="ml-2">{{ option.text }}</p>
      </label>
    </template>
  </div>
</template>

<script>
export default {
  name: 'MultipleChoice',
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
    correctAnswer() {
      return this.options.find(opt => opt.isCorrect).value
    },
  },
  data: () => ({
    selection: null,
  }),
  watch: {
    selection(newValue) {
      if (newValue) {
        this.$emit('validateAnswer', this.verifyAnswer())
        console.log('verifyAnswer', this.verifyAnswer())
      }
    },
  },
  methods: {
    verifyAnswer() {
      return this.correctAnswer === this.selection
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
