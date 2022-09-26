<template>
  <div>
    <div>
      <h1 class="w-full text-center text-3xl font-semibold">Hola :D</h1>
    </div>
    <div v-for="user in users" :key="user.id">
      <b>{{ user.name }}</b>
      <p>{{ user.email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',

  data: () => ({
    users: [],
  }),

  async fetch() {
    // const { data, error } = await this.$supabase.from('users').select('*')
    // if (!error) {
    //   this.users = data
    // }
  },

  methods: {},
}
</script>
