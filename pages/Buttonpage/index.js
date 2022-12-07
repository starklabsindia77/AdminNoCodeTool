import { Box, Button, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Codeblock from "../../components/Codeblock";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { HexColorPicker } from "react-colorful";

function index() {
  const [Data, setdata] = useState({
    Text: "",
    color: "#aabbcc",
    bg: "black",
    px: 10,
    width: 10,
    height: 10,
    BorderRadius: 10,
  });

  const [Color, setColor] = useState(false);
  const [bgColor, setbgColor] = useState(false);
  // const [PXchange, setPXchange] = useState(false);

  return (
    <Grid container className="min-h-screen py-5 ">
      <Grid container xs={8}>
        <Grid xs={12} className="flex justify-center items-center">
          <Box>
            <Button
              style={{
                color: `${Data.color}`,
                backgroundColor: `${Data.bg}`,
                fontSize: `${Data.px}px`,
                width: `${Data.width}px`,
                height: `${Data.height}px`,
                borderRadius: `${Data.BorderRadius}px`,
              }}
            >
              {Data.Text}
            </Button>
          </Box>
        </Grid>
        <Grid xs={12}>
          <Box className="max-w-4xl">
            <Codeblock
              box
              code={`
              <Button 
              style={{ color: ${Data.color}, 
              backgroundColor: ${Data.bg}, 
              fontSize: ${Data.px || 0}px, 
              width:${Data.width || 0}px,
              height:${Data.height || 0}px, 
              borderRadius: ${Data.BorderRadius}px
             }}>
            ${Data.Text}
              </Button>
          `}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        xs={4}
        className="overflow-y-scroll max-h-screen py-10 scrollbar-thumb-rounded-md scrollbar-track-transparent scrollbar-thumb-slate-300 scrollbar-thin"
      >
        {/* <Grid container> */}
        <Grid item xs={6}>
          <Box
            onClick={() => setColor(!Color)}
            onMouseLeave={() => setColor(false)}
            className="bg-slate-300 flex justify-center items-center h-28 rounded-xl m-5 cursor-pointer group "
          >
            {!Color ? (
              <ColorLensIcon
                fontSize="large"
                className="group-hover:scale-125 group-hover:transition-all"
              />
            ) : (
              <HexColorPicker
                style={{ width: 200, height: 120 }}
                color={Data.color}
                onChange={(e) => setdata((prev) => ({ ...prev, color: e }))}
              />
            )}
          </Box>
          <Typography
            variant="inherit"
            className=" flex justify-center text-lg font-semibold"
          >
            Color
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Box
            onClick={() => setbgColor(!bgColor)}
            onMouseLeave={() => setbgColor(false)}
            className="bg-slate-300 flex justify-center items-center h-28 rounded-xl m-5 cursor-pointer group "
          >
            {!bgColor ? (
              <ColorLensIcon
                fontSize="large"
                className="group-hover:scale-125 group-hover:transition-all"
              />
            ) : (
              <HexColorPicker
                style={{ width: 200, height: 120 }}
                color={Data.bg}
                onChange={(e) => setdata((prev) => ({ ...prev, bg: e }))}
              />
            )}
          </Box>
          <Typography
            variant="inherit"
            className=" flex justify-center text-lg font-semibold"
          >
            BackgroundColor
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Box
            // onClick={() => setPXchange(!PXchange)}
            // onMouseLeave={() => setPXchange(false)}
            className="bg-slate-300 flex justify-center items-center h-28 rounded-xl m-5 cursor-pointer group "
          >
            <input
              type="text"
              className="h-24 w-40 bg-transparent outline-none text-center text-xl"
              placeholder="FontSize Enter..."
              value={Data.Text}
              onChange={(e) =>
                e.target.value?.length < 25 &&
                setdata((prev) => ({
                  ...prev,
                  Text: `${e.target.value}`,
                }))
              }
            />
          </Box>
          <Typography
            variant="inherit"
            className=" flex justify-center text-lg font-semibold"
          >
            Text
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Box
            // onClick={() => setPXchange(!PXchange)}
            // onMouseLeave={() => setPXchange(false)}
            className="bg-slate-300 flex justify-center items-center h-28 rounded-xl m-5 cursor-pointer group "
          >
            <input
              type="text"
              className="h-24 bg-transparent outline-none text-center text-xl"
              placeholder="FontSize Enter..."
              value={Data.px}
              onChange={(e) =>
                e.target.value?.length < 3 &&
                setdata((prev) => ({
                  ...prev,
                  px: `${e.target.value}`,
                }))
              }
            />
          </Box>
          <Typography
            variant="inherit"
            className=" flex justify-center text-lg font-semibold"
          >
            FontSize in PX
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Box
            // onClick={() => setPXchange(!PXchange)}
            // onMouseLeave={() => setPXchange(false)}
            className="bg-slate-300 flex justify-center items-center h-28 rounded-xl m-5 cursor-pointer group "
          >
            <input
              type="text"
              className="h-24 bg-transparent outline-none text-center text-xl"
              placeholder="Text..."
              value={Data.width}
              onChange={(e) =>
                e.target.value?.length < 4 &&
                setdata((prev) => ({
                  ...prev,
                  width: `${e.target.value}`,
                }))
              }
            />
          </Box>
          <Typography
            variant="inherit"
            className=" flex justify-center text-lg font-semibold"
          >
            Width in PX
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Box
            // onClick={() => setPXchange(!PXchange)}
            // onMouseLeave={() => setPXchange(false)}
            className="bg-slate-300 flex justify-center items-center h-28 rounded-xl m-5 cursor-pointer group "
          >
            <input
              type="text"
              className="h-24 bg-transparent outline-none text-center text-xl"
              placeholder="FontSize Enter..."
              value={Data.height}
              onChange={(e) =>
                e.target.value?.length < 4 &&
                setdata((prev) => ({
                  ...prev,
                  height: `${e.target.value}`,
                }))
              }
            />
          </Box>
          <Typography
            variant="inherit"
            className=" flex justify-center text-lg font-semibold"
          >
            Height in PX
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Box
            // onClick={() => setPXchange(!PXchange)}
            // onMouseLeave={() => setPXchange(false)}
            className="bg-slate-300 flex justify-center items-center h-28 rounded-xl m-5 cursor-pointer group "
          >
            <input
              type="text"
              className="h-24 bg-transparent outline-none text-center text-xl"
              placeholder="FontSize Enter..."
              value={Data.BorderRadius}
              onChange={(e) =>
                e.target.value?.length < 3 &&
                setdata((prev) => ({
                  ...prev,
                  BorderRadius: `${e.target.value}`,
                }))
              }
            />
          </Box>
          <Typography
            variant="inherit"
            className=" flex justify-center text-lg font-semibold"
          >
            BorderRadius in PX
          </Typography>
        </Grid>

        {/* </Grid> */}
      </Grid>
    </Grid>
  );
}

export default index;
