
//Done Create methods for constructor, and rendering the image to the page

import imageService from "../Services/ImageService.js";
import { ProxyState } from "../AppState.js";

function _drawbg(){
  document.body.style.backgroundImage = `url("${ProxyState.activeimage}")`
}
//      (you may wish to set it as a background image: https://www.w3schools.com/JSREF/prop_style_backgroundimage.asp)
export default class ImageController {
  
   constructor(){
     this.getimage()
     ProxyState.on('activeimage', _drawbg)
   }

  getimage(){
    try {
      
      imageService.getimage()
    } catch (error) {
      console.error(error)
    }
    
  }
}

