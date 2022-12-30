<template>
  <button
    type="button"
    class="block cursor-pointer min-w-min w-50 px-4 pt-1 pb-2 text-lg font-semibold bg-yellow-400 disabled:pointer-events-none disabled:bg-yellow-200 hover:bg-yellow-300 rounded-lg"
  >
    <slot></slot>
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
  },
}
</script>
