import { useEffect, useState } from "react";
function App() {
  // react-app을 사용하기 때문에 React.useState()라고 적지 않고 import할 수 있음
  const [counter, setValue] = useState(0);
  const onClick = () => {
    setValue((prev) => prev + 1);
  };
  console.log("run all the time.");
  useEffect(() => {
    console.log("CALL THE API...run only once...")
  }, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
