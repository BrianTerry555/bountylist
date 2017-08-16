import React from "react";
import HitList from "../components/hit-list.js";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/";


class HitListContainer extends React.Component {
  componentWillMount(){
    this.props.loadData();
  }
  render() {
    return (
      <HitList hits={this.props.hits} handleRemove={this.props.deleteData} handleSave={this.props.updateData}/>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HitListContainer);
