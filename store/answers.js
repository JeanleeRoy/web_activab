import { triggerRef } from 'vue'
import shuffleArray from '~/utils/shuffleArray'

export const state = () => ({
  lectura_1: {
    pregunta_a: [
      {
        id: 'rad_L1A1',
        text: 'Ana',
        value: '1A1',
        isCorrect: false,
      },
      {
        id: 'rad_L1A2',
        text: 'Pedro',
        value: '1A2',
        isCorrect: false,
      },
      {
        id: 'rad_L1A3',
        text: 'Juan',
        value: '1A3',
        isCorrect: true,
      },
    ],
    pregunta_b: [
      {
        id: 'rad_L1B1',
        text: 'Narrar sus vacaciones',
        value: '1B1',
        isCorrect: false,
      },
      {
        id: 'rad_L1B2',
        text: 'Conocer a su maestra',
        value: '1B2',
        isCorrect: false,
      },
      {
        id: 'rad_L1B3',
        text: 'Prepararse para la escuela',
        value: '1B3',
        isCorrect: true,
      },
    ],
    pregunta_c: [
      {
        id: 'rad_L1C1',
        text: 'Conto su experiencia',
        value: '1C1',
        isCorrect: false,
      },
      {
        id: 'rad_L1C2',
        text: 'Conoció a su maestra',
        value: '1C2',
        isCorrect: false,
      },
      {
        id: 'rad_L1C3',
        text: 'Llegó a su escuela',
        value: '1C3',
        isCorrect: true,
      },
    ],
    pregunta_d: [
      {
        id: 'rad_L1D1',
        text: 'Puno',
        value: '1D1',
        isCorrect: false,
      },
      {
        id: 'rad_L1D2',
        text: 'Arequipa',
        value: '1D2',
        isCorrect: false,
      },
      {
        id: 'rad_L1D3',
        text: 'Huancayo',
        value: '1D3',
        isCorrect: true,
      },
    ],
    pregunta_e: [
      {
        id: 'rad_L1E1',
        text: 'Crianza de cuyes y conejos',
        value: '1E1',
        isCorrect: false,
      },
      {
        id: 'rad_L1E2',
        text: 'Crianza de moluscos',
        value: '1E2',
        isCorrect: false,
      },
      {
        id: 'rad_L1E3',
        text: 'Crianza comercial de peces en tanques o recintos para el consumo humano',
        value: '1E3',
        isCorrect: true,
      },
    ],
    pregunta_f: [
      {
        id: 'rad_L1F1',
        text: 'Conoció Huancayo',
        value: '1F1',
        isCorrect: true,
      },
      {
        id: 'rad_L1F2',
        text: 'Le aplaudieron por su relato',
        value: '1F2',
        isCorrect: true,
      },
      {
        id: 'rad_L1F3',
        text: 'Llego a su casa y conto a sus padres lo sucedido',
        value: '1F3',
        isCorrect: false,
      },
    ],
  },
  lectura_2: {
    pregunta_a: [
      {
        id: 'rad_L2A1',
        text: 'Con el trapecista',
        value: '2A1',
        isCorrect: false,
      },
      {
        id: 'rad_L2A2',
        text: 'Con su hijo piruetita',
        value: '2A2',
        isCorrect: true,
      },
      {
        id: 'rad_L2A3',
        text: 'Con un loro',
        value: '2A3',
        isCorrect: false,
      },
    ],
    pregunta_b: [
      {
        id: 'rad_L2B1',
        text: 'Cayó de la piscina',
        value: '2B1',
        isCorrect: false,
      },
      {
        id: 'rad_L2B2',
        text: 'Se perdió en el circo',
        value: '2B2',
        isCorrect: false,
      },
      {
        id: 'rad_L2B3',
        text: 'En plena función, cayó al suelo',
        value: '2B3',
        isCorrect: true,
      },
    ],
    pregunta_c: [
      {
        id: 'rad_L2C1',
        text: 'Que debemos rendirnos fácilmente ante la adversidad',
        value: '2C1',
        isCorrect: false,
      },
      {
        id: 'rad_L2C2',
        text: 'Que para un padre el amor, la fe nunca se pierden',
        value: '2C2',
        isCorrect: true,
      },
      {
        id: 'rad_L2C3',
        text: 'Debemos ayudar a nuestro prójimo',
        value: '2C3',
        isCorrect: false,
      },
    ],
  },
  lectura_3: {
    pregunta_a: [
      {
        id: 'rad_L3A1',
        text: 'Del maestro peruano',
        value: '3A1',
        isCorrect: true,
      },
      {
        id: 'rad_L3A2',
        text: 'De un hombre que viaja por el Perú',
        value: '3A2',
        isCorrect: false,
      },
      {
        id: 'rad_L3A3',
        text: 'De un padre Peruano',
        value: '3A3',
        isCorrect: false,
      },
    ],
    pregunta_b: [
      {
        id: 'rad_L3B1',
        text: 'Para leer una historia de un maestro.',
        value: '3B1',
        isCorrect: false,
      },
      {
        id: 'rad_L3B2',
        text: 'Para recitar una poesía al maestro',
        value: '3B2',
        isCorrect: true,
      },
      {
        id: 'rad_L3B3',
        text: 'Para preparar un regalo especial para el maestro',
        value: '3B3',
        isCorrect: false,
      },
    ],
    pregunta_c: [
      {
        id: 'rad_L3C1',
        text: 'Instructivo',
        value: '3C1',
        isCorrect: false,
      },
      {
        id: 'rad_L3C2',
        text: 'Poético',
        value: '3C2',
        isCorrect: true,
      },
      {
        id: 'rad_L3C3',
        text: 'Descriptivo',
        value: '3C3',
        isCorrect: false,
      },
    ],
    pregunta_d: [
      {
        id: 'rad_L3D1',
        text: 'Por sus enseñanzas y amor infinito hacia los niños',
        value: '3D1',
        isCorrect: true,
      },
      {
        id: 'rad_L3D2',
        text: 'Porque habla muy bien',
        value: '3D2',
        isCorrect: false,
      },
      {
        id: 'rad_L3D3',
        text: 'Porque dirige el colegio',
        value: '3D3',
        isCorrect: false,
      },
    ],
  },
  lectura_4: {
    pregunta_a: [
      {
        id: 'rad_L4A1',
        text: 'De un peruano que no conoce su país',
        value: '4A1',
        isCorrect: false,
      },
      {
        id: 'rad_L4A2',
        text: 'De una niña que vive en Puente Piedra',
        value: '4A2',
        isCorrect: false,
      },
      {
        id: 'rad_L4A3',
        text: 'Del orgullo de una peruna por su país',
        value: '4A3',
        isCorrect: true,
      },
    ],
    pregunta_b: [
      {
        id: 'rad_L4B1',
        text: 'Por su gente, riqueza y cultura',
        value: '4B1',
        isCorrect: true,
      },
      {
        id: 'rad_L4B2',
        text: 'Porque ensuciamos sus calles',
        value: '4B2',
        isCorrect: false,
      },
      {
        id: 'rad_L4B3',
        text: 'Porque no lo conocemos',
        value: '4B3',
        isCorrect: false,
      },
    ],
    pregunta_c: [
      {
        id: 'rad_L4C1',
        text: 'Vals',
        value: '4C1',
        isCorrect: true,
      },
      {
        id: 'rad_L4C2',
        text: 'Huayno',
        value: '4C2',
        isCorrect: false,
      },
      {
        id: 'rad_L4C3',
        text: 'Cumbia',
        value: '4C3',
        isCorrect: false,
      },
    ],
  },
  lectura_5: {
    pregunta_a: [
      {
        id: 'rad_L5A1',
        text: 'Batalla de Junín',
        value: '5A1',
        isCorrect: true,
      },
      {
        id: 'rad_L5A2',
        text: 'Batalla de Lima',
        value: '5A2',
        isCorrect: false,
      },
      {
        id: 'rad_L5A3',
        text: 'Batalla de Ayacucho.',
        value: '5A3',
        isCorrect: false,
      },
    ],
    pregunta_b: [
      {
        id: 'rad_L5B1',
        text: 'Porque querían apoderarse de las tierras peruanas.',
        value: '5B1',
        isCorrect: true,
      },
      {
        id: 'rad_L5B2',
        text: 'Porque querían la libertad e independencia del Perú.',
        value: '5B2',
        isCorrect: true,
      },
      {
        id: 'rad_L5B3',
        text: 'Porque querían demostrar su fuerza a los españoles.',
        value: '5B3',
        isCorrect: true,
      },
    ],
    pregunta_c: [
      {
        id: 'rad_L5C1',
        text: 'José de Canterac y Francisco Pizarro.',
        value: '5C1',
        isCorrect: false,
      },
      {
        id: 'rad_L5C2',
        text: 'Santa Rosa de Lima y San Martín de Porres.',
        value: '5C2',
        isCorrect: false,
      },
      {
        id: 'rad_L5C3',
        text: 'José Andrés Rázuri y Simón Bolívar',
        value: '5C3',
        isCorrect: true,
      },
    ],
    pregunta_d: [
      {
        id: 'rad_L5D1',
        text: 'Los generales del Perú.',
        value: '5D1',
        isCorrect: false,
      },
      {
        id: 'rad_L5D2',
        text: 'Los Húsares del Perú',
        value: '5D2',
        isCorrect: true,
      },
      {
        id: 'rad_L5D3',
        text: 'El ejército del Perú.',
        value: '5D3',
        isCorrect: false,
      },
    ],
  },
  lectura_6: {
    pregunta_a: [
      {
        id: 'rad_L6A1',
        text: 'De la creación de las montañas.',
        value: '6A1',
        isCorrect: false,
      },
      {
        id: 'rad_L6A2',
        text: ' De la creación del mar del Perú.',
        value: '6A2',
        isCorrect: false,
      },
      {
        id: 'rad_L6A3',
        text: ' De la creación del Rio Amazonas.',
        value: '6A3',
        isCorrect: true,
      },
    ],
    pregunta_b: [
      {
        id: 'rad_L6B1',
        text: 'El Sol y la Luna.',
        value: '6B1',
        isCorrect: true,
      },
      {
        id: 'rad_L6B2',
        text: 'El río Amazonas.',
        value: '6B2',
        isCorrect: false,
      },
      {
        id: 'rad_L6B3',
        text: ' El mar peruano.',
        value: '6B3',
        isCorrect: false,
      },
    ],
    pregunta_c: [
      {
        id: 'rad_L6C1',
        text: 'Que se odiaban y no se querían.',
        value: '6C1',
        isCorrect: false,
      },
      {
        id: 'rad_L6C2',
        text: 'Que no podían estar juntos.',
        value: '6C2',
        isCorrect: true,
      },
      {
        id: 'rad_L6C3',
        text: 'Que no se amaban.',
        value: '6C3',
        isCorrect: false,
      },
    ],
    pregunta_d: [
      {
        id: 'rad_L6D1',
        text: 'Se juntaron y fueron felices para siempre',
        value: '6D1',
        isCorrect: false,
      },
      {
        id: 'rad_L6D2',
        text: 'No volvieron a verse y Jací se convirtió en el Rio Amazonas.',
        value: '6D2',
        isCorrect: true,
      },
      {
        id: 'rad_L6D3',
        text: 'Guarací lloró tanto que se convirtió en el mar del Perú.',
        value: '6D3',
        isCorrect: false,
      },
    ],
  },
  lectura_7: {
    pregunta_a: [
      {
        id: 'rad_L7A1',
        text: 'De las Danzas Folclóricas del Perú.',
        value: '7A1',
        isCorrect: false,
      },
      {
        id: 'rad_L7A2',
        text: ' De un cuento de las danzas del Perú.',
        value: '7A2',
        isCorrect: false,
      },
      {
        id: 'rad_L7A3',
        text: ' De los Bailes más importantes de Lima.',
        value: '7A3',
        isCorrect: true,
      },
    ],
    pregunta_b: [
      {
        id: 'rad_L7B1',
        text: 'Del Festejo.',
        value: '7B1',
        isCorrect: false,
      },
      {
        id: 'rad_L7B2',
        text: 'De la Marinera.',
        value: '7B2',
        isCorrect: true,
      },
      {
        id: 'rad_L7B3',
        text: 'De las Danzas de las Tijeras.',
        value: '7B3',
        isCorrect: false,
      },
    ],
    pregunta_c: [
      {
        id: 'rad_L7C1',
        text: 'Son danzas de la Sierra.',
        value: '7C1',
        isCorrect: false,
      },
      {
        id: 'rad_L7C2',
        text: 'Son danzas en donde las parejas no se miran.',
        value: '7C2',
        isCorrect: false,
      },
      {
        id: 'rad_L7C3',
        text: 'Son danzas que demuestras enamoramiento.',
        value: '7C3',
        isCorrect: true,
      },
    ],
    pregunta_d: [
      {
        id: 'rad_L7D1',
        text: 'El homenaje y ritual a la serpiente.',
        value: '7D1',
        isCorrect: true,
      },
      {
        id: 'rad_L7D2',
        text: 'La coquetería de las bellas bailarinas.',
        value: '7D2',
        isCorrect: false,
      },
      {
        id: 'rad_L7D3',
        text: 'El miedo a la serpiente venenosa.',
        value: '7D3',
        isCorrect: false,
      },
    ],
  },
  lectura_8: {
    pregunta_a: [
      {
        id: 'rad_L8A1',
        text: 'Una poesia.',
        value: '8A1',
        isCorrect: false,
      },
      {
        id: 'rad_L8A2',
        text: ' Una carta.',
        value: '8A2',
        isCorrect: true,
      },
      {
        id: 'rad_L8A3',
        text: 'Una receta',
        value: '8A3',
        isCorrect: false,
      },
    ],
    pregunta_b: [
      {
        id: 'rad_L8B1',
        text: 'Para Santa Rosa de Lima.',
        value: '8B1',
        isCorrect: true,
      },
      {
        id: 'rad_L8B2',
        text: ' Para San Martín de Porres.',
        value: '8B2',
        isCorrect: false,
      },
      {
        id: 'rad_L8B3',
        text: 'Para la mamá de Santa Rosa de Lima.',
        value: '8B3',
        isCorrect: false,
      },
    ],
    pregunta_c: [
      {
        id: 'rad_L8C1',
        text: 'Para agradecer por cuidar a su familia y conocidos.',
        value: '8C1',
        isCorrect: true,
      },
      {
        id: 'rad_L8C2',
        text: 'Para pedir que su familia tenga trabajo.',
        value: '8C2',
        isCorrect: false,
      },
      {
        id: 'rad_L8C3',
        text: 'Para conocer como es Santa Rosa de Lima.',
        value: '8C3',
        isCorrect: false,
      },
    ],
    pregunta_d: [
      {
        id: 'rad_L8D1',
        text: ' Braulio',
        value: '8D1',
        isCorrect: false,
      },
      {
        id: 'rad_L8D2',
        text: 'Briana',
        value: '8D2',
        isCorrect: true,
      },
      {
        id: 'rad_L8D3',
        text: 'Blanca',
        value: '8D3',
        isCorrect: false,
      },
    ],
  },
  lectura_9: {
    pregunta_a: [
      {
        id: 'rad_L9A1',
        text: 'Debes mirar si los carros están conduciendo.',
        value: '9A1',
        isCorrect: false,
      },
      {
        id: 'rad_L9A2',
        text: 'Debes de observar si hay señales de tránsito cerca.',
        value: '9A2',
        isCorrect: true,
      },
    ],
    pregunta_b: [
      {
        id: 'rad_L9B1',
        text: 'Debes asegurarte que el semáforo esté en colore VERDE.',
        value: '9B1',
        isCorrect: true,
      },
      {
        id: 'rad_L9B2',
        text: 'Debes de cruzar por la calle rápidamente.',
        value: '9B2',
        isCorrect: false,
      },
    ],
    pregunta_c: [
      {
        id: 'rad_L9C1',
        text: 'No llevar animales sueltos para que no te distraigas.',
        value: '9C1',
        isCorrect: true,
      },
      {
        id: 'rad_L9C2',
        text: 'No jugar al momento de cruzar para no distraerte.',
        value: '9C2',
        isCorrect: false,
      },
    ],
    pregunta_d: [
      {
        id: 'rad_L9D1',
        text: 'Para que los animalitos no sufran accidentes.',
        value: '9D1',
        isCorrect: false,
      },
      {
        id: 'rad_L9D2',
        text: 'Para aprender a ser buenos peatones.',
        value: '9D2',
        isCorrect: true,
      },
    ],
    pregunta_e: [
      {
        id: 'rad_L9E1',
        text: 'Para hacernos una invitación.',
        value: '9E1',
        isCorrect: false,
      },
      {
        id: 'rad_L5E2',
        text: 'Para darnos recomendaciones.',
        value: '5E2',
        isCorrect: true,
      },
    ],
  },
  lectura_10: {
    pregunta_a: [
      {
        id: 'rad_L10A1',
        text: 'Con sus compañeros del colegio',
        value: '10A1',
        isCorrect: false,
      },
      {
        id: 'rad_L10A2',
        text: 'Con sus padres.',
        value: '10A2',
        isCorrect: true,
      },
      {
        id: 'rad_L10A3',
        text: 'Con sus hermanos y primos.',
        value: '10A3',
        isCorrect: false,
      },
    ],
    pregunta_b: [
      {
        id: 'rad_L10B1',
        text: 'Para sembrar y vender los árboles.',
        value: '10B1',
        isCorrect: false,
      },
      {
        id: 'rad_L10B2',
        text: 'Para cortar los árboles.',
        value: '10B2',
        isCorrect: false,
      },
      {
        id: 'rad_L10B3',
        text: 'Para cuidar y proteger el medio ambiente.',
        value: '10B3',
        isCorrect: true,
      },
    ],
    pregunta_c: [
      {
        id: 'rad_L10C1',
        text: 'Buena, porque todos debemos sembrar árboles.',
        value: '10C1',
        isCorrect: true,
      },
      {
        id: 'rad_L10C2',
        text: 'Buena, porque todos podemos colaborar en cuidar la naturaleza.',
        value: '10C2',
        isCorrect: false,
      },
      {
        id: 'rad_L10C3',
        text: 'Mala, porque hay otras cosas más importantes por hacer.',
        value: '10C3',
        isCorrect: false,
      },
    ],
  },
  lectura_11: {
    pregunta_a: [
      {
        id: 'rad_L11A1',
        text: 'De unos animalitos y las flores.',
        value: '11A1',
        isCorrect: true,
      },
      {
        id: 'rad_L11A2',
        text: 'De los amigos y la escuela.',
        value: '11A2',
        isCorrect: false,
      },
      {
        id: 'rad_L11A3',
        text: 'De las flores del campo.',
        value: '11A3',
        isCorrect: false,
      },
    ],
    pregunta_b: [
      {
        id: 'rad_L11B1',
        text: 'Para sus amigos.',
        value: '11B1',
        isCorrect: false,
      },
      {
        id: 'rad_L11B2',
        text: 'Para las flores.',
        value: '11B2',
        isCorrect: true,
      },
      {
        id: 'rad_L11B3',
        text: 'Para su familia.',
        value: '11B3',
        isCorrect: false,
      },
    ],
    pregunta_c: [
      {
        id: 'rad_L11C1',
        text: 'Porque quería celebrar su cumpleaños.',
        value: '11C1',
        isCorrect: false,
      },
      {
        id: 'rad_L11C2',
        text: 'Porque quería celebrar la llegada de la primavera.',
        value: '11C2',
        isCorrect: true,
      },
      {
        id: 'rad_L11C3',
        text: 'Porque su familia llego de viaje.',
        value: '11C3',
        isCorrect: false,
      },
    ],
    pregunta_d: [
      {
        id: 'rad_L11D1',
        text: 'Justino se tropezó en el escenario.',
        value: '11D1',
        isCorrect: false,
      },
      {
        id: 'rad_L11D2',
        text: 'Se realizó un gran concierto.',
        value: '11D2',
        isCorrect: true,
      },
      {
        id: 'rad_L11D3',
        text: 'Todos se pusieron tristes.',
        value: '11D3',
        isCorrect: false,
      },
    ],
  },
  lectura_12: {
    pregunta_a: [
      {
        id: 'rad_L12A1',
        text: 'En la ciudad',
        value: '12A1',
        isCorrect: false,
      },
      {
        id: 'rad_L12A2',
        text: 'En el campo',
        value: '12A2',
        isCorrect: true,
      },
      {
        id: 'rad_L12A3',
        text: 'En la playa',
        value: '12A3',
        isCorrect: false,
      },
    ],
    pregunta_b: [
      {
        id: 'rad_L12B1',
        text: 'Para comer muchos dulces',
        value: '12B1',
        isCorrect: false,
      },
      {
        id: 'rad_L12B2',
        text: 'Para pasar más tiempo con el celular',
        value: '12B2',
        isCorrect: true,
      },
      {
        id: 'rad_L12B3',
        text: 'Para jugar con ellos, saltar, brincar, correr y esconderse',
        value: '12B3',
        isCorrect: true,
      },
    ],
    pregunta_c: [
      {
        id: 'rad_L12C1',
        text: 'No debían comer muchos dulces ni parar mucho tiempo con el celular',
        value: '12C1',
        isCorrect: false,
      },
      {
        id: 'rad_L12C2',
        text: 'Está bien que jueguen, pero no debían comer dulces ni estar mucho tiempo con el celular',
        value: '12C2',
        isCorrect: true,
      },
      {
        id: 'rad_L12C3',
        text: 'Mantienen una buena salud y comen ricos dulces',
        value: '12C3',
        isCorrect: false,
      },
    ],
  },
  lectura_13: {
    pregunta_a: [
      {
        id: 'rad_L13A1',
        text: 'Un cuento.',
        value: '13A1',
        isCorrect: false,
      },
      {
        id: 'rad_L13A2',
        text: 'El cazador y los perros.',
        value: '13A2',
        isCorrect: false,
      },
      {
        id: 'rad_L13A3',
        text: 'La liebre Rufa.',
        value: '13A3',
        isCorrect: true,
      },
    ],
    pregunta_b: [
      {
        id: 'rad_L13B1',
        text: 'Era sorda y estaba perdiendo la visión.',
        value: '13B1',
        isCorrect: true,
      },
      {
        id: 'rad_L13B2',
        text: 'Era muy dormilona.',
        value: '13B2',
        isCorrect: false,
      },
      {
        id: 'rad_L13B3',
        text: 'Tenía miedo a los perros.',
        value: '13B3',
        isCorrect: false,
      },
    ],
    pregunta_c: [
      {
        id: 'rad_L13C1',
        text: 'Porque se incendiaba el bosque.',
        value: '13C1',
        isCorrect: false,
      },
      {
        id: 'rad_L13C2',
        text: 'porque escuchaban ruidos de escopetas.',
        value: '13C2',
        isCorrect: true,
      },
      {
        id: 'rad_L13C3',
        text: 'Porque escuchaban mucho ruido.',
        value: '13C3',
        isCorrect: false,
      },
    ],
    pregunta_d: [
      {
        id: 'rad_L13D1',
        text: 'Fue a buscar a su familia para rescatarlos.',
        value: '13D1',
        isCorrect: false,
      },
      {
        id: 'rad_L13D2',
        text: 'Se encondió detrás de un árbol.',
        value: '13D2',
        isCorrect: false,
      },
      {
        id: 'rad_L13D3',
        text: 'Dormía plácidamente debajo de un árbol.',
        value: '13D3',
        isCorrect: true,
      },
    ],
    pregunta_e: [
      {
        id: 'rad_L13E1',
        text: 'Sí, porque le atraparon los perros.',
        value: '13E1',
        isCorrect: false,
      },
      {
        id: 'rad_L13E2',
        text: 'No, porque se escondió rápidamente.',
        value: '13E2',
        isCorrect: false,
      },
      {
        id: 'rad_L13E3',
        text: 'No, porque los perros terminaron yéndose por otra dirección.',
        value: '13E3',
        isCorrect: true,
      },
    ],
    pregunta_f: [
      {
        id: 'rad_L13F1',
        text: 'Que no es malo tener alguna dificultad física.',
        value: '13F1',
        isCorrect: true,
      },
      {
        id: 'rad_L13F2',
        text: 'Que debemos aprender a superar nuestras dificultades.',
        value: '13F2',
        isCorrect: false,
      },
      {
        id: 'rad_L13F3',
        text: 'No hay que temer a los perros.',
        value: '13F3',
        isCorrect: false,
      },
    ],
  },
  lectura_14: {
    pregunta_a: [
      {
        id: 'rad_L14A1',
        text: 'De Rita.',
        value: '14A1',
        isCorrect: true,
      },
      {
        id: 'rad_L14A2',
        text: 'De Raquel.',
        value: '14A2',
        isCorrect: false,
      },
      {
        id: 'rad_L14A3',
        text: 'De Renata.',
        value: '14A3',
        isCorrect: false,
      },
    ],
    pregunta_b: [
      {
        id: 'rad_L14B1',
        text: 'Desperdiciaban la electricidad.',
        value: '14B1',
        isCorrect: false,
      },
      {
        id: 'rad_L14B2',
        text: 'No tenían electricidad.',
        value: '14B2',
        isCorrect: true,
      },
      {
        id: 'rad_L14B3',
        text: 'Malograban los electrodomésticos.',
        value: '14B3',
        isCorrect: false,
      },
    ],
    pregunta_c: [
      {
        id: 'rad_L14C1',
        text: 'Felices porque tendrían luz en sus casas.',
        value: '14C1',
        isCorrect: true,
      },
      {
        id: 'rad_L14C2',
        text: 'Molestos porque los niños jugaban con la luz.',
        value: '14C2',
        isCorrect: false,
      },
      {
        id: 'rad_L14C3',
        text: 'Preocupados porque se fuera la luz.',
        value: '14C3',
        isCorrect: false,
      },
    ],
    pregunta_d: [
      {
        id: 'rad_L14D1',
        text: 'Comenzó a desperdiciar la luz.',
        value: '14D1',
        isCorrect: true,
      },
      {
        id: 'rad_L14D2',
        text: 'Hizo una fiesta para celebrar.',
        value: '14D2',
        isCorrect: false,
      },
      {
        id: 'rad_L14D3',
        text: 'Cuidaba responsablemente la luz.',
        value: '14D3',
        isCorrect: false,
      },
    ],
    pregunta_e: [
      {
        id: 'rad_L14E1',
        text: 'Se sintieron muy tristes.',
        value: '14E1',
        isCorrect: true,
      },
      {
        id: 'rad_L14E2',
        text: 'Se preocuparon.',
        value: '14E2',
        isCorrect: false,
      },
      {
        id: 'rad_L14E3',
        text: 'Se molestaron.',
        value: '14E3',
        isCorrect: false,
      },
    ],
  },
  lectura_15: {
    pregunta_a: [
      {
        id: 'rad_L15A1',
        text: 'De Roberto y el señor de Pachacamilla.',
        value: '15A1',
        isCorrect: true,
      },
      {
        id: 'rad_L15A2',
        text: 'De Rufino y el señor morado.',
        value: '15A2',
        isCorrect: false,
      },
      {
        id: 'rad_L15A3',
        text: 'De Renato y su hábito morado.',
        value: '15A3',
        isCorrect: false,
      },
    ],
    pregunta_b: [
      {
        id: 'rad_L15B1',
        text: 'En Pachacamac.',
        value: '15B1',
        isCorrect: true,
      },
      {
        id: 'rad_L15B2',
        text: 'En Puente Piedra.',
        value: '15B2',
        isCorrect: false,
      },
      {
        id: 'rad_L15B3',
        text: 'En Pachacútec.',
        value: '15B3',
        isCorrect: false,
      },
    ],
    pregunta_c: [
      {
        id: 'rad_L15C1',
        text: 'Cuando viajan a visitar a la abuelita.',
        value: '15C1',
        isCorrect: true,
      },
      {
        id: 'rad_L15C2',
        text: 'Cuando miran la imagen de Cristo Morado.',
        value: '15C2',
        isCorrect: false,
      },
      {
        id: 'rad_L15C3',
        text: 'Cuando fueron a la iglesia.',
        value: '15C3',
        isCorrect: false,
      },
    ],
    pregunta_d: [
      {
        id: 'rad_L15D1',
        text: 'Para que les regale flores.',
        value: '15D1',
        isCorrect: false,
      },
      {
        id: 'rad_L15D2',
        text: 'Para bendecir y llenar de fe a su familia.',
        value: '15D2',
        isCorrect: true,
      },
      {
        id: 'rad_L15D3',
        text: 'Para que se sanaran sus familiares.',
        value: '15D3',
        isCorrect: false,
      },
    ],
    pregunta_e: [
      {
        id: 'rad_L15E1',
        text: 'A orar y pedir por su familia.',
        value: '15E1',
        isCorrect: false,
      },
      {
        id: 'rad_L15E2',
        text: 'A conocer a las personas para que te puedan ayudar.',
        value: '15E2',
        isCorrect: false,
      },
      {
        id: 'rad_L15E3',
        text: 'La fe y devoción hacia el Cristo de Pachacamilla.',
        value: '15E2',
        isCorrect: true,
      },
    ],
  },
  lectura_16: {
    pregunta_a: [
      {
        id: 'rad_L16A1',
        text: 'A Chile.',
        value: '16A1',
        isCorrect: false,
      },
      {
        id: 'rad_L15A2',
        text: 'A Perú.',
        value: '16A2',
        isCorrect: true,
      },
      {
        id: 'rad_L16A3',
        text: 'A Paraguay.',
        value: '16A3',
        isCorrect: false,
      },
    ],
    pregunta_b: [
      {
        id: 'rad_L16B1',
        text: 'Es un país pobre',
        value: '16B1',
        isCorrect: true,
      },
      {
        id: 'rad_L16B2',
        text: 'Es un país con muchos problemas.',
        value: '16B2',
        isCorrect: false,
      },
      {
        id: 'rad_L16B3',
        text: 'Es un país que tiene muchas riquezas.',
        value: '16B3',
        isCorrect: false,
      },
    ],
    pregunta_c: [
      {
        id: 'rad_L16C1',
        text: 'Emoción y orgullo por su país.',
        value: '16C1',
        isCorrect: false,
      },
      {
        id: 'rad_L16C2',
        text: 'Tristeza por su país.',
        value: '16C2',
        isCorrect: true,
      },
      {
        id: 'rad_L16C3',
        text: 'No hay sentimientos por su país.',
        value: '16C3',
        isCorrect: false,
      },
    ],
    pregunta_d: [
      {
        id: 'rad_L16D1',
        text: 'Para aprender una canción sobre el Perú.',
        value: '16D1',
        isCorrect: false,
      },
      {
        id: 'rad_L16D2',
        text: 'Para saber la historia de su país',
        value: '16D2',
        isCorrect: false,
      },
      {
        id: 'rad_L16D3',
        text: 'Para saber dónde está su país.',
        value: '16D3',
        isCorrect: true,
      },
    ],
  },
  lectura_17: {
    pregunta_a: [
      {
        id: 'rad_L17A1',
        text: 'Por desarrollar',
        value: '17A1',
        isCorrect: true,
      },
      {
        id: 'rad_L17A2',
        text: 'Por desarrollar',
        value: '17A2',
        isCorrect: true,
      },
      {
        id: 'rad_L17A3',
        text: 'Por desarrollar',
        value: '17A3',
        isCorrect: true,
      },
    ],
  },
  lectura_18: {
    pregunta_a: [
      {
        id: 'rad_L18A1',
        text: 'Es el ave voladora más grande del Perú.',
        value: '18A1',
        isCorrect: true,
      },
      {
        id: 'rad_L18A2',
        text: 'Es el ave más bello y fuerte del Perú.',
        value: '18A2',
        isCorrect: false,
      },
      {
        id: 'rad_L18A3',
        text: 'Es el ave más peligrosa del Perú.',
        value: '18A3',
        isCorrect: false,
      },
    ],
    pregunta_b: [
      {
        id: 'rad_L18B1',
        text: 'Que podríamos capturarlo con facilidad.',
        value: '18B1',
        isCorrect: false,
      },
      {
        id: 'rad_L18B2',
        text: 'Que podría desaparecer.',
        value: '18B2',
        isCorrect: true,
      },
      {
        id: 'rad_L18B3',
        text: 'Que podemos encontrar muchos cóndores.',
        value: '18B3',
        isCorrect: false,
      },
    ],
    pregunta_c: [
      {
        id: 'rad_L18C1',
        text: 'Para criarlo',
        value: '18C1',
        isCorrect: false,
      },
      {
        id: 'rad_L18C2',
        text: 'Para comer su carne.',
        value: '18C2',
        isCorrect: false,
      },
      {
        id: 'rad_L18C3',
        text: 'Para usarla el Yawar fiesta.',
        value: '18C3',
        isCorrect: true,
      },
    ],
  },
  lectura_19: {
    pregunta_a: [
      {
        id: 'rad_L19A1',
        text: 'Un cuento.',
        value: '19A1',
        isCorrect: false,
      },
      {
        id: 'rad_L19A2',
        text: 'Una noticia.',
        value: '19A2',
        isCorrect: true,
      },
      {
        id: 'rad_L19A3',
        text: 'Una fábula.',
        value: '19A3',
        isCorrect: false,
      },
    ],
    pregunta_b: [
      {
        id: 'rad_L19B1',
        text: 'No tiene luz en casa para poder estudiar.',
        value: '19B1',
        isCorrect: true,
      },
      {
        id: 'rad_L19B2',
        text: 'Sale a la calle para jugar.',
        value: '19B2',
        isCorrect: false,
      },
      {
        id: 'rad_L19B3',
        text: 'Le gusta jugar de noche.',
        value: '19B3',
        isCorrect: false,
      },
    ],
    pregunta_c: [
      {
        id: 'rad_L19C1',
        text: 'Porque a pesar de no haber luz en su casa, no cumple con sus tareas.',
        value: '19C1',
        isCorrect: false,
      },
      {
        id: 'rad_L19C2',
        text: 'Porque a pesar de no tener luz en casa, busca la forma de cumplir con las tareas.',
        value: '19C2',
        isCorrect: true,
      },
      {
        id: 'rad_L19C3',
        text: 'Porque se va a dormir temprano.',
        value: '19C3',
        isCorrect: false,
      },
    ],
    pregunta_d: [
      {
        id: 'rad_L19D1',
        text: 'Ser ingeniero para poner luz en su casa.',
        value: '19D1',
        isCorrect: false,
      },
      {
        id: 'rad_L19D2',
        text: 'Ser medico para curar a sus familiares.',
        value: '19D2',
        isCorrect: false,
      },
      {
        id: 'rad_L19D3',
        text: 'Ser policía para luchar contra la delincuencia y corrupción.',
        value: '19D3',
        isCorrect: true,
      },
    ],
  },
  lectura_20: {
    pregunta_a: [
      {
        id: 'rad_L20A1',
        text: 'En desarrollo',
        value: '20A1',
        isCorrect: true,
      },
      {
        id: 'rad_L20A2',
        text: 'En desarrollo',
        value: '20A2',
        isCorrect: false,
      },
      {
        id: 'rad_L20A3',
        text: 'En desarrollo',
        value: '20A3',
        isCorrect: false,
      },
    ],
  },

  juego_1: {
    pregunta_a: [
      {
        id: 'rad_J1A1',
        text: 'Un niño',
        value: 'J1A1',
        isCorrect: true,
      },
      {
        id: 'rad_J1A2',
        text: 'Un colegio',
        value: 'J1A2',
        isCorrect: false,
      },
      {
        id: 'rad_J1A3',
        text: 'Un niño regresando a la escuela',
        value: 'J1A3',
        isCorrect: false,
      },
    ],
    pregunta_b: [
      {
        id: 'rad_J1B1',
        text: 'Un profesor.',
        value: 'J1B1',
        isCorrect: true,
      },
      {
        id: 'rad_J1B2',
        text: 'Un niño regresando al colegio.',
        value: 'J1B2',
        isCorrect: false,
      },
      {
        id: 'rad_J1B3',
        text: 'Una profesora felicitando a un niño.',
        value: 'J1B3',
        isCorrect: false,
      },
    ],
    pregunta_c: [
      {
        id: 'rad_J1C1',
        text: 'Instructivo',
        value: 'J1C1',
        isCorrect: false,
      },
      {
        id: 'J1C2',
        text: 'Poético',
        value: 'J1C2',
        isCorrect: false,
      },
      {
        id: 'J1C3',
        text: 'Narrativo.',
        value: 'J1C3',
        isCorrect: true,
      },
    ],
  },
  juego_2: {
    pregunta_a: [
      {
        id: 'rad_J2A1',
        text: 'El payaso perdido.',
        value: 'J2A1',
        isCorrect: true,
      },
      {
        id: 'rad_J2A2',
        text: 'El payaso renegón.',
        value: 'J2A2',
        isCorrect: false,
      },
      {
        id: 'rad_J1A3',
        text: 'El payaso y su hijo.',
        value: 'J2A3',
        isCorrect: false,
      },
    ],
    pregunta_b: [
      {
        id: 'rad_J2B1',
        text: 'De un señor que vive en una escuela.',
        value: 'J2B1',
        isCorrect: true,
      },
      {
        id: 'rad_J2B2',
        text: 'De un hombre que va al circo con su hijo.',
        value: 'J2B2',
        isCorrect: false,
      },
      {
        id: 'rad_J2B3',
        text: 'De un payaso que trabaja con su hijo en un circo.',
        value: 'J2B3',
        isCorrect: false,
      },
    ],
  },
  juego_4: {
    pregunta_a: [
      {
        id: 'rad_J4A1',
        text: 'De una historia.',
        value: 'J4A1',
        isCorrect: true,
      },
      {
        id: 'rad_J4A2',
        text: 'De una canción.',
        value: 'J4A2',
        isCorrect: false,
      },
      {
        id: 'rad_J4A3',
        text: 'De una anécdota.',
        value: 'J4A3',
        isCorrect: false,
      },
    ],
  },
  juego_5: {
    pregunta_a: [
      {
        id: 'rad_J5A1',
        text: 'Estan pelenado.',
        value: 'J5A1',
        isCorrect: true,
      },
      {
        id: 'rad_J5A2',
        text: 'Estan celebrabdo.',
        value: 'J5A2',
        isCorrect: false,
      },
      {
        id: 'rad_J5A3',
        text: 'Estan jugando',
        value: 'J5A3',
        isCorrect: false,
      },
    ],
    pregunta_b: [
      {
        id: 'rad_J5B1',
        text: 'China',
        value: 'J5B1',
        isCorrect: true,
      },
      {
        id: 'rad_J5B2',
        text: ' África',
        value: 'J5B2',
        isCorrect: false,
      },
      {
        id: 'rad_J5B3',
        text: 'Perú.',
        value: 'J5B3',
        isCorrect: false,
      },
    ],
  },
  juego_6: {
    pregunta_a: [
      {
        id: 'rad_J6A1',
        text: 'El mar.',
        value: 'J6A1',
        isCorrect: true,
      },
      {
        id: 'rad_J6A2',
        text: 'El rio',
        value: 'J6A2',
        isCorrect: false,
      },
      {
        id: 'rad_J6A3',
        text: 'La laguna',
        value: 'J6A3',
        isCorrect: false,
      },
    ],
    pregunta_b: [
      {
        id: 'rad_J6B1',
        text: 'Que son mas grandes que el mar.',
        value: 'J6B1',
        isCorrect: true,
      },
      {
        id: 'rad_J6B2',
        text: 'Que llevan agua salada.',
        value: 'J6B2',
        isCorrect: false,
      },
      {
        id: 'rad_J6B3',
        text: 'Que son largos de gua dulce.',
        value: 'J6B3',
        isCorrect: false,
      },
    ],
  },
  juego_7: {
    pregunta_a: [
      {
        id: 'rad_J7A1',
        text: 'Personas vendiendo vestimentas de danzas.',
        value: 'J7A1',
        isCorrect: false,
      },
      {
        id: 'rad_J7A2',
        text: 'Personas bailando diferentes tipos de danzas',
        value: 'J7A2',
        isCorrect: true,
      },
      {
        id: 'rad_J7A3',
        text: 'Personas colocandose vestuarios de danzas típicas',
        value: 'J7A3',
        isCorrect: false,
      },
    ],
    pregunta_b: [
      {
        id: 'rad_J7B1',
        text: 'Callao, Puno y Moquegua.',
        value: 'J7B1',
        isCorrect: false,
      },
      {
        id: 'rad_J7B2',
        text: 'Lima, costa y Ayacucho.',
        value: 'J7B2',
        isCorrect: false,
      },
      {
        id: 'rad_J7B3',
        text: 'Costa, sierra y selva.',
        value: 'J7B3',
        isCorrect: true,
      },
    ],
    pregunta_c: [
      {
        id: 'rad_J7C1',
        text: 'Sierra',
        value: 'J7C1',
        isCorrect: true,
      },
      {
        id: 'rad_J7C2',
        text: 'Costa',
        value: 'J7C2',
        isCorrect: false,
      },
      {
        id: 'rad_J7C3',
        text: 'Selva',
        value: 'J7C3',
        isCorrect: false,
      },
    ],
  },
  juego_8: {
    pregunta_a: [
      {
        id: 'rad_J8A1',
        text: 'De San Matín de Porres.',
        value: 'J8A1',
        isCorrect: false,
      },
      {
        id: 'rad_J8A2',
        text: 'De Santa Rosa de Lima.',
        value: 'J8A2',
        isCorrect: true,
      },
      {
        id: 'rad_J8A3',
        text: 'De María Teresa de Calcuta.',
        value: 'J8A3',
        isCorrect: false,
      },
    ],
    pregunta_b: [
      {
        id: 'rad_J8B1',
        text: 'Fue una persona que trabajaba en la iglesia.',
        value: 'J8B1',
        isCorrect: false,
      },
      {
        id: 'rad_J8B2',
        text: 'Fue una persona que ayudaba a los más necesitados. ',
        value: 'J8B2',
        isCorrect: true,
      },
      {
        id: 'rad_J8B3',
        text: 'Fue una monja muy querida en la iglesia.',
        value: 'J8B3',
        isCorrect: false,
      },
    ],
    pregunta_c: [
      {
        id: 'rad_J8C1',
        text: 'El pozo de los deseos.',
        value: 'J8C1',
        isCorrect: true,
      },
      {
        id: 'rad_J8C2',
        text: 'Un árbol con manzanas.',
        value: 'J8C2',
        isCorrect: false,
      },
      {
        id: 'rad_J8C3',
        text: 'Una paloma volando.',
        value: 'J8C3',
        isCorrect: false,
      },
    ],
  },
  juego_9: {
    pregunta_a: [
      {
        id: 'rad_J9A1',
        text: 'De una niña que va a la escuela.',
        value: 'J9A1',
        isCorrect: true,
      },
      {
        id: 'rad_J9A2',
        text: 'De ser buenos peatones.',
        value: 'J9A2',
        isCorrect: false,
      },
      {
        id: 'rad_J9A3',
        text: 'Del semáforo verde.',
        value: 'J9A3',
        isCorrect: false,
      },
    ],
  },
  juego_10: {
    pregunta_a: [
      {
        id: 'rad_J10A1',
        text: 'Vida es el árbol.',
        value: 'J10A1',
        isCorrect: true,
      },
      {
        id: 'rad_J10A2',
        text: 'El árbol es vida.',
        value: 'J10A2',
        isCorrect: false,
      },
      {
        id: 'rad_J10A3',
        text: 'Las plantas son vida.',
        value: 'J10A3',
        isCorrect: false,
      },
    ],
  },
  juego_11: {
    pregunta_a: [
      {
        id: 'rad_J11A1',
        text: 'Animales en el campo',
        value: 'J11A1',
        isCorrect: true,
      },
      {
        id: 'rad_J11A2',
        text: 'De la familia.',
        value: 'J11A2',
        isCorrect: false,
      },
      {
        id: 'rad_J11A3',
        text: 'De las flores.',
        value: 'J11A3',
        isCorrect: false,
      },
    ],
  },
  juego_12: {
    pregunta_a: [
      {
        id: 'rad_J12A1',
        text: 'por desarrollar',
        value: 'J12A1',
        isCorrect: true,
      },
      {
        id: 'rad_J12A2',
        text: 'por desarrollar',
        value: 'J12A2',
        isCorrect: false,
      },
      {
        id: 'rad_J12A3',
        text: 'por desarrollar',
        value: 'J12A3',
        isCorrect: false,
      },
    ],
    pregunta_b: [
      {
        id: 'rad_J12B1',
        text: 'por desarrollar',
        value: 'J12B1',
        isCorrect: true,
      },
      {
        id: 'rad_J12B2',
        text: 'por desarrollar',
        value: 'J12B2',
        isCorrect: false,
      },
      {
        id: 'rad_J12B3',
        text: 'por desarrollar',
        value: 'J12B3',
        isCorrect: false,
      },
    ],
  },
  juego_13: {
    pregunta_a: [
      {
        id: 'rad_J13A1',
        text: 'gato.',
        value: 'J13A1',
        isCorrect: true,
      },
      {
        id: 'rad_J13A2',
        text: 'Liebre.',
        value: 'J13A2',
        isCorrect: false,
      },
      {
        id: 'rad_J13A3',
        text: 'Ardilla.',
        value: 'J13A3',
        isCorrect: false,
      },
    ],
    pregunta_B: [
      {
        id: 'rad_J13B1',
        text: 'Se arrastra y come carne.',
        value: 'J13B1',
        isCorrect: true,
      },
      {
        id: 'rad_J13B2',
        text: 'Vuela y pone huevos',
        value: 'J13B2',
        isCorrect: false,
      },
      {
        id: 'rad_J13B3',
        text: 'Es saltarina y le gusta los vegetales.',
        value: 'J13B3',
        isCorrect: false,
      },
    ],
  },
  juego_14: {
    pregunta_a: [
      {
        id: 'rad_J14A1',
        text: 'Televisor, foco y refrigerador.',
        value: 'J14A1',
        isCorrect: true,
      },
      {
        id: 'rad_J14A2',
        text: 'Tetera, foco y televisor.',
        value: 'J14A2',
        isCorrect: false,
      },
      {
        id: 'rad_J14A3',
        text: 'Lavadora, foco y ropero',
        value: 'J14A3',
        isCorrect: false,
      },
    ],
    pregunta_B: [
      {
        id: 'rad_J14B1',
        text: 'Agarrarlos.',
        value: 'J14B1',
        isCorrect: true,
      },
      {
        id: 'rad_J14B2',
        text: 'Electricidad.',
        value: 'J14B2',
        isCorrect: false,
      },
      {
        id: 'rad_J14B3',
        text: 'Fuego.',
        value: 'J14B3',
        isCorrect: false,
      },
    ],
  },
  juego_15: {
    pregunta_a: [
      {
        id: 'rad_J15A1',
        text: 'Mi amiga Milagros',
        value: 'J15A1',
        isCorrect: true,
      },
      {
        id: 'rad_J15A2',
        text: 'El Señor de los Milagros',
        value: 'J15A2',
        isCorrect: false,
      },
      {
        id: 'rad_J15A3',
        text: ' El milagro del Señor',
        value: 'J15A3',
        isCorrect: false,
      },
    ],
    pregunta_b: [
      {
        id: 'rad_J15B1',
        text: 'Un señor llevando una imagen del Señor de los Milagros.',
        value: 'J15B1',
        isCorrect: true,
      },
      {
        id: 'rad_J15B2',
        text: 'Un señor que está abrazando una almohada.',
        value: 'J15B2',
        isCorrect: false,
      },
      {
        id: 'rad_J15B2',
        text: 'Un señor que está llorando porque está rota su imagen',
        value: 'J15B2',
        isCorrect: false,
      },
    ],
    pregunta_c: [
      {
        id: 'rad_J15B1',
        text: 'Escribe tu respuesta',
        value: 'J15B1',
        isCorrect: true,
      },
    ],
  },
  juego_16: {
    pregunta_a: [
      {
        id: 'rad_J16A1',
        text: '¡Feliz día del niño peruano!',
        value: 'J16A1',
        isCorrect: true,
      },
      {
        id: 'rad_J16A2',
        text: '¡Feliz día de la canción criolla!',
        value: 'J16A2',
        isCorrect: false,
      },
      {
        id: 'rad_J16A3',
        text: '¡Feliz día de la guitarra!',
        value: 'J16A3',
        isCorrect: false,
      },
    ],
    pregunta_b: [
      {
        id: 'rad_J16B1',
        text: 'Que empiece la fiesta.',
        value: 'J16B1',
        isCorrect: true,
      },
      {
        id: 'rad_J16B2',
        text: 'Que empiece el problema',
        value: 'J16B2',
        isCorrect: false,
      },
      {
        id: 'rad_J16B3',
        text: 'Que empiece el cumpleaños del Perú.',
        value: 'J16B3',
        isCorrect: false,
      },
    ],
  },
  juego_17: {
    pregunta_a: [
      {
        id: 'rad_J17A1',
        text: 'Por desarrollar',
        value: 'J17A1',
        isCorrect: true,
      },
      {
        id: 'rad_J17A2',
        text: 'Por desarrollar',
        value: 'J17A2',
        isCorrect: false,
      },
      {
        id: 'rad_J17A3',
        text: 'Por desarrollar',
        value: 'J17A3',
        isCorrect: false,
      },
    ],
  },
  juego_18: {
    pregunta_a: [
      {
        id: 'rad_J18A1',
        text: 'De la paloma.',
        value: 'J18A1',
        isCorrect: false,
      },
      {
        id: 'rad_J18A2',
        text: 'Del cóndor.',
        value: 'J18A2',
        isCorrect: true,
      },
      {
        id: 'rad_J18A3',
        text: 'Del flamenco.',
        value: 'J18A3',
        isCorrect: false,
      },
    ],
    pregunta_b: [
      {
        id: 'rad_J18B1',
        text: ' Están destruyendo su hábitat',
        value: 'J18B1',
        isCorrect: true,
      },
      {
        id: 'rad_J18B2',
        text: 'Ya no existen en el Perú. ',
        value: 'J18B2',
        isCorrect: false,
      },
      {
        id: 'rad_J18B3',
        text: 'Ya no vive en los andes.',
        value: 'J18B3',
        isCorrect: false,
      },
    ],
  },
  juego_19: {
    pregunta_a: [
      {
        id: 'rad_J19A1',
        text: 'Está jugando.',
        value: 'J19A1',
        isCorrect: true,
      },
      {
        id: 'rad_J19A2',
        text: 'Está escribiendo.',
        value: 'J19A2',
        isCorrect: false,
      },
      {
        id: 'rad_J19A3',
        text: 'Está caminando.',
        value: 'J19A3',
        isCorrect: false,
      },
    ],
    pregunta_b: [
      {
        id: 'rad_J19B1',
        text: 'Porque no tiene casa.',
        value: 'J19B1',
        isCorrect: true,
      },
      {
        id: 'rad_J19B2',
        text: 'Porque no tiene luz en casa.',
        value: 'J19B2',
        isCorrect: false,
      },
      {
        id: 'rad_J19B3',
        text: 'Porque llegó tarde a su casa.',
        value: 'J19B3',
        isCorrect: false,
      },
    ],
  },
  juego_20: {
    pregunta_a: [
      {
        id: 'rad_J20A1',
        text: 'En desarrollo',
        value: 'J20A1',
        isCorrect: true,
      },
      {
        id: 'rad_J20A2',
        text: 'En desarrollo',
        value: 'J20A2',
        isCorrect: false,
      },
      {
        id: 'rad_J20A3',
        text: 'En desarrollo',
        value: 'J20A3',
        isCorrect: false,
      },
    ],
  },
})

export const getters = {
  getAnswersByParentAndQuestion: state => (parent, question) => {
    // console.log(parent, state[parent]['pregunta_a'])
    if (!parent || !question) return []
    // shuffle with sort
    if (state[parent][question]) {
      const options = Array.from(state[parent][question])
      return shuffleArray(options)
    }
    return []
  },
}

export const mutations = {
  toggle(state, todo) {
    todo.done = !todo.done
  },
}
