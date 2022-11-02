export const state = () => ({
  questions: [
    {
      slug: 'pregunta_a',
      text: '¿Sobre quién se habla en la lectura?',
      body: '',
      hint: '',
      type: 'multiple_choice',
      image: 'lectura_a/pregunta_1.jpg',
      parent: 'lectura_a',
    },
    {
      slug: 'pregunta_b',
      text: '¿Qué observas en la imagen?',
      body: '',
      hint: '',
      type: 'multiple_choice',
      image: 'lectura_a/pregunta_1.jpg',
      parent: 'lectura_a',
    },
    {
      slug: 'pregunta_a',
      text: '¿Qué observas B?',
      body: '',
      hint: '',
      type: 'multiple_choice',
      image: 'lectura_a/pregunta_1.jpg',
      parent: 'lectura_b',
    },
  ],
})

export const getters = {
  getQuestionsByParent: state => id => {
    if (!id) return []
    return state.questions.filter(question => {
      return question.parent === id
    })
  },
}

export const mutations = {
  toggle(state, todo) {
    todo.done = !todo.done
  },
}
