import { Box, Paper } from "@material-ui/core"
import React from "react"

const CardInfoImage = ({
  img = {},
}) => {
  return (
    <>
      <Paper>
        <Box mx={2} py={2} style={{maxWidth: 448}}>
          <img
            src={`${img}`}
            srcSet={`${img}`}
            alt={img}
            width={'100%'}
            loading="lazy"
          />
        </Box>
      </Paper>
    </>
  )
}

export default CardInfoImage