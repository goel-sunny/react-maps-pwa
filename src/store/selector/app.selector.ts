import { IItem } from "../../model/item.interface";
import { IState } from "../reducer/app.reducer";

const getGrocessaryState = (state: {
  grocessaryItems: { items: Array<IItem> };
}) => {
  return state.grocessaryItems;
};

export const itemsSelector = (appState: any) => {
  const grocessaryState = getGrocessaryState(appState);
  return { items: grocessaryState.items };
};
