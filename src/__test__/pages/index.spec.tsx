import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
    it("renders the home page", () => {
        const { container } = render(<Home />);
        expect(container).toMatchSnapshot();
    });
    it("should handle text in homepage", () => {
        render(<Home />);
        const text = screen.getByText("Madang Resto");
        expect(text).toBeInTheDocument();

    })

})