import { BrowserRouter as Router, Route } from "react-router-dom";
import RegistrationFrom from "./Components/Form.component";

import Login from "./Components/Login.component";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Login} />
        <Route path="/register" component={RegistrationFrom} />
      </div>
    </Router>
  );
}

export default App;
