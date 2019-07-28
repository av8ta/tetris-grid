const attributeChangedCallback = ({element, setX, setY, setDeg}) => (name, oldValue, newValue) => {

  if(name === 'x') {
    setX(newValue)
  }
  if(name === 'y') {
    setY(newValue)    
  }
  if(name === 'deg') {
    setDeg(newValue)
  }
}

export default attributeChangedCallback
