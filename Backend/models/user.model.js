const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,'first name must be at least 3 characters long'],
        },
        lastname:{
            type:String,
            minlength:[3,'first name must be at least 3 characters long'],
        },
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:[5, 'Email length must be greater then 5 characters']
    },
    password:{
        type:String,
        required:true,
        select:false       //koi bhi query jo ki database me user se related hogi me by default password include nhi hoga
    },

    socketId:{
        type:String
    },
})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this.id},process.env.JWT_SECRET,{expiresIn:'24h'})
    return token
}

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.statics.hashPassword = async function (password){
    return await bcrypt.hash(password,10)
}


const userModel = mongoose.model('user',userSchema)

module.exports = userModel

