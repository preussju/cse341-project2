const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAllPlayers = async (req, res) => { 
            //#swagger.tags=['Players']
    const result = await mongodb.getDatabase().db().collection('players').find();
    result.toArray().then((players) => { 
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(players);
    });
}

const createPlayer = async (req, res) => {
    //#swagger.tags=['Players']
    const { username, favoritePlatform, favoriteGenre, gamesCompleted } = req.body;
 
    if (!username || !favoritePlatform || !favoriteGenre || gamesCompleted === undefined)
    {
        return res.status(400).json({ message: "Missing required player fields." });
    }
 
    const player = { username, favoritePlatform, favoriteGenre, gamesCompleted };
 
    try {
        const result = await mongodb.getDatabase().db().collection('players').insertOne(player);
        if (result.acknowledged) {
            res.status(204).send();
        } else {
            res.status(500).json(result.error || "Some error occurred while creating the player.");
        }
    } catch (error) {
        res.status(500).json(error.message || "Some error occurred while creating the player.");
    }
};

const updatePlayers = async (req, res) => {
    //#swagger.tags=['Players']
    const { username, favoritePlatform, favoriteGenre, gamesCompleted } = req.body;
 
    if (!username || !favoritePlatform || !favoriteGenre || gamesCompleted === undefined)
    {
        return res.status(400).json({ message: "Missing required player fields." });
    }
    const userId = new ObjectId(req.params.id);
    const player = { username, favoritePlatform, favoriteGenre, gamesCompleted };
    try {
        const result = await mongodb.getDatabase().db().collection('players').replaceOne({ _id: userId }, player);
        if (result.modifiedCount > 0) {
            res.status(204).send();
        } else {
            res.status(500).json(result.error || "Some error ocurred while updating the player.");
        }
    } catch (error) {
        res.status(500).json(error.message || "Some error ocurred while updating the player.");
    }
};

const deletePlayer = async (req, res) => {
                //#swagger.tags=['Players']
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