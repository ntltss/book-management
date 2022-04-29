import React, { useRef, useState, useEffect } from "react";
import GenericTemplate from "../templates/GenericTemplate";
import LongMenu from "../templates/LongMenu";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { IconButton } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import { grey } from "@material-ui/core/colors";
import { Box, Grid, Typography, Divider, Fab } from "@material-ui/core";

const createData = (name, category, weight, price) => {
  return { name, category, weight, price };
};
const createBookList = (bookId, title, author, price, isbnCode) => {
  return { bookId, title, author, price, isbnCode };
};
let bookList = [];

const rows = [
  createData("チョコレート", "お菓子", 100, 120),
  createData("ケーキ", "お菓子", 400, 480),
  createData("りんご", "フルーツ", 500, 360),
  createData("バナナ", "フルーツ", 200, 300),
];

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ProductPage = ({ item = {}, cardVariant = "" }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [bookList2, setBookList2] = useState([]);
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
      // to: `/${cardVariant}/${item.cardId}`,
    },
    {
      title: "名刺を削除",
      color: "error",
      onClick: () => {},
    },
  ];

  useEffect(() => {
    fetch("http://localhost:8082/bookshelf/api/book")
      .then((res) => res.json())
      .then((json) => {
        bookList = [];
        json.map((json) => bookList.push(json));

        setBookList2(bookList);
      });
  }, []);

  return (
    <GenericTemplate title="商品ページ">
      {console.log("bookList", bookList)}
      <Box px={6} pt={8}>
        <Box py={3}>
          <Typography variant="h6">あなたの名刺</Typography>
        </Box>
        <Divider />
        <Box p={2}>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            spacing={3}
          >
            {rows.map((row) => (
              <>
                <Typography>{row.name}</Typography>
                <IconButton
                  id={`info about ${item.title}`}
                  aria-label={`info about ${item.title}`}
                  // ref={anchorRef}
                  onClick={handleToggle}
                >
                  {console.log(anchorRef)}
                  <MoreVert style={{ color: grey[600] }} />
                </IconButton>
              </>
            ))}
          </Grid>
        </Box>
      </Box>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>タイトル</TableCell>
              <TableCell align="left">著者</TableCell>
              <TableCell align="right">価格（円）</TableCell>
              <TableCell align="right">ISIN CODE</TableCell>
              <TableCell align="right">バージョン</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookList.map((bookList) => (
              <TableRow key={bookList.bookId}>
                <TableCell component="th" scope="bookList">
                  {bookList.title}
                </TableCell>
                <TableCell align="left">{bookList.author}</TableCell>
                <TableCell align="center">{bookList.price}</TableCell>
                <TableCell align="center">{bookList.isbnCode}</TableCell>
                <TableCell align="center">{bookList.version}</TableCell>
                <TableCell align="right">
                  <IconButton
                    id={`info about ${item.title}`}
                    aria-label={`info about ${item.title}`}
                    ref={anchorRef}
                    onClick={handleToggle}
                  >
                    <MoreVert style={{ color: grey[600] }} />
                  </IconButton>
                  <LongMenu
                    anchorEl={anchorRef.current}
                    actions={actions}
                    open={open}
                    item={item}
                    handleClose={handleClose}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <LongMenu
        anchorEl={anchorRef.current}
        actions={actions}
        open={open}
        item={item}
        handleClose={handleClose}
      />
    </GenericTemplate>
  );
};

export default ProductPage;
