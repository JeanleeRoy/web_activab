<template>
  <main></main>
</template>

<script>
import MemoryGame from '~/components/memoryGame.vue'
export default {
  name: 'IndexPage',
  middleware: ['authenticated'],
  components: { MemoryGame },
}
</script>
