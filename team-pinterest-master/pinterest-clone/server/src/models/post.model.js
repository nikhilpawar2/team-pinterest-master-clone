const  mongoose  = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true
        },
        title: {
            type: String,
            required: true,
            trim: true,
        },
        imgUrl: {
            type: String,
            required: true,
            trim: true,
        },
        webLink: {
            type: String, 
        },
        comments: [
            {
                userId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "user",
                    required: true,
                },
                comment: {
                    type: String,
                    required: true,
                    trim: true,
                },
                commentTime: {
                    type: String,
                    required: true,
                    trim: true,
                },
                likes:[mongoose.Schema.ObjectId]
            }
        ],
        likes: [mongoose.Schema.ObjectId],
        tagUser: [mongoose.Schema.ObjectId],
        tags:{
            type: String,
           
        },
        caption: { type: String, required: false },
        

    },
    {
        versionKey: false,
        timestamps: true,
        
    }
);
const Post = mongoose.model("post", postSchema);
module.exports = Post;   