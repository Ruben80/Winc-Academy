import React from "react";

const SelectionInput = (props) => {
  const handleChange = (event) => {
    props.selectChange(props.selectName, event.target.checked);
  };
  return (
    <label className="SelectionInputCheckbox">
      <input type="checkbox" onClick={handleChange} defaultChecked></input>
      {props.selectText}
    </label>
  );
};

export default SelectionInput;
