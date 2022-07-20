import App from "../App.js";
import React from "react";

class TeamInfo extends React.Component {
  render() {
    return (
      <div className="container">
        {/* <div className="club"> */}
        <h3>{this.props.name}</h3>
        <p>{this.props.venue}</p>
        <p>{this.props.address}</p>
        <p>{this.props.founded}</p>
        <p>{this.props.email}</p>
        <p>{this.props.tel}</p>
        <img src={this.props.picture} />
        {/* <p>{this.props.</p> */}
        {/* </div> */}
      </div>
    );
  }
}

export default TeamInfo;
