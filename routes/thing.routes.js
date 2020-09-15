const express = require('express');
const router = express.Router();

// include the model:
const Thing = require('../models/Thing.model');

router.get('/things', (req, res, next) => {
  Thing.find()
    .then(thingsFromDB => res.status(200).json(thingsFromDB))
    .catch(err => next(err));
});

router.post('/things/create', (req, res, next) => {
  // console.log('body: ', req.body); ==> here we can see that all
  // the fields have the same names as the ones in the model so we can simply pass
  // req.body to the .create() method

  Thing.create(req.body)
    .then(aNewThing => {
      // console.log('Created new thing: ', aNewThing);
      res.status(200).json(aNewThing);
    })
    .catch(err => next(err));
});

module.exports = router;
