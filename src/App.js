import React from "react";
import CardList from "./components/pages/BookList";
import { Auth } from "./store/auth";

const App = () => {
  return (
    <>
      <Auth>
        <CardList />
      </Auth>
    </>
  );
};

export default App;
