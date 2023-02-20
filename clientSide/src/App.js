import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Registry } from "./pages/Registry"
import { About } from "./pages/About"
import { NavigationBar } from "./components/NavigationBar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import './App.css';
import Container from 'react-bootstrap/Container';
import paint from "./assests/images/pink.jpg"

function App() {
  
  return (
    <div style={{ backgroundImage: `url(${paint})`, }} className="pb-5">
    <ShoppingCartProvider>
      <NavigationBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registry" element={<Registry />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider></div>
  );
}

export default App;
