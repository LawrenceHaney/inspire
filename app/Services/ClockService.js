
class ClockService {
  runClock(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    m = this.modTime(m);
    s = this.modTime(s);
    let template = 
    h + ":" + m + ":" + s;
    return template


  }
  modTime(i){
    if (i <10)  {i = "0" + i}
    return i
  }

}

const clockService = new ClockService

export default clockService;