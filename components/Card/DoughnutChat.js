import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Box, Checkbox, FormControlLabel } from "@material-ui/core";
import dynamic from "next/dynamic";
import { Grid, Typography } from "@mui/material";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export function DoughnutChat() {
  const [expandOnClick, setexpandOnClick] = useState(false);
  const [labels, setlabels] = useState(false);
  const [DataLabels, setDataLabels] = useState(false);

  const options = {
    plotOptions: {
      pie: {
        expandOnClick: expandOnClick,
        donut: {
          labels: {
            show: labels,
            name: {
              show: true,
              fontSize: "16px",
              fontWeight: "bold",
              color: "Black",
              offsetY: 0,
            },
            value: {
              show: true,
              fontSize: "16px",
              fontWeight: "bold",
              color: "green",
              offsetY: 5,
            },
          },
        },
      },
    },
    series: [44, 55, 13, 33],
    labels: ["Apple", "Mango", "Orange", "Watermelon"],
    dataLabels: {
      enabled: DataLabels,
    },
  };

  return (
    <Box className="bg-white m-5 p-10 rounded-lg shadow-sm hover:shadow-2xl transition-all hover:scale-105">
      <Typography
        variant="inherit"
        className="pb-5 font-semibold text-2xl font-mono"
      >
        Donut Chart
      </Typography>
      <Box className="flex items-center">
        <Grid container>
          <Grid xs={4}>
            <Box className="flex items-center">
              <Checkbox
                checked={expandOnClick}
                onClick={() => setexpandOnClick(!expandOnClick)}
                size="small"
              />
              <Typography variant="inherit">expand OnClick</Typography>
            </Box>
          </Grid>
          <Grid xs={4}>
            <Box className="flex items-center">
              <Checkbox
                checked={labels}
                size="small"
                onClick={() => setlabels(!labels)}
              />
              <Typography variant="inherit">labels</Typography>
            </Box>
          </Grid>
          <Grid xs={4}>
            <Box className="flex items-center">
              <Checkbox
                checked={DataLabels}
                size="small"
                onClick={() => setDataLabels(!DataLabels)}
              />
              <Typography variant="inherit">Data Labels</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Chart
        options={options}
        series={options.series}
        type="donut"
        // width={400}
        height={310}
      />
    </Box>
  );
}
