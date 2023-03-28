<template>
  <vue-final-modal
    v-slot="{ close }"
    v-bind="$attrs"
    :lock-scroll="false"
    :esc-to-close="false"
    :click-to-close="false"
    classes="flex justify-center items-center"
    content-class="relative flex flex-col max-h-full mx-4 p-8 border dark:border-gray-800 rounded-2xl bg-white dark:bg-gray-900"
    v-on="$listeners"
  >
    <div class="max-w-xl flex-grow overflow-y-auto">
      <div class="flex flex-col items-center gap-x-2 sm:flex-row flex">
        <img
          class="block shrink-1"
          style="height: 200px; width: auto"
          :src="require('~/assets/img/penguin.png')"
          alt="Penguin"
        />
        <div class="flex flex-col gap-y-6 sm:gap-y-7 text-center sm:text-left">
          <h3 class="text-2xl font-bold">Recomendaciones</h3>
          <slot>
            En el momento de iniciar la lectura, evita algún distractor a tu alrededor.
            Para contestar las preguntas puedes volver a leer la lectura. ¡Ánimo, tú
            puedes!
          </slot>
          <slot name="action"> </slot>
          <!-- <div>
              <GameButton
                class="w-fit"
                :disabled="false"
                :loading="false"
                @click="$emit('confirm', close)"
              >
                Entendido
              </GameButton>
            </div> -->
        </div>
      </div>
    </div>
  </vue-final-modal>
</template>

<script lang="js">
import GameButton from '~/components/GameButton.vue'

export default {
  components: { GameButton },
  inheritAttrs: false,
  data: () => ({
    showModal: false,
    loading: false
  }),
}
</script>
