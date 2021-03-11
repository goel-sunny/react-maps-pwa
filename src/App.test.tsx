import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { unmountComponentAtNode } from "react-dom";
import { Provider } from "react-redux";
import { mockComponent } from "react-dom/test-utils";

describe("App Component Test", () => {
  let container: any;

  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  test("should render the header component", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const headerElement = screen.getByText(/Grocessary Store/i);
    expect(headerElement).toBeDefined();
  });

  test("should render the header component", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });
});
