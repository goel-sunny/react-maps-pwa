import React from "react";
import { ItemType } from "../../model/item.interface";
import  AddItem  from "./../../components/add-item/add-item";
import "./add-grocessary.scss";

export default class AddGrocessary extends React.Component<any, any> {
  constructor(props: {}) {
    super(props);
    this.state = { item: { name: "", quantity: 1, itemType: ItemType.FRUITS } };
  }

  addItems(value: any) {
    console.log("add  Items    ", value);
  }

  render() {
    return (
      <section className="add-grocessary_container">
        <div className="add-grocessary__header">Add Grocessaries </div>
        <div className="add-grocessary__content">
          <AddItem item={this.state.item} addItems={this.addItems} />
        </div>
      </section>
    );
  }
}
