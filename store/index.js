export const state = () => ({
  user: null,
  userHistory: null,
})

export const getters = {}

export const mutations = {}

export const actions = {
  async updateUserHistory(context, payload) {
    console.log('updateUserHistory', payload)
    const { item_type, ...body } = payload

    if (item_type !== 'questions') {
      const { data: old_history, error } = await this.$supabase
        .from('level_history')
        .select('*')
        .eq('user_id', body.user_id)
        .eq('level', body.level)
        .eq('level_item', body.level_item)
        .order('score', { ascending: false })
        .order('created_at', { ascending: false })
        .limit(1)
      // console.log('old_history', old_history)

      if (old_history.length > 0) {
        const history = old_history[0]
        if (body.score < history.score) {
          return false
        } else if (history.completed) {
          return false
        }
      }
    }

    const { data: new_history } = await this.$supabase
      .from('level_history')
      .insert([body])
    // console.log('new_history', new_history)

    return new_history.length ? new_history[0] : false
  },

  async updateUserLevelTo(context, payload) {
    const { data: current_level } = await this.$supabase
      .from('profiles')
      .select('current_level')
      .eq('id', payload.user_id)
      .single()
    // console.log('updateUserLevel', current_level, payload)
    if (current_level.current_level >= payload.level) {
      return false
    }
    const { data, error } = await this.$supabase
      .from('profiles')
      .update({ current_level: payload.level })
      .eq('id', payload.user_id)
      .single()
    // console.log('UserLevelUpdated', data, error)
  }
}
