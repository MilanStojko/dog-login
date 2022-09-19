import { useState, useEffect } from "react";
import Login from "../../../../screens/login/Login";

import eventsBus from "../../../../events/eventsBus";

import "./doggo.css";

function Doggo(props) {
  // const [showPassword, setShowPassword] = useState();
  const [type, setType] = useState("password");
  const [cssClassPaw, setCssClassPaw] = useState("");
  const [cssClassFace, setcssClassFace] = useState("");
  const [inputLength, setInputLength] = useState(0);
  const [screen, setScreen] = useState('');

  let showPassword = false;

  //listeners
  useEffect(() => {
    setScreen(props.screen)
    eventsBus.on("showPass", showPass);
    eventsBus.on("hidePass", hidePass);
    eventsBus.on("handlePassword", setPassword);
    eventsBus.on("activePaw", activePaw);
    eventsBus.on("disactivePaw", disactivePaw);
    eventsBus.on("rotateFace", rotateFace);
    eventsBus.on("activeFace", activeFace);
    eventsBus.on("resetFace", resetFace);

    return () => {
      eventsBus.remove("activeFace");
      eventsBus.remove("rotateFace");
      eventsBus.remove("showPass");
      eventsBus.remove("hidePass");
      eventsBus.remove("handlePassword");
      eventsBus.remove("activePaw");
      eventsBus.remove("disactivePaw");
      eventsBus.remove("resetFace");
    };
  }, []);

  function activeFace() {
    console.log("active");
    setcssClassFace("activeFace");
    if (
      cssClassPaw == "over-eye-paw-from-input" ||
      cssClassPaw == "over-eye-paw-from-under-eye"
    ) {
      setCssClassPaw("input-from-over-eye-paw");
    }
    //setInputLength(15);
  }

  function rotateFace(e) {
    setInputLength(15 - e.target.value.length);
  }

  function showPass() {
    showPassword = !showPassword;

    if (
      cssClassPaw == "over-eye-paw-from-input" ||
      cssClassPaw == "over-eye-paw-from-under-eye"
    ) {
      setCssClassPaw("under-eye-paw-from-over-eye");
    }
    setType("text");
    eventsBus.dispatch("showPassword", {
      showPassword: showPassword,
      type: "text",
    });
  }

  //function to hide password and animations
  function hidePass() {
    // setShowPassword(!showPassword);
    showPassword = !showPassword;

    if (
      cssClassPaw === "under-eye-paw-from-over-eye" ||
      cssClassPaw === "under-eye-paw-from-input"
    ) {
      setCssClassPaw("over-eye-paw-from-under-eye");
    }
    // setType("password");
    eventsBus.dispatch("showPassword", {
      showPassword: showPassword,
      type: "password",
    });
    // eventsBus.dispatch('setType','password');
  }

  //set inputLenght to init face animation

  //function to activate face rotation

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
    <div key={screen} className="doggo">
      <div className="ears-container">
        <div className="ear ear-left"></div>
        <div className="ear ear-right"></div>
      </div>

      <div
        className={` ${cssClassFace} face`}
        style={{
          transform: `rotate(${inputLength}deg)`,
        }}
      >
        <div className="eyes-container">
          <div className="eye eye-left">
            <div className="pupil"></div>
          </div>
          <div className="eye eye-right">
            <div className="pupil"></div>
          </div>
        </div>
        {console.log("tags:", cssClassFace)}
        <div className="nose-container">
          <div className="nose"></div>
          <div className="point"></div>
        </div>

        <div className="mouth-container">
          <div className="smile"></div>
          <div className="mouth"></div>
          <div className="tongue">
            <div className="tongue-line"></div>
          </div>
        </div>
      </div>

      <div className="paw-container">
        <div className={`${cssClassPaw} paw left-paw`}>
          <div className="finger side-finger"></div>
          <div className="finger middle-finger"></div>
          <div className="finger side-finger"></div>
        </div>
        <div className={`${cssClassPaw} paw right-paw`}>
          <div className="finger side-finger"></div>
          <div className="finger middle-finger"></div>
          <div className="finger side-finger"></div>
        </div>
      </div>

      {/* <div className="footer-buttons">
        <button>
          <img src={require("../../../../assets/images/chat.png")} />
        </button>
        <button>
          <img src={require("../../../../assets/images/wifi.png")} />
        </button>
        <button>
          <img src={require("../../../../assets/images/paw.png")} />
        </button>
      </div> */}
    </div>
  );
}
export default Doggo;
