
import { Routes, Route, Link } from "react-router-dom";

//screens
import SCREENS from "./routes/screensName";
import Login from "./screens/login/Login";
import Register from './screens/register/register';

//css
import "./App.css";


function App() {
 

  return (
    <div className="App">
      <Routes>
        <Route path={SCREENS.login} element={<Login />}/>
        <Route path={SCREENS.registration} element={<Register />}/>
      </Routes>

      
      {/* <Doggo /> */}
    </div>
  );
}

export default App;
