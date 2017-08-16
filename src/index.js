import React from "react";
import ReactDOM from "react-dom";

import FormContainer from "./containers/form-container.js";
import HitListContainer from "./containers/hit-list-container.js";
import Header from "./components/header.js";

import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import reducers from "./reducers/";
import thunk from "redux-thunk";


const store = createStore(reducers, applyMiddleware(thunk));


class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
          <FormContainer/>
          <HitListContainer/>
      </div>
    )
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
