const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/controller');



//Index
router.get('/', articlesController.index);

//Show
router.get('/:id', articlesController.show);

//Store
router.post('/', articlesController.store);

//Update
router.put('/:id', articlesController.update);

//Modify
router.patch('/:id', articlesController.modify);

//Destroy
router.delete('/:id', articlesController.destroy);

module.exports = router;




