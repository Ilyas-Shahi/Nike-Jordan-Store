const FormCheck = ({ label, id }) => {
  return (
    <div className="form-check">
      <input
        className="float-left w-5 h-5 mt-0.5 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-400 rounded-sm appearance-none cursor-pointer form-check-input checked:bg-black checked:border-black focus:outline-none"
        type="checkbox"
        value={id}
        id={id}
      />
      <label
        className="inline-block text-lg cursor-pointer hover:text-gray-600 form-check-label"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};
export default FormCheck;
