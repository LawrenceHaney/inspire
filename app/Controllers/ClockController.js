import clockService from "../Services/ClockService.js";

function _drawClock(){
  document.getElementById("clock").innerHTML = clockService.runClock()

}
export default class ClockController {
  constructor(){
    _drawClock()
    setInterval(_drawClock, 500);
  }

}

