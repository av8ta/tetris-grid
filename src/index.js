import { element, renderer } from 'swiss'
import { html, render } from 'lit-html'
import './components/tetris-game'

const app = () => {
  return html`
    <h1>swiss web components with lit-html rendering</h1>
    <tetris-game></tetris-game>
  `
}

element('swiss-tetris', app, renderer(render))
