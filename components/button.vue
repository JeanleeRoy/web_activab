<template>
  <input
    type="button"
    :value="value"
    class="min-w-min w-50 px-4 pt-1 pb-2 cursor-pointer text-lg font-semibold bg-yellow-400 hover:bg-yellow-300 rounded-lg"
  />
</template>

<script>
export default {
  name: 'Button',
  props: {
    value: {
      type: String,
      default: 'Button',
    },
  },
}
</script>

<style scoped>
input:disabled {
  cursor: default;
  background-color: #fde68a;
  color: #4b5563;
}
</style>
