var express = require('express');
var router = express.Router();
var postsController = require("../controllers/posts");


// router.get('/',postsController.getPosts);
router.get('/',postsController.getPosts);

router.post('/',postsController.createPost);


module.exports = router;
