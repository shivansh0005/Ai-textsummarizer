// controllers/summaryController.js

require('dotenv').config();
const axios = require('axios');
const Summary = require('../models/summary');

const summarizeText = async (req, res) => {
    const { OrignalText, type } = req.body;
    if (!OrignalText || !type) {
        return res.status(400).json({ message: "Please provide all required fields" });
    }

    try {
        const response = await axios.post(
            'https://api-inference.huggingface.co/models/facebook/bart-large-cnn',
            { inputs: OrignalText },
            {
                headers: {
                    Authorization: `Bearer ${process.env.HF_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        const summaryText = response.data?.[0]?.summary_text || "No summary generated";

        const newSummary = new Summary({
           OrignalText,
    type,
    SummaryText: summaryText,
        });

        await newSummary.save();
        res.json(newSummary);

    } catch (error) {
        console.error("Hugging Face API Error:", error.response?.data || error.message);
        res.status(500).json({
            message: "Failed to generate summary",
            error: error.response?.data || error.message,
        });
    }
};

module.exports = { summarizeText };
