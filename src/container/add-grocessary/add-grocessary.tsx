import React from "react";
import { AddItem } from "./../../components/add-item/add-item";
import "./add-grocessary.scss";

export default class AddGrocessary extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <section className="add-grocessary_container">
        <div className="add-grocessary__header">Add Grocessaries </div>
        <div className="add-grocessary__content">
          <AddItem />
        </div>
      </section>
    );
  }
}
