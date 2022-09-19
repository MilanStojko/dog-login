import Login from "../../../../screens/login/Login";
import { Component } from "react";

import eventsBus from "../../../../events/eventsBus";

import "./doggo.css";

class Doggo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "password",
      cssClassPaw: "",
      cssClassFace: "notActiveFace",
      inputLength: 0,
    };

    this.showPassword = false;
  }

  componentDidMount() {
    eventsBus.on("showPass", this.showPass);
    eventsBus.on("hidePass", this.hidePass);
    eventsBus.on("handlePassword", this.setPassword);
    eventsBus.on("activePaw", this.activePaw);
    eventsBus.on("disactivePaw", this.disactivePaw);
    eventsBus.on("rotateFace", this.rotateFace);
    eventsBus.on("activeFace", this.activeFace);
    eventsBus.on("resetFace", this.resetFace);
  }

  componentWillUnmount() {
    eventsBus.remove("activeFace");
    eventsBus.remove("rotateFace");
    eventsBus.remove("showPass");
    eventsBus.remove("hidePass");
    eventsBus.remove("handlePassword");
    eventsBus.remove("activePaw");
    eventsBus.remove("disactivePaw");
    eventsBus.remove("resetFace");
  }

  activeFace = () => {
    let classPaw = this.state.cssClassPaw;
    if (
      this.state.cssClassPaw === "over-eye-paw-from-input" ||
      this.state.cssClassPaw === "over-eye-paw-from-under-eye"
    ) {
      classPaw = "input-from-over-eye-paw";
    }
    this.setState({
      cssClassFace: "activeFace",
      inputLength: 15,
      cssClassPaw: classPaw,
    });

    this.forceUpdate()
  };

  rotateFace = (e) => {
    this.setState({
      inputLength: 15 - e.target.value.length,
    });
  };

  showPass = () => {
    let classPaw = this.state.cssClassPaw;
    this.showPassword = !this.showPassword;

    if (
      this.state.cssClassPaw === "over-eye-paw-from-input" ||
      this.state.cssClassPaw === "over-eye-paw-from-under-eye"
    ) {
      classPaw = "under-eye-paw-from-over-eye";
    }
    this.setState({
      type: "text",
      cssClassPaw: classPaw,
    });
    eventsBus.dispatch("showPassword", {
      showPassword: this.showPassword,
      type: "text",
    });
  };

  //function to hide password and animations
  hidePass = () => {
    // setShowPassword(!showPassword);
    let classPaw = this.state.cssClassPaw;
    this.showPassword = !this.showPassword;

    if (
      this.state.cssClassPaw === "under-eye-paw-from-over-eye" ||
      this.state.cssClassPaw === "under-eye-paw-from-input"
    ) {
      classPaw = "over-eye-paw-from-under-eye";
    }
    this.setState({
      cssClassPaw: classPaw,
    });
    // setType("password");
    eventsBus.dispatch("showPassword", {
      showPassword: this.showPassword,
      type: "password",
    });
    // eventsBus.dispatch('setType','password');
  };

  //set inputLenght to init face animation

  //function to activate face rotation

  //function to reset face rotation
  resetFace = () => {
    this.setState({
      cssClassFace: "notActiveFace",
      inputLength: 0,
    });
  };

  //useless function
  setPassword = () => {};

  //function to activate paw animation when input focus
  activePaw = () => {
    let classPaw = this.state.cssClassPaw;
    if (!this.showPassword) {
      classPaw = "over-eye-paw-from-input";
    } else {
      classPaw = "under-eye-paw-from-input";
    }

    this.setState({
      cssClassPaw: classPaw,
    });
  };

  //function to disactivate paw animation when input box is empty
  disactivePaw = (e) => {
    let classPaw = this.state.cssClassPaw;
    if (e.target.value.length === 0) {
      classPaw = "input-from-over-eye-paw";
    }

    this.setState({
      cssClassPaw: classPaw,
    });
  };

  render() {
    return (
      <div className="doggo">
        <div className="ears-container">
          <div className="ear ear-left"></div>
          <div className="ear ear-right"></div>
        </div>

        <div
          className={` ${this.state.cssClassFace} face`}
          style={{
            transform: `rotate(${this.state.inputLength}deg)`,
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
          <div className={`${this.state.cssClassPaw} paw left-paw`}>
            <div className="finger side-finger"></div>
            <div className="finger middle-finger"></div>
            <div className="finger side-finger"></div>
          </div>
          <div className={`${this.state.cssClassPaw} paw right-paw`}>
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
}
export default Doggo;
