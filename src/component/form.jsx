import React, { Component } from "react";
import firebase from "./../firestore";
import InputMarkup from "./common/inputMarkup";
class Form extends Component {
  addFirestore = () => {
    const db = firebase.firestore();
    db.collection("Restaurant").add({
      name: this.state.info.name,
      location: this.state.info.location,
      intro: this.state.info.intro,
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
    this.setState({ restaurant, info });
    this.addFirestore();
  };
  handleChange = (e) => {
    const info = { ...this.state.info };
    info[e.currentTarget.id] = e.currentTarget.value;
    this.setState({ info });
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
