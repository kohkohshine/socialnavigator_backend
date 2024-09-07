const simulatedReview = {
    summary: "During a work meeting, you were asked to update your team on a project. You got into some interesting details while explaining your progress, but your manager interrupted to keep things on track. After the meeting moved on, you felt unsure about how your contribution was received by the team.",
    feelings: "It sounds like you felt confused and worried during the meeting. You were trying hard to be thorough, but you noticed that others seemed impatient, which left you feeling uneasy about how you came across.",
    miscommunications: [
      {
        title: "What Happened:",
        points: [
          "Detail vs. Relevance: Your focus on smaller details might have seemed off-topic, especially if the meeting was running short on time.",
          "Manager’s Reaction: When your manager interrupted, it might have been about keeping the meeting on schedule rather than a reaction to your explanation."
        ]
      }
    ],
    suggestions: [
      "Next time, try to start with the most important points and only go into details if there’s extra time or if asked.",
      "After the meeting, you might want to touch base with your manager to make sure you’re both on the same page about what’s needed."
    ],
    insights: [
      {
        title: "Prioritize Key Points:",
        description: "In meetings, focus on the most important information first. If there’s time, you can add more details later."
      },
      {
        title: "Check-In:",
        description: "If you’re unsure about how your input was received, a quick follow-up with your manager can help clear up any misunderstandings and ensure you’re aligned."
      }
    ]
  };
  

  const getSimulatedReview = (req, res) => {
    res.status(200).json(simulatedReview);
  };
  
  export { getSimulatedReview };