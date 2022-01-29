import React, { lazy, Suspense } from "react"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

const Login = lazy(() => import("./component/pages/Login"))
const CardList = lazy(() => import("./component/pages/CardList"))

const App = () => {
  return (
    <>
      <Router>
        <Suspense fallback={<></>}>
          <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route exact path="/cards" element={<CardList/>} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App