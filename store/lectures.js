export const state = () => ({
  lectures: {
    lectura_1: {
      title: "El primer día de clases de Juan",
      pdf: "/lectura_1/lectura_1.pdf"
    },
    lectura_2: {
      title: "El Payaso Pirulín",
      pdf: "/lectura_2/lectura_2.pdf"
    },
    lectura_3: {
      title: "Maestro Peruano",
      pdf: "/lectura_3/lectura_3.pdf",
      scale: 1.05,
    },
    lectura_4: {
      title: "Yo soy peruana",
      pdf: "/lectura_4/lectura_4.pdf",
      scale: 1.1,
    },
    lectura_5: {
      title: "Huellas del tiempo",
      pdf: "/lectura_5/lectura_5.pdf",
      scale: 1.2,
    },
    lectura_6: {
      title: "La Leyenda del Río Amazonas",
      pdf: "/lectura_6/lectura_6.pdf",
      scale: 1.2,
    },
    lectura_7: {
      title: "Danzas Folklóricas del Perú",
      pdf: "/lectura_7/lectura.png",
      // scale: 1.2,
    },
    lectura_8: {
      title: "Querida Santa Rosa de Lima",
      pdf: "/lectura_8/lectura_8.pdf",
      scale: 1.1,
    },
    lectura_9: {
      title: "¿Cómo ser un buen peatón?",
      // pdf: "", // default pdf
      scale: 1.1,
    },
    lectura_10: {
      title: "Fabian y El Día del Árbol",
      // pdf: "", // default pdf
      scale: 1.2,
    },
    lectura_11: {
      title: "El concierto de las Flores",
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
