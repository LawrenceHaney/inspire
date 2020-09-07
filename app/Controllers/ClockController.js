import clockService from "../Services/ClockService.js";

function _drawClock(){
  let time = clockService.runClock()
document.getElementById("clock").innerHTML = `<h1 class = "text-light text-shadow clock-face">${time}</h1>`

}
export default class ClockController {
  constructor(){
    _drawClock()
    setInterval(_drawClock, 500);
  }

}

