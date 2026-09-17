const express = require('express');
const router = express.Router();   

const contactsController = require('../controllers/players');

router.get('/', contactsController.getAllPlayers);
router.post('/', contactsController.createPlayer);  
router.put('/:id', contactsController.updatePlayers);
router.delete('/:id', contactsController.deletePlayer);
    
module.exports = router;    