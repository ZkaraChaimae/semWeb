import React from 'react'
import { AppBar, IconButton, List, ListItem, ListItemText, Toolbar } from "@material-ui/core"
import { Home } from "@material-ui/icons"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`
  }
});

const MenuForm = () => {
  const classes = useStyles(); 
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Add code */}
        <IconButton edge="start" color="inherit" aria-label="home">
          <Home fontSize="large" />
        </IconButton>
        {/* Add code end */}
        <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
          <a href="pathhere1" key="title1" className={classes.navDisplayFlex}>
            <ListItem button>
              <ListItemText primary="title1" />
            </ListItem>
         </a>
         <a href="pathhere2" key="title2" className={classes.navDisplayFlex}>
            <ListItem button>
              <ListItemText primary="title2" />
            </ListItem>
         </a>
  </List>
      </Toolbar>
    </AppBar>
  )
};

export default MenuForm;