<template>
  <button
    class="inline-block cursor-pointer min-w-min w-50 font-semibold rounded-lg"
    :disabled="disabled"
    :class="[sizeClasses[size], disabled ? disabledClasses[color] : colorClasses[color]]"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  emits: ['click'],
  props: {
    value: {
      type: String,
      default: 'Button',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: 'xs' | 'sm' | 'md' | 'lg',
      default: 'md',
    },
    color: {
      type: 'primary' | 'secondary' | 'danger' | 'success' | 'gray',
      default: 'primary',
    },
  },
  computed: {
    sizeClasses() {
      return {
        sm: 'text-sm px-2 py-1 shadow-sm',
        sm: 'text-sm px-3 py-1.5 shadow-sm',
        md: 'text-lg px-4 py-2 shadow-md',
        lg: 'text-xl px-6 py-3 shadow-md',
      }
    },
    colorClasses() {
      return {
        primary: 'bg-yellow-400 hover:bg-yellow-300',
        secondary: 'bg-blue-500 hover:bg-blue-400 text-white',
        danger: 'bg-red-500 hover:bg-red-400 text-white',
        success: 'bg-green-500 hover:bg-green-400',
        gray: 'bg-gray-500 hover:bg-gray-400 text-white',
      }
    },
    disabledClasses() {
      return {
        primary: 'bg-yellow-200',
        secondary: 'bg-blue-200',
        danger: 'bg-red-200',
        success: 'bg-green-200',
        gray: 'bg-gray-200',
      }
    },
  },
}
</script>
<style scoped>
button:disabled {
  user-select: none;
  pointer-events: none;
  /* background-color: #ffe878; */
  box-shadow: none;
}
</style>
