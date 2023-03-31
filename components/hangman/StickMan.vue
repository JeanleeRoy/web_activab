<template>
  <div style="text-align: center" class="stickMan">
    <div v-if="fails == 7" class="mb-2 font-semibold">Vuelve a intentarlo</div>

    <div v-if="fails >= 0 && fails <= 7" class="grid justify-center pb-3">
      <div class="w-fit" style="transform: translateX(3.5rem)">
        <canvas
          ref="mycanvas"
          width="100"
          height="190"
          v-bind:class="{ zoom: fails == 7 }"
        />
      </div>
      <!-- <div id="progress">
        <b-progress :value="7 - fails" :max="7" animated></b-progress>
      </div> -->

      <div class="flex items-center gap-x-1">
        <span class="font-medium">Intentos restantes:</span>
        <div class="badge custom-transition" :class="progressColor">{{ progress }}</div>
      </div>
    </div>

    <div v-else-if="fails === -1">
      <div class="grid gap-y-2 justify-center text-center">
        <p class="font-bold">!FELICITACIONES!</p>
        <img
          class="success-image mb-4 w-full"
          style="max-width: 220px"
          src="~/assets/img/succes-penguin.png"
          alt="Felicitaciones"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StickMan',
  props: {
    fails: Number,
  },
  computed: {
    progress() {
      return 7 - this.fails
    },
    progressColor() {
      if (this.fails < 3) {
        return 'bg-green-400 text-white'
      } else if (this.fails < 5) {
        return 'bg-yellow-200'
      } else {
        return 'bg-red-500 text-white'
      }
    },
  },
  methods: {
    renderStickMan: function () {
      var ctx = this.$refs['mycanvas']?.getContext('2d')
      if (!ctx) return
      if (this.fails == 0) {
        ctx.clearRect(0, 0, 100, 190)
        ctx.beginPath()
        ctx.moveTo(50, 20)
        ctx.lineTo(50, 0)
        ctx.lineTo(10, 0)
        ctx.lineTo(10, 180)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(40, 180)
        ctx.lineTo(0, 180)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(10, 165)
        ctx.lineTo(25, 180)
        ctx.stroke()
      }
      // Head
      if (this.fails == 1) {
        ctx.beginPath()
        ctx.arc(50, 40, 19, 0, 2 * Math.PI)
        ctx.stroke()
      }
      // Body
      if (this.fails == 2) {
        ctx.beginPath()
        ctx.moveTo(50, 60)
        ctx.lineTo(50, 120)
        ctx.stroke()
      }
      // Arm left
      if (this.fails == 3) {
        ctx.beginPath()
        ctx.moveTo(50, 80)
        ctx.lineTo(20, 80)
        ctx.stroke()
      }
      // Arm right
      if (this.fails == 4) {
        ctx.beginPath()
        ctx.moveTo(50, 80)
        ctx.lineTo(80, 80)
        ctx.stroke()
      }
      // Lef left
      if (this.fails == 5) {
        ctx.beginPath()
        ctx.moveTo(50, 120)
        ctx.lineTo(30, 169)
        ctx.stroke()
      }
      // Leg Right
      if (this.fails == 6) {
        ctx.beginPath()
        ctx.moveTo(50, 120)
        ctx.lineTo(70, 169)
        ctx.stroke()
      }
      // Game Over
      if (this.fails == 7) {
        // Leg right
        ctx.beginPath()
        ctx.moveTo(50, 120)
        ctx.lineTo(70, 169)
        ctx.stroke()
        // Face
        ctx.beginPath()
        ctx.arc(43, 35, 3, 0, 2 * Math.PI)
        ctx.stroke()
        ctx.beginPath()
        ctx.arc(57, 35, 3, 0, 2 * Math.PI)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(43, 50)
        ctx.lineTo(57, 50)
        ctx.stroke()
      }
    },
  },
  mounted() {
    //this.ctx = this.$refs['mycanvas'].getContext('2d');
    this.renderStickMan()
  },
  updated() {
    this.renderStickMan()
  },
}
</script>

<style scoped>
.stickMan {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14pt;
  min-height: 250px;
}
#progress {
  margin-left: 25%;
  margin-right: 25%;
}
@keyframes zoominoutsinglefeatured {
  0% {
    transform: scale(1, 1) rotate(0deg);
  }
  50% {
    transform: scale(1.2, 1.2) rotate(5deg);
  }
  100% {
    transform: scale(1, 1) rotate(0deg);
  }
}
.zoom {
  animation: zoominoutsinglefeatured 1s infinite;
}
.badge {
  display: inline-block;
  padding: 0.25em 0.4em;
  height: fit-content;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 10rem;
}

.custom-transition {
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.success-image {
  transform-origin: top;
  animation: appearFromAbove 0.5s ease-in-out;
}

@keyframes appearFromAbove {
  0% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
}
</style>
