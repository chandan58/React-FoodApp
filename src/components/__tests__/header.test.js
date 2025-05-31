import { Header } from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

it("should load header component", () => {
  render(
    <BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider>
    </BrowserRouter>
  );
  const headerRender = screen.getByRole("button");
  expect(headerRender).toBeInTheDocument();
});

it("should load cart with 0 items component", () => {
    render(
      <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
      </BrowserRouter>
    );
    const headerRender = screen.getByText("Cart - (0 items)");
    expect(headerRender).toBeInTheDocument();
  });

  it("should clicked on the logout button", () => {
    render(
      <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
      </BrowserRouter>
    );
    const Login = screen.getByText("Login")
    fireEvent.click(Login)
    const logoutButton = screen.getByText("Logout" , {name: "Logout"});
    expect(logoutButton).toBeInTheDocument();
  });