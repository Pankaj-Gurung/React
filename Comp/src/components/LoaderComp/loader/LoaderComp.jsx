import React from "react";
import "./Loader.scss";

const LoaderComp = ({
  variant = "four",
  loading = false,
  children,
  background,
}) => {
  const loaderCount = variant === "four" ? 4 : 3;

  return (
    <div className="loader-wrapper">
      {loading && (
        <div
          className="loader-overlay"
          style={{
            backgroundColor:
              background?.backgroundColor || "rgba(228, 30, 30, 0.5)",
            opacity: background?.opacity || 0.9,
            backdropFilter: `blur(${background?.blur || 0}px)`,
          }}
        />
      )}
      <div className="container">
        {Array.from({ length: loaderCount }, (_, index) => (
          <div key={index} className="loader" />
        ))}
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default LoaderComp;
