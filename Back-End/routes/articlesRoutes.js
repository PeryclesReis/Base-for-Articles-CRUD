const express = require('express');
const controller = require('../controllers/articleController');

const router = express.Router();

router.get('/', controller.listArticle);
router.get('/:id', controller.article);
router.get('/category/:category', controller.articlesByCategory);
router.post('/create/:category', controller.addArticle);
router.put('/update/:id', controller.upArticle);
router.delete('/remove/:id', controller.removeArticle);

module.exports = router;