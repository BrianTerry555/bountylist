import React from "react";

import HitContainer from "../containers/hit-container.js";

class HitList extends React.Component {
  genHits() {
    return this.props.hits.map((item, index) => {
      return <HitContainer handleRemove={this.props.handleRemove} handleSave={this.props.handleSave} key={index + item.name} hit={item}/>
    })
  }
  render() {
    return (
      <div>
        {this.genHits()}
      </div>
    )
  }
}

export default HitList;
