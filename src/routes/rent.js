const express = require("express")
const rentSchema = require("../models/rent")

const router = express.Router();

//create rent
router.post('/rents', async (req, res) => {
    const { rentnumber, username, platenumber, initialdate, finaldate, status } = req.body;

    try {
        const rent = rentSchema({
            rentnumber,
            username,
            platenumber,
            initialdate,
            finaldate,
            status
        });

        await rent.save();

        res.json({ message: 'Renta creada exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la renta' });
    }
});


//get all rents
router.get('/rents', async (req, res) => {
    try {
        const rents = await rentSchema.find();

        res.json(rents);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las rentas' });
    }
});


//get rent by id 
router.get('/rents/:rentnumber', async (req, res) => {
    const { rentnumber } = req.params;
  
    try {
      const rent = await rentSchema.findOne({ rentnumber });
  
      if (rent) {
        res.json(rent);
      } else {
        res.status(404).json({ error: 'Renta no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener la renta' });
    }
  });

  //actualizar renta by rentnumber 
router.put('/rents/:rentnumber', async (req, res) => {
    const { rentnumber } = req.params;
    const { username, platenumber, initialdate, finaldate, status } = req.body;
  
    try {
      const rent = await rentSchema.findOne({ rentnumber });
      if (rent) {
        rent.username = username;
        rent.platenumber = platenumber;
        rent.initialdate = initialdate;
        rent.finaldate = finaldate;
        rent.status = status;
  
        await rent.save();
  
        res.json(rent);
      } else {
        res.status(404).json({ error: 'Renta no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar la renta' });
    }
  });

module.exports = router;