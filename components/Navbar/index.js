import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { menu } from "../../js/Menu";
import { Box, List, Typography } from "@mui/material";
import Listitemmenu from "../../theme/List/Listitemmenu";

import { makeStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export const Navbar = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box className="pt-3 ">
      {menu.map((item) =>
        !item.items?.length > 0 || item.role ? (
          <div key={item.title}>
            {item.role ? (
              <Typography
                variant="subtitle2"
                className="pl-5 py-4 text-gray-400 uppercase"
              >
                {item.title}
              </Typography>
            ) : (
              <ListItem button className="bg-slate-800">
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.title}
                  className=" text-gray-500 "
                />
              </ListItem>
            )}
          </div>
        ) : (
          <Listitemmenu item={item} />
        )
      )}
    </Box>
  );
};
