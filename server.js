// server.js

const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const SummaryRouter = require('./routes/summaryRoutes');  


// Load environment variables
dotenv.config();



// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test route
app.get('/', (req, res) => {
  res.send('AI Text Summarizer API is running...');
});


app.use('/',SummaryRouter);

// Server listen
connectDB().then(()=>{
    console.log("MongoDB connected");
    const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));


}).catch((err)=>{
    console.error("MongoDB connection error:", err);
    process.exit(1);
});


