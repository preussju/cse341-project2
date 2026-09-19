const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAllGames = async (req, res) => { 
        //#swagger.tags=['Games']
    const result = await mongodb.getDatabase().db().collection('games').find();
    result.toArray().then((games) => { 
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(games);
    });
}

const createGame = async (req, res) => {
            //#swagger.tags=['Games']
    const game = {
        title: req.body.title,
        platform: req.body.platform,
        genre: req.body.genre,
        developer: req.body.developer,
        releaseYear: req.body.releaseYear,
        rating: req.body.rating,
        completed: req.body.completed,
        hoursPlayed: req.body.hoursPlayed
    };
    const result = await mongodb.getDatabase().db().collection('games').insertOne(game);
    if (result.acknowledged) {
        res.status(204).send();
    } else { 
    res.status(500).json(result.error || "Some error ocurred while creating the game.")
    }
};

const updateGames = async (req, res) => {
            //#swagger.tags=['Games']
    const userId = new ObjectId(req.params.id);
    const game = {
        title: req.body.title,
        platform: req.body.platform,
        genre: req.body.genre,
        developer: req.body.developer,
        releaseYear: req.body.releaseYear,
        rating: req.body.rating,
        completed: req.body.completed,
        hoursPlayed: req.body.hoursPlayed
    };
    const result = await mongodb.getDatabase().db().collection('games').replaceOne({ _id: userId },game);
    if (result.modifiedCount > 0) {
        res.status(204).send();
    } else { 
    res.status(500).json(result.error || "Some error ocurred while updating the game.")
    }
};

const deleteGames = async (req, res) => {
            //#swagger.tags=['Games']
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('games').deleteOne({ _id: userId });
    if (result.deletedCount > 0) {
        res.status(204).send();
    } else { 
    res.status(500).json(result.error || "Some error ocurred while deleting the game.")
    }
};


module.exports = {
    getAllGames,
    createGame,
    updateGames,
    deleteGames
};  