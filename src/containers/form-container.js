import React from "react";
import Form from "../components/form.js";

import autoBind from "react-autobind";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/";

class FormContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      name: "",
      location: "",
      price: "",
      wanted: ""
    }
    autoBind(this);
  }

  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    })
  }

  render() {
    return (
      <Form input={this.state} handleChange={this.handleChange} handleClick={this.props.addData}/>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
