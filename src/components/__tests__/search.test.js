import { render, screen } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import mockReslist from "../mocks/mockReslist.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(mockReslist)
    })
})

it("should load search component", async() => {
await act (async() => await render(<BrowserRouter><Body/></BrowserRouter>))

const searchInput = screen.getByRole("button", {name: "Search"})
expect(searchInput).toBeInTheDocument()
})