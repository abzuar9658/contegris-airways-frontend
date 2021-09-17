import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";

import FlightDetails from "./Flights/FlightDetails";
import Booking from "./Booking/Booking";
import Navbar from "./Navbar/Navbar";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/flight">
            <FlightDetails />
          </Route>
          <Route path="/bookings">
            <Booking />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
