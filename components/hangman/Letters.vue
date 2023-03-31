<template>
  <div class="pb-4">
    <b class="block mb-1">Palabra</b>
    <Button
      color="primary"
      :size="fails < 0 ? 'md' : 'sm'"
      class="letters"
      v-for="item in letters"
      v-bind:key="item.index"
      >{{ item }}</Button
    >
  </div>
</template>

<script>
import Button from '~/components/button.vue'

export default {
  name: 'Letters',
  components: { Button },
  props: {
    letters: String,
    fails: Number,
  },
}
</script>

<style scoped>
button {
  font-family: Consolas, 'Courier New', Courier, monospace;
  margin-left: 4px;
  pointer-events: none;
  transition: all 0.15s ease-in-out;
}
</style>
