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
  }),

  async fetch() {
    const { data: level_items } = await this.$supabase
      .from('level_items')
      .select('*')
      .eq('level', this.level)
      .order('orden', { ascending: true })
    console.log(level_items)
    this.levelItems = level_items
  },
}
</script>
