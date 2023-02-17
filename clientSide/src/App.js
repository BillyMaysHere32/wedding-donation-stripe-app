import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Registry } from "./pages/Registry"
import { About } from "./pages/About"
import { NavigationBar } from "./components/NavigationBar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import './App.css';
import Container from 'react-bootstrap/Container';

function App() {
  
  return (
    <ShoppingCartProvider>
      <NavigationBar />
      <Container className="mb-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registry" element={<Registry />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
