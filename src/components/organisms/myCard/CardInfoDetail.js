import {
  Box,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core"
import React from "react"

const CardInfoDetail = ({
  items = {},
}) => {
  return (
    <>
      <Paper>
        <Box p={4}>
          <Grid container>
            <Grid item>
              {items.map((item) => (
                <Box py={2}>
                  <Typography variant="subtitle2">{item.key}</Typography>
                </Box>
              ))}
            </Grid>
            <Grid item>
              {items.map((item) => (
                <Box pl={4} py={2}>
                  <Typography variant="subtitle2">{item.value}</Typography>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </>
  )
}

export default CardInfoDetail