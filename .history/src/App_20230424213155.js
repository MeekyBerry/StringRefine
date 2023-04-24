import React, { useEffect, useState } from "react";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";
const Screen1 = lazy(() => import("./components/screen-one"));
const Screen2 = lazy(() => import("./components/screen-two"));
const ErrorFallback = lazy(() => import("./components/error-fallback"));
const NotFound = lazy(() => import("./components/404"));

const App = () => {
  const [inputValue, setInputValue] = useState("");

  // Function to handle changes to the input field
  const handleChanges = (value) => {
    setInputValue(value);
  };

  // Function to handle Go back
  const handleGoBack = () => {
    setInputValue("");
  };

  useEffect(() => {
    //  Redirect user to Screen 1 when they try to access Screen 2 in another tab
    if (window.location.pathname === "/screen-two") {
      window.location.href = "/";
    }
  }, []);

  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense
          fallback={
            <h1
              style={{
                fontSize: "22px",
                fontStyle: "italic",
                color: "#57cc99",
                padding: "20px",
                backgroundColor: "#282c34",
                minHeight: "100vh",
                width: "100vw",
              }}
            >
              Loading...
            </h1>
          }
        >
          <Routes>
            <Route
              path="/"
              element={
                <Screen1
                  inputValue={inputValue}
                  handleInputChanges={handleChanges}
                />
              }
            />
            <Route
              path="/screen-two"
              element={
                <Screen2 inputValue={inputValue} onGoBack={handleGoBack} />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;
