import { Box, Paper } from "@material-ui/core"
import React from "react"

const CardInfoImage = ({
  item = {},
}) => {
  return (
    <>
      <Box p={2} justifyContent={"center"}>
        <Paper>
          <img
            src={`${item.img}`}
            srcSet={`${item.img}`}
            alt={item.title}
            width={400}
            loading="lazy"
          />
        </Paper>
      </Box>
    </>
  )
}

export default CardInfoImage