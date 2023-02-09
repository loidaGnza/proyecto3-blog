const postServices = require("./posts.services");
const router = require("express").Router();

router.get('/posts', postServices.getAllPosts);

router.get('/posts/:id', postServices.getPostById);

router.post('/posts', postServices.postPost);
router.put('/posts/:id', postServices.patchPost);
router.delete('/posts/:id', postServices.deletePost);

module.exports = router;