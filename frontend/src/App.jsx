import { useState } from "react";
import "./styles/App.css";

function App() {
  const [text, setText] = useState("");

  const handleText = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="full-container">
      <div className="header">
        <h2>Overloaded</h2>
      </div>
      <div className="main">
        <h1 className="main-text">Detect fake information</h1>
        <div className="input-container">
          <div className="input1">
            <textarea
              placeholder="enter text"
              onChange={(e) => handleText(e)}
              className="input"
            />
            <button className="x-button1">ⓧ</button>
          </div>

          <div className="input2">
            <textarea placeholder="output" className="output" disabled />
            <button className="x-button2">ⓧ</button>
          </div>
        </div>
        <div className="source-container">
          <h2>Sources</h2>
          <div className="sources">
            <a href="https://www.wikipedia.org/">wikipedia</a>
            <a href="https://www.wikipedia.org/">wikipedia</a>
          </div>
        </div>

        <div className="last-info-container">
          <h2>Most Popular</h2>
          <div className="info-card-container">
            <div className="info-card">
              <h3>Winston Churchill</h3>
              <p>Sir Winston Leonard Spencer Churchill</p>
            </div>
            <div className="info-card">
              <h3>Winston Churchill</h3>
              <p>Sir Winston Leonard Spencer Churchill</p>
            </div>
            <div className="info-card">
              <h3>Winston Churchill</h3>
              <p>Sir Winston Leonard Spencer Churchill</p>
            </div>
            <div className="info-card">
              <h3>Winston Churchill</h3>
              <p>Sir Winston Leonard Spencer Churchill</p>
            </div>
            <div className="info-card">
              <h3>Winston Churchill</h3>
              <p>Sir Winston Leonard Spencer Churchill</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
