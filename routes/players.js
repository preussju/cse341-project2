const express = require('express');
const router = express.Router();   

const contactsController = require('../controllers/players');
const validation = require('../middleware/validate');

router.get('/', contactsController.getAllPlayers);
router.post('/', validation.savePlayer, contactsController.createPlayer);  
router.put('/:id', validation.savePlayer, contactsController.updatePlayers);
router.delete('/:id', contactsController.deletePlayer);
    
module.exports = router;    