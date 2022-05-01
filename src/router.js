import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Backdrop } from "@material-ui/core";

const Login = lazy(() => import("./components/pages/Login"));
const Account = lazy(() => import("./components/pages/Account"));
const CardList = lazy(() => import("./components/pages/CardList"));
const BookAdd = lazy(() => import("./components/pages/BookAdd"));
const CardDetail = lazy(() => import("./components/pages/CardDetail"));
const CardEdit = lazy(() => import("./components/pages/CardEdit"));

const App = () => {
  return (
    <>
      <Router>
        <Suspense fallback={<Backdrop open={true} />}>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/account" element={<Account />} />
            <Route exact path="/account" element={<Account />} />
            <Route exact path="/cards" element={<CardList />} />
            <Route exact path="/books/add" element={<BookAdd />} />
            <Route exact path="/cards/:cardId" element={<CardDetail />} />
            <Route exact path="/cards/:cardId/edit" element={<CardEdit />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};

export default App;
