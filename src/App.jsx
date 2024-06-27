import { useSelector } from "react-redux";
import "./App.css";
import { selectValue } from "./redux/feature/counterSlice/counterSlice";
import { Button } from "flowbite-react";

function App() {
  const countValue = useSelector(selectValue);
  console.log("Count ", countValue);

  return (
    <>
      <h1 className="text-3xl text-blue-800 text-center font-bold py-[5px]">
        First day learning Reducer tooltik
      </h1>
      <h2 className="text-3xl text-blue-800 text-center font-bold py-[5px]">
        {countValue}
      </h2>
      <div>
        <Button gradientMonochrome="info">Info</Button>
      </div>
    </>
  );
}

export default App;
