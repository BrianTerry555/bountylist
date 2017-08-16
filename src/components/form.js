import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div>
        <input value={this.props.input.name} onChange={(event)=>{this.props.handleChange("name", event);}} placeholder="Name"/>
        <input value={this.props.input.location} onChange={(event)=>{this.props.handleChange("location", event);}} placeholder="Location"/>
        <input value={this.props.input.price} onChange={(event)=>{this.props.handleChange("price", event);}} placeholder="Price"/>
        <input value={this.props.input.wanted} onChange={(event)=>{this.props.handleChange("wanted", event);}} placeholder="Wanted"/>
        <button onClick={()=>{this.props.handleClick(this.props.input);}}>
          Submit
        </button>
      </div>
    )
  }
}

export default Form;
