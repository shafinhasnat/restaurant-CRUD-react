import React, { Component } from "react";
import firebase from "./../firestore";
import InputMarkup from "./common/inputMarkup";
const db = firebase.firestore();
class Form extends Component {
  addFirestore = () => {
    db.collection("Restaurant")
      .add({
        name: this.state.info.name,
        location: this.state.info.location,
        intro: this.state.info.intro,
      })
      .then((snap) => {
        const restaurantAdd = {
          id: snap.id,
          ...this.state.restaurant[this.state.restaurant.length - 1],
        };
        this.setState({ newId: snap.id });
      });
  };
  delay = (t) => {
    return new Promise(function (resolve) {
      return setTimeout(resolve, t);
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const restaurant = [...this.state.restaurant, this.state.info];
    const info = {
      name: "",
      location: "",
      intro: "",
    };
    this.addFirestore();
    this.setState({ restaurant, info });
    this.delay(2000).then((logHi) => {
      const len = this.state.restaurant.length;
      const newAdd = {
        id: this.state.newId,
        ...this.state.restaurant[len - 1],
      };
      const restaurant = [...this.state.restaurant];
      alert(`Add success! id: ${this.state.newId}`);
      restaurant[len - 1] = newAdd;
      this.setState({ restaurant });
    });
  };
  handleChange = (e) => {
    const info = { ...this.state.info };
    info[e.currentTarget.id] = e.currentTarget.value;
    this.setState({ info });
  };
  handleDelete = (e) => {
    const restaurant = this.state.restaurant.filter((a) => a.id !== e);
    this.setState({ restaurant });
    console.log(e);
    db.collection("Restaurant").doc(e).delete();
  };
  renderInput = (name, value) => {
    return (
      <InputMarkup name={name} value={value} onChange={this.handleChange} />
    );
  };
  renderButton = (label) => {
    return <button className="btn btn-primary">{label}</button>;
  };
}

export default Form;
