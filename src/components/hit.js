import React from "react";

class Hit extends React.Component {
  render() {
    return (
      <div>
        <div style={{display: this.props.input.edit ? "none": "inherit" }}>
          <p>Name: {this.props.hit.name}</p>
          <p>Location: {this.props.hit.location}</p>
          <p>Price: ${this.props.hit.price}</p>
          <p>Wanted: {this.props.hit.wanted}</p>
        </div>
        <div style={{display: this.props.input.edit ? "inherit": "none" }}>
          <input value={this.props.input.name} onChange={(event)=>{this.props.handleChange("name", event);}}/>
          <input value={this.props.input.location} onChange={(event)=>{this.props.handleChange("location", event);}}/>
          <input value={this.props.input.price} onChange={(event)=>{this.props.handleChange("price", event);}}/>
          <input value={this.props.input.wanted} onChange={(event)=>{this.props.handleChange("wanted", event);}}/>
          <button onClick={()=> {this.props.handleSave(this.props.hit.id, this.props.input); this.props.handleToggle();}}>
            Save
          </button>
        </div>
        <button onClick={()=> {this.props.handleToggle();}}>Edit</button>
        <button onClick={()=> {this.props.handleRemove(this.props.hit.id);}}>Collect my $$$</button>
      </div>
    )
  }
}

export default Hit;
