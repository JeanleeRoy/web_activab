export const state = () => ({
  lectura_a: {
    pregunta_a: [
      {
        id: 'rad_1',
        text: 'Alex',
        value: 'Alex',
        isCorrect: false,
      },
      {
        id: 'rad_2',
        text: 'Pedro',
        value: 'Pedro',
        isCorrect: true,
      },
      {
        id: 'rad_3',
        text: 'Juan',
        value: 'Juan',
        isCorrect: false,
      },
    ],
    pregunta_b: [
      {
        id: 'rad_1',
        text: 'Signo interrogación',
        value: 'interrogación',
        isCorrect: false,
      },
      {
        id: 'rad_2',
        text: 'Signo admiración',
        value: 'admiración',
        isCorrect: true,
      },
    ],
  },
  lectura_b: {
    pregunta_a: [
      {
        id: 'rad_1',
        text: 'Signo A',
        value: 'interrogación',
        isCorrect: false,
      },
      {
        id: 'rad_2',
        text: 'Signo B',
        value: 'admiración',
        isCorrect: true,
      },
    ],
  },
})

export const getters = {
  getAnswersByParentAndQuestion: state => (parent, question) => {
    console.log(parent, state[parent]['pregunta_a'])
    if (!parent || !question) return []
    return state[parent][question] || []
  },
}

export const mutations = {
  toggle(state, todo) {
    todo.done = !todo.done
  },
}
