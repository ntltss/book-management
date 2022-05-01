import { Box, Grid, Paper, TextField, Typography } from "@material-ui/core";
import React from "react";

const BookInfoEdit = ({ items = {} }) => {
  return (
    <>
      <Paper>
        <Box py={4}>
          <Grid container>
            <Grid item>
              {items.map((item) => (
                <Box px={4}>
                  <Grid
                    container
                    spacing={2}
                    justify="space-between"
                    alignItems="center"
                  >
                    <Grid item>
                      <Typography variant="subtitle2">{item.key}</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        variant="outlined"
                        value={item.value}
                        onChange={(e) => {
                          item.setValue(e.target.value);
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
  );
};

export default BookInfoEdit;
