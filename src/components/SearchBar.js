import React from 'react';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

function SearchBar() {

  return (
    <div>
      <TextField
        size="small"
      />
      <IconButton>
        <SearchIcon />
      </IconButton>
    </div>
  );
}

export default SearchBar;
