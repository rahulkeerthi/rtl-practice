import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
	it("renders the <App /> component correctly", () => {
		const { getByText } = render(<App />);
		expect(
			getByText(/Getting started with React testing library/i)
		).toBeInTheDocument();
	});
});
