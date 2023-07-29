
import React from "react";
import { HashRouter,Switch, Route} from "react-router-dom";
// import MenuBar from "./components/menubar/Menubar";
import SignUp from "./components/program/SigninPage";
import Login from "./components/program/LoginPage";
// import DataPage from "./components/program/DataPage";
// import MenuBar from "./components/menubar/Menubar";
import MovieList from "./components/program/Datadisplay";
const App = () => {
  return (
    <HashRouter>
      {/* <MenuBar/> */}
      <Switch>
    
        <Route exact path="/" component={SignUp} />
        {/* <Link to="/login">Go to About Page</Link> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/moviedata" component={MovieList} />
        {/* <Route exact path="/menubar" component={MenuBar} /> */}
      </Switch>
  </HashRouter>
  
    
  );
};

export default App;
