import { element, renderer } from 'swiss'
import { html, render } from 'lit-html'
import tile from './tetris-tile'

const component = element => {
  const {x,y,deg} = element
 
  return html`
    <style>
      :host {
        display: grid;
        grid-column-start: ${x};
        grid-row-start: ${y};
        
        grid-template-columns: repeat(4, [x-start] var(--cube-size));
        grid-template-rows: repeat(4, [y-start] var(--cube-size));
        grid-template-areas:  "😎 . . ."
                              "😎 😛 . ."
                              ".  😛 . ."
                              ". . . .";
        background: var(--s);
        color: var(--s);
        transform: rotateZ(${deg+90}deg);
      }
      
    </style>
    ${tile}
  `
}

element('s-tetromino', component, renderer(render), { observedAttributes: ['x','y','deg'], shadow: 'open' })
