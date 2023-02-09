const postsController = require( './posts.controllers' )

const getAllPosts = (req, res) => {
    postsController.findAllPosts()
    .then( data => {
        res.status(200).json(data) 
    })
    .catch( err => {
        res.status(400).json(err)
    } )
};

const getPostById = (req, res) => {
    const id = req.params.id
    postsController.findPostById(id)
    .then( data => {
        if (data){
        res.status(200).json(data)
    }else {
        res.status(404).json({message: "Post not found"})
    } 
    })
    .catch( err =>{ 
        res.status(400).json(err) 
    })
};

const postPost = (req, res) => {
    const postObj = req.body
    postsController.createPost(postObj)
        .then( data => {
        res.status(201).json(data)
    })
        .catch( err => {
        res.status(400).json(err) 
    })
};

const patchPost = async (req, res) => {
    const id = req.params.id;
    const postObj = req.body;
    postsController
        .updatePost(id, postObj)
        .then((post) => {
            if (post[0] === 1) {
                res.status(200).json({ message: "Post updated succesfully" });
            } else {
                res.status(404).json({ message: "Post not found" });
            }
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};

const deletePost = async (req, res) => {
    const id = req.params.id
    postsController
        .deletePost(id)
        .then((post) => {
            if (post === 1) {
                res.status(200).json({ message: "Post deleted" });
            } else {
                res.status(404).json({ message: "Post not found" });
            }
        })
        .catch((err) => {
            res.status(400).json(err);
        })
    };

module.exports = {
    getAllPosts,
    getPostById,
    postPost,
    patchPost,
    deletePost
};