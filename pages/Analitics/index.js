import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import CardItem from "../../components/Card";
import { DoughnutChat } from "../../components/Card/DoughnutChat";
import { GroupChat } from "../../components/Card/GroupChat";
import LineChat from "../../components/Card/LineChat";
import { VerticalBar } from "../../components/Card/VerticalBar";

function Analitics() {
  return (
    <Grid container className="">
      <Grid item xs={6}>
        <LineChat />
      </Grid>
      <Grid item className="" xs={6}>
        <VerticalBar />
      </Grid>
      <Grid item className="" xs={5}>
        <DoughnutChat />
      </Grid>
      <Grid item className="" xs={7}>
        <GroupChat />
      </Grid>
    </Grid>
  );
}

export default Analitics;
