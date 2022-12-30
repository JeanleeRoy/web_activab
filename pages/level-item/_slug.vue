<template>
  <div class="w-full min-h-screen">
    <SiteHeader />
    <div class="w-full max-w-7xl p-4 my-8 mx-auto">
      <Lectura />
      <!-- <LevelGrid /> -->
    </div>
  </div>
</template>

<script>
import Lectura from '~/components/level-item/lectura.vue'

export default {
  name: 'Dashboard',
  data: () => ({
    user: null,
  }),
  head() {
    return {
      title: 'Lectura',
    }
  },
  computed: {
    type() {},
  },
  mounted() {
    this.user = this.$supabase.auth.currentUser
  },
  async asyncData({ params }) {
    const id = params.slug
    return { id }
  }
  ,
  async fetch() {
    const {data} = await this.$supabase
      .from('profiles')
      .select('current_level')
      .eq('id', this.user.id)
    console.log(data)

    const {data: level} = await this.$supabase
      .from('levels')
      .select('*')
      .eq('id', data[0].current_level)

    console.log(level)


  },
  methods: {},
  components: { Lectura },
}
</script>
