var express = require('express');
var router = express.Router();
const { UsersController } = require('../controllers'); 

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const filter = req.query;
  try {
    const results = await UsersController.getAllUsers(filter);
    return res.status(200).send({
      message: 'Successfully fetched users',
      data: results
    });
  } catch (error) {
    res.status(500).send({
      message: 'Something went wrong',
      data: error
    });
  }
});

/* GET single user. */
router.get('/:id', async function(req, res, next) {
  const id = req.params.id;
  try {
    const result = await UsersController.getUserById(id);
    return res.status(200).send({
      message: 'Successfully fetched user',
      data: result
    });
  } catch (error) {
    res.status(500).send({
      message: 'Something went wrong',
      data: error
    });
  }
});

/* ADD user. */
router.post('/', async function(req, res, next) {
  const data = req.body;
  try {
    const user = await UsersController.addUser(data);
    res.status(200).send({
      message: 'Successfully saved user',
      data: user
    });
  } catch (error) {
    res.status(500).send({
      message: 'Something went wrong',
      data: error
    });
  }
});

/* UPDATE user. */
router.put('/:id', async function(req, res, next) {
  const id = req.params.id;
  const data = req.body;
  try {
    const result = await UsersController.updateUser(id, data);
    return res.status(200).send({
      message: 'Successfully fetched users',
      data: result
    });
  } catch (error) {
    res.status(500).send({
      message: 'Something went wrong',
      data: error
    });
  }
});

router.delete('/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const result = await UsersController.deleteUser(id);
    return res.status(200).send({
      message: 'Successfully deleted user',
      data: result
    });
  } catch (error) {
    res.status(500).send({
      message: 'Something went wrong',
      data: error
    });
  }
});

/* LOGIN user. */
router.post('/login', async (req, res, next) => {
  const { username, password } = req.body;
  if (!username) {
    return res.status(400).send({
      message: 'Username is required',
      data: null
    });
  }
  if (!password) {
    return res.status(400).send({
      message: 'Password is required',
      data: null
    });
  }
  try {
    const user = await UsersController.verifyUser({ username, password });
    if (!user) {
      return res.status(401).send({
        message: 'Invalid credentials',
        data: null
      });
    }
    res.status(200).send({
      message: 'Successfully loggedin user',
      data: user
    });
  } catch (error) {
    res.status(500).send({
      message: 'Something went wrong',
      data: error
    });
  }
});

module.exports = router;
