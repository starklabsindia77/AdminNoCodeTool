import { ListItem, ListItemButton, ListItemIcon } from "@mui/material";
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
}) {
  return (
    <ListItem
      key={text}
      disablePadding
      sx={{ display: "block" }}
      onClick={() => OpentoClick(!OpenValue)}
    >
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
            mx: 0,
            py: 1,
            borderRadius: 10,
            backgroundColor: active ? "#2444d7" : "transparent",
          }}
        >
          <Icon Icon={icon} size={10} color={color} />
        </ListItemIcon>
        {listtext && (
          <ListItemText
            primary={text}
            sx={{ opacity: open ? 1 : 0, color: "white" }}
          />
        )}
      </ListItemButton>
    </ListItem>
  );
}

export default ListItems;
