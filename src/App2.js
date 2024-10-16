import { useEffect, useState } from "react";

function Hello() {
  function byFn() {
    console.log("bye :(");
  }
  function hiFn() {
    console.log("hi :)");
    // return : cleanup function
    return byFn;
  }
  useEffect(hiFn, []);
  useEffect(() => {
    console.log("created :)");
    return () => console.log("destroyed :(");
  }, []);
  return <h1>Hello</h1>;
}
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
