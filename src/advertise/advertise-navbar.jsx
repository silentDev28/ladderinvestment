import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Logo from "../images/ladderinvestment.png";
import SideNav from "./side-drawer";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function AdvertismentNavbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ background: "white" }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <img
              src={Logo}
              alt="logo"
              style={{ width: "150px", height: "70px", position: "absolute" }}
            ></img>
          </Typography>

          <SideNav />
        </Toolbar>
      </AppBar>
    </div>
  );
}
