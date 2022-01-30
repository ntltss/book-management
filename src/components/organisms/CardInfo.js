import { Grid, Box, Divider } from "@material-ui/core"
import React from "react"
import CardInfoDetail from "./CardInfoDetail"
import CardInfoImage from "./CardInfoImage"

const itemData = {
  img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
  title: 'Breakfast',
  author: '@bkristastucchio',
  mail: "hoge@huga.com",
  companyTel: "090-0000-0000",
  width: '40%',
}

const CardInfo = () => {
  return (
    <>
    <Box pt={8}>
      <Grid container justifyContent="center">
        <Grid item xs={5}>
          <CardInfoImage item={itemData}/>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={7} md={6}>
          <CardInfoDetail item={itemData}/>
        </Grid>
      </Grid>
    </Box>
    </>
  )
}

export default CardInfo