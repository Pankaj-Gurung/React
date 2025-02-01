import React from "react";
import "./button.scss";

const Button = (props) => {
  const {
    title,
    style,
    children,
    onClick,
    textStyle,
    color,
    variant = "contained",
    loading = false,
    disabled = false,
  } = props;

  const colorClass = color ? `button--${color}` : "button--default";
  const variantClass = `button--${variant}`;

  const defaultTextStyle = {
    fontWeight: "bold",
    color: "inherit",
  };

  return (
    <div className="buttoncompo">
      <button
        className={`button ${colorClass} ${variantClass}`}
        style={style}
        onClick={!loading ? onClick : undefined}
        disabled={loading || disabled}
      >
        {loading ? (
          <div className="button__loader">
            <span className="spinner"></span>
            <span>Loading...</span>
          </div>
        ) : (
          <span style={{ ...defaultTextStyle, ...textStyle }}>
            {children || title || "Default"}
          </span>
        )}
      </button>
    </div>
  );
};

export default Button;
