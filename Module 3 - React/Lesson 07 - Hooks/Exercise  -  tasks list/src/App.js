import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">

        <main class="container">
          <h3 class="app__title">Lista de tareas</h3><ul class="list"><li class="list__item"><div class="list__item--details done"><input class="list__item--check" type="checkbox" name="task" id="task" checked=""><label class="list__item--subject" for="t1">Atender clase Hooks</label><span class="list__item--dueTo hurry">10nov</span></div></li><li class="list__item"><div class="list__item--details pending"><input class="list__item--check" type="checkbox" name="task" id="task"><label class="list__item--subject" for="t1">Comer</label><span class="list__item--dueTo hurry">10nov</span></div></li><li class="list__item"><div class="list__item--details pending"><input class="list__item--check" type="checkbox" name="task" id="task"><label class="list__item--subject" for="t1">Estudiar para la ev</label><span class="list__item--dueTo ontime">11nov</span></div></li><li class="list__item"><div class="list__item--details pending"><input class="list__item--check" type="checkbox" name="task" id="task"><label class="list__item--subject" for="t1">Hacer el vídeo de Kizzy</label><span class="list__item--dueTo ontime">15nov</span></div></li></ul><section class="new__fill"><input class="new__fill--subject" type="text" name="subject" id="subject" value=""><input class="new__fill--dueTo" type="text" name="date" id="date" value=""><div><button class="new__fill--button">Añadir tarea</button></div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
