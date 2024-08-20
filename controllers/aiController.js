export const analyzeChat = async (req, res) => {
    const { chatInput, ndSelection } = req.body;

    try {
        // Mock AI response
        const aiResponse = {
            keyPoints: [
                "The user expressed difficulty in social interactions.",
                "The tone suggests frustration or confusion.",
                "Possible miscommunications due to neurodivergent characteristics."
            ],
            tone: "Concerned",
            suggestions: [
                "Consider taking breaks during conversations.",
                "Use clear and direct language to avoid misunderstandings."
            ]
        };

        // Simulate some processing delay
        setTimeout(() => {
            res.status(200).json({ message: 'Analysis complete', analysis: aiResponse });
        }, 1000);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
