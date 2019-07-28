import { element, renderer } from 'swiss'
import { html, render } from 'lit-html'
import tile from './tetris-tile'

import { useState } from 'swiss/hooks'
import move from '../move'

const component = element => {
  const {x,y,deg} = element

  const [xPos, setX] = useState(x)
  const [yPos, setY] = useState(y)
  const [degPos, setDeg] = useState(deg)
  
  element.attributeChangedCallback = move({element, setX, setY, setDeg})

  return html`
    <style>
      :host {
        display: grid;
        grid-column-start: ${xPos};
        grid-row-start: ${yPos};
        
        grid-template-columns: repeat(4, [x-start] var(--cube-size));
        grid-template-rows: repeat(4, [y-start] var(--cube-size));
        grid-template-areas:  "😎 . . ."
                              "😎 😛 . ."
                              ".  😛 . ."
                              ". . . .";
        background: var(--s);
        color: var(--s);
        transform-origin: var(--cube-size) var(--cube-size);
        transform: rotateZ(${degPos}deg);
      }
      
    </style>
    ${tile}
  `
}

element('s-tetromino', component, renderer(render), { observedAttributes: ['x','y','deg'], shadow: 'open' })
