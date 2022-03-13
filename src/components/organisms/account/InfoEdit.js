import {
  Box,
  Grid,
  IconButton,
  OutlinedInput,
  Paper,
  Typography,
} from "@material-ui/core"
import { Visibility, VisibilityOff } from "@material-ui/icons"
import React from "react"

const InfoEdit = ({
  items = {},
  isShowPassword = {},
  handleClickVisibility = () => {},
}) => {

  return (
    <>
      <Paper>
        <Box py={4}>
          <Grid container>
            <Grid item>
              {items.map((item) => (
                <Box px={4}>
                  <Grid container spacing={2} justify="space-between" alignItems="center">
                    <Grid item>
                      <Typography
                        variant="subtitle2"
                      >
                        {item.key}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <OutlinedInput
                        value={item.value}
                        type={
                          item.key === "パスワード" &&
                          !isShowPassword
                            ? "password" 
                            : "text"
                        }
                        endAdornment={
                          item.key === "パスワード"
                            ? (
                                <IconButton
                                  onClick={handleClickVisibility}
                                >
                                  {isShowPassword
                                    ? <VisibilityOff />
                                    : <Visibility />
                                  }
                                </IconButton>
                            )
                            : null
                        }
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

export default InfoEdit