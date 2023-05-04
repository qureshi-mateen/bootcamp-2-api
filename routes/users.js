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

router.delete('/:id', function(req, res, next) {
  const id = req.params.id;
  users.splice(id, 1);
  res.send({
    message: 'Successfully deleted user',
    data: {}
  });
});

module.exports = router;
