import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import LockIcon from "@material-ui/icons/Lock";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import EmailIcon from "@material-ui/icons/Email";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function SideNav() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link to="/userdashboard/user" style={{ color: "black" }}>
          <ListItem button>
            <ListItemIcon>
              <LockIcon style={{ color: " #371979" }} />
            </ListItemIcon>
            <ListItemText primary="Register" />
          </ListItem>
        </Link>
        <Link to="/userdashboard/user" style={{ color: "black" }}>
          <ListItem button>
            <ListItemIcon>
              <LockOpenIcon style={{ color: " #371979" }} />
            </ListItemIcon>
            <ListItemText primary="Login" />
          </ListItem>
        </Link>

        <ListItem button>
          <ListItemIcon>
            <PhoneAndroidIcon style={{ color: " #371979" }} />
          </ListItemIcon>
          <ListItemText primary="081........." />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <EmailIcon style={{ color: " #371979" }} />
          </ListItemIcon>
          <ListItemText primary="example@gmail.com" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(anchor, true)}
            style={{ color: "#371979" }}
          >
            <MenuIcon style={{ fontSize: "40px" }} />
          </IconButton>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
