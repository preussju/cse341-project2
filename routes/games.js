const express = require('express');
const router = express.Router();   

const contactsController = require('../controllers/games');

router.get('/', contactsController.getAllGames);

router.post('/', contactsController.createGame);  
    
module.exports = router;    