const FilterColor = ({ name, id, color }) => {
  return (
    <div className="flex flex-col items-center mb-3">
      <input
        className={`w-7 h-7 transition-all bg-${color} bg-center bg-no-repeat bg-[size:70%] rounded-full border border-gray-300 checked:border-${color} appearance-none cursor-pointer form-check-input focus:outline-none`}
        type="checkbox"
        value={id}
        id={id}
      />
      <label
        className="text-xs cursor-pointer hover:text-gray-600"
        htmlFor={id}
      >
        {name}
      </label>
    </div>
  );
};
export default FilterColor;
