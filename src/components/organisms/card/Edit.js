import {
  Grid,
  Box,
  Typography,
  Divider,
  Button,
} from "@material-ui/core"
import { Check, Close } from "@material-ui/icons"
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import CardInfoEdit from "./CardInfoEdit"
import CardInfoImageSelector from "../../../components/molecules/CardInfoImageSelector"

const itemData = {
  img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
  companyName: '株式会社Breakfast',
  sectionPosition: '営業部 副部長',
  nameLast: 'Hoge',
  nameFirst: 'Huga',
  mail: "hoge@huga.com",
  companyTel: "090-0000-0000",
  width: '40%',
}

const Edit = () => {
  const { cardId } = useParams()

  const [image, setImage] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [sectionPosition, setSectionPosition] = useState("")
  const [nameLast, setNameLast] = useState("")
  const [nameFirst, setNameFirst] = useState("")
  const [companyTel, setCompanyTel] = useState("")
  const [mail, setMail] = useState("")

  useEffect(() => {
    setImage(itemData.img)
    setCompanyName(itemData.companyName)
    setSectionPosition(itemData.sectionPosition)
    setNameLast(itemData.nameLast)
    setNameFirst(itemData.nameFirst)
    setCompanyTel(itemData.companyTel)
    setMail(itemData.mail)
  }, [])

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
            <Typography variant="h6">名刺を編集</Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={3} justify="flex-end">
              <Grid item>
                <Button
                  color="primary"
                  variant="contained"
                  endIcon={<Check/>}
                >
                  更新する
                </Button>
              </Grid>
              <Grid item>
                <Button
                  color="secondary"
                  variant="contained"
                  endIcon={<Close/>}
                  component={Link}
                  to={`/cards/${cardId}`}
                >
                  取り消す
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      
      <Divider />
      <Box pt={3}>
        <Grid container spacing={3} justify="space-evenly">
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

export default Edit