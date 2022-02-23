import React from 'react'
import { 
    makeStyles,
    AppBar,
    Toolbar,
    Typography,
    Button,
    Grid,
    Avatar,
 } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "50px",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
        <>
      <AppBar position="fixed">
        <Toolbar className={classes.root}>
          <Grid container justify='space-between'>
            <Grid item>
              <Typography variant="h6">
                e名刺
              </Typography>
            </Grid>
            <Grid item>
              <Button color="inherit" variant='text'>
                <Avatar style={{width: 24, height: 24, marginRight: 16}}>{"山"}</Avatar>
                <Typography>
                  {"user"}さん
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      </>
  )
}
export default Header