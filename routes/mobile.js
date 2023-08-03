var mongoose = require('mongoose');
var MobileScheme = mongoose.Schema(
    {
            namePhone: String,
            modelPhone: String,
            date: Date,
            quantity: Number,
            price: Number,
            bestSeller: Boolean,
            image: String,
            video: String 
    }
);
// dien thoai is description and Mobile is name of table
var MobileModel = mongoose.model('dien thoai', MobileScheme ,'Mobile');
module.exports = MobileModel;