import './Cards.css';

function Cards() {
  return (
    <div className="cards-section">
      <h2 className="section-title">Our Features</h2>
      <div className="cards-container">
        <div className="card">
          <div className="card-icon">🚀</div>
          <h3>Fast Performance</h3>
          <p>Optimized for blazing fast loading speeds and smooth user experience.</p>
        </div>
        
        <div className="card">
          <div className="card-icon">🔒</div>
          <h3>Secure Data</h3>
          <p>Enterprise-grade security to protect your valuable information.</p>
        </div>
        
        <div className="card">
          <div className="card-icon">💡</div>
          <h3>Innovative Design</h3>
          <p>Modern UI/UX design that enhances user engagement.</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;