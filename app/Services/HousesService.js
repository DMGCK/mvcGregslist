import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";

class HousesService {
  constructor() {

  }
  createHouse(houseData) {
    console.log('hey im trying to create a new house', houseData); 
    
    let newHome = new House(houseData)

    console.log(newHome); 
    ProxyState.houses = [...ProxyState.houses, newHome]
    
  }

  deleteHouse(id) {
    ProxyState.houses = ProxyState.houses.filter(h => h.id != id)
    
  }
}

export const housesService = new HousesService()