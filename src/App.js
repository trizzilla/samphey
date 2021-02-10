import { BrowserRouter as Router, Route } from "react-router-dom";
import RegistrationFrom from "./Components/Form.component";

import Login from "./Components/Login.component";

function App() {
  return (
    <div className="App">
      <Login />
      <RegistrationFrom />
    </div>
  );
}

export default App;
