const express = require('express');
const router = express.Router();   

const contactsController = require('../controllers/players');
const validation = require('../middleware/validate');
const {isAuthenticated} = require("../middleware/authenticate")

router.get('/', contactsController.getAllPlayers);
router.post('/',isAuthenticated, validation.savePlayer, contactsController.createPlayer);  
router.put('/:id',isAuthenticated, validation.savePlayer, contactsController.updatePlayers);
router.delete('/:id',isAuthenticated, contactsController.deletePlayer);
    
module.exports = router;    