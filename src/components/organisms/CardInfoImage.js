import { Box, Paper } from "@material-ui/core"
import React from "react"

const CardInfoImage = ({
  img = {},
}) => {
  return (
    <>
      <Paper>
        <Box ml={4} py={4}>
          <img
            src={`${img}`}
            srcSet={`${img}`}
            alt={img}
            width={'90%'}
            loading="lazy"
          />
        </Box>
      </Paper>
    </>
  )
}

export default CardInfoImage