import { element, renderer } from 'swiss'
import { html, render } from 'lit-html'
import { useState } from 'swiss/hooks'

const component = (element) => {
  console.log(element)
  const [count, setCount] = useState(0)
  
  return html`
    <h5>swiss-tetris web component!!</h5>
    <button @click="${() => setCount(count + 1)}">clicked me ${count} times!</button>
  `
}

element('tetris-game', component, renderer(render))
