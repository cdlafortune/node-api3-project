const express = require('express');
const validatePost = require("../middleware/validatePost");
const router = express.Router();

router.get('/posts', (req, res) => {
  res.send('<h1>Welcome to my blog!</h1>');
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
}

module.exports = router;
