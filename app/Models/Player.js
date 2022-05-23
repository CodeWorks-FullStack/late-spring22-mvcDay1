import { Pop } from "../Utils/Pop.js"



 export class Player{
// NOTE the constructor builds an INSTANCE of the class
// NOTE the 'isAlive = true' acts as a default value if isAlive is not passed in the 'new' creation
  constructor(name, teamName, isAlive = true){
    this.name = name
    this.teamName = teamName
    this.score = 0
    this.isAlive = isAlive
  }

  playerScore(){
    this.score++
    if(this.score > 9){
      Pop.toast(`${this.name} just won the game for the ${this.teamName}s, what a time to ${this.isAlive ? 'be alive': 'go out with a bang!'}`)
    }
  }

  get Template(){
   return  `
 <div class="col-6 bg-primary rounded shadow text-center p-3">
  <h2>${this.name}</h2>
  <h2>${this.teamName}</h2>
  <h2>${this.score}</h2>
  <button class="btn btn-dark" onclick="app.playersController.playerScore('${this.name}')">Score point</button>
 </div>
   `
  }
}