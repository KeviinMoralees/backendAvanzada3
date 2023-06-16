const express = require("express")
const returncarSchema = require("../models/returncar")

const router = express.Router();



//get all return-cars
router.get('/return-cars', async (req, res) => {
    try {
      const returnCars = await returncarSchema.find();
  
      res.json(returnCars);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las devoluciones de autos' });
    }
  });

//create return-cars
router.post('/return-cars', async (req, res) => {
    const { returnnumber, rentnumber, returndate } = req.body;

    try {
        const returnCar = returncarSchema({
            returnnumber,
            rentnumber,
            returndate
        });

        await returnCar.save();

        res.json({ message: 'Ítem de devolución de auto creado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el ítem de devolución de auto' });
    }
});


module.exports = router;
