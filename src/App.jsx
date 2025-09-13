import { useState } from "react";
import Header from "./Header";
import Allcards from "./Allcards";
import Footer from "./Footer";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      style={{ backgroundColor: color }}
      className="min-h-screen w-full flex flex-col"
    >
      {/* Header */}
      <Header />

      {/* Cards */}
      <Allcards />

      {/* Color Changer Bar */}
      <div className="flex flex-wrap justify-center bg-gray-300 px-4 py-2 shadow-lg">
        <button
          className="w-20 h-9 mx-2 rounded-full text-white"
          style={{ backgroundColor: "red" }}
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          className="w-20 h-9 mx-2 rounded-full text-white"
          style={{ backgroundColor: "blue" }}
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
        <button
          className="w-20 h-9 mx-2 rounded-full text-white"
          style={{ backgroundColor: "green" }}
          onClick={() => setColor("green")}
        >
          Green
        </button>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
