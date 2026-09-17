const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAllPlayers = async (req, res) => { 
    const result = await mongodb.getDatabase().db().collection('players').find();
    result.toArray().then((players) => { 
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(players);
    });
}

const createPlayer = async (req, res) => {
    const player = {
        username: req.body.username,
        favoritePlatform: req.body.favoritePlatform,
        favoriteGenre: req.body.favoriteGenre,
        gamesCompleted: req.body.gamesCompleted
    };
    const result = await mongodb.getDatabase().db().collection('players').insertOne(player);
    if (result.acknowledged) {
        res.status(204).send();
    } else { 
        res.status(500).json(result.error || "Some error occurred while creating the player.");
    }
};

const updatePlayers = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const player = {
        username: req.body.username,
        favoritePlatform: req.body.favoritePlatform,
        favoriteGenre: req.body.favoriteGenre,
        gamesCompleted: req.body.gamesCompleted
    };
    const result = await mongodb.getDatabase().db().collection('players').replaceOne({ _id: userId },player);
    if (result.modifiedCount > 0) {
        res.status(204).send();
    } else { 
    res.status(500).json(result.error || "Some error ocurred while updating the player.")
    }
};

const deletePlayer = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('players').deleteOne({ _id: userId });
    if (result.deletedCount > 0) {
        res.status(204).send();
    } else { 
    res.status(500).json(result.error || "Some error ocurred while deleting the player.")
    }
};




module.exports = {
    getAllPlayers,
    createPlayer,
    updatePlayers,
    deletePlayer
};  