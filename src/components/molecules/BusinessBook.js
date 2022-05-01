import React, { useRef, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  IconButton,
  Typography,
  CardHeader,
  Divider,
  Paper,
  Box,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { MoreVert } from "@material-ui/icons";
import LongMenu from "./LongMenu";

const BusinessBook = ({ item = {}, bookVariant = "" }) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (e) => {
    if (anchorRef.current && anchorRef.current.contains(e.target)) {
      return;
    }
    setOpen(false);
  };

  const actions = [
    {
      title: "詳細を見る",
      color: "inherit",
      to: `/${bookVariant}/${item.bookId}`,
    },
    {
      title: "書籍を削除",
      color: "error",
      onClick: () => {},
    },
  ];

  return (
    <>
      <Grid item key={item.img}>
        {/* <Paper> */}
        <Card style={{ backgroundColor: grey[50] }} key={item.img}>
          <CardContent>
            <Grid container justify="space-between">
              <Grid item>
                <Typography variant="h6">{item.title}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">{item.author}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">{item.price}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">{item.isbnCode}</Typography>
              </Grid>
              {/* <Grid item>
                  <Typography variant="h6">{item.version}</Typography>
                </Grid> */}
              <Grid item>
                <Grid container spacing={1} justify="flex-end">
                  <IconButton
                    id={`info about ${item.title}`}
                    aria-label={`info about ${item.title}`}
                    ref={anchorRef}
                    onClick={handleToggle}
                  >
                    <MoreVert style={{ color: grey[600] }} />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
          {/* TODO:ref={anchorRef}を先にコメントアウトしてから全体をコメントアウトするとなぜかうまくメニューが狙ったところに開く */}
          {/* <CardHeader
              action={
                <IconButton
                  id={`info about ${item.title}`}
                  aria-label={`info about ${item.title}`}
                  // ref={anchorRef}
                  onClick={handleToggle}
                >
                  <MoreVert style={{ color: grey[600] }} />
                </IconButton>
              }
              title={<Typography>{item.title}</Typography>}
              title2={<Typography>{item.cardId}</Typography>}
              subheader={<Typography>{item.author}</Typography>}
            /> */}
          <Divider />
          {/* <CardContent>
              <img
                src={`${item.img}`}
                srcSet={`${item.img}`}
                alt={item.title}
                width={300}
                loading="lazy"
              />
            </CardContent> */}
        </Card>
        {/* </Paper> */}
      </Grid>
      <LongMenu
        anchorEl={anchorRef.current}
        actions={actions}
        open={open}
        item={item}
        handleClose={handleClose}
      />
    </>
  );
};

export default BusinessBook;
