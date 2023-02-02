const ButtonPrimary = ({ children }) => {
  return (
    <button className="px-6 py-2 text-white font-bold hover:bg-gray-900 bg-black rounded-full">
      {children}
    </button>
  );
};
export default ButtonPrimary;
