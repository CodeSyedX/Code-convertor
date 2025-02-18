require('dotenv').config(); // Load environment variables
const express = require('express');
const axios = require('axios');
const path = require('path');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Serve static frontend files
const publicPath = path.join(__dirname);
app.use(express.static(publicPath));

// Endpoint for code conversion
app.post('/convert', async (req, res) => {
    const { inputCode, sourceLang, targetLang } = req.body;
    const apiKey = process.env.OPENAI_API_KEY;

    const prompt = `Convert the following ${sourceLang} code to ${targetLang}:\n\`\`\`${sourceLang}\n${inputCode}\n\`\`\``;

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: prompt }]
            },
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        const convertedCode = response.data.choices[0].message.content;
        res.json({ convertedCode });
    } catch (error) {
        console.error("Error converting code:", error.response ? error.response.data : error.message);
        res.status(500).json({ error: "Code conversion failed. Please try again." });
    }
});

// Serve the frontend on all routes
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
