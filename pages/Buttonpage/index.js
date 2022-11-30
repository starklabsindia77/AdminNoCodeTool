import { Box, Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import Codeblock from "../../components/Codeblock";

function index() {
  return (
    <Grid container className="min-h-screen py-5">
      <Grid item xs={12}>
        <Box>
          <Button variant="contained" color="primary">
            Text
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box className="max-w-4xl">
          <Codeblock
            box
            code={`<Button variant="contained" color="primary">
            Text
          </Button>}`}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default index;
