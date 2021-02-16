import React from "react";
import { IItem } from "../../model/item.interface";

export function ListItem(props: any) {
  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>
            <th> IITem Name</th>
            <th> IITem Type</th>
            <th> Quantity</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((item: IItem, index: number) => {
            return (
              <tr key={index}>
                <td> {item.name}</td>
                <td> {item.itemType}</td>
                <td> {item.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
}
