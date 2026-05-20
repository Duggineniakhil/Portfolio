import React, { useState, useRef, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";

export default function InteractiveTerminal({ initialCode }) {
  const [isTerminal, setIsTerminal] = useState(false);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([
    { type: "system", text: "Welcome to AkhilOS v1.0.0" },
    { type: "system", text: "Type 'help' for a list of available commands." },
  ]);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  useEffect(() => {
    if (!isTerminal) {
      Prism.highlightAll();
    }
  }, [isTerminal, initialCode]);

  useEffect(() => {
    if (isTerminal && terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output, isTerminal]);

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const cmd = input.trim().toLowerCase();
      setInput("");
      
      const newOutput = [...output, { type: "user", text: `$ ${cmd}` }];
      
      switch (cmd) {
        case "help":
          newOutput.push({ type: "system", text: "Available commands:" });
          newOutput.push({ type: "system", text: "  skills  - Show core skills" });
          newOutput.push({ type: "system", text: "  contact - Display contact info" });
          newOutput.push({ type: "system", text: "  clear   - Clear terminal" });
          newOutput.push({ type: "system", text: "  hack    - Initiate matrix sequence" });
          break;
        case "skills":
          newOutput.push({ type: "system", text: "> React, Next.js, Node.js, Python, TensorFlow" });
          newOutput.push({ type: "system", text: "> MongoDB, PostgreSQL, AWS, Docker, Git" });
          break;
        case "contact":
          newOutput.push({ type: "system", text: "> Email: duggineniakhil1@gmail.com" });
          newOutput.push({ type: "system", text: "> LinkedIn: linkedin.com/in/akhil-duggineni" });
          break;
        case "clear":
          setOutput([]);
          return;
        case "hack":
          newOutput.push({ type: "system", text: "ACCESS GRANTED. Initializing override..." });
          setTimeout(() => {
            document.body.style.filter = "hue-rotate(90deg)";
            setTimeout(() => {
              document.body.style.filter = "none";
            }, 3000);
          }, 1000);
          break;
        case "":
          break;
        default:
          newOutput.push({ type: "system", text: `Command not found: ${cmd}` });
      }
      
      setOutput(newOutput);
    }
  };

  return (
    <div className="gradient-border group cursor-pointer" onClick={() => { if (!isTerminal) { setIsTerminal(true); setTimeout(() => inputRef.current?.focus(), 100); } }}>
      <div className="code-window bg-[#091121] min-h-[300px] flex flex-col transition-all duration-500">
        <div className="window-header flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="window-dot bg-red-500"></div>
            <div className="window-dot bg-yellow-500"></div>
            <div className="window-dot bg-green-500"></div>
            <span className="ml-2 text-sm text-gray-400 flex items-center gap-2 font-mono">
              <i className="fas fa-terminal"></i>
              {isTerminal ? "akhil_os.exe" : "developer.js"}
            </span>
          </div>
          <button 
            className="text-xs px-2 py-1 bg-white/10 hover:bg-white/20 rounded text-white transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setIsTerminal(!isTerminal);
            }}
          >
            {isTerminal ? "View Code" : "Run Terminal"}
          </button>
        </div>
        
        {isTerminal ? (
          <div 
            ref={terminalRef} 
            className="p-4 flex-grow overflow-y-auto font-mono text-sm max-h-[400px]"
            onClick={() => inputRef.current?.focus()}
          >
            {output.map((line, i) => (
              <div key={i} className={line.type === "user" ? "text-cyan-400" : "text-gray-300"}>
                {line.text}
              </div>
            ))}
            <div className="flex items-center text-cyan-400 mt-2">
              <span className="mr-2">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleCommand}
                className="bg-transparent border-none outline-none flex-grow text-white"
                autoFocus
                spellCheck={false}
                autoComplete="off"
              />
            </div>
          </div>
        ) : (
          <pre className="language-javascript m-0 flex-grow max-h-[400px] overflow-y-auto">
            <code className="language-javascript">{initialCode}</code>
          </pre>
        )}
      </div>
    </div>
  );
}
