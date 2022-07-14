import React from "react";
import Select from "react-select";

const CustomSelect = ({ label, onChange, options }) => (
  <div>
    <h1>{label}</h1>
    <Select
      options={options}
      defaultValue={options[2]}
      onChange={onChange}
    ></Select>
  </div>
);

export default CustomSelect;
