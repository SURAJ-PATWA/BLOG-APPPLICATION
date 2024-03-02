// controller for like


// import model

const Post = require('../models/postModel');
const Like = require('../models/likeModel');

// logic

exports.likePost = async(req,res)=>{
try {
    const {post,user}=req.body;
    const like  = new Like({
        post,user,
    });
    const savedLike = await like.save();
    // update the post collection basic on this
    const updatePost = await Post.findByIdAndUpdate(post ,{$push:{likes:savedLike._id}},{new:true})
    .populate("likes").exec();      // show data of likes schema
  
    res.json({
        post:updatePost,
    })

} catch (error) {
    return res.status(404).json({
        error:"Error While Liking post  ",
    });
}
}

// unlike a post  

exports.unlikePost= async (req,res)=>{
    try {
          
        const{post ,like}=req.body;
    //find and delete  the like collection me se 
    const deleteLike = await Like.findByIdAndDelete({post:post ,_id:like});

    //update the post collection
    const updatePost = await Post.findByIdAndUpdate(post , {$pull: {likes:deleteLike._id}},{new:true});
    res.json({
        post:updatePost,
    });

        
    } catch (error) {
        return res.status(404).json({
            error:"Error While Unliking post  ",
        });
    }
}









// controller fpr dummyLik

exports.dummyLink =(req,res)=>{
    res.send('This is My Dummy Page');
}