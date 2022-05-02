import { Grid, Box, Typography, Divider, Button } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import BookInfoDetail from "./BookInfoDetail";
import BookInfoImage from "./BookInfoImage";

const itemData = {
  cardId: "m8HmMRHRXi",
  img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  companyName: "株式会社Breakfast",
  sectionPosition: "営業部 副部長",
  nameLast: "Hoge",
  nameFirst: "Huga",
  mail: "hoge@huga.com",
  companyTel: "090-0000-0000",
  width: "40%",
};

const BookInfo = () => {
  const { bookId } = useParams();
  console.log(bookId);

  let bookList = [];
  const [detailList, setDetailList] = useState([]);
  const [bookList2, setBookList2] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8082/bookshelf/api/book")
      .then((res) => res.json())
      .then((json) => {
        bookList = [];
        console.log("fetch_start1");
        json.map((json) => bookList.push(json));

        setBookList2(bookList);
        console.log(bookList);
        console.log("bookList[0]", bookList[bookId - 1].bookId);

        setDetailList([
          {
            key: "bookId",
            value: bookList[bookId - 1].bookId,
          },
          {
            key: "タイトル",
            value: bookList[bookId - 1].title,
          },
          {
            key: "著者",
            value: bookList[bookId - 1].author,
          },
          {
            key: "価格(円)",
            value: bookList[bookId - 1].price,
          },
          {
            key: "ISINコード",
            value: bookList[bookId - 1].isbnCode,
          },
          {
            key: "バージョン",
            value: bookList[bookId - 1].version,
          },
        ]);
      });
  }, []);

  const deleteBook = () => {
    console.log("delete!");
    fetch(`http://localhost:8082/bookshelf/api/book/${bookId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => {});
  };

  return (
    <>
      <Box pt={8} px={3}>
        <Box p={3}>
          <Grid container justify="space-between">
            <Grid item>
              <Typography variant="h6">書籍の詳細</Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={3} justify="flex-end">
                <Grid item>
                  <Button
                    color="primary"
                    variant="contained"
                    endIcon={<Edit />}
                    component={Link}
                    to={`/books/${bookId}/edit`}
                  >
                    編集する
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    color="secondary"
                    variant="contained"
                    endIcon={<Delete />}
                    onClick={deleteBook}
                  >
                    削除する
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
              <BookInfoImage img={itemData.img} />
            </Grid>
            <Grid item>
              <BookInfoDetail items={detailList} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default BookInfo;
