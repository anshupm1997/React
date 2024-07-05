import './Navbar.css';
import { useState } from 'react';

function Navbar() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <nav>
      <input type="checkbox" id="check" checked={isChecked} onChange={handleCheckboxChange} />
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <label className="logo">Baggit</label>
      <ul>
        <li><a className="active" href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Feedback</a></li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <section></section>
    </div>
  );
}

export default App;
