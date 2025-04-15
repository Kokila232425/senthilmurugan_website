
import './App.css';
import Hero from './components/hero.jsx';
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import Product from './components/Products.jsx';
import Service from './components/Service.jsx';
import Contact from './components/contact.jsx';
import Clients from './components/clients.jsx';
import Footer from './components/footer.jsx';
import Modal from './components/modal.jsx';
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Product/>
      <Service/>
      <Contact/>
      <Clients/>
      <Footer />
      <Modal />
    </div>
  );
}

export default App;
