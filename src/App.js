import { useState } from 'react';

import InputBox from './components/ui/func components/inputs/InputBox';

import './App.css';


function App() {

  const [showPassword, setShowPassword] = useState(false);
  const [type, setType] = useState('password');
  const [cssClassPaw, setCssClassPaw] = useState('');
  const [cssClassFace, setcssClassFace] = useState('');
  const [inputLength, setInputLength] = useState(0)

  function submit(e) {
    e.preventDefault()
  }

  //function to show password and activate animations
  function showPass() {
    setShowPassword(!showPassword)
    if (cssClassPaw == 'over-eye-paw-from-input' || cssClassPaw == 'over-eye-paw-from-under-eye') {
      setCssClassPaw('under-eye-paw-from-over-eye')
    }
    setType('text')
  }

  //function to hide password and animations
  function hidePass() {
    setShowPassword(!showPassword)
    if (cssClassPaw === 'under-eye-paw-from-over-eye' || cssClassPaw === 'under-eye-paw-from-input') {
      setCssClassPaw('over-eye-paw-from-under-eye')
    }
    setType('password')
  }

  //set inputLenght to init face animation
  function rotateFace(e) {
    setInputLength(15 - e.target.value.length)
  }

  //function to activate face rotation
  function activeFace() {
    setcssClassFace('activeFace')
    if (cssClassPaw == 'over-eye-paw-from-input' || cssClassPaw == 'over-eye-paw-from-under-eye') {
      setCssClassPaw('input-from-over-eye-paw')
    }
    setInputLength(15)
  }

  //function to reset face rotation
  function resetFace() {
    setcssClassFace('notActiveFace')
    setInputLength(0)
  }

  //useless function
  function setPassword() { }

  //function to activate paw animation when input focus
  function activePaw() {
    if (!showPassword) {
      setCssClassPaw('over-eye-paw-from-input')
    } else {
      setCssClassPaw('under-eye-paw-from-input')
    }
  }

  //function to disactivate paw animation when input box is empty
  function disactivePaw(e) {
    if (e.target.value.length === 0) {
      setCssClassPaw('input-from-over-eye-paw')
    }
  }

  return (
    <div className="App">
      <div className="ears-container">
        <div className="ear ear-left"></div>
        <div className="ear ear-right"></div>
      </div>

      <div
        className={` ${cssClassFace} face`}
        style={{
          transform: `rotate(${inputLength}deg)`
        }}
      >
        <div className="eyes-container">
          <div className="eye eye-left"><div className="pupil"></div></div>
          <div className="eye eye-right"><div className="pupil"></div></div>
        </div>

        <div className="nose-container">
          <div className="nose"></div>
          <div className="point"></div>
        </div>

        <div className='mouth-container'>
          <div className='smile'></div>
          <div className='mouth'></div>
          <div className='tongue'><div className='tongue-line'></div></div>
        </div>

      </div>

      <div className='paw-container'>
        <div className={`${cssClassPaw} paw left-paw`}>
          <div className='finger side-finger'></div>
          <div className='finger middle-finger'></div>
          <div className='finger side-finger'></div>
        </div>
        <div className={`${cssClassPaw} paw right-paw`}>
          <div className='finger side-finger'></div>
          <div className='finger middle-finger'></div>
          <div className='finger side-finger'></div>
        </div>
      </div>

      <form onSubmit={submit}>
        <div className="input-container">
          <img className='icon icon-input' src={require('./assets/images/mail.png')}></img>
          <InputBox
            type={'email'}
            placeholder={'Inserisci email...'}
            callbackChange={rotateFace}
            callbackFocus={activeFace}
            callbackBlur={resetFace}
          />
        </div>

        <div className="input-container password-container">
          <div className="flex">
            <img className='icon icon-input' src={require('./assets/images/password.png')} />
            <InputBox
              type={type}
              placeholder={'Inserisci password...'}
              callbackChange={setPassword}
              callbackFocus={activePaw}
              callbackBlur={disactivePaw}
            />
          </div>
          {
            !showPassword ?
              <img className='icon icon-eye' src={require('./assets/images/eye-slash.png')} onClick={showPass} />
              : <img className='icon icon-eye' src={require('./assets/images/eye.png')} onClick={hidePass} />
          }
        </div>
        <button className='button'>Log In</button>
      </form>
      <div className='footer-buttons'>
        <button><img src={require('./assets/images/chat.png')} /></button>
        <button><img src={require('./assets/images/wifi.png')} /></button>
        <button><img src={require('./assets/images/paw.png')} /></button>
      </div>

    </div>
  )
}

export default App;
