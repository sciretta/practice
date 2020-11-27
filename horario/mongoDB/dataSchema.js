const {Schema,model} = require('mongoose');

const dataSchema = new Schema({
    date:String,
    tasks:[{type:Object}],
    time:{
      type:Number,
      default:0
    },
    dayId:Number
});

module.exports = model('data',dataSchema);