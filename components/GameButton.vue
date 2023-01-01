<template>
  <Button
    class="gameButton"
    :class="{ active: !disabled && animate }"
    :disabled="disabled"
  >
    <slot />
  </Button>
</template>

<script>
export default {
  name: 'GameButton',
  props: {
    disabled: {
      type: Boolean,
      default: true,
    },
    animate: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.gameButton {
  position: relative;
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    z-index: -1;
    top: 0px;
    left: 0px;
    border-radius: 12px;
    // background-color: aqua;
    transition: box-shadow 0.05s ease-in-out;
    // box-shadow: 0 0 10px 20px rgba(255, 255, 50, 0.4);
  }
  &.active {
    &::before {
      animation: pulse 2s ease-in;
    }
  }
}

// animate pulse
@keyframes pulse {
  0% {
    box-shadow: 0 0 15px 0 rgba(255, 255, 50, 0.4);
  }
  15% {
    box-shadow: 0 0 15px 10px rgba(255, 255, 50, 0.4);
  }
  35% {
    box-shadow: 0 0 15px 18px rgba(255, 255, 50, 0.5);
  }
  50% {
    box-shadow: 0 0 15px 0 rgba(255, 255, 50, 0);
  }
  65% {
    box-shadow: 0 0 15px 10px rgba(255, 255, 50, 0.45);
  }
  75% {
    box-shadow: 0 0 15px 18px rgba(255, 255, 50, 0.6);
  }
  100% {
    box-shadow: 0 0 15px 0 rgba(255, 255, 50, 0);
  }
}
</style>
