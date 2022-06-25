import React from "react";
import Data from "./Data";

const FilterButtons = ({ filterItem, setItem, menuItems }) => {
  return (
    <div className="flex flex-row space-x-16 items-center justify-center py-6">
      <button
        className="text-2xl text-white"
        onClick={() => setItem(Data)}
      >
        All
      </button>
      {menuItems.map((Val, id) => {
        return (
          <button
            className="text-2xl text-white"
            onClick={() => filterItem(Val)}
            key={id}
          >
            {Val}
          </button>
        );
      })}
    </div>
  );
};

export default FilterButtons;
