// const express = require("express");

// const router = express.Router();

// const Search = require("../models/search.model");

// router.get("/" , async (req , res ) => {
//   try{

//     const search = await Search.find({Title: req.params.Title}).lean().exec();
   
//     return res.status(200).json(search);
//   }catch(e){
//     return res.status(500).json({message: e.message});
//   }    
// });
// // router.post("", async (req,res)=>{
// //     try{
// //       const product = await Search.create(req.body);
// //       return res.status(200).send(product)
// //       }catch(err){
// //           console.log(err)
// //           res.status(500).json({message:err.message,status:"Failed"})
// //       }
      
// //   })
  
//  module.exports = router;