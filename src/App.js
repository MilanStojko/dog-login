import { useState } from "react";

import InputBox from "./components/ui/func components/inputs/InputBox";
import Doggo from "./components/ui/hook/doggo/Doggo";

import "./App.css";

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [type, setType] = useState("password");
  const [cssClassPaw, setCssClassPaw] = useState("");
  const [cssClassFace, setcssClassFace] = useState("");
  const [inputLength, setInputLength] = useState(0);



  //function to show password and activate animations
  function showPass() {
    setShowPassword(!showPassword);
    if (
      cssClassPaw == "over-eye-paw-from-input" ||
      cssClassPaw == "over-eye-paw-from-under-eye"
    ) {
      setCssClassPaw("under-eye-paw-from-over-eye");
    }
    setType("text");
  }

  //function to hide password and animations
  function hidePass() {
    setShowPassword(!showPassword);
    if (
      cssClassPaw === "under-eye-paw-from-over-eye" ||
      cssClassPaw === "under-eye-paw-from-input"
    ) {
      setCssClassPaw("over-eye-paw-from-under-eye");
    }
    setType("password");
  }

  //set inputLenght to init face animation
  function rotateFace(e) {
    setInputLength(15 - e.target.value.length);
  }

  //function to activate face rotation
  function activeFace() {
    setcssClassFace("activeFace");
    if (
      cssClassPaw == "over-eye-paw-from-input" ||
      cssClassPaw == "over-eye-paw-from-under-eye"
    ) {
      setCssClassPaw("input-from-over-eye-paw");
    }
    setInputLength(15);
  }

  //function to reset face rotation
  function resetFace() {
    setcssClassFace("notActiveFace");
    setInputLength(0);
  }

  //useless function
  function setPassword() {}

  //function to activate paw animation when input focus
  function activePaw() {
    if (!showPassword) {
      setCssClassPaw("over-eye-paw-from-input");
    } else {
      setCssClassPaw("under-eye-paw-from-input");
    }
  }

  //function to disactivate paw animation when input box is empty
  function disactivePaw(e) {
    if (e.target.value.length === 0) {
      setCssClassPaw("input-from-over-eye-paw");
    }
  }

  return (
    <div className="App">
      
      <Doggo />
    </div>
  );
}

export default App;
