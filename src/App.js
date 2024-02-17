import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Navbar, NavbarBrand, Link} from "@nextui-org/react";
import Home from './pages/Home';
import About from './pages/About';
import AboutError from './pages/AboutError';
import Footer from './pages/components/footer';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Navbar shouldHideOnScroll>
          <NavbarBrand>
            <Link className="font-bold text-inherit" color="foreground" href="/">
                Hibiki Movies Search
            </Link>
          </NavbarBrand>
          {/* <NavbarContent className="sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link color="foreground" href="/">
                Home
              </Link>
            </NavbarItem>
          </NavbarContent> */}
        </Navbar>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route 
            path='/about/:id' element={<About />}
            errorElement={<AboutError/>}
            />

          {/* 404 */}
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
