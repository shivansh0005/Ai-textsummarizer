const express= require('express');
const SummaryRouter=express.Router();
const summary=require('../models/summary');
const { summarizeText } = require('../controllers/summaryController');

SummaryRouter.post('/',summarizeText);
module.exports=SummaryRouter;

