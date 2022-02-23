import React, { useState, useRef } from 'react'
import { 
    makeStyles,
    AppBar,
    Toolbar,
    Typography,
    Button,
    Grid,
    Avatar,
 } from '@material-ui/core'
import LongMenu from '../molecules/LongMenu';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "50px",
  },
}));

const userData = {
  userId: "yUGP79BPN7",
  img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
  companyName: '株式会社Breakfast',
  sectionPosition: '営業部 副部長',
  nameLast: 'Hoge',
  nameFirst: 'Huga',
  mail: "hoge@huga.com",
  companyTel: "090-0000-0000",
  width: '40%',
}

const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false)
  const anchorRef = useRef(null)
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }
  const handleClose = (e) => {
    if (anchorRef.current && anchorRef.current.contains(e.target)) {
      return;
    }
    setOpen(false)
  }

  const actions = [
    {
      title: "自分の名刺一覧",
      color: "inherit",
      to: `/myCards`,
    },
    {
      title: "ログアウト",
      color: "error",
      onClick: () => {},
    },
  ]

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
              <Button
                color="inherit"
                variant='text'
                onClick={handleToggle}
                ref={anchorRef}
              >
                <Avatar style={{width: 24, height: 24, marginRight: 16}}>{"山"}</Avatar>
                <Typography>
                  {"user"}さん
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <LongMenu 
        open={open}
        actions={actions}
        anchorEl={anchorRef.current}
        item={userData}
        handleClose={handleClose}
      />
    </>
  )
}
export default Header