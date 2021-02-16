import { combineReducers } from "redux";
import { IItem } from "../../model/item.interface";
import { ADD_ITEM } from "../action/app.actionTypes";

export interface IState {
  items: Array<IItem>;
}

export interface IAction {
  type: string;
  payload?: any;
}

export const initialState: IState = {
  items: []
};

export function appReducer(state = initialState, actions: IAction) {
  console.log("dispatcher   ", actions.payload);
  switch (actions.type) {
    case ADD_ITEM:
      return { items: [...state.items, actions.payload] };
    default:
      return state;
  }
}

export const commonReducer = combineReducers({ grocessaryItems: appReducer });
