import { ProxyState } from "../AppState.js";
import { Car } from "../Models/Car.js";


class CarsService {
  async getCars() {
    console.log('getting cars'); 
    const res = await axios.get('https://bcw-sandbox.herokuapp.com/api/cars');
    console.log('Getting Cars', res.data);
    ProxyState.cars = res.data.map(c => new Car(c))
  }
  async createCar(carData) {
    console.log('arrived at service un-damaged', carData);
    const res = await axios.post('https://bcw-sandbox.herokuapp.com/api/cars', carData);
    console.log('sending new car data', res.data);
    ProxyState.cars = [...ProxyState.cars, new Car(res.data)]
  }

  async updateCar(carData, id) {
    console.log(carData, id); 
    
  }
  deleteCar(id) {
    ProxyState.cars = ProxyState.cars.filter(c => c.id != id)
    ProxyState.cars = ProxyState.cars
  }

}

export const carsService = new CarsService()