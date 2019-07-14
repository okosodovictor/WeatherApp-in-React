import React, { Component } from "react";
import EmailService from "../services/EmailService";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      validationError: {},
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleOnsubmit = this.handleOnsubmit.bind(this);
    this.validateField = this.validateField.bind(this);
  }

  render() {
    const {
      name: nameError,
      email: emailError,
      phone: phoneError
    } = this.state.validationError;

    return (
      <div className="container">
        <h2>Contact Us</h2>
        <hr />
        {this.state.submitted ? (
          <div>
            <p className="alert alert-success">
              Thank you for contacting us. We will get back to you shortly.
            </p>
          </div>
        ) : (
          <div>
            <form onSubmit={this.handleOnsubmit} className="form-horizontal">
              <div className="form-group">
                <div className="col-sm-3 col-md-3">
                  <label className="control-label">Name</label>
                </div>
                <div className="col-sm-6 col-md-6">
                  <span className="errors">{nameError}</span>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="kindly enter your name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-3 col-md-3">
                  <label className="control-label">Email</label>
                </div>
                <div className="col-sm-6 col-md-6">
                  <span className="errors">{emailError}</span>
                  <input
                    className="form-control"
                    name="email"
                    type="email"
                    placeholder="kindly enter your E-Mail"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-3 col-md-3">
                  <label className="control-label">Phone</label>
                </div>
                <div className="col-sm-6 col-md-6">
                  <span className="errors">{phoneError}</span>
                  <input
                    className="form-control"
                    type="text"
                    name="phone"
                    placeholder="kindly enter your Phone"
                    value={this.state.phone}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-2 col-md-2 col-sm-offset-2 col-md-offset-2">
                  <button
                    type="submit"
                    className="btn btn-primary form-control"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }

  validateField() {
    const { name, email, phone } = this.state;
    const errors = {};
    let isValid = true;
    if (!name) {
      errors["name"] = "name field cannot be empty";
      isValid = false;
    }

    if (!email) {
      errors["email"] = "email field cannot be empty";
      isValid = false;
    }
    if (!phone) {
      errors["phone"] = "phone field cannot be empty";
      isValid = false;
    }

    this.setState({
      validationError: errors
    });

    return isValid;
  }
  handleOnsubmit = event => {
    event.preventDefault();
    let isValid = this.validateField();
    if (isValid) {
      this.handleSendEmail(this.state);
    }
  };

  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  async handleSendEmail(contact) {
    const emailFrom = "example@mail.com";
    this.state.submitted = true;
    await EmailService().sendEmail(emailFrom, contact.email, "Email example");
  }
}

export default Contact;
