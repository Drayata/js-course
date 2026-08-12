export default function StarElement({ maxRatings = 5 }) {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "14px",
  };

  const starContainerStyle = {
    display: "flex",
    gap: "5px",
  };

  const textStyle = {
    lineHeight: "1",
    margin: "0",
  };
  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRatings }, (_, i) => (
          <span>S{i + 1}</span>
        ))}
      </div>
      <p style={textStyle}>Heyy antek</p>
    </div>
  );
}
