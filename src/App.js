// import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import Alert from "./components/Alert";
import { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (Mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enable", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enable", "success");
    }
  };
  const convertgreenMode = () => {
    if (Mode === "green") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enable", "success");
    } else {
      setMode("green");
      document.body.style.backgroundColor = "green";
      showAlert("Green mode has been enable", "success");
    }
  };
  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar
        title="TextUtils"
        mode={Mode}
        toggleMode={toggleMode}
        convertgreenMode={convertgreenMode}
      />
      <Alert alert={alert} />
      {/* <Routes>
          <Route
            exact
            path="/"
            element={ */}
      <Textarea
        showAlert={showAlert}
        heading="Enter the text to analyze"
        mode={Mode}
      />
      {/* }
          ></Route>
          <Route exact path="/about" element={<About />}></Route> */}
      {/* </Routes> */}
      {/* </BrowserRouter> */}
      {/* <Textarea
        showAlert={showAlert}
        heading="Enter the text to analyze"
        mode={Mode}
      /> */}
      {/* <About /> */}
    </>
  );
}

export default App;
