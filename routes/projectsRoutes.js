var express = require('express');
var router = express.Router();
const { ProjectsController } = require('../controllers'); 

/* GET projects listing. */
router.get('/', async (req, res, next) => {
  const filter = req.query;
  try {
    const results = await ProjectsController.getAllProjects(filter);
    return res.status(200).send({
      message: 'Successfully fetched projects',
      data: results
    });
  } catch (error) {
    res.status(500).send({
      message: 'Something went wrong',
      data: error
    });
  }
});

/* GET single project. */
router.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const result = await ProjectsController.getProjectById(id);
    return res.status(200).send({
      message: 'Successfully fetched project',
      data: result
    });
  } catch (error) {
    res.status(500).send({
      message: 'Something went wrong',
      data: error
    });
  }
});

/* ADD project. */
router.post('/', async function(req, res, next) {
  const data = req.body;
  try {
    const result = await ProjectsController.addProject(data);
    res.status(200).send({
      message: 'Successfully saved project',
      data: result
    });
  } catch (error) {
    res.status(500).send({
      message: 'Something went wrong',
      data: error
    });
  }
});

/* UPDATE project. */
router.put('/:id', async function(req, res, next) {
  const id = req.params.id;
  const data = req.body;
  try {
    const result = await ProjectsController.updateProject(id, data);
    return res.status(200).send({
      message: 'Successfully updated project',
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
    const result = await ProjectsController.deleteUser(id);
    return res.status(200).send({
      message: 'Successfully deleted project',
      data: result
    });
  } catch (error) {
    res.status(500).send({
      message: 'Something went wrong',
      data: error
    });
  }
});

module.exports = router;
