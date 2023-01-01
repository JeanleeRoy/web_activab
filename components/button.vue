<template>
  <button
    class="inline-block cursor-pointer min-w-min w-50 px-4 pt-1 pb-2 text-lg font-semibold bg-yellow-400 rounded-lg shadow-md hover:bg-yellow-300"
    :disabled="disabled"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    value: {
      type: String,
      default: 'Button',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style scoped>
button:disabled {
  user-select: none;
  pointer-events: none;
  background-color: #ffe878;
  box-shadow: none;
}
</style>