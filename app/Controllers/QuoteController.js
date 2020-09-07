import { ProxyState } from "../AppState.js";
import quoteService from "../Services/QuoteService.js";

function _drawQuote(){
  document.getElementById("quote").innerHTML = ProxyState.quote.Template

}
//TODO Create methods for constructor, and rendering the quote to the page
export default class QuoteController { 
  constructor(){
    this.getQuote()
    ProxyState.on("quote", _drawQuote)
  }

  getQuote(){
    try {
      quoteService.getQuote()
      
    } catch (error) {
      console.error(error)
    }
  }
}