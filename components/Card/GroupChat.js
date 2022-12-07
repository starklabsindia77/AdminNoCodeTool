import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Box, Checkbox, FormControlLabel } from "@material-ui/core";
import dynamic from "next/dynamic";
import { Grid, Typography } from "@mui/material";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export function GroupChat() {
  const [FillColor, setFillColor] = useState(false);

  const options = {
    plotOptions: {
      candlestick: {
        wick: {
          useFillColor: FillColor,
        },
      },
    },
    series: [
      {
        data: [
          {
            x: new Date("2016, 01, 01"),
            y: [51.98, 56.29, 51.59, 53.85],
          },
          {
            x: new Date("2016, 02, 01"),
            y: [53.66, 54.99, 51.35, 52.95],
          },
          {
            x: new Date("2016, 08, 01"),
            y: [52.76, 57.35, 52.15, 57.03],
          },
          {
            x: new Date("2016, 01, 01"),
            y: [51.98, 56.29, 51.59, 53.85],
          },
          {
            x: new Date("2016, 02, 01"),
            y: [53.66, 54.99, 51.35, 52.95],
          },
          {
            x: new Date("2016, 08, 01"),
            y: [52.76, 57.35, 52.15, 57.03],
          },
          {
            x: new Date("2016, 02, 01"),
            y: [53.66, 54.99, 51.35, 52.95],
          },
          {
            x: new Date("2016, 08, 01"),
            y: [52.76, 57.35, 52.15, 57.03],
          },
          {
            x: new Date("2016, 01, 01"),
            y: [51.98, 56.29, 51.59, 53.85],
          },
        ],
      },
    ],
  };

  return (
    <Box className="bg-white m-5 p-10 rounded-lg shadow-sm hover:shadow-2xl transition-all hover:scale-105">
      <Typography
        variant="inherit"
        className="pb-5 font-semibold text-2xl font-mono"
      >
        Candle stick Chart
      </Typography>
      <Box className="flex items-center">
        <Grid container>
          <Grid xs={4}>
            <Box className="flex items-center">
              <Checkbox
                checked={FillColor}
                onClick={() => setFillColor(!FillColor)}
                size="small"
              />
              <Typography variant="subtitle2" className="text-xs">
                Fill Color
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Chart
        options={options}
        series={options.series}
        type="candlestick"
        // width={550}
        height={310}
      />
    </Box>
  );
}
