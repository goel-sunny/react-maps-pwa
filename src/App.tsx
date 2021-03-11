import React, { Suspense } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.scss";

const About = React.lazy(() => import("./container/about/about"));
const AddGrocessary = React.lazy(() =>
  import("./container/add-grocessary/add-grocessary")
);
const Dashboard = React.lazy(() => import("./container/dashboard/dashboard"));
const WeatherInfo = React.lazy(() =>
  import("./container/weather-forcasting/WeatherForcasting")
);

function App() {
  return (
    <div className="App">
      <header className="App__header">Grocessary Store</header>
      <main className="App__main">
        <aside className="App__main__aside">
          <Link to="/" className="link">
            Dashboard
          </Link>
          <Link to="/addGrocessary" className="link">
            Add Grocessary
          </Link>
          <Link to="/about" className="link">
            About
          </Link>
          <Link to="/weatherInfo" className="link">
            WeatherInfo
          </Link>
        </aside>
        <article className="App__main__article">
          <Suspense fallback={<div className="loader">App Loader</div>}>
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/addGrocessary" component={AddGrocessary} />
              <Route path="/weatherInfo" component={WeatherInfo} />
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
