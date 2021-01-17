import React, { Component } from "react";
import ImageZoom from "./imageZoom";
import mediumZoom from "medium-zoom";

class Card extends Component {
  zoom = mediumZoom({
    background: "#000",
    margin: 20,
    scrollOffset: 0,
    container: {
      top: 64,
    },
  });

  state = {
    Title: this.props.title,
    Caption: this.props.caption,
    Subtitle1: this.props.subtitle1,
    Subtitle2: this.props.subtitle2,
  };

  render() {
    return (
      <div className="projectCardDiv noPadding">
        <div className="projectCardHead lighten">
          <span className="projectCardTitle lighten">{this.state.Title}</span>
          <div className="dot cloud"></div>
        </div>

        <div className="projectCardImageBody">
          <div className="projectCardImage">
            <ImageZoom
              className="projectCardImageImage"
              src={"/images/image.png"}
              zoom={this.zoom}
              color="#303030"
            />
          </div>
          <div className="projectCardCaption"> {this.state.Caption} </div>
        </div>
      </div>
    );
  }
}

export default Card;
