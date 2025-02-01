import React from "react";
import "./button.scss";

const RippleButton = ({
  title,
  children,
  variant = "contained",
  color = "default",
  rippleColor,
  onClick,
  textStyle = {},
  ...props
}) => {
  const handleClick = (event) => {
    const button = event.currentTarget;
    const ripple = document.createElement("span");

    const rect = button.getBoundingClientRect();
    ripple.style.width = ripple.style.height = `${Math.max(
      rect.width,
      rect.height
    )}px`;
    ripple.style.left = `${
      event.clientX - rect.left - ripple.offsetWidth / 2
    }px`;
    ripple.style.top = `${
      event.clientY - rect.top - ripple.offsetHeight / 2
    }px`;

    ripple.style.backgroundColor = rippleColor || "rgba(255, 255, 255, 0.5)";
    ripple.className = "ripple";

    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);

    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      className={`button button--${variant} button--${color}`}
      onClick={handleClick}
      {...props}
    >
      <span style={textStyle}>{children || title}</span>
    </button>
  );
};

export default RippleButton;
