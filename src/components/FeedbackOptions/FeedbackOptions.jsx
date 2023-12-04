import React from 'react';
export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div className="position">
      {options.map(el => (
        <button key={el} onClick={onLeaveFeedback}>
          {el}
        </button>
      ))}
    </div>
  );
};
