import React from "react";
import "./SearchField.scss";

const SearchField = (props) => {
  const {
    leftAdorn,
    rightAdorn,
    leftStyle,
    rightStyle,
    label,
    name,
    type,
    placeholder,
    value,
    onChange,
    min,
    max,
    clear,
  } = props;
  return (
    <>
      <div className="mainsearchcontainer">
        <div className="search-container">
          {label && <label htmlFor={name}>{label}</label>}
          <div className="search-wrapper">
            {leftAdorn && (
              <div className="left-adorn" style={leftStyle}>
                {leftAdorn}
              </div>
            )}
            <input
              className="search-field"
              type={type}
              name={name}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              min={min}
              max={max} 
            />
            {rightAdorn && (
              <div className="right-adorn" style={rightStyle} onClick={clear}>
                {rightAdorn}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchField;
