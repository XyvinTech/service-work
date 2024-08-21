"use client";
import React from "react";
import styled from "styled-components";
import Select from "react-select";
import { mont } from "@/theme";

const SelectContainer = styled.div`
  position: relative;
  width: 100%; /* Adjust width as needed */
`;

const StyledSelectField = ({
  placeholder,
  options,
  onChange,
  value,
  color,
  isMulti,
}) => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: "100%",
      padding: "8px",
      border: state.isFocused
        ? "none !important"
        : "0px solid #EBEBEB",
      borderRadius: "4px",
      backgroundColor: "#EBEBEB",
      color: color || "#000",
      boxShadow: state.isFocused ? "0 0 0 2px #fff" : "none",
      cursor: "pointer",
      fontFamily: mont.style.fontFamily,
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "transparent" : "transparent",
      color: state.isFocused ? "#FC8229" : "#000",
      cursor: "pointer",
      fontFamily: mont.style.fontFamily,
      ":active": {
        backgroundColor: "#EBEBEB",
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#EBEBEB",
      color: "#000",
      zIndex: 10,
      "@media (max-width: 600px)": {
        position: "relative",
      },
    }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: "200px",
      overflowY: "auto",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#000",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#B5B8C5",
    }),
  };

  return (
    <SelectContainer>
      <Select
        placeholder={placeholder}
        options={options}
        onChange={onChange}
        isMulti={isMulti}
        styles={customStyles}
        value={value}
      />
    </SelectContainer>
  );
};

export default StyledSelectField;
