const { Router } = require("express");
// const HashTag = require("../models/hashTag.model");
const router = Router();
const Post = require("../models/post.model");
const User = require("../models/user.model");

router.post("/newpost", async (req, res) => {
  try {
    const { userId, imgUrl, caption } = req.body;
    const isUser = await User.findOne({ _id: userId }).lean().exec();
    console.log("captions", caption);
    if (!userId || !imgUrl) {
      return res.status(400).send({ error: "userId and imgUrl is required" });
    }
    if (!isUser) return res.status(402).send({ error: "user is not exist" });

    const post = await Post.create(req.body);

    return res.status(201).send(post);
  } catch (err) {
    console.log(err);
    return res.status(400).send(err.message);
  }
});


router.get("/user/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const page = +req.query._page || 1;
    const limit = +req.query._limit || 10;

    const offset = (page - 1) * limit;

    //const post = await Post.find({})

    const userPost = await Post.find({ userId: userId })
      .sort({ createdAt: "desc" })
      .skip(offset)
      .limit(limit)
      .lean()
      .exec();
    return res.status(401).send(userPost);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/get/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    // const page = +req.query._page || 1;
    // const limit = +req.query._limit || 10;

    // const offset = (page - 1) * limit;

    //const post = await Post.find({})

    const userPost = await Post.findOne({ _id: userId })
      .sort({ createdAt: "desc" })
      .lean()
      .exec();
    return res.status(401).send(userPost);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});


router.get("/key/:tag", async (req, res) => {
  try {
      const tag = req.params.tag;
      
    const userPost = await Post.find({ tags: tag })
      .sort({ createdAt: "desc" })
      .lean()
      .exec();
    return res.status(401).send(userPost);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/get", async (req, res) => {
  try {
    const page = +req.query._page || 1;
    const limit = +req.query._limit || 30;

    const offset = (page - 1) * limit;
    const userPost = await Post.find({})
      .sort({ createdAt: "desc" })
      .skip(offset)
      .limit(limit)
      .lean()
      .exec();
    return res.status(401).send(userPost);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
module.exports = router;
// router.patch("/likepost/:id", async (req, res) => {
//   try {
//     const postId = req.params.id;
//     const { userId } = req.body;

//     const isPost = await Post.findById(postId).lean().exec();
//     const isUser = await User.findById(userId).lean().exec();

//     if (!userId)
//       return res.status(400).send({ error: "please provide a userId" });
//     else if (!isPost)
//       return res.status(401).send({ error: "this post is not exist" });
//     else if (!isUser)
//       return res.status(402).send({ error: "user is not exist" });

//     const post = await Post.findByIdAndUpdate(
//       postId,
//       { $addToSet: { likes: userId } },
//       { new: true }
//     );

//     if (userId.toString() === post.userId.toString()) {
//       return res.status(201).send({ message: "you liked your post" });
//     }
//     await User.findByIdAndUpdate(
//       post.userId,
//       {
//         $addToSet: {
//           notifications: {
//             notification: `${isUser.username} liked your post`,
//             userPic: isUser.profilePic,
//             postSrc: post.src,
//             timestamps: Date.now(),
//           },
//         },
//       },
//       { new: true }
//     );
//     await User.findByIdAndUpdate(
//       isPost.userId,
//       { isNewNotifications: true },
//       { new: true }
//     );
//     return res.status(201).send(post);
//   } catch (error) {
//     return res.status(500).send(error.message);
//   }
// });

// router.patch("/unlikepost/:id", async (req, res) => {
//   try {
//     const postId = req.params.id;
//     const { userId } = req.body;

//     const isPost = await Post.findById(postId).lean().exec();
//     const isUser = await User.findById(userId).lean().exec();

//     if (!userId)
//       return res.status(400).send({ error: "please provide a userId" });
//     else if (!isPost)
//       return res.status(401).send({ error: "post is not exist" });
//     else if (!isUser)
//       return res.status(402).send({ error: "user is not exist" });

//     const post = await Post.findByIdAndUpdate(
//       postId,
//       { $pull: { likes: userId } },
//       { new: true }
//     );
//     return res.status(201).send({ message: "unliked success", post });
//   } catch (err) {
//     return res.status(500).send(err.message);
//   }
// });

// router.patch("/addcomment/:id", async (req, res) => {
//   try {
//     const postId = req.params.id;
//     const { userId, comment } = req.body;
//     const bodys = req.body;

//     const isPost = await Post.findById(postId).lean().exec();
//     const isUser = await User.findById(userId).lean().exec();

//     if (!userId || !comment)
//       return res.status(400).send({ err: "please fill the comment" });
//     else if (!isPost)
//       return res.status(401).send({ error: "post is not exist" });
//     else if (!isUser)
//       return res.status(402).send({ error: "user is not exist" });

//     const post = await Post.findByIdAndUpdate(
//       postId,
//       { $addToSet: { comments: { ...bodys, commentTime: Date.now() } } },
//       { new: true }
//     );

//     if (userId.toString() === post._id.toString()) {
//       return res
//         .status(201)
//         .send({ message: "you comment on your post", isUser });
//     }

//     await User.findByIdAndUpdate(
//       post.userId,
//       {
//         $addToSet: {
//           notifications: {
//             notification: `${isUser.username} commented on you post`,
//             userPic: isUser.profilePic,
//             postSrc: post.src,
//             timestamps: Date.now(),
//           },
//         },
//       },
//       {
//         new: true,
//       }
//     );

//     await User.findByIdAndUpdate(
//       userId,
//       { isNewNotification: true },
//       { new: true }
//     );
//     return res.status(201).send(post);
//   } catch (err) {
//     return res.status(500).send(err.message);
//   }
// });

// router.patch("/likecomment/:id", async (req, res) => {
//   try {
//     const { userId, commentId } = req.body;
//     const postId = req.params.id;

//     const isUser = await User.findById(userId).lean().exec();
//     const isPost = await Post.findById(postId).lean().exec();

//     if (!userId)
//       return res.status(400).send({ error: "please provide a userId" });
//     if (!isUser) return res.status(401).send({ error: "user is not exist" });
//     if (!isPost) return res.status(402).send({ error: "post is not exist" });

//     const comments = isPost.comments;
//     for (let i = 0; i < comments.length; i++) {
//       if (comments[i]._id.toString() === commentId.toString()) {
//         if (!comments[i].likes.includes(userId.toString())) {
//           comments[i].likes.push(userId);
//         }
//       }
//     }

//     await Post.updateOne({ _id: postId }, { $set: { comments: comments } });
//     return res.status(201).send({ message: "you like this comment" });
//   } catch (err) {
//     return res.status(500).send(err.message);
//   }
// });

// router.patch("/unlikecomment/:id", async (req, res) => {
//   try {
//     const { userId, commentId } = req.body;
//     const postId = req.params.id;

//     const isPost = await Post.findOne({ _id: postId }).lean().exec();
//     const isUser = await User.findOne({ _id: userId }).lean().exec();

//     if (!userId || !commentId)
//       return res.status(400).send({ error: "invalid syntex" });

//     if (!isUser) return res.status(401).send({ error: "user is not exist" });
//     if (!isPost) return res.status(402).send({ error: "post is not exist" });

//     const comments = isPost.comments;
//     for (let i = 0; i < comments.length; i++) {
//       if (comments[i]._id.toString() === commentId) {
//         for (let j = 0; j < comments[i].likes.length; j++) {
//           if (comments[i].likes[j].toString() === userId) {
//             comments[i].likes.splice(j, 1);
//           }
//         }
//       }
//     }

//     await Post.updateOne(
//       { _id: postId },
//       { $set: { comments: comments } },
//       { new: true }
//     );

//     return res.status(201).send({ message: "you unliked this commet" });
//   } catch (err) {
//     return res.status(500).send(err.message);
//   }
// });

//get post post by user


// router.patch("/update/:id", async (req, res) => {
//     try {
//         const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
//         res.status(201).send(post);
//     }
//     catch (err) {
//         return res.status(400).send(err.message);
//     }
// });

// router.delete("/delete/:id", async (req, res) => {
//     try {
//         const post = await Post.findByIdAndDelete(req.params.id).lean().exec();
//         res.status(201).send(post);
//     }
//     catch (err) {
//         return res.status(400).send(err.message);
//     }
// });


