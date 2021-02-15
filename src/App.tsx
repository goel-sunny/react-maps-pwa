import React, { Suspense } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.scss";

const About = React.lazy(() => import("./container/about/about"));
const Dashboard = React.lazy(() => import("./container/dashboard/dashboard"));

function App() {
  return (
    <div className="App">
      <header className="App__header">Grocessary Store</header>
      <main className="App__main">
        <aside className="App__main__aside">
          <Link to="/about" className="link">
            {" "}
            About{" "}
          </Link>
          <Link to="/" className="link">
            {" "}
            Home
          </Link>
        </aside>
        <article>
          <Suspense fallback={<div className="loader">App Loader</div>}>
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/" component={Dashboard} />
            </Switch>
          </Suspense>
        </article>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
