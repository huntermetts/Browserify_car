/*
    Author: your name here
    Name: createCar.js
    Purpose: Produces a new car object
*/
const createCar = function(make, model) {
    // This creates an object:
    return {
        // 2 Properties below

        // Writing as a key value pair | Means the key and the value have the same name
        // Same as: "make": make
      make,
      model,
    
    //   2 methods
      makeString() {
          return `a ${this.make} ${this.model}`
      },
    
      drive (destination) {
          return `You drive ${this.makeString()} to ${destination}`
      }
    }
  }
//   exporting to browserfy
export default createCar;