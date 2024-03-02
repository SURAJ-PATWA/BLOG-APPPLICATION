const express = require('express');
const router = express.Router();

// Import Controller

const{dummyLink  , likePost, unlikePost}=require('../controllers/likeController');   //dummyLink is a router handler
const{createComment}=require('../controllers/commentController');
const{createPost,getAllPosts} =require('../controllers/postController');


// Mapping Create

router.get('/dummyroute',dummyLink);
router.post("/comments/create",createComment);  
router.post('/posts/create',createPost);
// get all data 
router.get('/posts',getAllPosts);

router.post('/likes/like',likePost);
router.post('/likes/unlike',unlikePost);
// Export
module.exports=router;