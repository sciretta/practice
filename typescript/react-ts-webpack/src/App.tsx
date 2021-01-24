import * as React from "react"
import {Route, BrowserRouter as Router, Switch} from "react-router-dom"
import { useStore , useDispatch , TypeActions } from "./store/index"
import Home from "./components/Home"
import Favorites from "./components/Favorites"

export default function App(): JSX.Element {
  return(
    <Router>
      <h1>{"Pagina de capitulos de rick & morty"}</h1>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favs" component={Favorites} />
        </Switch>
      </div>
    </Router>
  )
}
