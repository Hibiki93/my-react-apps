import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import Home from './pages/Home';
import About from './pages/About';
import Footer from './pages/components/footer';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Navbar shouldHideOnScroll>
          <NavbarBrand>
            <p className="font-bold text-inherit">Hibiki Movies Search</p>
          </NavbarBrand>
          <NavbarContent className="sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link color="foreground" href="/">
                Home
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="#" color="foreground">
                Movies Detail
              </Link>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about/:id' element={<About />}/>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
