const mongoose = require("mongoose");
// mongodb+srv://kirankumarj_meshram:kiran123@cluster0.mmkdj.mongodb.net/myFirstDatabase?retryWrites=true
module.exports = () => {
  return mongoose.connect('mongodb+srv://saabhiahek:123abhi123@cluster0.hv47t.mongodb.net/pinterests?retryWrites=true&w=majority');
};
