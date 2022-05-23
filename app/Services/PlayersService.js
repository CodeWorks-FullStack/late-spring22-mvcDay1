import { ProxyState } from "../AppState.js";




class PlayersService{
  playerScore(name) {
    // let players = ProxyState.players
    let player = ProxyState.players.find(p => p.name == name)
    // player.score++
    player.playerScore()
    console.log('found and scored', player);
  }

}

export const playersService = new PlayersService()