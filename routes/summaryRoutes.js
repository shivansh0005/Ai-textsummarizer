const express= require('express');
const SummaryRouter=express.Router();
const summary=require('../models/summary');

SummaryRouter.post('/', async (req, res) => {

    try{
        const { OrignalText, type}=req.body;
        const  SummaryText=`This is a ${ type} summary placeholder.`;

        const newsummary=new summary({
          OrignalText,
            type,
            SummaryText,
        });
        await newsummary.save();

res.json(newsummary);
    }
    catch(err){

        console.error(err);
        res.status(500).json({ message: err.message });
    }
    

})
module.exports=SummaryRouter;

