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
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { MoreVert } from "@material-ui/icons";
import LongMenu from "./LongMenu";

const BusinessBook = ({ item = {}, cardVariant = "" }) => {
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
      to: `/${cardVariant}/${item.cardId}`,
    },
    {
      title: "名刺を削除",
      color: "error",
      onClick: () => {},
    },
  ];

  return (
    <>
      <Grid item key={item.img}>
        <Paper>
          <Card style={{ backgroundColor: grey[50] }} key={item.img}>
            <CardHeader
              action={
                <IconButton
                  id={`info about ${item.title}`}
                  aria-label={`info about ${item.title}`}
                  ref={anchorRef}
                  onClick={handleToggle}
                >
                  <MoreVert style={{ color: grey[600] }} />
                </IconButton>
              }
              title={<Typography>{item.title}</Typography>}
              subheader={<Typography>{item.author}</Typography>}
            />
            <Divider />
            <CardContent>
              <img
                src={`${item.img}`}
                srcSet={`${item.img}`}
                alt={item.title}
                width={300}
                loading="lazy"
              />
            </CardContent>
          </Card>
        </Paper>
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
