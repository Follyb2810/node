const mongoose=require('mongoose')
const Employee=mongoose.model("Employee",{
    fullname:{type:String,},
    position:{type:String},
    location:{type:String},
    salary:{type:Number}
})

module.exports=Employee;



// const userSchema =mongoose.Schema({
//     fullname:{type:String,},
//     position:{type:String},
//     location:{type:String},
//     salary:{type:Number}
// },
// {
//     timestamps: true,
// }
// )
// const User = mongoose.model('User',userSchema)
// module.exports=User