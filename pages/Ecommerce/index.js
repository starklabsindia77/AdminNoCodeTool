import {
  alpha,
  Badge,
  Box,
  Collapse,
  Grid,
  IconButton,
  InputBase,
  styled,
  TextField,
  Typography,
  Slide,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Itemcard from "../../components/Card/Itemcard";
import CloseIcon from "@mui/icons-material/Close";
import CartItem from "./CartItem";
import { ecommercelist } from "../../redux/features/counter/ecommerceSlice";
import { useSelector } from "react-redux";

function Ecommerce({ data }) {
  console.log(data);
  const [OpenSearch, setOpenSearch] = useState(false);
  const [Searchvalue, setSearchvalue] = useState("");

  const [cartOpen, setcartOpen] = useState(false);
  const CartValue = useSelector((state) => ecommercelist(state));

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <Grid container className="p-3">
      <Grid
        item
        xs={12}
        className="bg-white px-5 rounded-xl border-2  shadow-sm flex items-center sticky top-0"
      >
        <Typography
          variant="inherit"
          className="flex-1 text-xl italic font-semibold tracking-wide text-mainColor"
        >
          Ecommerece
        </Typography>
        <Box className="flex items-center">
          <Collapse in={OpenSearch}>
            <Box className="flex items-center border-2 rounded-lg py-1">
              <SearchIcon className="mx-2" />
              <input
                placeholder="Search..."
                className=" outline-none px-1"
                type="text"
                value={Searchvalue}
                onChange={(e) => setSearchvalue(e.target.value)}
              ></input>
              {/* <IconButton
                className="cursor-pointer"
                onClick={() => setOpenSearch(!OpenSearch)}
              > */}
              <CloseIcon
                onClick={() => {
                  setOpenSearch(!OpenSearch);
                  setSearchvalue("");
                }}
                className="mx-2 cursor-pointer"
                color="action"
              />
              {/* </IconButton> */}
            </Box>
          </Collapse>

          {!OpenSearch && (
            <IconButton onClick={() => setOpenSearch(!OpenSearch)}>
              <SearchIcon />
            </IconButton>
          )}
          <IconButton onClick={() => setcartOpen((prev) => !prev)}>
            <Badge badgeContent={CartValue?.length} color="primary">
              <ShoppingBasketIcon />
            </Badge>
          </IconButton>
        </Box>
      </Grid>
      <Grid container>
        <Grid
          item
          xs={cartOpen ? 8 : 12}
          // className="bg-white px-5 rounded-xl border-2  shadow-sm flex items-center sticky top-0"
        >
          <Grid container>
            {data
              .filter((e) =>
                Searchvalue?.length > 0
                  ? e.title.toUpperCase().includes(Searchvalue.toUpperCase())
                  : e
              )
              .map((item) => (
                <Grid key={item.id} className="pt-5" item xs={cartOpen ? 6 : 4}>
                  <Itemcard item={item} />
                </Grid>
              ))}
          </Grid>
        </Grid>
        <Grid xs={4} className={`${!cartOpen && "hidden"}`}>
          <Slide direction="left" in={cartOpen}>
            <Box className="bg-white w-full h-screen my-5 p-5 rounded-xl">
              <CartItem />
            </Box>
          </Slide>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Ecommerce;

export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
