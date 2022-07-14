import logo from "./logo.svg";
import "./App.css";
import CustomSelect from "./CustomSelect";

function App() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  function onc(e) {
    console.log(e);
  }
  return (
    <div className="App">
      <CustomSelect options={options} lable="Choose Library" onChange={onc} />
    </div>
  );
}

export default App;
