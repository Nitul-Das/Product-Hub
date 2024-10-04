import mongoose from 'mongoose';

//Schema
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    price:{
        type:Number,
        required: true
    },
    image: {
        type: String,
        require: true
    },
},{
    timestamps: true
});

//product model
export const Product = mongoose.model('Product', productSchema) // made a product model based on product schema