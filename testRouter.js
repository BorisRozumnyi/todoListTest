const Router = require('express');
const router = new Router();
const controller = require('./testUrlController');

router.get('/todos', controller.testAction);

module.exports = router;
