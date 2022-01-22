import React from "react"
import { Box, Grid, Card, CardContent, IconButton, Typography, CardHeader, Divider } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"
import { InfoOutlined } from "@material-ui/icons"

const List = () => {
  return (
    <>
    <Box px={12} py={10}>
      <Typography style={{fontSize: 20}}>あなたが現在所持している名刺</Typography>
    </Box>
    <Box>
    <Grid container alignItems="center" justifyContent="center" spacing={3}>
      {itemData.map((item) => (
        <>
        <Grid item key={item.img}>
          <Card style={{backgroundColor: grey[300]}} key={item.img}>
            <CardHeader action={
              <IconButton
                aria-label={`info about ${item.title}`}
              >
                <InfoOutlined style={{ color: grey[50] }}/>
              </IconButton>
            } 
            title={
              <Typography>
                {item.title}
              </Typography>
            }
            subheader={
              <Typography>
                {item.author}
              </Typography>
            }
            />
            <Divider />
            <CardContent>
              <img
                src={`${item.img}`}
                srcSet={`${item.img}`}
                alt={item.title}
                width={300}
                loading="lazy"
              />
            </CardContent>
          </Card>
        </Grid>
        </>
      ))}
    </Grid>
    </Box>
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