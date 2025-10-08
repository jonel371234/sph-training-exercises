import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

export default function Dropdown({ options, onChange, value, placeholder = "Select..." }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) return;
      if (!divEl.current.contains(event.target)) setIsOpen(false);
    };
    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);

  const handleClick = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  const allOptions = ["All Authors", ...options];

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value || placeholder}
        <GoChevronDown className="text-lg" />
      </Panel>

      {isOpen && (
        <Panel className="absolute top-full w-full shadow-md border rounded mt-1 bg-white z-10">
          {allOptions.map((option) => (
            <div
              key={option}
              className="hover:bg-sky-100 rounded cursor-pointer p-2"
              onClick={() => handleOptionClick(option === "All Authors" ? "" : option)}
            >
              {option}
            </div>
          ))}
        </Panel>
      )}
    </div>
  );
}
