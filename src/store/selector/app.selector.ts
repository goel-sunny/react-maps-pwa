import { IState } from "../reducer/app.reducer";

export const itemsSelector = function(state: IState) {
  return state.items;
};
