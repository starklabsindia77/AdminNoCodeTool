import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Image from "next/image";
import { Box } from "@material-ui/core";
import { Button } from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Itemcard({ item, setCartValue }) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card
      className="group shadow-lg hover:shadow-mainColor transition-all"
      sx={{ maxWidth: 345 }}
    >
      {/* <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      /> */}
      {/* <CardMedia
        component="img"
        width={200}
        height="100px"
        image={item.image}
        alt="Paella dish"
      /> */}
      <Typography
        variant="inherit"
        className="p-3 font-semibold italic text-gray-600 group-hover:text-mainColor transition-all"
      >
        {}
        {item.title?.length > 35
          ? item.title?.slice(0, 35) + "..."
          : item.title}
      </Typography>
      <Box className="flex justify-center items-center h-52">
        <Image
          className="group-hover:scale-125 transition-all"
          width={120}
          height={100}
          src={item.image}
          alt={item.image}
        />
      </Box>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item.description?.length > 70
            ? item.description?.slice(0, 70) + "..."
            : item.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Box className="flex-1">
          <IconButton
            aria-label="add to favorites"
            onClick={() => setExpanded(!expanded)}
          >
            <FavoriteIcon color={expanded ? "error" : ""} />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </Box>
        <button
          onClick={() => setCartValue((prev) => prev + 1)}
          className="bg-mainColor transition-all hover:scale-105 hover:border-mainColor text-white font-semibold py-1 px-10 rounded-full"
        >
          + to Cart
        </button>
      </CardActions>
    </Card>
  );
}
