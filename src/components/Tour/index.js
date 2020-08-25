import React, { Component } from "react";
import "./tour.scss";

export default class index extends Component {
  state = {
    show: true,
  };

  toggleInfo = () =>
    this.setState({
      show: !this.state.show,
    });

  render() {
    const { name, img, city, info, deleteTour, id } = this.props;

    return (
      <div className="single-tour">
        <img src={img} alt={name} className="single-tour__img" />
        <div className="single-tour__details">
          <h2>{name}</h2>
          <h3>{city}</h3>
          <button type="button" onClick={this.toggleInfo}>
            Toggle info
          </button>
          <button type="button" onClick={() => deleteTour(id)}>
            Delete
          </button>
          {this.state.show ? <p className="single-tour__info">{info}</p> : null}
        </div>
      </div>
    );
  }
}
