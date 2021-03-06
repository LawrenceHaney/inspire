import { api } from "./AxiosService.js";
import { ProxyState } from "../AppState.js";

//DONE create methods to retrieve data and save to the State
class ImageService { 

  async getimage(){
    let res = await api.get('images')
    ProxyState.activeimage = res.data.url
  }
}

const imageService = new ImageService();
export default imageService;