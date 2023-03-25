export const state = () => ({
  games: {
    1: {
      title: 'Rompecabezas',
      type: 'puzzle',
      props: {
        imageUrl:
          'https://github.com/JeanleeRoy/web_activab/blob/dev/assets/lectura_2/pregunta_3.jpg?raw=true',
      },
    },
    2: {
      title: 'Juego de Memoria',
      type: 'memory',
      props: {
        title: 'Juego de Memoria',
        pairs: 4,
        cards: [
          {
            img: 'https://static.vecteezy.com/system/resources/previews/010/787/478/original/vintage-television-cartoon-illustration-vector.jpg',
            tag: 1,
          },
          { img: 'lectura_11/2.jpg', tag: 2 },
          { img: 'lectura_11/3.jpg', tag: 3 },
          { img: 'lectura_11/4.jpg', tag: 4 },
          { img: 'https://llevatilde.es/imagetexts/6/61/TELEVISI%C3%93N.png', tag: 1 },
          { img: 'lectura_11/2.jpg', tag: 2 },
          { img: 'lectura_11/3.jpg', tag: 3 },
          { img: 'lectura_11/4.jpg', tag: 4 },
        ],
        coverImage: 'https://cdn-icons-png.flaticon.com/512/7186/7186917.png',
      },
    },
    3: {
      type: 'maze',
      props: {
        avatarImage: 'https://cdn-icons-png.flaticon.com/512/1683/1683769.png',
        goalImage: 'https://cdn-icons-png.flaticon.com/512/1775/1775888.png',
      },
    },
  },
})

export const getters = {
  getGame: state => gameId => {
    return state.games[gameId]
  },
}

export const mutations = {}

export const actions = {}
