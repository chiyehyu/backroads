//import logo from './logo.svg';
//import './App.css'; // will finally merged into single file with index.css
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Tour from './components/Tour';
import Footer from './components/Footer';

function App() {
  //hello will print twice due to <React.StrictMode> for warning /checking
  //the strictMode won't affect production build
  //console.log('hello');

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tour />
      <Footer />
    </>
  );
}

export default App;
