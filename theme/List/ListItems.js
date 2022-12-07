import { Box } from "@material-ui/core";
import { ListItem, ListItemButton, ListItemIcon, Tooltip } from "@mui/material";
import React from "react";
import Icon from "../Icon/Icon";

function ListItems({
  text,
  size,
  icon,
  listtext,
  open,
  color,
  active,
  OpentoClick,
  OpenValue,
  title,
}) {
  return (
    <Tooltip title={title} placement="right" arrow>
      <Box className="py-5">
        <Icon
          Icon={icon}
          OpentoClick={OpentoClick}
          OpenValue={OpenValue}
          size={10}
          color={color}
        />
      </Box>
    </Tooltip>
  );
}

export default ListItems;
