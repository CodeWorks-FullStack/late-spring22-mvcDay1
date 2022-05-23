import { PlayersController } from "./Controllers/PlayersController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

// NOTE APP is the entry point into the application, it's what our index has access too
class App {
  valuesController = new ValuesController();

  playersController = new PlayersController();
}

window["app"] = new App();
