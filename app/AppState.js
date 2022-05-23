import { Player } from "./Models/Player.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  // NOTE gives intelisense to the rest of our project
  /** @type {import('./Models/Player').Player[]} */
  players = [new Player('James Not-James', 'The Capybaras'), new Player('Cameron', 'Gamestop', false)]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
