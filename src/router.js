import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Backdrop } from "@material-ui/core";

const Login = lazy(() => import("./components/pages/Login"));
const Account = lazy(() => import("./components/pages/Account"));
const BookList = lazy(() => import("./components/pages/BookList"));
const BookAdd = lazy(() => import("./components/pages/BookAdd"));
const BookDetail = lazy(() => import("./components/pages/BookDetail"));
const BookEdit = lazy(() => import("./components/pages/BookEdit"));

const App = () => {
  return (
    <>
      <Router>
        <Suspense fallback={<Backdrop open={true} />}>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/account" element={<Account />} />
            <Route exact path="/account" element={<Account />} />
            <Route exact path="/cards" element={<BookList />} />
            <Route exact path="/books/add" element={<BookAdd />} />
            <Route exact path="/cards/:cardId" element={<BookDetail />} />
            <Route exact path="/cards/:cardId/edit" element={<BookEdit />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};

export default App;
