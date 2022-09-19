import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import eventsBus from "../../events/eventsBus";
import SCREENS from "../../routes/screensName";

import InputBox from "../../components/ui/func components/inputs/InputBox";
import Doggo from "../../components/ui/hook/doggo/Doggo";

import "./register.css";

function Register() {
  function submit(e) {
    e.preventDefault();
  }

  function showPass() {
    eventsBus.dispatch("showPass");
  }

  function hidePass() {
    eventsBus.dispatch("hidePass");
  }

  function handlePassword() {
    eventsBus.dispatch("handlePassword");
  }

  function activePaw() {
    eventsBus.dispatch("activePaw");
  }

  function disactivePaw(e) {
    eventsBus.dispatch("disactivePaw", e);
  }

  function rotateFace(e) {
    eventsBus.dispatch("rotateFace", e);
  }

  function activeFace() {
    // console.log('active dispatch');
    eventsBus.dispatch("activeFace");
  }

  function resetFace() {
    eventsBus.dispatch("resetFace");
  }

  const [state, setState] = useState({
    type: "password",
    showPassword: false,
  });

  function handleType(att) {
    setState({
      ...state,
      type: att,
    });
  }

  function handleShowPassword(att) {
    setState({
      ...state,
      showPassword: att.showPassword,
      type: att.type,
    });
  }

  function checkPassword(strOne,strTwo){
    if(strOne === strTwo){
      return true;
    }else{
      return false;
    }
  }

  useEffect(() => {
    // eventsBus.on("setType", handleType);
    eventsBus.on("showPassword", handleShowPassword);
  });

  return (
    <div className="login-container">
      <Doggo screen={'registration'} />

      <form onSubmit={submit}>
        <div className="input-container">
          <img
            className="icon icon-input"
            src={require("../../assets/images/mail.png")}
          ></img>
          <InputBox
            type={"text"}
            placeholder={"Inserisci nome..."}
            callbackChange={rotateFace}
            callbackFocus={activeFace}
            callbackBlur={resetFace}
          />
        </div>
        <div className="input-container">
          <img
            className="icon icon-input"
            src={require("../../assets/images/mail.png")}
          ></img>
          <InputBox
            type={"text"}
            placeholder={"Inserisci cognome..."}
            callbackChange={rotateFace}
            callbackFocus={activeFace}
            callbackBlur={resetFace}
          />
        </div>
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
        <div className="input-container">
          <img
            className="icon icon-input"
            src={require("../../assets/images/mail.png")}
          ></img>
          <InputBox
            type={"number"}
            placeholder={"Inserisci telefono..."}
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
        <div className="input-container password-container">
          <div className="flex">
            <img
              className="icon icon-input"
              src={require("../../assets/images/password.png")}
            />
            <InputBox
              type={state.type}
              placeholder={"Conferma password..."}
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
        <button className="button">Registrati</button>
      </form>
    </div>
  );
}
export default Register;
