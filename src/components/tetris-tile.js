import { html } from 'lit-html'

export default html`
  <style>
    .b {
      display: block;
      grid-area: 😎;
      background: inherit;
      color: inherit;
    }
    .c {
      grid-area: 😛;
      background: inherit;
      color: inherit;
    }
  </style>
  <div class="b"></div>
  <div class="c"></div>
  `
