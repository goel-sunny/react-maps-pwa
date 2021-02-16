import { useEffect } from "react";
import { connect } from "react-redux";
import "./dashboard.scss";
import { itemsSelector } from "../../store/selector/app.selector";
import { IItem } from "../../model/item.interface";
import { ListItem } from "../../components/list-item/list-item";

function Dashboard(props: any) {
  return (
    <section className="dashboard_container">
      <div className="dashboard__header">Grocessaries Lists </div>
      <div className="dashboard__content">
        {props.items.length ? (
          <ListItem items={props.items} />
        ) : (
          <div className="dashboard__content__no-item"> NO ITEM LIST </div>
        )}
      </div>
    </section>
  );
}

export default connect(itemsSelector, null)(Dashboard);
