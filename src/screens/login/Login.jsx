import InputBox from "../../components/ui/func components/inputs/InputBox";
import Doggo from "../../components/ui/hook/doggo/Doggo";
import { Link, useNavigate,useLocation,useParams } from 'react-router-dom';
import {useState,useEffect} from 'react';
import eventsBus from "../../events/eventsBus";

function Login(props) {
  function submit(e) {
    e.preventDefault();
  }

  function showPass() {

    eventsBus.dispatch('showPass');
  }

  function hidePass() {
    eventsBus.dispatch('hidePass');
  }

  function handlePassword(){
    eventsBus.dispatch('handlePassword');
  }

  function activePaw(){
    eventsBus.dispatch('activePaw');
  }

  function disactivePaw(e){
    eventsBus.dispatch('disactivePaw',e);
  }

  function rotateFace(e){
    eventsBus.dispatch('rotateFace',e);
  }

  function activeFace(){
    eventsBus.dispatch('activeFace');
  }

  function resetFace(){
    eventsBus.dispatch('resetFace');
  }

  const [state,setState] = useState({
    type : 'password',
    showPassword : false,
  })


  function handleType(att){
    setState({
      ...state,
      type : att,
    })
  }

  function handleShowPassword(att){
    setState({
      ...state,
      showPassword : att,
    })
  }

  useEffect(()=>{
    eventsBus.on('setType',handleType);
    eventsBus.on('showPassword',handleShowPassword);

  },[])

 

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
    </div>
  );
}
export default Login;
