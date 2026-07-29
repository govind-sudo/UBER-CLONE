const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const captainSchema = new mongoose.Schema({
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

    status:{
        type:String,
        enum:['active','inactive'],
        default:'inactive'
    },

    vehicle:{
        color:{
            type:String,
            required:true,
            minlength:[5, 'sahi se color daal']
        },
        plate:{
            type:String,
            required:true,
            minlength:[5, 'number ke sath masti nhi ladleeee!!']
        },
        capacity:{
            type:Number,
            required:true,
            minlength:[1, 'MAZAK KAR RHA HAI KYA!!']
        },
        vehicleType:{
            type:String,
            required:true,
            enum:['car','motorcycle','auto']
        }
    },

    location:{
        lat:{
            type:Number,
        },
        lng:{
            type:Number,
        }
    }
})

captainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this.id},process.env.JWT_SECRET,{expiresIn:'24h'})
    return token
}

captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password)
}

captainSchema.statics.hashPassword = async function (password){
    return await bcrypt.hash(password,10)
}

module.exports = mongoose.model('captain',captainSchema)
