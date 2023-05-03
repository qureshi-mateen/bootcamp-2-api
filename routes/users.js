var express = require('express');
var router = express.Router();
const { UsersController } = require('../controllers'); 

const users = [
  {
    name: 'XYZ',
    age: 24,
    username: 'user_name_1',
    password: 'abc123'
  },
  {
    name: 'ABC',
    age: 27,
    username: 'user_name_2',
    password: 'abc123'
  },
  {
    name: 'EFG',
    age: 30,
    username: 'user_name_3',
    password: 'abc123'
  },
  {
    name: 'HIK',
    age: 22,
    username: 'user_name_4',
    password: 'abc123'
  },
  {
    name: 'LMN',
    age: 32,
    username: 'user_name_5',
    password: 'abc123'
  }
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
    message: 'Successfully fetched users',
    data: users
  });
});

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

router.put('/:id', function(req, res, next) {
  const id = req.params.id;
  const data = req.body;
  if (!users[id]) {
    return res.send({
      message: 'The id is invalid',
      data: null
    });
  }
  users[id] = data;
  res.send({
    message: 'Successfully updated user',
    data: users
  });
});

router.delete('/:id', function(req, res, next) {
  const id = req.params.id;
  users.splice(id, 1);
  res.send({
    message: 'Successfully deleted user',
    data: users
  });
});

module.exports = router;
