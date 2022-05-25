const express= require('express');

const {register,login}=require("./controllers/auth.controller.js")
// const productController = require("./controllers/product.controller.js")
const uploadprodController = require("./controllers/uploadprod.controller.js");
// const searchController = require("./controllers/search.controller.js")
const postController = require("./controllers/post.controller.js")
const app = express();

var cors = require('cors')
app.use(cors())


app.use(express.json());
// app.use("/product",productController);
app.post('/register',register);
app.post('/login',login);
// app.get('/data',data1)
app.use('/single',uploadprodController)
// app.use('/search',searchController)
app.use('/post',postController)

module.exports=app;
