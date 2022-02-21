import {
  Box,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core"
import React from "react"

const CardInfoEdit = ({
  items = {},
}) => {
  return (
    <>
      <Paper>
        <Box pl={2}>
          <Grid container>
            <Grid item>
              {items.map((item) => (
                <Box pl={4} py={2}>
                  <Grid container spacing={2} justify="space-between" alignItems="center">
                    <Grid item>
                      <Typography
                        variant="subtitle2"
                      >
                        {item.key}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        variant="outlined"
                        value={item.value}
                        onChange={(e) => {
                          item.setValue(e.target.value)
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </>
  )
}

export default CardInfoEdit