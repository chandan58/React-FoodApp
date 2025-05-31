import { render, screen } from "@testing-library/react";
import RestraurantCard from "../RestraurantsCard";
import "@testing-library/jest-dom";
import resMockData from "../mocks/resMockData.json";

it("should load restraurant card component", () => {
    render(<RestraurantCard resData={resMockData}/>)

    const name = screen.getByText("Pizza Hut")
    expect(name).toBeInTheDocument()
})