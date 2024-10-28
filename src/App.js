import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [money, setMoney] = useState("");
  const [coin, setCoin] = useState("");

  const changeSelected = (e) => {
    const selected = coins.find((option) => option.id === e.target.value);
    setSelectedCoin(selected);
  };

  const changeInput = (e) => {
    const value = e.target.value;

    // 빈 문자열이거나 숫자만 있는 경우에만 업데이트
    if (value === "" || /^\d+$/.test(value)) {
      setMoney(value);
      const numberOfCoin = Number(money) / selectedCoin.quotes.USD.price;
      setCoin(numberOfCoin);
    }
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((respone) => respone.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select onChange={changeSelected} value={selectedCoin?.id || ""}>
            <option value="">선택하세요</option>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.id}>
                {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
          <hr />
          {selectedCoin === null || selectedCoin === undefined ? (
            <p>코인을 선택해주세요.</p>
          ) : (
            <div>
              <input
                type="text"
                onChange={changeInput}
                value={money}
                placeholder="가지고 있는 돈을 입력해주세요.(USD)"
              ></input>
              <p>{coin}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
