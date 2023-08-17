import React, { useEffect, useState } from "react";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";
import Load from "./assets/img/Ripple.gif";
const Screen1 = lazy(() => import("./components/screen-one"));
const Screen2 = lazy(() => import("./components/screen-two"));
const ErrorFallback = lazy(() => import("./components/error-fallback"));
const NotFound = lazy(() => import("./components/404"));

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const handleChanges = (value) => {
    setInputValue(value);
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
            <div
              style={{
                backgroundColor: "#282c34",
                height: "100vh",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <img
                src={Load}
                alt="Ripple"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain"
                }}
              />
            </div>
          }
        >
          <Routes>
            <Route
              path="/"
              element={
                <Screen1
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  handleInputChanges={handleChanges}
                />
              }
            />
            <Route
              path="/screen-two"
              element={
                <Screen2
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                />
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
