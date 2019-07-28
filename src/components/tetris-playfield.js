import { element, renderer } from 'swiss'
import { html, render } from 'lit-html'

import './S-tetromino'
import './L-tetromino'
import './Z-tetromino'

const width = 10
const height = 22
var inPlay

const component = element => {

  const shadow = element.shadowRoot
  // console.log(shadow);

  const moveDown = () => {
    if(inPlay) {
      let yPos = parseInt(inPlay.y, 10)
      if(yPos < height) {
        inPlay.y = yPos + 1
      } else {
        // clearInterval(intervalMove)
      }
    }
  }

  const spawn = (templateId) => {
    const template = document.getElementById(templateId).content
    // console.log(template);
    
    shadow.appendChild(template.cloneNode(true))
    const tetromino = shadow.lastElementChild
    // console.log('inPlay',inPlay);
    
    const state = window.gameState
    const id = state.id
    
    tetromino.setAttribute('id', id)
    
    state.tetrominoes.push(tetromino)
    state.inPlay = {
      tetromino,
      id
    }
    state.id += 1
    
    window.gameState = state

  }

  const intervalMove = window.setInterval(() => {
    moveDown()
  }, 200)

  const intervalSpawn = window.setInterval(() => {
    spawn('z')
  }, 4000)

  document.onkeydown = event => {
    event = event || window.event

    // inPlay = window.gameState.inPlay.tetromino
    inPlay = shadow.getElementById(window.gameState.inPlay.id)
    console.log('inPlay',inPlay);
    

    // hacky position checks - todo implement intersectionobserver
    if(event.key === 'ArrowLeft') {
      let xPos = parseInt(inPlay.x, 10)
      if(xPos > 1) {
        inPlay.x = xPos - 1
      }
      
    }
    if(event.key === 'ArrowRight') {
      let xPos = parseInt(inPlay.x, 10)
      if(xPos < width) {
        inPlay.x = xPos + 1
      } 
    }
    if(event.key === 'ArrowUp') {
      let degPos = parseInt(inPlay.deg, 10)
      inPlay.deg = degPos + 90
    }
  }

  return html`
    <style>
      :host {
        display: grid;
        margin: auto;
        width: calc(${width} * var(--cube-size));
        height: calc(${height} * var(--cube-size));
        grid-template-columns: repeat(${width}, [x-start] var(--cube-size));
        grid-template-rows: repeat(${height}, [y-start] var(--cube-size));
        border: 1px solid rgba(0, 0, 65, 0.671);
      }
    </style>
    
    <!-- <z-tetromino x="5" y="1" deg="0"></z-tetromino> -->
  `
}

element('tetris-playfield', component, renderer(render), { shadow: 'open' })
