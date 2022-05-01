import { Box, Button } from "@material-ui/core"
import { Panorama } from "@material-ui/icons"
import React from "react"
import CardInfoImage from "../organisms/card/CardInfoImage"

const CardInfoImageSelector = ({
  image = "", 
  setImage = () => {},
}) => {
  return (
    <>
      <CardInfoImage img={image}/>
      <Box py={2}>
        <Button variant="contained" component="label" endIcon={<Panorama />}>
          画像を更新
          <input
            accept="image/*"
            id={"upload-button"}
            type="file"
            hidden
            onChange={async (event) => {
              const { files } = event.target
              setImage(window.URL.createObjectURL(files[0]))
            }}
          />
        </Button>
      </Box>        
    </>
  )
}

export default CardInfoImageSelector