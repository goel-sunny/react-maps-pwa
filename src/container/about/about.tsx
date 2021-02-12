import React from "react";
import "./about.scss";
import { Link } from "react-router-dom";

export default class About extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <section className="about_container">
        <div className="about__header">
          <Link to="/"> Back </Link> About React PWA
        </div>
        <div className="about__content">
          This is the Progressive Web App Generally for Mobile Platforms{" "}
        </div>
      </section>
    );
  }
}
