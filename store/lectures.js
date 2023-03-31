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
    lectura_12: {
      title: "El amigo equivocado",
    },
    lectura_13: {
      title: "La liebre Rufa",
    },
    lectura_14: {
      title: "Nos quedamos sin luz",
      scale: 1.2,
    },
    lectura_15: {
      title: "Roberto, una fiesta sin fronteras",
      scale: 1.2,
    },
    lectura_16: {
      title: "Y se llama Perú",
      scale: 1.07,
    },
    lectura_17: {
      title: "Lectura 17",
    },
    lectura_18: {
      title: "Cóndor Andino",
      scale: 0.92,
    },
    lectura_19: {
      title: "Niño de 12 años usa la luz del poste de la calle para hacer sus tareas",
      scale: 0.92,
    },
    lectura_20: {
      title: "Lectura",
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
