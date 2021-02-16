import React, { useState } from "react";
import { IItem, ItemType } from "../../model/item.interface";
import "./add-item.scss";

const ITEM_TYPES = [
  ItemType.BEVERAGES,
  ItemType.BREAD_BAKERY,
  ItemType.DIARY,
  ItemType.FRUITS,
  ItemType.PERSONAL_CARE,
  ItemType.VEGETABLE
];

export default function AddItem(props: any) {
  const [item, setItem] = useState({ ...props.item });

  const itemTypeHandle = function(event: any) {
    setItem({ ...item, itemType: event.target.value });
    event.preventDefault();
  };

  const itemNameHandle = function(event: any) {
    setItem({ ...item, name: event.target.value });
  };

  const itemQuantityHandle = (event: any) => {
    setItem({ ...item, quantity: event.target.value });
  };

  const addItemHandle = (event: any) => {
    props.addItems(item);
    event.preventDefault();
  };

  return (
    <div>
      <form className="form">
        <div className="form__item_type">
          <label> Choose Item Type : </label>
          <select onSelect={itemTypeHandle}>
            {ITEM_TYPES.map((itemType, index) => {
              return (
                <option value={`${itemType}`} key={index}>
                  {itemType}
                </option>
              );
            })}
          </select>
        </div>

        <div className="form__item_name">
          <label> Item Name : </label>
          <input onChange={itemNameHandle} value={item.name} />
        </div>

        <div className="form__item_quantity">
          <label> Quantity : </label>
          <input onChange={itemQuantityHandle} value={item.quantity} />
        </div>

        <div className="form__submit">
          <button type="button" onClick={addItemHandle}>
            Add Item{" "}
          </button>
          <button type="button">Cancel </button>
        </div>
      </form>
    </div>
  );
}
