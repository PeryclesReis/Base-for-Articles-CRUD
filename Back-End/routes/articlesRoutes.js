const express = require('express');
const controller = require('../controllers/articleController');

const router = express.Router();

router.post('/create/:category', controller.addArticle);
router.get('/list', controller.listArticle);
router.put('/update/:id', controller.upArticle);
router.delete('/remove/:id', controller.removeArticle);

module.exports = router;