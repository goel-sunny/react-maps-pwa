import React from "react";
import { connect } from "react-redux";
import { IItem, ItemType } from "../../model/item.interface";
import { addItemAction } from "../../store/action/app.action";
import "./add-item.scss";

const ITEM_TYPES = [
  ItemType.BEVERAGES,
  ItemType.BREAD_BAKERY,
  ItemType.DIARY,
  ItemType.FRUITS,
  ItemType.PERSONAL_CARE,
  ItemType.VEGETABLE
];

export function AddItem(props) {
  const item: IItem = { name: "", quantity: 1, itemType: ItemType.FRUITS };

  const addItem = event => {
    addItemAction(item);
  };

  return (
    <div>
      <form className="form">
        <div className="form__item_type">
          <label> Choose Item Type :- </label>
          <select>
            {ITEM_TYPES.map(itemType => {
              return <option value={`${itemType}`}>itemType</option>;
            })}
          </select>
        </div>
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
