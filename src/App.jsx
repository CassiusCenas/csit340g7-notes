import { useState, useEffect } from "react";
import { SettingsContext } from "./SettingsContext.js";
import Notes from "./components/Notes.jsx";
import Info from "./components/Info.jsx";

function App() {
  const [largeText, setLargeText] = useState(() => {
    const saved = localStorage.getItem("largeText");
    if (saved !== null) {
      return JSON.parse(saved);
    } else {
      return false;
    }
  });

  useEffect(() => {
    localStorage.setItem("largeText", JSON.stringify(largeText));
  }, [largeText]);

  return (
    <SettingsContext value={{ largeText, setLargeText }}>
      <div className="bg-[#f5f5f5] font-light text-[#111]">
        <Notes />
        <Info name="Cassius L. Cenas" />
      </div>
    </SettingsContext>
  );
}

export default App;