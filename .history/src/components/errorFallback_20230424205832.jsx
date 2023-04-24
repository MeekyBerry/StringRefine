import React from "react";

const ErrorFallback = ({ error }) => {
  return (
    <div role="alert" className="errorFallback">
      <p className="errorFallback__title">Something went wrong!!!</p>
      <pre className="errorFallback__msg">{error.message}</pre>
    </div>
  );
};

export default ErrorFallback;