// mouse.js
import { ref, unref } from 'vue'
import { useEventListener } from './event'

function isInViewport(el) {
  const rect = el.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

export function useInViewport(target) {
  const isVisible = ref(false)

  useEventListener(document, 'scroll', () => {
    isVisible.value = isInViewport(unref(target))
  })

  return { isVisible }
}
