import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import eventsBus from "../../events/eventsBus";
import SCREENS from "../../routes/screensName";

import InputBox from "../../components/ui/func components/inputs/InputBox";
import Doggo from "../../components/ui/hook/doggo/Doggo";

import "./login.css";

const Login = (props) => {
  const navigate = useNavigate();
  
  const [state, setState] = useState({
    type: "password",
    showPassword: false,
  });

  const submit = (e) => {
    e.preventDefault();
  }

  const showPass = () => {
    eventsBus.dispatch("showPass");
  }

  const hidePass = () =>{
    eventsBus.dispatch("hidePass");
  }

  const handlePassword = () =>{
    eventsBus.dispatch("handlePassword");
  }

  const activePaw = () => {
    eventsBus.dispatch("activePaw");
  }

  const disactivePaw = (e) => {
    eventsBus.dispatch("disactivePaw", e);
  }

  const rotateFace = (e) => {
    eventsBus.dispatch("rotateFace", e);
  }

  const activeFace = () => {
    eventsBus.dispatch("activeFace");
  }

  const resetFace = () => {
    eventsBus.dispatch("resetFace");
  }

  // function handleType(att) {
  //   setState({
  //     ...state,
  //     type: att,
  //   });
  // }

  useEffect(() => {
    eventsBus.on("showPassword", handleShowPassword);

    return ()=>{
      eventsBus.remove("showPassword")
    }
  }, []);

  const handleShowPassword = (att) => {
    console.log(att);
    setState({
      ...state,
      showPassword: att.showPassword,
      type: att.type,
    });
  }

  const goToRegister = () => {
    eventsBus.dispatch("resetFace");
    navigate(SCREENS.registration);
  }

  return (
    <div className="login-container">
      <Doggo />

      <form onSubmit={submit}>
        <div className="input-container">
          <img
            className="icon icon-input"
            src={require("../../assets/images/mail.png")}
          ></img>
          <InputBox
            type={"email"}
            placeholder={"Inserisci email..."}
            callbackChange={rotateFace}
            callbackFocus={activeFace}
            callbackBlur={resetFace}
          />
        </div>

        <div className="input-container password-container">
          <div className="flex">
            <img
              className="icon icon-input"
              src={require("../../assets/images/password.png")}
            />
            <InputBox
              type={state.type}
              placeholder={"Inserisci password..."}
              callbackChange={handlePassword}
              callbackFocus={activePaw}
              callbackBlur={disactivePaw}
            />
          </div>
          {!state.showPassword ? (
            <img
              className="icon icon-eye"
              src={require("../../assets/images/eye-slash.png")}
              onClick={showPass}
            />
          ) : (
            <img
              className="icon icon-eye"
              src={require("../../assets/images/eye.png")}
              onClick={hidePass}
            />
          )}
        </div>
        <button className="button">Log In</button>
      </form>
      <div className="footer-buttons">
        <button onClick={goToRegister}>
          <img src={require("../../assets/images/wifi.png")} />
        </button>
      </div>
    </div>
  );
}
export default Login;
