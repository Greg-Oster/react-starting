import React, { Component } from "react";
import Tour from "../Tour";
import { tourData } from "../../tourData";
import "./tourlist.scss";

export default class TourList extends Component {
  state = {
    tours: tourData,
  };

  deleteTours = (id) => {
    console.log(id);
    this.setState({
      tours: this.state.tours.filter((item, index) => item.id !== id),
    });
    console.log(this.state.tours);
  };

  render() {
    return this.state.tours.map((item, index) => (
      <Tour
        id={item.id}
        city={item.city}
        img={item.img}
        name={item.name}
        info={item.info}
        key={index}
        deleteTour={this.deleteTours}
      />
    ));
  }
}
