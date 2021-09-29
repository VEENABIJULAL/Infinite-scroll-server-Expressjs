const mongoose =require("mongoose") //import mongoose

//connection string
mongoose.connect('mongodb://localhost:27017/infinitescroll',{
useNewUrlParser:true,
useUnifiedTopology:true,
})

//model

const Product=mongoose.model('Product',{
    Name:{
        type: String,
        index: true
    },
    Price:{
        type: Number,
        index: true
    },
    Description:{
        type:String,
        index:true
    },
    Image:{
        type:String,
        index:true
    }
    
})

//export
module.exports={

Product
}