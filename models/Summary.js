// const mongoose = require('mongoose');

// const summarySchema = new mongoose.Schema({
//   originalText: {
//     type: String,
//     required: true,
//   },
//   summaryText: {
//     type: String,
//     required: true,
//   },
//   type: {
//     type: String,
//     enum: ['short', 'medium', 'long'],
//     default: 'medium',
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// }, {
//   collection: 'AI' // 👈 ensures it connects to your existing 'AI' collection
// });

// const Summary = mongoose.model('Summary', summarySchema);

// module.exports = Summary;

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