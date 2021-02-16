import React from "react";
import "./dashboard.scss";

export default class Dashboard extends React.Component {
 
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <section className="dashboard_container">
        <div className="dashbaord__header">Grocessaries Lists </div>
        <div className="dashboard__content">
          This is the Progressive Web App Generally for Mobile Platforms{" "}
        </div>
      </section>
    );
  }
}
