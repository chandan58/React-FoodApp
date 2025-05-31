import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import '@testing-library/jest-dom';

describe("cantact component test", () => {
    it("should load button on contact component", () =>{
        render(<Contact/>)
    
        const heading = screen.getByRole("button")
        expect(heading).toBeInTheDocument()
    })
    
    it("should load input fields on contact component", () =>{
        render(<Contact/>)
    
        const heading = screen.getByText("Contact Us")
        expect(heading).toBeInTheDocument()
    })
    
    it("should load input name on contact component", () =>{
        render(<Contact/>)
    
        const heading = screen.getByPlaceholderText("Name")
        expect(heading).toBeInTheDocument()
    })
})