import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { Job } from "./Models/Job.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
  /** @type {import('./Models/Car').Car[]} */
  cars = [
    new Car({make: 'Chevrolet', model: 'Impala', description:'It balla', price: 10, year: 1964, color: '#000', imgUrl: 'https://m.media-amazon.com/images/I/51IpgyJ3GmL._AC_SX466_.jpg'}),
    new Car({make: 'Buick', model: 'Grand National', description: 'It is grand', price:15, year: 1984, color:'#ff0000', imgUrl:'http://www.deansgarage.com/wp-content/uploads/GNpropsals.jpg'})
  ]

  /** @type {import('./Models/House').House[]} */
  houses = [
    new House({footage: 23452345, bedrooms: 3234, bathrooms: 1, price: 2345893452345, address: '234 First House Street'})
  ]
  /** @type {import('./Models/Job').Job[]} */

  jobs = [
    new Job({
      name: 'programmer',
      pay: '.50 / Hour',
      requirements: 'typing skills, brain',
      employer: 'everyone',
      imgUrl: 'https://learnworthy.net/wp-content/uploads/2019/10/10-things-every-programmer-should-know.jpg?ezimgfmt=ng%3Awebp%2Fngcb12%2Frs%3Adevice%2Frscb12-1'
    })
  ];
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
