import { Box, Button } from "@material-ui/core";
import { Panorama } from "@material-ui/icons";
import React from "react";
import BookInfoImage from "../organisms/book/BookInfoImage";

const BookInfoImageSelector = ({ image = "", setImage = () => {} }) => {
  return (
    <>
      <BookInfoImage img={image} />
      <Box py={2}>
        <Button variant="contained" component="label" endIcon={<Panorama />}>
          画像を更新
          <input
            accept="image/*"
            id={"upload-button"}
            type="file"
            hidden
            onChange={async (event) => {
              const { files } = event.target;
              setImage(window.URL.createObjectURL(files[0]));
            }}
          />
        </Button>
      </Box>
    </>
  );
};

export default BookInfoImageSelector;
