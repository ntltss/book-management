import {
  Box,
  Grid,
  Typography,
  Divider, 
  Fab
} from "@material-ui/core"
import { Add } from "@material-ui/icons"
import React from "react"
import BusinessCard from "../../molecules/BusinessCard"

const List = () => {
  return (
    <>
      <Box px={6} pt={8}>
        <Box py={3}>
          <Typography variant="h6">所持している名刺</Typography>
        </Box>
        <Divider />
        <Box p={2}>
          <Grid container alignItems="center" justifyContent="center" spacing={3}>
            {itemData.map((item) => (
              <BusinessCard item={item} key={item.title}/>
            ))}
          </Grid>
        </Box>
      </Box>
      <Fab
        color="primary"
        style={{
          position: "fixed",
          bottom: "70px",
          right: "30px",
        }}
        href={"/cards/add"}
      >
        <Add />
      </Fab>
    </>
  )
}

const itemData = [
  {
    cardId: "m8HmMRHRXi",
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    width: '40%',
  },
  {
    cardId: "DHp8dfcDi5",
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
    width: '40%',
  },
  {
    cardId: "aAVQsgz2AC",
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
    width: '40%',
  },
  {
    cardId: "XWfh3ma6pV",
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    width: '40%',
  },
  {
    cardId: "pQ8tRKMaFB",
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    width: '40%',
  },
  {
    cardId: "ZkLzFZ3hFk",
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    width: '40%',
  },
  {
    cardId: "iBMf9WA9Ym",
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
    width: '40%',
  },
  {
    cardId: "6zuF9HfK47",
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
    width: '40%',
  },
  {
    cardId: "VRrsMcEESE",
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    width: '40%',
  },
];

export default List