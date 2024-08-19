import AIAnalysis from '../models/aiModel.js';
import User from '../models/userModel.js';
import axios from 'axios'; 

// Save AI analysis after sending the prompt to the ChatGPT API
export const analyzeInput = async (req, res) => {
    const { userId, message } = req.body;
    try {
        // Retrieve the user's ND situation
        const user = await User.findById(userId);
        const ndSituation = user.ndSituation || "No ND situation selected";

        // Build the prompt for ChatGPT
        const prompt = `The user has an ND situation of: ${ndSituation}. They said: ${message}. 
        Analyze the key points of their experience, the tone of their message, 
        and any possible miscommunications from a neurotypical point of view.`;

        // Send the prompt to ChatGPT API
        const chatGPTResponse = await axios.post(
            'https://api.openai.com/v1/chat/completions', // Example endpoint, replace with the actual ChatGPT endpoint
            {
                model: 'gpt-3.5-turbo', // Adjust as needed
                messages: [{ role: 'user', content: prompt }]
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        const aiResponse = chatGPTResponse.data.choices[0].message.content;

        // Save the AI analysis response
        const analysis = new AIAnalysis({
            userId,
            prompt,
            keyPoints: aiResponse, // Assuming the AI response contains key points, tone, and miscommunications
            tone: "Extracted tone from AI response", // Example - this would depend on how the AI response is structured
            miscommunications: "Extracted miscommunications from AI response"
        });

        await analysis.save();

        res.status(201).json({ message: 'Analysis saved', analysis });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};