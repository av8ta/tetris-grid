import { useState } from 'swiss/hooks'

// bug - this hook isn't working todo

export function useLocalStorage(key, initialValue) {
  const [storedValue, setstoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      // parse stored json or return initialValue if not stored
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  // return a wrapped version of useState setter function 
  // that writes the new value to localstorage
  const setValue = value => {
    try {
      // value can be a function - same api as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value
      // save state
      setstoredValue(valueToStore)
      // save to localstorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      // todo handle the error case!
      console.error('ruhroh',error)
    }
  }

  return [storedValue, setValue]
}
