import React from "react";
import "./Header.css";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import categories from "../data/catergory.js";

const Header = () => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      mode: "dark",
    },
  });

  return (
    <div className="header">
      <span className="title">Word Hunt</span>
      <div className="inputs">
      <ThemeProvider theme={darkTheme}>
        <TextField id="standard-basic" label="Standard" />
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          helperText="Please select Language"
        >
          {
            categories.map((option)=>(
<MenuItem key={option}>{option.value}</MenuItem>
            ))}
          
          
        </TextField>
      </ThemeProvider>
    </div></div>
  );
};

export default Header;
