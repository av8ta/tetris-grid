import { element, renderer } from 'swiss'
import { html, render } from 'lit-html'
import './S-tetromino'
import './L-tetromino'
import './Z-tetromino'

const component = element => {
  console.log(element)
  console.dir(element)

  return html`
    <style>
      :host {
        display: grid;
        margin: auto;
        width: calc(10 * var(--cube-size));
        height: calc(22 * var(--cube-size));
        grid-template-columns: repeat(10, [x-start] var(--cube-size));
        grid-template-rows: repeat(22, [y-start] var(--cube-size));
        border: 1px solid rgba(0, 0, 65, 0.671);
      }
    </style>
    
    <z-tetromino id="1" x="3" y="17" deg="0"></z-tetromino>
    <l-tetromino id="2" x="3" y="18" deg="0"></l-tetromino>
    <s-tetromino class="dafuq" id="test" x="3" y="21" deg="0"></s-tetromino>
  `
}

element('tetris-playfield', component, renderer(render), { shadow: 'open' })
