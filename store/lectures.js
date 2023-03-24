export const state = () => ({
  lectures: {
    lectura_1: {
      title: "El primer día de clases de Juan",
      pdf: "/assets/lectura_1/lectura_1.pdf"
    }
  }
})

export const getters = {
  getLecture: (state) => (lecture) => {
    return state.lectures[lecture]
  }
}

export const mutations = {}

export const actions = {}
