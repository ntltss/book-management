import { Grid, Box, Typography, Divider, Button } from "@material-ui/core"
import { Check, Close } from "@material-ui/icons"
import React from "react"
import { Link, useParams } from "react-router-dom"
import CardInfoDetail from "./CardInfoDetail"
import CardInfoImage from "./CardInfoImage"

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
  const detailList = [
    {
      key: "会社名",
      value: itemData.companyName,
    },
    {
      key: "所属部署・職位",
      value: itemData.sectionPosition,
    },
    {
      key: "氏名",
      value: `${itemData.nameLast} ${itemData.nameFirst}`,
    },
    {
      key: "会社連絡先",
      value: itemData.companyTel,
    },
    {
      key: "メールアドレス",
      value: itemData.mail,
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
      <Box pt={3} px={6}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <CardInfoImage item={itemData}/>
          </Grid>
          <Grid item xs={6}>
            <CardInfoDetail items={detailList}/>
          </Grid>
        </Grid>
      </Box>
    </Box>
    </>
  )
}

export default Edit