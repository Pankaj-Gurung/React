import React from "react";
import "./TextArea.scss";
const TextArea = (props) => {
  const {
    name,
    label,
    value,
    leftAdorn,
    rightAdorn,
    leftStyle,
    rightStyle,
    type,
    onChange,
    inputCount = true,
    minLength,
    maxLength,
    clear,
  } = props;
  return (
    <>
      <div className="text-container">
        {label && <label htmlFor={name}>{label}</label>}
        <div className="text-wrapper">
          {leftAdorn && (
            <div className="left-adorn" style={leftStyle}>
              {leftAdorn}
            </div>
          )}
          <input
            className="text-field"
            name={name}
            value={value}
            onChange={onChange}
            minLength={minLength}
            maxLength={maxLength}
          />

          {rightAdorn && (
            <div className="right-adorn" style={rightStyle} onClick={clear}>
              {rightAdorn}
            </div>
          )}

          {inputCount && (
            <div className="char-count">
              {value.length} / {maxLength}
            </div>
          )}
        </div>
      </div>
      ;
    </>
  );
};

export default TextArea;
