import { Grid, Box, Typography, Divider, Button } from "@material-ui/core"
import { Delete } from "@material-ui/icons"
import React from "react"
import CardInfoImage from "./CardInfoImage"

const itemData = {
  cardId: "m8HmMRHRXi",
  img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
  width: '40%',
}

const CardInfo = () => {
  return (
    <>
    <Box pt={8} px={3}>
      <Box p={3}>
        <Grid container justify="space-between">
          <Grid item>
            <Typography variant="h6">あなたの名刺の詳細</Typography>
          </Grid>
          <Grid item>
            <Button
              color="secondary"
              variant="contained"
              endIcon={<Delete/>}
            >
              削除する
            </Button>
          </Grid>
        </Grid>
      </Box>
      
      <Divider />
      <Box py={3} display={"flex"} justifyContent={"center"}>
        <CardInfoImage img={itemData.img}/>
      </Box>
    </Box>
    </>
  )
}

export default CardInfo