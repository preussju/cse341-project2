const express = require('express');
const router = express.Router();   

const contactsController = require('../controllers/games');
const validation = require('../middleware/validate');

router.get('/', contactsController.getAllGames);
router.post('/', validation.saveGame, contactsController.createGame);  
router.put('/:id', validation.saveGame, contactsController.updateGames);
router.delete('/:id', contactsController.deleteGames);
    
module.exports = router;    