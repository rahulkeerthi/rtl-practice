import React from "react";
import App from "./App";
import { render, screen } from "./custom-render";

describe("<App />", () => {
	it("Renders <App /> component correctly", () => {
		render(<App />);
		expect(
			screen.getByText(/Getting started with React testing library/i)
		).toBeInTheDocument();
	});
});
