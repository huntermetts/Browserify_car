/*
    Author: your name here
    Name: main.js
    Purpose: Entry point of our application
*/

// Importing of functions:
import createCar from "./createCar"
import createGarage from "./createGarage"

// Creating cars using the function you imported:
const mustang = createCar("Ford", "Mustang")
const accord = createCar("Honda", "Accord")
const santafe = createCar("Hyundai", "Santa Fe")
const sierra = createCar("GMC", "Sierra")
const denali = createCar("GMC", "Denali")

// Make a new garage and store cars in it
const garage = createGarage() //Remember, this function return an object
garage.store(mustang)
garage.store(accord)
garage.store(santafe)
garage.store(sierra)
garage.store(denali)

console.table(garage.getInventory())
console.table(garage.retrieve(sierra))
console.table(garage.retrieve(denali))