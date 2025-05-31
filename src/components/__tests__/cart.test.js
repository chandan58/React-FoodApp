import { render, screen } from "@testing-library/react";
import RestraurantMenu from "../RestraurantMenu";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import cartList from "../mocks/cartList.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { fireEvent } from "@testing-library/react";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(cartList),
  });
});

it("should load cart component", async () => {
  await act(
    async () =>
      await render(
        <Provider store={appStore}>
          <BrowserRouter>
            <RestraurantMenu />
          </BrowserRouter>
        </Provider>
      )
  );
  const restroName = screen.getByText("Recommended (20)");
  fireEvent.click(restroName);

  expect(screen.getAllByTestId("item")).length.toBe(20);
});
