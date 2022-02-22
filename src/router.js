import React, { lazy, Suspense } from "react"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CardEdit from "./components/pages/CardEdit"
import CardAdd from "./components/pages/CardAdd"

const Login = lazy(() => import("./components/pages/Login"))
const CardList = lazy(() => import("./components/pages/CardList"))
const CardDetail = lazy(() => import("./components/pages/CardDetail"))

const App = () => {
  return (
    <>
      <Router>
        <Suspense fallback={<></>}>
          <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route exact path="/cards" element={<CardList/>} />
            <Route exact path="/cards/add" element={<CardAdd/>} />
            <Route exact path="/cards/:cardId" element={<CardDetail/>} />
            <Route exact path="/cards/:cardId/edit" element={<CardEdit/>} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App