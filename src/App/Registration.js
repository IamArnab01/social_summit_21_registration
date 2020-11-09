import React, { Component } from "react";
import axios from "axios";
import { API } from "../backend";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      gender: "",
      college: "",
      stream: "",
      year_of_study: "",
      mobile: "",
      email: "",
      events: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggleChange = this.toggleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    // console.log(event.target.name, event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };

  toggleChange = (e) => {
    // console.log(e.target.id, e.target.value);
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      mobile: this.state.mobile,
      gender: this.state.gender,
      college: this.state.college,
      year_of_study: this.state.year_of_study,
      stream: this.state.stream,
      events: this.state.events,
    };

    axios
      .post(`${API}/perticipants.json`, newUser, {
        headers: {
          "Content-Type": "application/json",
          // Authorization: "",
        },
        body: JSON.stringify(newUser),
      })
      .then(console.log("success"))
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="th-background pt-5  pb-5">
        <div className="th-wraper container">
          <div className="card th-card shadow">
            <div className="th-card-body">
              <h3 className="mb-4 th-header">Perticipant's Registration</h3>
              <form onSubmit={this.handleSubmit}>
                <div class="row">
                  <div class="col-md-6 col-xs-12 mb-3">
                    <label for="Name">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationDefault01"
                      placeholder="First name"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div class="col-md-6 col-xs-12 mb-3">
                    <div>
                      <label for="validationDefault02">Gender</label>
                      <div className="">
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input "
                            type="radio"
                            name="inline-radio-1"
                            id="gender"
                            value="Male"
                            required
                            onClick={this.toggleChange}
                          />
                          <label class="mb-0 ">Male</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inline-radio-1"
                            id="gender"
                            value="Female"
                            required
                            onClick={this.toggleChange}
                          />
                          <label class="mb-0 mr-1">Female</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inline-radio-1"
                            id="gender"
                            value="Other"
                            required
                            onClick={this.toggleChange}
                          />
                          <label class="mb-0 mr-1">Other</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 col-xs-12 mb-3">
                    <label for="validationDefault03">Email</label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationDefault03"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div class="col-md-6 col-xs-12 mb-3">
                    <label for="validationDefault04">Contact</label>
                    <input
                      type="text"
                      maxLength={10}
                      class="form-control"
                      id="validationDefault04"
                      name="mobile"
                      value={this.state.mobile}
                      onChange={this.handleChange}
                      placeholder="Your Contact"
                      required
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 col-xs-12 mb-3">
                    <label for="validationDefault03">College</label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationDefault05"
                      name="college"
                      value={this.state.college}
                      onChange={this.handleChange}
                      placeholder="Your college"
                      required
                    />
                  </div>
                  <div class="col-md-6 col-xs-12 mb-3">
                    <label for="validationDefault04">Year of Study</label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationDefault06"
                      name="year_of_study"
                      value={this.state.year_of_study}
                      onChange={this.handleChange}
                      placeholder="Year of Study"
                      required
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 col-xs-12 mb-3">
                    <label for="validationDefault03">Stream of Study</label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationDefault07"
                      name="stream"
                      value={this.state.stream}
                      onChange={this.handleChange}
                      placeholder="Stream of Study"
                      required
                    />
                  </div>
                  <div class="col-md-12 col-xs-12 mb-3">
                    <label for="validationDefault04">
                      Tentative events you may want to perticipate
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationDefault08"
                      name="events"
                      value={this.state.events}
                      onChange={this.handleChange}
                      placeholder="Tentative events you may want to perticipate"
                      required
                    />
                  </div>
                </div>
                <button class="btn btn-primary" type="submit">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;
