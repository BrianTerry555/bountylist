import React from "react";
import Hit from "../components/hit.js";
import autoBind from "react-autobind";

class HitContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ...this.props.hit,
      edit: false
    };
    autoBind(this);
  }

  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    });
  }

  toggleEdit() {
    this.setState({
      edit: !this.state.edit
    });
  }

  render() {
    return (
      <Hit handleToggle={this.toggleEdit} handleRemove={this.props.handleRemove} handleSave={this.props.handleSave} handleChange={this.handleChange} input={this.state} hit={this.props.hit}/>
    )
  }
}

export default HitContainer;
