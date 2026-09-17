const express = require('express');
const router = express.Router();   

const contactsController = require('../controllers/games');

router.get('/', contactsController.getAllGames);
router.post('/', contactsController.createGame);  
router.put('/:id', contactsController.updateGames);
router.delete('/:id', contactsController.deleteGames);
    
module.exports = router;    