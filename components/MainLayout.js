import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header/Header";

export default function MainLayout({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <Grid container className="bg-gray-100">
      <Grid item xs={open ? 3 : 1}>
        <Header setOpen={setOpen} open={open} />
      </Grid>
      <Grid item xs={open ? 9 : 11}>
        {children}
        <Footer />
      </Grid>
    </Grid>
  );
}
