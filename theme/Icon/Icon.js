import { IconButton } from "@material-ui/core";
import React from "react";

function Icon(props) {
  const { Icon, size, color, OpentoClick, OpenValue } = props;
  return (
    <IconButton onClick={() => OpentoClick(!OpenValue)}>
      <Icon size={size || 10} style={{ color: color }} />
    </IconButton>
  );
}

export default Icon;
