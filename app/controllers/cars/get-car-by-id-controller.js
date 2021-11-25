const { findCarById } = require("../../repositories/cars-repository");


function getCarByid( req, res ){
    const { id } = req.params;
    
    const car = findCarById(id);

    if( !car){
        return res.status(404).json({ message: "Car not found" });
        
    }

    return res.status(200).json({ car: car});
}

module.exports = getCarByid;
