import { useEffect, useState } from "react";
import "./styles/App.css";
import axios from "axios";

function App() {
  const [text, setText] = useState({ data: "" });
  const [checkedText, setCheckedText] = useState({ result: "" });

  const CheckInformation = () => {
    axios
      .post("/api/home", text)
      .then((response) => {
        setCheckedText({ result: response.data.result });
      })
      .catch((error) => console.log(error));
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
              onChange={(e) => setText({ data: e.target.value })}
              className="input"
              value={text.data}
            >
              {text.data}
            </textarea>
            <button
              className="x-button1"
              onClick={() => {
                setText({ data: "" });
                setCheckedText({ result: "" });
              }}
            >
              ⓧ
            </button>
          </div>

          <div className="input2">
            <textarea
              placeholder="output"
              className="output"
              value={checkedText?.result?.length > 0 ? checkedText.result : ""}
              disabled
            >
              {checkedText.result}
            </textarea>
            <button
              className="x-button2"
              onClick={() => setCheckedText({ result: "" })}
            >
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
            <a href="https://www.wikipedia.org/">https://www.wikipedia.org</a>
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
