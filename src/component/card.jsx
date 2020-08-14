import React, { Component } from "react";
import CardMarkup from "./common/cardMarkup";
import firebase from "./../firestore";
import Form from "./form";

const db = firebase.firestore();
class Card extends Form {
  state = {
    restaurant: [],
    info: {
      name: "",
      location: "",
      intro: "",
    },
    newId: "",
  };
  fetchData = () => {};
  componentDidMount = () => {
    db.collection("Restaurant")
      .get()
      .then((snap) => {
        const data = snap.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        // console.log(data);
        this.setState({ restaurant: data });
      });
  };

  render() {
    return (
      <div>
        <div className="row">
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <div className="row">
              {this.renderInput("name", this.state.info.name)}
              {this.renderInput("location", this.state.info.location)}
              {this.renderInput("intro", this.state.info.intro)}
              <div className="col">{this.renderButton("Submit")}</div>
            </div>
          </form>
          {this.state.restaurant.map((item) => (
            <div className="col">
              <CardMarkup
                name={item.name}
                location={item.location}
                intro={item.intro}
                onClick={(e) => this.handleDelete(item.id)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Card;
