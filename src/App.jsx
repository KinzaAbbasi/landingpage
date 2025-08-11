 import './App.css';
import Header from './components/Header/Header';
import Herosection from './components/Herosection/Herosection';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Herosection />
      <Cards />
      <Footer />
    </div>
  );
}
export default App;