export const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;

  const positivePercentage = total === 0 ? 0 : Math.round((good / total) * 100);
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </>
  );
};
