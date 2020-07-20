module.exports = {
	...jest.requireActual("react-router-dom"),
	useParams: jest.fn(),
};

// Only mocking the part needed (useParams) otherwise we lose the implementation of MemoryHistory used in the render function
