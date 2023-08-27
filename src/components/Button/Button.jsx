const Button = ({ children, styles, onClick }) => {
  return (
    <button
      className={`bg-green-600 text-black px-6 py-2 rounded-md ${styles}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
