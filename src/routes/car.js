const express = require("express")
const carSchema = require("../models/car")
const router = express.Router();

//create car
router.post('/cars', (req, res) => {
  try {
    const car = carSchema(req.body);
    car.save();
    res.status(201).json(car);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


//getCars
router.get('/cars', (req, res) => {
  carSchema.find().then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


//updateCars
router.put('/cars/:id', (req, res) => {
  const { id } = req.params;
  const { platenumber, brand, state, dailyvalue } = req.body;
  carSchema.updateOne({ _id: id }, { $set: { platenumber, brand, state, dailyvalue } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));

});


//deleteCars
router.delete('/cars/:id', (req, res) => {
  const { id } = req.params;
  carSchema.findByIdAndDelete({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


module.exports = router;