export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //DONE You should convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = data.main.temp
    this.fahrenheit = this.ktoF(this.kelvin)
    this.celsius = this.ktoC(this.kelvin)
    this.condtions = data.weather
  }

ktoF(K){
  let res = Math.floor((K * 1.8) - 459.67)
  return res
}  

ktoC(K){
  return Math.floor(K-273.15)
}
get Template(){
  return `
  <div class="card row">
            <div>${this.city}</div>
            <div>${this.fahrenheit}</div>
            <div>${this.condtions[2]}</div>
        </div>
  `
}

}