import React from "react";
import BookList from "./components/pages/BookList";
import { Auth } from "./store/auth";

const App = () => {
  return (
    <>
      <Auth>
        <BookList />
      </Auth>
    </>
  );
};

export default App;
