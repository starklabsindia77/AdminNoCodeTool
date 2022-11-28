import React from "react";

function Icon(props) {
  const { Icon, size, color } = props;
  return <Icon size={size || 10} style={{ color: color }} />;
}

export default Icon;
