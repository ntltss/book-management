import React from "react"
import CardList from "./component/pages/CardList";
import { Auth } from "./store/auth"

const App = () => {
  return(
    <>
      <Auth>
        <CardList />
      </Auth>
    </>
  )
}

export default App;
