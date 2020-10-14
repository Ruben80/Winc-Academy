import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Data from "./data/Data";
import Home from "./views/Home";
import StudentOverview from "./views/StudentOverview.js";
import StudentView from "./views/StudentView";

const studentsFilter = (studentData) => {
  const studenten = [];
  studentData.forEach((item) => {
    if (!studenten.includes(item.name)) {
      studenten.push(item.name);
    }
  });
  return studenten;
};

const weekFilter = (studentData, filter) => {
  return studentData.filter((item) => {
    return item.assignment.includes(filter);
  });
};

function Container() {
  const studenten = studentsFilter(Data);
  const studentData = weekFilter(Data, "W1");
  return (
    <Router>
      <header className="App-header">
        <h1>Studenten Dashboard</h1>
      </header>
      <nav className="Nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/studenten">Studenten</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Switch>
          <Route
            path="/studenten/student/:name"
            render={(props) => (
              <StudentView {...props} studentData={studentData} />
            )}
          />
          <Route path="/studenten/">
            <StudentOverview studenten={studenten} />
          </Route>
          <Route path="/">
            <Home studentData={studentData} studenten={studenten} />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default Container;
