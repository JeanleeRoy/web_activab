import { onMounted, onUnmounted } from 'vue'

export function useEventListener(target, event, callback) {
  // handle event listeners when mount and unmount an element
  onMounted(() => target.addEventListener(event, callback))
  onUnmounted(() => target.removeEventListener(event, callback))
}
