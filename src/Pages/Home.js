import React from "react";
import { useState } from "react";

import "../Styles/Home.css"

function Home() {
  const [prompt, setPrompt] = useState("")
  const [pairs, setPairs] = useState([])

  const generateCode = (prompt) => {
    return `This is a simulated answer for: "${prompt}"`;
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (prompt.trim()) {
        const code = generateCode(prompt);
        setPairs([...pairs, {prompt, code}]);
        setPrompt("");

      }
    }
  };

  return (
    <div className="home-section">
      <div className="container">
        <div className="text-display">
            {pairs.map((pair, index) => (
              <div key={index} className="pair-container">
                <div className="prompt">
                  <strong>Prompt:</strong> {pair.prompt}
                </div>
                <div className="code">
                  <strong>Code:</strong> {pair.code}
                </div>
              </div>
            ))}
        </div>
        <div className="prompt-input">
            <textarea
              id="prompt"
              placeholder="Enter your code generation prompt here..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={handleKeyDown}
            />
        </div>
      </div>
    </div>
  );
}

export default Home;
