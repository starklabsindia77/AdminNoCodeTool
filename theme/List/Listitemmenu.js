import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React, { useState } from "react";

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

function Listitemmenu({ item }) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div component="nav" key={item.title}>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText className=" text-gray-500 " primary={item.title} />
        {open ? <ExpandLess /> : <ExpandMore className=" text-gray-500 " />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item.items.map((item) => (
            <ListItem button className={classes.nested}>
              <ListItemText
                className=" text-gray-500 "
                secondary={item.title}
              />
              {/* <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText>
                      <Menu items={item} />
                    </ListItemText> */}
            </ListItem>
          ))}
        </List>
      </Collapse>
    </div>
  );
}

export default Listitemmenu;
