import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import React from "react";

const StyledInput = ({ placeholder, backgroundColor,onChange }) => {
  return (
    <FormControl sx={{ width: "100%" }} variant="outlined">
      <OutlinedInput
        placeholder={placeholder}
        onChange={onChange} 
        sx={{
          width: "100%",
          padding: "2px",
          backgroundColor:"#EBEBEB",
          borderRadius: "8px",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "1px solid #EBEBEB",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#EBEBEB",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#EBEBEB",
          },
          "& .MuiInputBase-input": {
            color: backgroundColor ? "#000" : "#000",
            padding: "14px",
          },
        }}
      />
    </FormControl>
  );
};

export default StyledInput;
