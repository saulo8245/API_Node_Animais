const express = require('express');
const { createPet, getPets, getPetById, updatePet, deletePet } = require('../controllers/petController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/')
  .post(protect, createPet)
  .get(getPets);

router.route('/:id')
  .get(getPetById)
  .put(protect, updatePet)
  .delete(protect, deletePet);

module.exports = router;
