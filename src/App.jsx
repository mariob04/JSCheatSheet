import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Home />
    </ChakraProvider>
  );
}

export default App;
