function Statistic({ courseResults }) {
  const scores = courseResults.map((s) => s.score);
  const avg = (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1);
  const min = Math.min(...scores);
  const max = Math.max(...scores);

  return (
    <div className="statistics">
      <p>Average: {avg}</p>
      <p>Min: {min}</p>
      <p>Max: {max}</p>
    </div>
  );
}

export default Statistic;
