const express = require('express');
const Controller = require('../controllers/controller');
const myMiddleware = require('../myMiddleware/middleware')

const router = express.Router();

router.get('/api', Controller.helloWorld);
router.get('/firman', myMiddleware.myMiddleware ,Controller.helloFirman)

module.exports = router;
