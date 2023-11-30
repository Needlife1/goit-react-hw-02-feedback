import React from 'react';
export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className="position">
      <button onClick={onLeaveFeedback}>Good</button>
      <button onClick={onLeaveFeedback}>Neutral</button>
      <button onClick={onLeaveFeedback}>Bad</button>
    </div>
  );
};
