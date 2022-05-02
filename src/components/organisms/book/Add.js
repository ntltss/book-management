import { Grid, Box, Typography, Divider, Button } from "@material-ui/core";
import { Check, Close } from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import BookInfoEdit from "./BookInfoEdit";
import BookInfoImageSelector from "../../molecules/BookInfoImageSelector";

const Add = () => {
  const [image, setImage] = useState("");
  const [bookId2, setBookId] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [isbnCode, setIsbnCode] = useState("");
  const [version, setVersion] = useState("");

  const detailList = [
    {
      key: "bookId",
      value: bookId2,
      setValue: setBookId,
    },
    {
      key: "タイトル",
      value: title,
      setValue: setTitle,
    },
    {
      key: "著者",
      value: author,
      setValue: setAuthor,
    },
    {
      key: "価格(円)",
      value: price,
      setValue: setPrice,
    },
    {
      key: "ISINコード",
      value: isbnCode,
      setValue: setIsbnCode,
    },
    {
      key: "バージョン",
      value: version,
      setValue: setVersion,
    },
  ];

  const insertBook = () => {
    console.log("Insert!");
    console.log("title", title);
    fetch("http://localhost:8082/bookshelf/api/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        bookId: bookId2,
        title: title,
        author: author,
        price: price,
        isbnCode: isbnCode,
        version: version,
      }),
      //TODO:入力簡略化用（不要になったら削除すること）
      // fetch("http://localhost:8082/bookshelf/api/book", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     bookId: 6,
      //     title: "この一冊で全部わかるネットワークの基本!!",
      //     author: "福永勇二",
      //     price: 1848,
      //     isbnCode: "4797386673",
      //     version: "2022-05-02T16:40:30.548719",
      //   }),
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
              <Typography variant="h6">書籍を追加</Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={3} justify="flex-end">
                <Grid item>
                  <Button
                    color="primary"
                    variant="contained"
                    endIcon={<Check />}
                    onClick={insertBook}
                  >
                    追加する
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    color="secondary"
                    variant="contained"
                    endIcon={<Close />}
                    component={Link}
                    to={"/books"}
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

export default Add;
