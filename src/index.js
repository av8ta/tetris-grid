import { element, renderer } from 'swiss'
import { html, render } from 'lit-html'
import './components/tetris-game'

const app = () => {
  return html`
    <tetris-game></tetris-game>
  `
}

element('swiss-tetris', app, renderer(render))
