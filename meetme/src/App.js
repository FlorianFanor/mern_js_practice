import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import SwipeButton from "./components/SwipeButton";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* Cards */}
      <Card />
      {/* Swipe button */}
      <SwipeButton />
    </div>
  );
}

export default App;
