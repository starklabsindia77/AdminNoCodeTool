import React from "react";

import { Avatar, Box, IconButton, Typography } from "@material-ui/core";
import { SearchRounded } from "@mui/icons-material";
import TuneIcon from "@mui/icons-material/Tune";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";

function MailHeader({ setHeaderOption, HeaderOptionIcon }) {
  return (
    <Box className="items-center flex px-5">
      <IconButton onClick={() => setHeaderOption((prev) => !prev)}>
        <HeaderOptionIcon />
      </IconButton>
      <Typography variant="inherit" className="text-lg px-2 tracking-widest">
        E-Mail
      </Typography>
      <Box className="flex flex-1 items-center bg-white my-3 rounded-xl ml-24 ">
        <IconButton>
          <SearchRounded />
        </IconButton>
        <input
          type="text"
          className="flex-1 bg-transparent outline-none"
          placeholder="Search"
        />
        <IconButton>
          <TuneIcon />
        </IconButton>
      </Box>
      <Box className="flex-1"></Box>
      <IconButton>
        <HelpOutlineIcon />
      </IconButton>
      <IconButton>
        <SettingsIcon />
      </IconButton>
      <IconButton>
        <Avatar
          className="cursor-pointer"
          src="{user?.picture}"
          //   onClick={() => logout({ returnTo: "http://localhost:3000/" })}
        />
      </IconButton>
    </Box>
  );
}

export default MailHeader;
