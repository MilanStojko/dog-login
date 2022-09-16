import InputBox from "../../components/ui/func components/inputs/InputBox";

function Login(props) {
  function submit(e) {
    e.preventDefault();
  }

  function handlePass() {
    props.callbackPass();
  }

  return (
    <form onSubmit={submit}>
      <div className="input-container">
        <img
          className="icon icon-input"
          src={require("./assets/images/mail.png")}
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
            type={type}
            placeholder={"Inserisci password..."}
            callbackChange={setPassword}
            callbackFocus={activePaw}
            callbackBlur={disactivePaw}
          />
        </div>
        {!showPassword ? (
          <img
            className="icon icon-eye"
            src={require("../../assets/images/eye-slash.png")}
            onClick={handlePass}
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
  );
}
export default Login;
