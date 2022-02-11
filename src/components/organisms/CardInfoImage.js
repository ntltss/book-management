import { Box, Paper } from "@material-ui/core"
import React from "react"

const CardInfoImage = ({
  item = {},
}) => {
  return (
    <>
      <Paper>
        <Box ml={4} py={4}>
          <img
            src={`${item.img}`}
            srcSet={`${item.img}`}
            alt={item.title}
            width={'90%'}
            loading="lazy"
          />
        </Box>
      </Paper>
    </>
  )
}

export default CardInfoImage