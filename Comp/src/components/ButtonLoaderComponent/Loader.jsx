import React from "react";
import "./Loader.scss";
import { useState } from "react";
import spinnersvg from "../../assets/spinner.svg?url";

const Loader = (props) => {
  const { title } = props;

  const [isLoading, setIsLoading] = useState(false);

  const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const handleFunction = async () => {
    setIsLoading(true);
    await delay(2000);
    setIsLoading(false);
  };

  return (
    <>
      <div>
        <button onClick={handleFunction} disabled={isLoading}>
          {isLoading ? (
            <img src={spinnersvg} alt="Loading...." width="40" />
          ) : (
            title
          )}
        </button>
      </div>
    </>
  );
};

export default Loader;
