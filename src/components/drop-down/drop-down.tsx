import React from "react";
import { useState } from "react";

export class DDrop extends React.Component<
  {
    firstName?: string;
    lastName?: string;
  },
  { firstName: string; lastName: string }
> {
  constructor(props: any) {
    super(props);
    this.state = { firstName: "", lastName: "" };
  }

  inputFirstNameHandle(event: any) {
    this.setState({
      firstName: event.target.value,
      lastName: this.state.lastName
    });
  }

  inputLastNameHandle(event: any) {
    this.setState({
      lastName: event.target.value,
      firstName: this.state.firstName
    });
  }

  handleSubmit(event: any) {
    console.log(this.state, "state");
  }

  render() {
    return (
      <div>
        <form className="form">
          <div className="form__firstName">
            <label> First Name :- </label>
            <input
              onChange={this.inputFirstNameHandle.bind(this)}
              value={this.state.firstName}
            />
          </div>
          <div className="form__lastName">
            <label> Last Name :- </label>
            <input
              onChange={this.inputLastNameHandle.bind(this)}
              value={this.state.lastName}
            />
          </div>
          <div className="form__submit">
            <button onClick={this.handleSubmit.bind(this)}>Submit </button>
            <button>Cancel </button>
          </div>
        </form>
      </div>
    );
  }
}
