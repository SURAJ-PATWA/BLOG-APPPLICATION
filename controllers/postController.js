const Post =require('../models/postModel');

exports.createPost = async(req,res)=>{  // createPost is a router handler
    try {
         const{title,body}=req.body;
         const post = new Post({
            title,body,
         });

         const savedPost= await post.save();
         res.json({
            post:savedPost,      // return that post
         });


    } catch (error) {
      return res.status(400).json({
        error:"Error while creating post",
      });  
    }
}

exports.getAllPosts = async(req,res)=>{
    try {
        const posts = await Post.find().populate('likes').populate("comments").exec();   // show Post all with likes and commments
        res.json({
            posts,
        })
    } catch (error) {
        return res.status(400).json({
            error:"Error While Featchinh Post",
        })
    }
}