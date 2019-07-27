import { element, renderer } from 'swiss'
import { html, render } from 'lit-html'
import './tetris-playfield'

const component = element => {
  console.log(element)
  console.dir(element)
  
  // tetromino names
  // I, O, T, S, Z, J, L
  return html`
    <tetris-playfield></tetris-playfield>
  `
}

element('tetris-game', component, renderer(render))

{/* <s-tetromino class="o">O</s-tetromino>
<s-tetromino class="t">T</s-tetromino>
<s-tetromino class="s">S</s-tetromino>
<s-tetromino class="z">Z</s-tetromino>
<s-tetromino class="j">J</s-tetromino> */}