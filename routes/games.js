const express = require('express');
const router = express.Router();   

const contactsController = require('../controllers/games');
const validation = require('../middleware/validate');
const {isAuthenticated} = require("../middleware/authenticate")

router.get('/', contactsController.getAllGames);
router.post('/',isAuthenticated, validation.saveGame, contactsController.createGame);  
router.put('/:id',isAuthenticated, validation.saveGame, contactsController.updateGames);
router.delete('/:id',isAuthenticated, contactsController.deleteGames);
    
module.exports = router;    