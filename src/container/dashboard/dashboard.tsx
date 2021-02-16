import { useEffect } from "react";
import { connect } from "react-redux";
import "./dashboard.scss";
import { itemsSelector } from "../../store/selector/app.selector";
import { IItem } from "../../model/item.interface";

function Dashboard(props: any) {
  return (
    <section className="dashboard_container">
      <div className="dashboard__header">Grocessaries Lists </div>
      <div className="dashboard__content">
        {props.items.length ? (
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
        ) : (
          <div className="dashboard__content__no-item"> NO ITEM LIST </div>
        )}
      </div>
    </section>
  );
}

export default connect(itemsSelector, null)(Dashboard);
