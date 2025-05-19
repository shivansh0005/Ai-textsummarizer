

const mongoose=require('mongoose');
const {Schema}=mongoose;
const summarySchema=new Schema({
    OrignalText:{
        type:String,
        required:true
    },
    SummaryText:{
        type:String,
        required:true
    },
    type:{
type:String,
enum:['short','medium','long'],
default:'medium'
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

});
const Summary=mongoose.model('Summary',summarySchema);
module.exports=Summary;