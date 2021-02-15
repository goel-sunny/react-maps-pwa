import { ADD_ITEM } from "./app.actionTypes";

const addItemAction = function(item) {
  return {
    type: ADD_ITEM,
    payload: item
  };
};

export { addItemAction };
