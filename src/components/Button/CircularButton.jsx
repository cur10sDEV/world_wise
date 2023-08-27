const CircularButton = ({ onClick }) => {
  return (
    <button
      className="bg-slate-800 rounded-full w-8 h-8 flex justify-center items-center hover:bg-yellow-400 hover:text-black"
      onClick={onClick}
    >
      &times;
    </button>
  );
};
export default CircularButton;
