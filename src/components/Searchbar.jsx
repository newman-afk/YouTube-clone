import { IconButton, Paper } from "@mui/material";
import Search from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Paper
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        navigate(`/search/${searchTerm}`);
      }}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default Searchbar;
