const express = require('express');
const db = require("./userDb");
const postDB = require("../posts/postDb");
const validateUser = require('../middleware/validateUser');
const validateUserId = require('../middleware/validateUserId');
const validatePost = require("../middleware/validatePost");
const router = express.Router();

router.post('/users', validateUser(), (req, res) => {
  db.insert(req.body)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((error) => {
      next(error)
    })
});

router.post('/users/:id/posts', validateUserId(), validatePost(), (req, res) => {
  postDB.insert(req.body)
    .then((post) => {
      res.status(201).json(post)
    })
    .catch((err) => {
      res.status(404).json(err)
    })
});

router.get('/users', (req, res) => {
  db.get()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      next(err)
    })
});

router.get('/users/:id', validateUserId(), (req, res) => {
  res.status(200).json(req.user)
});

router.get('/users/:id/posts', validateUserId(), (req, res) => {
  db.getUserPosts(req.params.id)
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((err)=> {
      res.status(404).json("Posts not found.")
    })
});

router.delete('/users/:id', validateUserId(), (req, res) => {
  db.remove(req.params.id)
    .then((user) => {
      res.status(200).json({message: "User removed."})
    })
    .catch((err) => {
      next(err)
    })
});

router.put('/users/:id', validateUser(), validateUserId(), (req, res) => {
  db.update(req.params.id, req.body)
    .then((user) => {
      res.status(200).json(user)
    })
    .catch((err) => {
      next(err)
    })
});

module.exports = router;
