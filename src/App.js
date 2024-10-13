import { useEffect, useState } from "react";
function App() {
  // react-app을 사용하기 때문에 React.useState()라고 적지 않고 import할 수 있음
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {
    setValue((prev) => prev + 1);
  };
  const onChange = (event) => setKeyword(event.target.value);
  console.log("run all the time.");
  useEffect(() => {
    // [] : 아무것도 지켜보지 않기 때문에 한 번만 실행됨
    console.log("run only once.");
  }, []);
  useEffect(() => {
    console.log("run when 'keyword' changes.");
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);
  useEffect(() => {
    console.log("run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("run when 'counter & keyword' changes.");
  }, [counter, keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
