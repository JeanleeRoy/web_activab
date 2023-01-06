<template>
  <div
    class="w-full max-w-lg mx-auto flex flex-wrap justify-center px-4 py-8 gap-x-16 gap-y-8"
  >
    <LevelItem
      v-for="item in levelItems"
      :key="item.id"
      :type="item.type"
      :level="item.level"
      :level-item="item.orden"
      :disabled="!item.enabled"
      :completed="item.completed"
    />
  </div>
</template>

<script>
export default {
  name: 'LevelItemsGrid',
  props: {
    level: {
      type: Number,
      required: true,
    },
  },

  data: () => ({
    levelItems: [],
    user: null,
    completed: []
  }),

  mounted() {
    this.user = this.$supabase.auth.currentUser
  },

  async fetch() {
    const { data: level_items } = await this.$supabase
      .from('level_items')
      .select('*')
      .eq('level', this.level)
      .order('orden', { ascending: true })
    this.levelItems = level_items

    const { data: items_completed } = await this.$supabase.rpc('level_items_completed', {
      cur_user_id: this.user.id,
      cur_level: 1,
    })
    this.completed = items_completed.reduce((result, item) => {
      result.push(item.level_item_id)
      return result
    }, [])

    this.levelItems = this.levelItems.map((item, index, array) => {
      if (this.completed.includes(item.id)) {
        item.completed = true
      }
      if (index === 0) {
        item.enabled = true
      } else {
        item.enabled = Boolean(array[index - 1].completed)
      }
      return item
    })

    // console.log(this.completed)
    // console.log(this.levelItems)
  },
}
</script>
