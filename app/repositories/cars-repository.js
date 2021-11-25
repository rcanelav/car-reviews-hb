'use strict';

const cars = [
    {
        id: 1,
        brand: 'Seat',
        model: 'Ibiza',
        year: 2019,
        engine: 'Diesel',
        cv: 60,
    },
    {
        id: 2,
        brand: 'Seat',
        model: 'Toledo',
        year: 1990,
        engine: 'Diesel',
        cv: 120,
    }
];

function findAllCars(){
    // SELECT * FROM cars;
    return cars;
}

function findCarById(id){
    // SELECT * FROM cars WHERE id = ?;
    return cars.find(car => car.id === +id);
}

module.exports = {
    findAllCars,
    findCarById,
}