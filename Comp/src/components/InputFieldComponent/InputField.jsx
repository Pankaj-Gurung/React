import React, { forwardRef } from "react";
import "./InputField.scss";

const InputField = forwardRef(
  (
    {
      name,
      placeholder,
      label,
      value,
      type = "text",
      onChange,
      min,
      max,
      leftAdorn,
      rightAdorn,
      leftStyle,
      rightStyle,
      clear,
      minLength,
      maxLength,
    },
    ref
  ) => {
    const today = new Date().toISOString().split("T")[0];
    const minDate = "1900-01-01";
    const finalMin = type === "date" ? min || minDate : min;
    const finalMax = type === "date" ? max || today : max;

    return (
      <div className="maincontainer">
        <div className="input-container">
          {label && <label htmlFor={name}>{label}</label>}

          <div className="input-wrapper">
            {leftAdorn && (
              <div className="left-adorn" style={leftStyle}>
                {leftAdorn}
              </div>
            )}
            <input
              className="input-field"
              type={type}
              name={name}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              min={finalMin}
              max={finalMax}
              ref={ref}
              minLength={minLength}
              maxLength={maxLength}
            />
            {rightAdorn && (
              <div className="right-adorn" style={rightStyle} onClick={clear}>
                {rightAdorn}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

export default InputField;
