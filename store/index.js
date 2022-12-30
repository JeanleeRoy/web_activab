export const state = () => ({
  user: null,
  userHistory: null,
})

export const getters = {}

export const mutations = {}

export const actions = {
  async updateUserHistory(context, payload) {
    console.log('updateUserHistory', payload)
    const { user_id, level, level_item } = payload

    const { data: old_history, error } = await this.$supabase
      .from('level_history')
      .select('*')
      .eq('user_id', user_id)
      .eq('level', level)
      .eq('level_item', level_item)
      .order('score', { ascending: false })
      .order('created_at', { ascending: false })
      .limit(1)
    console.log('old_history', old_history)

    if (old_history.length > 0) {
      const history = old_history[0]
      if (payload.score < history.score) {
        return false
      } else if (history.completed) {
        return false
      }
    }

    const { data: new_history } = await this.$supabase
      .from('level_history')
      .insert([payload])
    console.log('new_history', new_history)

    return new_history.length ? new_history[0] : false
  },
}
