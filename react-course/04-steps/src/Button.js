const Button = ({ textColor, bgColor, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
    </button>
  );
};

export default Button;
