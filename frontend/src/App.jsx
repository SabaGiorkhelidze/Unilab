import { useState } from "react";
import "./styles/App.css";

function App() {
  const [text, setText] = useState("");
  const [checkedText, setCheckedText] = useState({});

  const CheckInformation = () => {
    setCheckedText(text);
    // console.log(text);
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
              onChange={(e) => setText(e.target.value)}
              className="input"
              value={text}
            >
              {text}
            </textarea>
            <button
              className="x-button1"
              onClick={() => {
                setText("");
                setCheckedText("");
              }}
            >
              ⓧ
            </button>
          </div>

          <div className="input2">
            <textarea
              placeholder="output"
              className="output"
              value={checkedText.length > 0 ? checkedText : ""}
              disabled
            >
              {setCheckedText}
            </textarea>
            <button className="x-button2" onClick={() => setCheckedText("")}>
              ⓧ
            </button>
          </div>
        </div>
        <button className="check-button" onClick={() => CheckInformation()}>
          Check
        </button>
        <div className="source-container">
          <h2>Source: </h2>
          <div className="sources">
            <a href="https://www.wikipedia.org/"> wikipedia</a>
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
