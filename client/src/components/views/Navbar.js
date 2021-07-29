import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  Typography,
  AppBar,
  Tabs,
  Tab,
  IconButton,
  Menu,
  MenuItem,
  Hidden,
  CssBaseline,
  Grid,
  Toolbar,
} from "@material-ui/core";
import MenuTwoToneIcon from "@material-ui/icons/MenuTwoTone";

const Navbar = () => {
  const history = useHistory();
  const [value, setValue] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push(newValue);
  };

  const options = ["About Us", "Our Services", "Jobs", "Contact Us"];

  const ITEM_HEIGHT = 48;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Grid container spacing={1}>
          <Hidden xsDown>
            <Grid item xs={6} sm={2}>
              <Toolbar>
                <Typography variant="h6">
                  <a href="/">CompanyName</a>
                </Typography>
              </Toolbar>
            </Grid>
            <Grid item xs={6} sm={10}>
              <Toolbar>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="secondary"
                  textColor="inherit"
                  variant="scrollable"
                >
                  <Tab label="About Us" value="/aboutus" />
                  <Tab label="Services" value="/clients" />
                  <Tab label="Jobs" />
                  <Tab label="Contact Us" value="/contactus" />
                </Tabs>
              </Toolbar>
            </Grid>
          </Hidden>
          <Hidden smUp>
            <Grid item xs={10} sm={10}>
              <Toolbar>
                <Typography variant="h6">CompanyName</Typography>
              </Toolbar>
            </Grid>
            <Grid item xs={2} sm={2}>
              <div>
                <IconButton
                  aria-label="more"
                  aria-controls="long-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <MenuTwoToneIcon color="inherit" />
                </IconButton>
                <Menu
                  id="long-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: "20ch",
                    },
                  }}
                >
                  {options.map((option) => (
                    <MenuItem
                      key={option}
                      selected={option === "About Us"}
                      onClick={handleClose}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            </Grid>
          </Hidden>
        </Grid>
      </AppBar>
    </>
  );
};

Navbar.propTypes = {};

export default Navbar;
