<template>
  <div class="dashboard w-full min-h-screen">
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
<style scoped>
.dashboard {
  background-image: url('../static/dashboard_ba.png');
  background-size: cover;
  background-position: center bottom;
}
</style>
