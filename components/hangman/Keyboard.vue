<template>
  <div class="relative" id="buttons">
    <div v-for="row in keys" :key="row">
      <Button
        v-for="key in row"
        class="key-btn"
        :key="key"
        :size="isSmScreen || fails === -1 ? 'sm' : 'md'"
        color="secondary"
        :disabled="usedLetters.includes(key) || fails === -1 || fails == 7"
        v-on:click="click(key, $event)"
      >
        {{ key }}
      </Button>
    </div>
    <div v-if="fails == 7" class="absolute center" id="restart">
      <Button class="relative text-white" v-on:click="restart">Reiniciar</Button>
    </div>
  </div>
</template>

<script>
import Button from '~/components/button.vue'

export default {
  name: 'Keyboard',
  components: { Button },
  props: {
    usedLetters: String,
    fails: Number,
  },
  data() {
    return {
      keys: ['QWERTYUIOP', 'ASDFGHJKLÑ', 'ZXCVBNM'],
    }
  },
  computed: {
    isSmScreen() {
      return window.innerWidth < 768
    },
  },
  methods: {
    click(key, e) {
      this.$emit('key', key)
      e.target.blur()
    },
    restart(e) {
      this.$emit('restart')
      e.target.blur()
    },
  },
}
</script>

<style scoped>
.key-btn {
  margin-left: 4px;
  margin-top: 3px;
  transition: all 0.15s ease-in-out;
}
.center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
