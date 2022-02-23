import {
  Grid,
  Box,
  Typography,
  Divider,
  Button,
} from "@material-ui/core"
import { Check, Close } from "@material-ui/icons"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import CardInfoEdit from "./CardInfoEdit"
import CardInfoImageSelector from "../molecules/CardInfoImageSelector"

const Add = () => {
  const [image, setImage] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [sectionPosition, setSectionPosition] = useState("")
  const [nameLast, setNameLast] = useState("")
  const [nameFirst, setNameFirst] = useState("")
  const [companyTel, setCompanyTel] = useState("")
  const [mail, setMail] = useState("")

  const detailList = [
    {
      key: "会社名",
      value: companyName,
      setValue: setCompanyName
    },
    {
      key: "所属部署・職位",
      value: sectionPosition,
      setValue: setSectionPosition
    },
    {
      key: "氏名（姓）",
      value: nameLast,
      setValue: setNameLast,
    },
    {
      key: "氏名（名）",
      value: nameFirst,
      setValue: setNameFirst,
    },
    {
      key: "会社連絡先",
      value: companyTel,
      setValue: setCompanyTel
    },
    {
      key: "メールアドレス",
      value: mail,
      setValue: setMail
    },
  ]

  return (
    <>
    <Box pt={8} px={3}>
      <Box p={3}>
        <Grid container justify="space-between">
          <Grid item>
            <Typography variant="h6">名刺を追加</Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={3} justify="flex-end">
              <Grid item>
                <Button
                  color="primary"
                  variant="contained"
                  endIcon={<Check/>}
                >
                  追加する
                </Button>
              </Grid>
              <Grid item>
                <Button
                  color="secondary"
                  variant="contained"
                  endIcon={<Close/>}
                  component={Link}
                  to={"/cards"}
                >
                  やめる
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      
      <Divider />
      <Box pt={3}>
        <Grid container spacing={3}  justify="space-evenly">
          <Grid item>
            <CardInfoImageSelector image={image} setImage={setImage}/>
          </Grid>
          <Grid item>
            <CardInfoEdit items={detailList}/>
          </Grid>
        </Grid>
      </Box>
    </Box>
    </>
  )
}

export default Add