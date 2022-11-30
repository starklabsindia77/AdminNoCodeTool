import React, { useState } from "react";

import { Box } from "@material-ui/core";
import dynamic from "next/dynamic";
import { Radio, Typography } from "@mui/material";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
//   Legend,
// } from "chart.js";
// import { Line } from "react-chartjs-2";
// import faker from "faker";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
//   Legend
// );
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

function LineChat() {
  const [selectedValue, setSelectvalue] = useState("smooth");

  function handleChange(e) {
    setSelectvalue(e.target.value);
  }

  const options = {
    stroke: {
      curve: selectedValue,
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
      name: "Series A",
      data: [14, 2, 30, 45, 25, 20, 38, 4.6],
    },
    {
      name: "Series B",
      data: [20, 29, 37, 36, 44, 45, 50, 58],
    },
  ];
  // const data = {
  //   labels,
  //   datasets: [
  //     {
  //       fill: true,
  //       label: "Dataset 2",
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       borderColor: "rgb(53, 162, 235)",
  //       backgroundColor: "rgba(53, 162, 235, 0.5)",
  //     },
  //   ],
  // };

  return (
    <Box className="bg-white m-5 p-10 rounded-lg shadow-sm hover:shadow-2xl transition-all hover:scale-105">
      {/* <Line options={options} width={100} height={40} data={data} /> */}
      <Typography
        variant="inherit"
        className="pb-5 font-semibold text-2xl font-mono"
      >
        Line Chart
      </Typography>
      <Box className="flex ">
        <Box className="flex pr-3">
          <Radio
            checked={selectedValue === "smooth"}
            onChange={handleChange}
            sx={{
              "& .MuiSvgIcon-root": {
                fontSize: 18,
              },
            }}
            value="smooth"
            name="radio-buttons"
            inputProps={{ "aria-label": "A" }}
          />
          <Typography variant="inherit" className="pl-1">
            smooth
          </Typography>
        </Box>
        <Box className="flex pr-3">
          <Radio
            checked={selectedValue === "straight"}
            onChange={handleChange}
            sx={{
              "& .MuiSvgIcon-root": {
                fontSize: 18,
              },
            }}
            value="straight"
            name="radio-buttons"
            inputProps={{ "aria-label": "B" }}
          />
          <Typography variant="inherit" className="pl-1">
            straight
          </Typography>
        </Box>
        <Box className="flex">
          <Radio
            checked={selectedValue === "stepline"}
            onChange={handleChange}
            sx={{
              "& .MuiSvgIcon-root": {
                fontSize: 18,
              },
            }}
            value="stepline"
            name="radio-buttons"
            inputProps={{ "aria-label": "C" }}
          />
          <Typography variant="inherit" className="pl-1">
            stepline
          </Typography>
        </Box>
      </Box>

      <Chart
        options={options}
        series={series}
        type="line"
        // width={500}
        height={250}
      />
    </Box>
  );
}

export default LineChat;
