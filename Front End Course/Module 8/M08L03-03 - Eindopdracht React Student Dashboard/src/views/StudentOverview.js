import React from "react";
import { Link } from "react-router-dom";

const StudentOverview = (props) => {
  const links = props.studenten.map((item) => {
    const url = "/studenten/student/" + item;
    return (
      <li key={item}>
        <Link to={url}>{item}</Link>
      </li>
    );
  });

  return (
    <div className="StudentOverview">
      <h1>Studenten</h1>
      <div className="StudentOverviewButton">
        <ul className="StudentOverviewList">{links}</ul>
      </div>
    </div>
  );
};

export default StudentOverview;
