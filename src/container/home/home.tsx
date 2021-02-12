import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";

export default class Home extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <section className="home_container">
        <div className="home__header">home React PWA </div>
        <div className="home__content">
          This is the Progressive Web App Generally for Mobile Platforms{" "}
          <Link to="/about"> About Section </Link>{" "}
        </div>
      </section>
    );
  }
}
