import React, { useState } from "react";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";
import { Box } from "@material-ui/core";
import dynamic from "next/dynamic";
import { Checkbox, Grid, Typography } from "@mui/material";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: "top",
//     },
//     title: {
//       display: true,
//       text: "Chart.js Bar Chart",
//     },
//   },
// };

export function VerticalBar() {
  const [horizontal, sethorizontal] = useState(false);

  const options = {
    plotOptions: {
      bar: {
        horizontal: horizontal,
      },
    },
    chart: {
      id: "apexchart-example",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };

  const series = [
    {
      data: [
        {
          x: "TEAM A",
          y: [40, 51.98, 56.29, 59.59, 63.85],
        },
        {
          x: "TEAM B",
          y: [43.66, 44.99, 51.35, 52.95, 59.42],
        },
        {
          x: "TEAM C",
          y: [52.76, 57.35, 59.15, 63.03, 67.98],
        },
        {
          x: "TEAM D",
          y: [43.66, 44.99, 51.35, 52.95, 59.42],
        },
        {
          x: "TEAM E",
          y: [52.76, 20, 60.15, 63.03, 67.98],
        },
        {
          x: "TEAM F",
          y: [43.66, 44.99, 51.35, 52.95, 59.42],
        },
        {
          x: "TEAM G",
          y: [52.76, 57.35, 59.15, 63.03, 67.98],
        },
        {
          x: "TEAM H",
          y: [43.66, 44.99, 51.35, 52.95, 59.42],
        },
      ],
    },
  ];

  return (
    <Box className="bg-white m-5 p-10 rounded-lg shadow-sm hover:shadow-2xl transition-all hover:scale-105">
      <Typography
        variant="inherit"
        className="pb-5 font-semibold text-2xl font-mono"
      >
        boxPlot Chart
      </Typography>
      <Grid container>
        <Grid xs={4}>
          <Box className="flex items-center">
            <Checkbox
              checked={horizontal}
              onClick={() => sethorizontal(!horizontal)}
              size="small"
            />
            <Typography variant="inherit" className="pl-1">
              {horizontal ? "Horizontal" : "Vertical"}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Chart
        options={options}
        series={series}
        type="boxPlot"
        // width={500}
        height={250}
      />
    </Box>
  );
}
