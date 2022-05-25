const bcrypt = require('bcryptjs');
const {Schema,model}= require("mongoose");

const userSchema = new Schema(
    {
        email: {type:String,require:true,unique:true},
        password: {type:String,require:true}
    },
    {
        versionKey: false,
        timestamps: true,
    }
)
    //this is type of hook which runs before user creation
userSchema.pre("save", function (next) {
    //create and update
    //if update operation is needed like just to update email id password will
    // not be changed we dont need to hash the older password, so just return.
    if(!this.isModified("password")) 
        return next();
   const hash =bcrypt.hashSync(this.password,10);
   this.password=hash;
   return next();
})

userSchema.methods.checkPassword = function (password) {
    return new Promise( (resolve, reject)=> {
        bcrypt.compare(password,this.password,function(err,same){
            if(err)
                return reject(err); 
            return resolve(same);

        })
    })
}
module.exports = model("user",userSchema);