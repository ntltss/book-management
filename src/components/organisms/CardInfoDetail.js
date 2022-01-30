import {
  Box,
  Paper,
  Typography,
} from "@material-ui/core"
import React from "react"

const CardInfoDetail = ({
  item = {},
}) => {
  return (
    <>
      <Box p={2} justifyContent={"center"}>
        <Paper>
          <Box pl={3} py={1}>
            <Typography variant="subtitle2">{item.author}</Typography>
          </Box>
          <Box pl={3} py={1}>
            <Typography variant="subtitle2">{item.title}</Typography>
          </Box>
          <Box pl={3} py={1}>
            <Typography variant="subtitle2">{item.companyTel}</Typography>
          </Box>
          <Box pl={3} py={1}>
            <Typography variant="subtitle2">{item.mail}</Typography>
          </Box>
        </Paper>
      </Box>
    </>
  )
}

export default CardInfoDetail