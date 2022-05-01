import { Grid, Box, Typography, Divider, Button } from "@material-ui/core";
import { Check, Close } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BookInfoEdit from "./BookInfoEdit";
import BookInfoImageSelector from "../../molecules/BookInfoImageSelector";

const itemData = {
  img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  companyName: "株式会社Breakfast",
  sectionPosition: "営業部 副部長",
  nameLast: "Hoge",
  nameFirst: "Huga",
  mail: "hoge@huga.com",
  companyTel: "090-0000-0000",
  width: "40%",
};

const Edit = () => {
  const { bookId } = useParams();

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [isbnCode, setIsbnCode] = useState("");
  const [version, setVersion] = useState("");

  let bookList = [];
  const [bookList2, setBookList2] = useState([]);
  const [detailList, setDetailList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8082/bookshelf/api/book")
      .then((res) => res.json())
      .then((json) => {
        bookList = [];
        console.log("fetch_start2");
        json.map((json) => bookList.push(json));
        console.log("edit_bookList_inside", bookList);
        setBookList2(bookList);

        setImage(itemData.img);
        console.log("edit_bookId", bookId);
        console.log("bookList[bookId - 1].title", bookList[bookId - 1].title);
        setTitle(bookList[bookId - 1].title);
        setAuthor(bookList[bookId - 1].author);
        setPrice(bookList[bookId - 1].price);
        setIsbnCode(bookList[bookId - 1].isbnCode);
        setVersion(bookList[bookId - 1].version);

        setDetailList([
          {
            key: "bookId",
            value: bookList[bookId - 1].bookId,
          },
          {
            key: "タイトル",
            value: bookList[bookId - 1].title,
            setValue: setTitle,
          },
          {
            key: "著者",
            value: bookList[bookId - 1].author,
            setValue: setAuthor,
          },
          {
            key: "価格(円)",
            value: bookList[bookId - 1].price,
            setValue: setPrice,
          },
          {
            key: "ISINコード",
            value: bookList[bookId - 1].isbnCode,
            setValue: setIsbnCode,
          },
          {
            key: "バージョン",
            value: bookList[bookId - 1].version,
            setValue: setVersion,
          },
        ]);
      });
  }, []);

  return (
    <>
      <Box pt={8} px={3}>
        <Box p={3}>
          <Grid container justify="space-between">
            <Grid item>
              <Typography variant="h6">書籍情報を編集</Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={3} justify="flex-end">
                <Grid item>
                  <Button
                    color="primary"
                    variant="contained"
                    endIcon={<Check />}
                  >
                    更新する
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    color="secondary"
                    variant="contained"
                    endIcon={<Close />}
                    component={Link}
                    to={`/books/${bookId}`}
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
              <BookInfoImageSelector image={image} setImage={setImage} />
            </Grid>
            <Grid item>
              <BookInfoEdit items={detailList} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Edit;
