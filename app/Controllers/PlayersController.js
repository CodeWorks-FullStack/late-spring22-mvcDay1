import { ProxyState } from "../AppState.js";
import { playersService } from "../Services/PlayersService.js";

// PRIVATE these are kept un-accessible cause they are not exported
let cheese = 0
function secretHello(){
  console.log('hello in secret');
}

function draw(){
  let players = ProxyState.players
  let template = ''
  // NOTE line 22 does the same as lines 13 through 21, the code has just been moved somewhere more appropriate
//   players.forEach(p => template += `
// <div class="col-6 bg-primary rounded shadow text-center p-3">
//   <h2>${p.name}</h2>
//   <h2>${p.teamName}</h2>
//   <h2>${p.score}</h2>
//   <button class="btn btn-dark" onclick="app.playersController.playerScore('${p.name}')">Score point</button>
// </div>
//   `)
  players.forEach(p => template += p.Template)
  document.getElementById('players').innerHTML = template
}

// PUBLIC these are what is given to the user to use
export class PlayersController{
  // NOTE constructor in the controller runs on load.
  constructor(){
    console.log('players controller loaded');
    draw()
  }

  mine(){
    cheese++
    console.log('mining', cheese);
    secretHello()
  }

  playerScore(name){
    playersService.playerScore(name)
    draw()
  }
}