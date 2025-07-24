import { Box, useColorModeValue } from "@chakra-ui/react";
// What it does: Imports Box, a Chakra UI component that works like a <div> but with Chakra styling.
// useColorModeValue(light, dark) is a Chakra hook that returns a value based on the current color mode (light or dark).
// Example:
// bg={useColorModeValue("gray.100", "gray.900")}
// Means:
// If light mode → use gray.100
// If dark mode → use gray.900

import { Route, Routes } from "react-router-dom";

import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

function App() {
	return (
		<Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/create' element={<CreatePage />} />
			</Routes>
		</Box>
	);
}

export default App;
