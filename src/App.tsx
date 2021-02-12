import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { DDrop } from "./components/drop-down/drop-down";

const About = React.lazy(() => import("./container/about/about"));
const Home = React.lazy(() => import("./container/home/home"));

function App() {
  return (
    <div className="App">
      <header className="App-header">React Maps PWA</header>
      <section>
        <div className="form">
          <DDrop></DDrop>
        </div>
        <Suspense fallback={<div className="loader">App Loader</div>}>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/" component={Home} />
          </Switch>
        </Suspense>
      </section>
      <footer></footer>
    </div>
  );
}

export default App;
