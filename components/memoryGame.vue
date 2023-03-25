<template>
  <div
    v-if="cards.length"
    class="game_board grid-cols-2"
    :class="`md:grid-cols-${cardsByRow}`"
  >
    <template v-for="(row, rowIndex) in board">
      <div class="card" v-for="(col, colIndex) in row" :key="col.id">
        <img
          v-if="col.status === 0"
          :src="getImgUrl(coverImage)"
          class="game-asset"
          :class="{ 'cursor-pointer': col.status === 0 }"
          v-on:click="showImage(rowIndex, colIndex)"
        />
        <img :src="getImgUrl(col.img)" v-if="col.status === 1" class="game-asset" />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'GameBoard',
  emits: ['completed'],
  props: {
    pairs: {
      type: Number,
      default: 4,
    },
    cards: {
      type: Array,
      default: () => [],
    },
    coverImage: {
      type: String,
      default: 'img/a.jpg',
    },
    initialHintTime: {
      type: Number,
      default: 1200,
    },
  },
  mounted() {
    if (this.cards) {
      this.newGame()
      this.showHint()
    }
  },
  computed: {
    cardsByRow() {
      return this.pairs || 4
    },
  },
  methods: {
    // start new game
    newGame: function () {
      this.move = 0
      this.board = []
      this.left = this.pairs - 1
      this.hintLeft = 3
      this.startTime = new Date().getTime()
      let arr = this.createArray()
      this.createBoard(arr)
      this.loop = setInterval(this.calculateTime, 1000)
    },

    // a function to calculate elapsed time
    calculateTime: function () {
      let currentTime = new Date().getTime()
      let elapsed = (currentTime - this.startTime) / 1000
      this.elapsedTime = {
        day: Math.floor(elapsed / 86400),
        hour: Math.floor((elapsed / 3600) % 24),
        minute: Math.floor((elapsed / 60) % 60),
        second: Math.floor(elapsed % 60),
      }
    },

    // getting card image from the assets directory or external url
    getImgUrl: function (img) {
      // external img
      if (img.match(/^(http|https):\/\//)) return img
      // local img
      return require(`~/assets/${img}`)
    },

    // creates card array and suffle items
    createArray: function () {
      // before: let arr = [1, 2, 3, 4, 1, 2, 3, 4]
      let arr = this.cards?.length ? this.cards : []
      // console.log(arr)
      // let's suffle the array
      arr = this.suffleArray(arr)
      return arr
    },

    // generate board items from the array
    createBoard: function (array) {
      const nCols = this.pairs || 4
      let newBoard = Array.from(Array(2), () => new Array(nCols))
      for (let i = 0; i < array.length; i++) {
        let row = Math.floor(i / nCols)
        newBoard[row][i % nCols] = {
          img: array[i].img,
          tag: array[i].tag,
          status: 0,
          id: i,
        }
      }
      this.board = newBoard
    },

    // a function to suffle array
    suffleArray: function (array) {
      let currentIndex = array.length
      let temp, randomIndex
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1
        // swap elements
        temp = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temp
      }
      return array
    },

    // compare and decide if the picked cards are equal or not
    compareImages: function (current) {
      return current.tag === this.prev.tag
    },

    // decides if the game is over
    isGameEnd: function () {
      // console.log(this.left)
      if (this.left === 0) {
        // console.log('game is over')
        clearInterval(this.loop)
        setTimeout(() => {
          this.$emit('completed', true)
        }, 500)
        // if (returnedValue === true) this.newGame()
      }
    },

    // show the selected card image
    showImage: function (currentRowIndex, currentColIndex) {
      if (this.lock === true) return
      this.move += 1
      const current = this.board[currentRowIndex][currentColIndex]
      current.status = 1
      if (this.move % 2 === 1) {
        // if there is a one selected card set it to prev
        this.prev = this.board[currentRowIndex][currentColIndex]
      } else if (this.compareImages(current)) {
        // selected two cards are equal to each other so hide them
        this.lock = true
        setTimeout(() => {
          current.status = 2
          this.prev.status = 2
          this.left -= 1
          this.lock = false
        }, 1200)
        // check if the game is over
        this.isGameEnd()
      } else {
        // selected cards are not eqaul to each other so hide them after 0.5 seconds
        setTimeout(
          function (current, prev) {
            current.status = 0
            prev.status = 0
          },
          500,
          current,
          this.prev,
        )
      }
    },

    // showing all cards on the screen
    showCards: function () {
      let turnedCards = []
      for (let i = 0; i < this.boardSize; i += 1) {
        for (let j = 0; j < this.cardsByRow; j += 1) {
          if (this.board[i][j].status !== 2) {
            turnedCards.push({ row: i, col: j })
            this.board[i][j].status = 1
          }
        }
      }
      return turnedCards
    },

    // hide the cards back
    hideCards: function (cards) {
      for (let i = 0; i < cards.length; i += 1) {
        this.board[cards[i].row][cards[i].col].status = 0
      }
    },

    // a little help for the player
    showHint: function () {
      if (this.hintLeft === 0 || this.left === 0) {
        return
      }
      this.hintLeft -= 1
      let turnedCards = this.showCards()
      // cards are showed now. After t seconds, hide the turned cards
      setTimeout(this.hideCards, this.initialHintTime, turnedCards)
    },
  },
  data() {
    return {
      move: null,
      left: null,
      boardSize: 2,
      board: null,
      prev: null,
      hintLeft: null,
      startTime: null,
      loop: null,
      lock: false,
      elapsedTime: {},
    }
  },
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.header {
  margin-bottom: 50px;
}

.game_board {
  margin: auto;
  display: grid;
  /* grid-template-columns: repeat(4, 1fr); */
  width: fit-content;
  gap: 25px;
  padding: 2rem;
  border-radius: 1rem;
  background-color: #42b983;
}
.card {
  width: 150px;
  height: 150px;
  background-image: url('../assets/img/check.png');
  background-size: contain;
  border-radius: 8px;
  overflow: hidden;
}
.game-asset {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: #2afe9f;
}
</style>
