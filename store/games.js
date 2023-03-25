export const state = () => ({
  games: {
    1: {
      title: 'Rompecabezas',
      type: 'puzzle',
      props: {
        imageUrl:
          'https://github.com/JeanleeRoy/web_activab/blob/dev/assets/img/0.jpg?raw=true',
      },
    },
    2: {
      type: 'maze',
      props: {
        avatarImage: 'https://cdn-icons-png.flaticon.com/512/1683/1683769.png',
        goalImage: 'https://cdn-icons-png.flaticon.com/512/1775/1775888.png',
      },
    },
    3: {
      title: 'Juego de Memoria',
      type: 'memory',
      props: {
        title: 'Relaciona cada imagen con su nombre',
        pairs: 3,
        initialTime: 3000,
        cards: [
          { img: 'lectura_3/game/ingeniero.jpg', tag: 1 },
          { img: 'lectura_3/game/maestro.jpg', tag: 2 },
          { img: 'lectura_3/game/medico.jpg', tag: 3 },
          { img: 'lectura_3/game/ingeniero_text.jpg', tag: 1 },
          { img: 'lectura_3/game/maestro_text.jpg', tag: 2 },
          { img: 'lectura_3/game/medico_text.jpg', tag: 3 },
        ],
        coverImage: 'https://cdn-icons-png.flaticon.com/512/7186/7186917.png',
      },
    },
    4: {
      type: 'memory',
      props: {
        title: 'Relaciona cada artista con su nombre',
        pairs: 3,
        initialTime: 3000,
        cards: [
          { img: 'lectura_4/a.jpg', tag: 1 },
          { img: 'lectura_4/b.jpg', tag: 2 },
          { img: 'lectura_4/c.jpg', tag: 3 },
          { img: 'lectura_4/a.jpg', tag: 1 },
          { img: 'lectura_4/b.jpg', tag: 2 },
          { img: 'lectura_4/c.jpg', tag: 3 },
        ],
        coverImage: 'https://cdn-icons-png.flaticon.com/512/7186/7186926.png',
      },
    },
    5: {
      title: 'Arma el rompecabezas',
      type: 'puzzle',
      props: {
        imageUrl:
          'https://github.com/JeanleeRoy/web_activab/blob/dev/assets/lectura_5/Batalla_de_junin.jpg?raw=true',
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
