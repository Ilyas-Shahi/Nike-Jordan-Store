import { useRef, useState } from 'react';

import ChevronDown from '../../assets/svg/chevron-down.svg';

const FilterOption = ({ children, title }) => {
  const [showOption, setShowOption] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const formRef = useRef();

  const handleChange = () => {
    let selected = [];

    Array.from(formRef.current).map(
      (inp) => inp.checked && selected.push(inp.value)
    );

    setSelectedOptions(selected);
  };

  return (
    <div className="pt-3 border-b">
      <button
        onClick={() => setShowOption(!showOption)}
        className="flex justify-between w-full mb-4 text-lg font-light"
      >
        <span>
          {title}{' '}
          {selectedOptions.length > 0 && (
            <span>({selectedOptions.length})</span>
          )}
        </span>

        <img
          src={ChevronDown}
          alt=""
          className={`w-3 mt-1 transition-all ${showOption && 'rotate-180'}`}
        />
      </button>

      <form
        ref={formRef}
        onChange={handleChange}
        className={`overflow-hidden pb-6 ${
          showOption ? 'animate-heightEntrance' : 'hidden'
        }`}
      >
        {children}
      </form>
    </div>
  );
};
export default FilterOption;
