import { useState } from 'react';
import './Herosection.css';

function Herosection() {
  const [showAlert, setShowAlert] = useState(false);

  const handleAlert = () => {
    alert("This is your alert message!");
    // Or for a more modern approach:
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <h2>Awesome Landing Page</h2>
          <p>This is a cool description.</p>
          <button onClick={handleAlert}>Alert Button</button>
          {showAlert && (
            <div className="alert-message">
              Button was clicked!
            </div>
          )}
        </div>
        <div className="hero-right">
          <img src="src/assets/images/new img.jpg" alt="Hero" />
        </div>
      </div>
    </section>
  );
}

export default Herosection;