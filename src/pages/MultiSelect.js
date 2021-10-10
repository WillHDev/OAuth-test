import React, { Component, useState } from "react";

import makeAnimated from "react-select/animated";
import { colourOptions } from "./data.js";
import MySelect from "./MySelect.js";
import "./styles.css";
import { components } from "react-select";

const Option = props => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

const MultiValue = props => (
  <components.MultiValue {...props}>
    <span>{props.data.label}</span>
  </components.MultiValue>
);

const animatedComponents = makeAnimated();

const MultiSelect = () => {

    const [ option, setOption ] = useState({
        optionSelected: null
    });


  const handleChange = selected => {
    setOption({
      optionSelected: selected
    });
  };


    return (
      <MySelect
      className="MultiSelect"
        options={colourOptions}
        isMulti
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        components={{ Option, MultiValue, animatedComponents }}
        onChange={handleChange}
        allowSelectAll={true}
        value={option.optionSelected}
      />
    );
  }


  export default MultiSelect;