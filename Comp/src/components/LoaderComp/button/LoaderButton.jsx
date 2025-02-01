import React from "react";
import "./Button.scss";
import loadersvg from "../../../assets/bouncing-circles.svg";

const LoaderButton = (props) => {
  const { title, children, loading } = props;
  return (
    <>
      <button className="buttonloader">
        {loading ? (
          <img src={loadersvg} alt="Loading..." width={40} />
        ) : (
          title | children
        )}
      </button>
    </>
  );
};

export default LoaderButton;
