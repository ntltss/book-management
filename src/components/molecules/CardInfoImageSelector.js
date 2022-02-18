import { Button } from "@material-ui/core"
import { PictureInPicture } from "@material-ui/icons"
import React from "react"
import CardInfoImage from "../organisms/CardInfoImage"

const CardInfoImageSelector = ({
  image = "", 
  setImage = () => {},
}) => {
  return (
    <>
      <CardInfoImage img={image}/>
        <Button variant="outlined" component="label" endIcon={<PictureInPicture />}>
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
    </>
  )
}

export default CardInfoImageSelector