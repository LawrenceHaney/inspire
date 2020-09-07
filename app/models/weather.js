export default class Weather {
  constructor(data) {
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //DONE You should convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = data.main.temp
    this.fahrenheit = this.ktoF(this.kelvin)
    this.celsius = this.ktoC(this.kelvin)
    this.condtions = data.weather[0].description
    this.temptoggle = false
  }

ktoF(K){
  let res = Math.floor((K * 1.8) - 459.67)
  return res
}  

ktoC(K){
  return Math.floor(K-273.15)
}
get Template(){
  if(this.temptoggle == false){

    return `
    <div class="card row">
    <div>${this.city}</div>
    <div onclick="app.weatherController.toggleTemp()">${this.fahrenheit} F</div>
    <div>${this.condtions}</div>
    </div>
    `
  }
  return `
    <div class="card row">
    <div>${this.city}</div>
    <div onclick="app.weatherController.toggleTemp()">${this.celsius} C</div>
    <div>${this.condtions}</div>
    </div>
    `
}

}