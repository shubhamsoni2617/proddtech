import { Routes, Route } from "react-router-dom";

// main css
import  "./assets/css/index.css";

// components
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from "./pages/home/Index";
import About from "./pages/about/Index";
import Services from "./pages/services/Index";
import Products from "./pages/products/Index";
import Blogs from "./pages/blogs/Index";
import Contact from "./pages/contact/Index";
import ComingSoon from "./pages/coming-soon/index";

function App() {
  return (
    <>
      <Header />

      {/* pages */}
      <main>
        <Routes>
          {/* home route */}
          <Route path="/" index element={ <Home /> } />

          {/* about route */}
          <Route path="/about" element={ <About /> } />

          {/* service route */}
          <Route path="/services" element={ <Services /> } />

          {/* service route */}
          <Route path="/products" element={ <Products /> } />

          {/* blog route */}
          <Route path="/blogs" element={ <Blogs /> } />

          {/* contact route */}
          <Route path="/contact" element={ <Contact /> } />

          {/* coming soon route */}
          <Route path="/coming-soon" element={ <ComingSoon /> } />

        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
