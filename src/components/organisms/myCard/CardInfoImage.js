import { Card, CardMedia } from "@material-ui/core"
import React from "react"

const CardInfoImage = ({
  img = {},
}) => {
  return (
    <>
      <Card style={{maxWidth: 640}}>
        <CardMedia
          component="img"
          alt="card"
          image={`${img}`}
        />
      </Card>
    </>
  )
}

export default CardInfoImage