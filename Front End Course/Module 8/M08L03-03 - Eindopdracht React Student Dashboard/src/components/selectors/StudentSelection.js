import React from "react";
import SelectionInput from "./SelectionInput";

const StudentSelection = (props) => {
  const selectionInput = props.studenten.map((item) => {
    return (
      <SelectionInput
        key={item}
        selectName={item}
        selectText={item}
        selectChange={props.studentsChange}
      />
    );
  });
  return (
    <div className="StudentSelection">
      <p>Selectie Studenten:</p>
      {selectionInput}
    </div>
  );
};

export default StudentSelection;
