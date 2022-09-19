// import './inputbox.css'
import React from "react";
import PropTypes from "prop-types";

function InputBox(props) {
  function changeInput(e) {
    if (!!props.callbackChange) {
      props.callbackChange(e);
    }
  }

  function handleFocus(e) {
    if (!!props.callbackFocus) props.callbackFocus(e);
  }

  function handleBlur(e) {
    if (!!props.callbackBlur) props.callbackBlur(e);
  }

  return (
    <input
      name="props.name"
      className={props.className}
      type={props.type}
      placeholder={props.placeholder}
      onChange={changeInput}
      onFocus={handleFocus}
      onBlur={handleBlur}
      required
    />
  );
}

InputBox.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  callbackChange: PropTypes.func.isRequired,
};

InputBox.defaultProps = {
  name:'text',
  type: "text",
  placeholder: "Inserisci",
};

export default InputBox;
