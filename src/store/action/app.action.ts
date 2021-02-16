import { ADD_ITEM } from "./app.actionTypes";

const addItemAction = function(item: any) {
  console.log("add item acrtions    ", item);
  return {
    type: ADD_ITEM,
    payload: item
  };
};

export { addItemAction };
