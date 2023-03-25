export const state = () => ({
  lectures: {
    lectura_1: {
      title: "El primer día de clases de Juan",
      pdf: "/assets/lectura_1/lectura_1.pdf"
    },
    lectura_2: {
      title: "El Payaso Pirulín",
      pdf: "/assets/lectura_2/lectura_2.pdf"
    },
  }
})

export const getters = {
  getLecture: (state) => (lecture) => {
    return state.lectures[lecture]
  }
}

export const mutations = {}

export const actions = {}
