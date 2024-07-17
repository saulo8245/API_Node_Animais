const Pet = require('../models/Pet');

exports.createPet = async (req, res) => {
  const { name, photo, address } = req.body;
  try {
    const pet = new Pet({ name, photo, address, user: req.user.id });
    await pet.save();
    res.status(201).json({ message: 'Pet created successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPets = async (req, res) => {
  try {
    const pets = await Pet.find().populate('user', 'username');
    res.json(pets);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPetById = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id).populate('user', 'username');
    if (!pet) {
      return res.status(404).json({ message: 'Pet not found' });
    }
    res.json(pet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updatePet = async (req, res) => {
  try {
    const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!pet) {
      return res.status(404).json({ message: 'Pet not found' });
    }
    res.json(pet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deletePet = async (req, res) => {
  try {
    const pet = await Pet.findByIdAndDelete(req.params.id);
    if (!pet) {
      return res.status(404).json({ message: 'Pet not found' });
    }
    res.json({ message: 'Pet deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
