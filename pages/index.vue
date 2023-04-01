<template>
  <main>
    <header class="w-full py-6 px-4">
      <div class="max-w-7xl flex items-center justify-between bg-white mx-auto">
        <img src="" alt="ActiVAB" />
        <nav class="hidden gap-x-10 sm:flex">
          <p class="link-to" @click="smothScrollTo('about')">Acerca de</p>
          <p class="link-to" @click="smothScrollTo('mission')">Mision</p>
          <p class="link-to" @click="smothScrollTo('vision')">Visión</p>
        </nav>
        <div>
          <Button @click="handleLogin">Login</Button>
        </div>
      </div>
    </header>

    <section class="p-4">
      <div
        class="w-full max-w-7xl mx-auto bg-yellow-300 rectangle text-white p-4 sm:p-10"
      >
        <div class="grid handle-cols">
          <div class="p-4 sm:py-20">
            <h1 class="text-5xl font-semibold">
              Activab - una propuesta de aprendizaje interactivo
            </h1>
            <div class="w-full max-w-sm mt-8">
              <p class="text-lg font-medium">
                Diviertete jugando y aprendiendo en esta interactiva aplicación web del
                colegio Ramón Velarde 23340
              </p>
              <div class="mt-8 w-full flex justify-center">
                <Button class="mx-auto" color="secondary" @click="handleLogin">
                  <p class="px-3">Ingresa</p>
                </Button>
              </div>
            </div>
          </div>
          <div class="hidden h-full flex items-center sm:block">
            <img src="~/assets/img/hero-image.svg" />
          </div>
        </div>
      </div>
    </section>

    <section class="px-4 py-10 sm:pt-20" id="about">
      <div class="w-full max-w-7xl mx-auto">
        <h2 class="text-4xl font-semibold text-center">Acerca de nosotros</h2>
        <div
          class="pt-16 flex flex-col items-center gap-10 sm:flex-row sm:items-start sm:justify-center sm:gap-20"
        >
          <div class="card">
            <img src="~/assets/img/responsabilidad.png" />
            <p class="text-2xl font-semibold text-center">Responsabilidad</p>
          </div>
          <div class="card md:mt-20">
            <img src="~/assets/img/compromiso.png" />
            <p class="text-2xl font-semibold text-center">Compromiso</p>
          </div>
          <div class="card">
            <img src="~/assets/img/educacion.png" />
            <p class="text-2xl font-semibold text-center">Dedicación y esfuerzo</p>
          </div>
        </div>
      </div>
    </section>

    <section class="px-4 py-10 sm:pt-20" id="mission">
      <div class="w-full max-w-4xl mx-auto">
        <div class="group flex items-center gap-x-8">
          <img
            class="rounded-full group-hover:shadow-xl w-60 transition duration-700"
            src="~/assets/img/mision.png"
          />
          <div class="flex flex-col gap-8 md:pl-10">
            <h3 class="text-4xl font-semibold text-blue-700">Mision</h3>
            <p>
              Victor Ramon Belarde es una institución educativa comprometida con la
              enseñanza del estudiante desde el primer grado, acompañandolos en todas sus
              etapas de formación con compromiso y dedicación
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="px-4 py-10 sm:py-20" id="vision">
      <div class="w-full max-w-4xl mx-auto">
        <div class="group flex items-center gap-x-8">
          <div class="flex flex-col gap-8 md:pl-10">
            <h3 class="text-4xl font-semibold text-yellow-600">Visón</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
              libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
          </div>
          <img
            class="rounded-full group-hover:shadow-xl w-60 transition duration-700"
            src="~/assets/img/vision.png"
          />
        </div>
      </div>
    </section>

    <footer class="bg-gray-700 p-6 px-10">
      <div class="w-full max-w-5xl mx-auto">
        <div class="flex justify-between py-2s text-white">
          <img src="" alt="ActiVAB" />
          <p class="text-gray-300">
            &#169; ActiVAB {{ currentYear }} &nbsp; | &nbsp; Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  </main>
</template>

<script lang="js">
import Button from '~/components/button.vue'
export default {
  name: 'IndexPage',
  components: { Button },
  middleware: ['authenticated', 'dashboard'],
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
  },
  data: () => ({
    d: 'd',
  }),
  methods: {
    handleLogin(e) {
      e.preventDefault()
      this.$router.push('/login')
    },
    smothScrollTo(id) {
      const el = document.getElementById(id)
      el.scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>

<style>
.link-to {
  display: inline-block;
  font-size: 18px;
  height: fit-content;
  cursor: pointer;
}
.rectangle {
  background: linear-gradient(101.97deg, #fbbf24 32.64%, #fcd34d 68.99%);
  border-radius: 48px 48px 220px 48px;
}
.handle-cols {
  grid-template-columns: 60% 40%;
}
.card {
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 350px;
  padding: 4rem 1.5rem;
  gap: 2rem;
  background: rgba(255, 255, 255, 0.43);
  box-shadow: 0px 4px 50px rgba(116, 71, 117, 0.25);
  border-radius: 48px;
}

.card img {
  height: 150px;
  object-fit: contain;
}

@media screen and (max-width: 640px) {
  .rectangle {
    border-radius: 48px 48px 160px 48px;
  }
  .handle-cols {
    grid-template-columns: 100%;
  }
  .card {
    max-width: 300px;
    padding-block: 2rem;
    box-shadow: 0px 4px 20px rgba(164, 147, 164, 0.25);
  }
}
</style>
