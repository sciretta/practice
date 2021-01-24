import * as React from "react"
import * as ReactDOM from "react-dom"
import App from "./App"
import StoreProvider from "./store/index"


ReactDOM.render(
	<StoreProvider>
	  <App/>
	</StoreProvider>,
	document.getElementById('root')
)
