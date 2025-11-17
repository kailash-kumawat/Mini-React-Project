import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-600 text-black rounded-xl mb-4">Tailwind test</h1>
      <Card userName="ChaiaurReact" btnText="visit me" />
      <Card userName="Nikey" />
    </>
  );
}

export default App;
