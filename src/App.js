import qr from './image-qr-code.png';
import './App.css';

function App() {
  return (
    <main className="App">
      <header className="App-header">
        <div className = "Card" >
          <img src={qr} className="App-logo" alt="logo" />
          <div className = "wrapper-text">
            <h1>Improve your front-end skills by building projects</h1>
            <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
          </div>
        </div>
      </header>
    </main>
  );
}

export default App;
