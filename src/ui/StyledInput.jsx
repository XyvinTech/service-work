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
          borderRadius: "4px",
          "& .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #EBEBEB",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #EBEBEB",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #EBEBEB",
          },
          "& .MuiInputBase-input": {
            color: backgroundColor ? "#000" : "#000",
            padding: "14px", border: "1px solid #EBEBEB",
          },
        }}
      />
    </FormControl>
  );
};

export default StyledInput;
