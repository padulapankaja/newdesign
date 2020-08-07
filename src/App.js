import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
// import ProtectedRoute from "./ProtectedRoute";
import Questions from "./View/Questions/Questions";
import UploadFile from "./View/UploadFile/UploadFile";
import Landing from "./View/Landing/Landing";
import Dashboard from "./View/Dashboard/Dashboard";
import SortListing from "./View/SortListing/SortListing";
import Appraisal from "./View/Appraisal/Appraisal";
import ProjectAnalysis from "./View/ProjectAnalysis/ProjectAnalysis";
import Survey from "./View/Survey/Survey";
import Results from "./View/Results/Results";
import Login from "./View/Login/Login";
import Register from "./View/Register/Register";



import NewSideBard from "./View/Dashboard/NewSideBar";



class App extends Component {
  constructor() {
    super();
    this.state = {
      signedIn: "false",
    };
  }

  setSignIn = (state) => {
    this.setState({
      signedIn: state,
    });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              exact
              strict
              path="/"
              render={(props) => <Landing {...props} />}
            />
            <Route
              exact
              strict
              path="/questions"
              render={(props) => <Questions {...props} />}
            />
            <Route
              exact
              strict
              path="/appraisal"
              render={(props) => <Appraisal {...props} />}
            />
            <Route
              exact
              strict
              path="/survey/:id"
              render={(props) => <Survey {...props} />}
            />
            <Route
              exact
              strict
              path="/result/:id"
              render={(props) => <Results {...props} />}
            />
            <Route
              exact
              strict
              path="/projectanalysis"
              render={(props) => <ProjectAnalysis {...props} />}
            />
            <Route
              exact
              strict
              path="/getstarted"
              render={(props) => <UploadFile {...props} />}
            />
            <Route
              exact
              strict
              path="/sortlisting"
              render={(props) => <SortListing {...props} />}
            />
            <Route
              exact
              strict
              path="/dashboard"
              render={(props) => <NewSideBard {...props} />}
            />
            <Route
              exact
              strict
              path="/login"
              render={(props) => <Login {...props} />}
            />
            <Route
              exact
              strict
              path="/register"
              render={(props) => <Register {...props} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
