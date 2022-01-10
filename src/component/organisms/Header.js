import React from 'react'
import { 
    makeStyles,
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
 } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "30px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
        <>
      <AppBar position="fixed">
        <Toolbar className={classes.root}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            e名刺 -電子名刺システム-
          </Typography>
        </Toolbar>
      </AppBar>
      </>
  )
}
export default Header