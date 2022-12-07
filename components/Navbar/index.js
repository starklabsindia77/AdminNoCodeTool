import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { menu } from "../../DataJS/Menu";
import { Box, List, Typography } from "@mui/material";
import Listitemmenu from "../../theme/List/Listitemmenu";

import { makeStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Link from "next/link";
import { useRouter } from "next/router";

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

export const Navbar = ({ setMenuDashboard }) => {
  const classes = useStyles();
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box className="pt-3 h-screen scrollbar-thin scrollbar-thumb-slate-300 scrollbar-thumb-rounded-md">
      {menu.map((item) =>
        !item.items?.length > 0 || item.role ? (
          <div key={item.title}>
            {item.role ? (
              <Typography
                variant="subtitle2"
                className="pl-5 py-4 text-gray-600 font-semibold uppercase "
              >
                <span>{item.title}</span>
              </Typography>
            ) : (
              <Link
                href={`${item.link}`}
                onClick={() => setMenuDashboard(false)}
              >
                <ListItem button className="">
                  <ListItemIcon
                    style={{
                      color: router.asPath == item.link && "#2b4feb",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    className={
                      router.asPath == item.link
                        ? "text-mainColor"
                        : "text-gray-500"
                    }
                  />
                </ListItem>
              </Link>
            )}
          </div>
        ) : (
          <Listitemmenu item={item} />
        )
      )}
    </Box>
  );
};
