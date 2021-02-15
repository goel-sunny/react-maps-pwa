import React from "react";
import { connect } from "react-redux";
import { IItem, ItemType } from "../../model/item.interface";
import { addItemAction } from "../../store/action/app.action";
import "./add-item.scss";

export function AddItem(props) {
  const item: IItem = { name: "", quantity: 1, itemType: ItemType.FRUITS };

  const addItem = event => {
    addItemAction(item);
  };

  return (
    <div>
      <form className="form">
        <div className="form__item_name">
          <label> Item Name :- </label>
          <input
            onChange={this.inputFirstNameHandle.bind(this)}
            value={item.name}
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
          <button onClick={addItem}>Submit </button>
          <button>Cancel </button>
        </div>
      </form>
    </div>
  );
}

connect(null, addItemAction)(AddItem);
