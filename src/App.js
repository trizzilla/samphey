import { BrowserRouter as Router, Route } from "react-router-dom";
import RegistrationFrom from "./Components/Form.component";

import Login from "./Components/Login.component";
import NavApp from "./Components/Nav/nav.component";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Login} />
        <Route path="/register" component={RegistrationFrom} />
        <Route path="/nav" component={NavApp} />
      </div>
    </Router>
  );
}

export default App;
