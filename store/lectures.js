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
    lectura_3: {
      title: "Maestro Peruano",
      pdf: "/assets/lectura_3/lectura_3.pdf",
      scale: 1.05,
    },
    lectura_4: {
      title: "Yo soy peruana",
      pdf: "/assets/lectura_4/lectura_4.pdf",
      scale: 1.1,
    },
    lectura_5: {
      title: "Huellas del tiempo",
      pdf: "/assets/lectura_5/lectura_5.pdf",
      scale: 1.2,
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
