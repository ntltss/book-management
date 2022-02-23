import {
  Box,
  Grid,
  Typography,
  Divider, 
  Fab
} from "@material-ui/core"
import { Add } from "@material-ui/icons"
import React from "react"
import BusinessCard from "../molecules/BusinessCard"
const actions = [
  {
    title: "詳細を見る",
    color: "inherit",
    to: "/cards",
  },
  {
    title: "名刺を削除",
    color: "error",
    onClick: () => {},
  },
]

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
              <BusinessCard actions={actions} item={item} key={item.title}/>
            ))}
          </Grid>
        </Box>
      </Box>
      <Fab
        color="primary"
        style={{
          position: "fixed",
          top: "70px",
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
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    width: '40%',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
    width: '40%',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
    width: '40%',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    width: '40%',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    width: '40%',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    width: '40%',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
    width: '40%',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
    width: '40%',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    width: '40%',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
    width: '40%',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
    width: '40%',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    width: '40%',
  },
];

export default List