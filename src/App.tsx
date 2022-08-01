import { Navbar } from "./components/Navbar/Navbar";
import { Slider } from "./components/Slider/Slider";
import "./app.scss";
import "./index.scss";

export function App() {
  return (
    <div className="app">
      <Navbar />
      <Slider />
    </div>
  );
}
