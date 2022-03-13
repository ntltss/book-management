import {
  Grid,
  Box,
  Typography,
  Divider,
  Button,
} from "@material-ui/core"
import { Check } from "@material-ui/icons"
import React, { useEffect, useState } from "react"
import InfoEdit from "./InfoEdit"

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

  const [nameLast, setNameLast] = useState("")
  const [nameFirst, setNameFirst] = useState("")
  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")

  const [isShowPassword, setIsShowPassword] = useState(false)

  useEffect(() => {
    setNameLast(itemData.nameLast)
    setNameFirst(itemData.nameFirst)
    setMail(itemData.mail)
    setPassword(itemData.password)
  }, [])

  const handleToggleVisibility = () => {
    setIsShowPassword((prev) => (!prev))
  }

  const detailList = [
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
      key: "メールアドレス",
      value: mail,
      setValue: setMail
    },
    {
      key: "パスワード",
      value: password,
      setValue: setPassword
    },
  ]

  return (
    <>
    <Box pt={8} px={3}>
      <Box p={3}>
        <Grid container justify="space-between">
          <Grid item>
            <Typography variant="h6">マイアカウント</Typography>
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
            </Grid>
          </Grid>
        </Grid>
      </Box>
      
      <Divider />
      <Box pt={3}>
        <Grid container spacing={3} justify="space-evenly">
          <Grid item>
            <InfoEdit
              items={detailList}
              isShowPassword={isShowPassword}
              handleClickVisibility={handleToggleVisibility}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
    </>
  )
}

export default Edit