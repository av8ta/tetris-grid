import { element, renderer } from 'swiss'
import { html, render } from 'lit-html'
import './tetris-playfield'

const state = {
  id: 0,
  inPlay: {
    id: null,
    tetromino: {}
  },
  tetrominoes: []
}

window.gameState = state

const component = element => {
  // console.log(element)
  // console.dir(element)

  // tetromino names
  // I, O, T, S, Z, J, L
  return html`
    <template id="z">
      <z-tetromino x="5" y="1" deg="0"></z-tetromino>
    </template>
    <tetris-playfield></tetris-playfield>
  `
}

element('tetris-game', component, renderer(render))
