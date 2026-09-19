const validator = require('../helpers/validate');

const saveGame = (req, res, next) => {
  const validationRule = {
    title: 'required|string',
    platform: 'required|string',
    genre: 'required|string',
    developer: 'required|string',
    releaseYear: 'required|integer|min:1900|max:2023',
    rating: 'required|integer|min:0|max:10',
    completed: 'boolean',
    hoursPlayed: 'integer|min:0'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};


const savePlayer = (req, res, next) => {
  const validationRule = {
    username: 'required|string',
    favoritePlatform: 'required|string',
    favoriteGenre: 'required|string',
    gamesCompleted: 'required|integer|min:0'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};


module.exports = {
    saveGame,
    savePlayer
};
