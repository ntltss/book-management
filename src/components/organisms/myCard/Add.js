import {
  Grid,
  Box,
  Typography,
  Divider,
  Button,
} from "@material-ui/core"
import { Check, Close } from "@material-ui/icons"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import CardCreateField from "./CardCreateField"

const Add = () => {
  const [image, setImage] = useState("")

  const handleClickSubmit = () => {

  }

  return (
    <>
    <Box pt={8} px={3}>
      <Box p={3}>
        <Grid container justify="space-between">
          <Grid item>
            <Typography variant="h6">あなたの名刺を追加</Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={3} justify="flex-end">
              <Grid item>
                <Button
                  color="primary"
                  variant="contained"
                  endIcon={<Check/>}
                  onClick={handleClickSubmit}
                >
                  追加する
                </Button>
              </Grid>
              <Grid item>
                <Button
                  color="secondary"
                  variant="contained"
                  endIcon={<Close/>}
                  component={Link}
                  to={"/myCards"}
                >
                  やめる
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      
      <Divider />
      <Box px={5} py={3}>
        <CardCreateField setImage={setImage}/>
      </Box>
    </Box>
    </>
  )
}

export default Add