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
      @advice="handleShowAdvice"
    />

    <AdviceModal v-model="showAdvice">
      <template #default v-if="adviceItem?.info">
        <div v-html="adviceItem.info"></div>
      </template>
      <template #action>
        <GameButton
          :disabled="false"
          :loading="updatingAdvice"
          @click="handleCloseAdvice"
        >
          Entendido
        </GameButton>
      </template>
    </AdviceModal>
  </div>
</template>

<script>
import AdviceModal from '~/components/AVcomponents/AdviceModal.vue'
import GameButton from '~/components/GameButton.vue'

export default {
  name: 'LevelItemsGrid',
  components: { AdviceModal, GameButton },
  props: {
    level: {
      type: Number,
      required: true,
    },
  },

  computed: {
    adviceItem() {
      return this.levelItems.find(item => item.type === 'advice')
    },
  },

  data: () => ({
    levelItems: [],
    user: null,
    completed: [],
    showAdvice: false,
    updatingAdvice: false,
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
      cur_level: this.level,
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
        item.enabled =
          Boolean(array[index - 1].completed) && Boolean(array[index - 1].enabled)
      }
      return item
    })

    // console.log(this.completed)
    // console.log(this.levelItems)
  },

  methods: {
    handleShowAdvice() {
      this.showAdvice = true
    },

    async handleCloseAdvice() {
      if (!this.adviceItem?.completed) {
        this.updatingAdvice = true
        await this.updateAdviceItem()
        this.levelItems.forEach((item, index) => {
          if (item.type === 'advice') {
            this.levelItems[index].completed = true
            if (this.levelItems[index + 1]) this.levelItems[index + 1].enabled = true
          } else if (item.completed) item.enabled = true
        })
        this.updatingAdvice = false
      }
      this.showAdvice = false
    },

    async updateAdviceItem() {
      await this.$store.dispatch('updateUserHistory', {
        user_id: this.user.id,
        level: this.adviceItem.level,
        level_item: this.adviceItem.id,
        item_type: this.adviceItem.type,
        completed: true,
        score: 1,
      })
    },
  },
}
</script>
