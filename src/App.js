import logo from "./logo.svg";
import "./App.css";
import React from "react";

const WINSCREEN = ({ click }) => {
  return (
    <div>
      <h1>Felicidades por tu victoria</h1>
      <button onClick={() => click()}>volver a jugar</button>
    </div>
  );
};

function App() {
  const [turn, setTurn] = React.useState(false);
  const [table, setTable] = React.useState({
    t1: "",
    t2: "",
    t3: "",
    t4: "",
    t5: "",
    t6: "",
    t7: "",
    t8: "",
    t9: "",
  });
  const [winner, setWinner] = React.useState(false);

  React.useEffect(() => {
    winCondition();
  }, [table]);

  const playMove = (e) => {
    const { id } = e.target;
    const symbol = turn ? "O" : "X";

    setTable({
      ...table,
      [id]: symbol,
    });

    setTurn(!turn);
  };

  const winCondition = () => {
    const { t1, t2, t3, t4, t5, t6, t7, t8, t9 } = table;

    const win1 = t1 === t2 && t2 === t3 && t1 !== "";
    const win2 = t4 === t5 && t5 === t6 && t4 !== "";
    const win3 = t7 === t8 && t8 === t9 && t7 !== "";
    const win4 = t1 === t4 && t4 === t7 && t1 !== "";
    const win5 = t2 === t5 && t5 === t8 && t2 !== "";
    const win6 = t3 === t6 && t6 === t9 && t3 !== "";
    const win7 = t1 === t5 && t5 === t9 && t1 !== "";
    const win8 = t3 === t5 && t5 === t7 && t3 !== "";

    if (win1 || win2 || win3 || win4 || win5 || win6 || win7 || win8) {
      setWinner(true);
    }
  };

  const playAgain = () => {
    setTable({
      t1: "",
      t2: "",
      t3: "",
      t4: "",
      t5: "",
      t6: "",
      t7: "",
      t8: "",
      t9: "",
    });
    setWinner(false);
  };

  return (
    <div className="contenedor">
      {winner ? (
        <WINSCREEN click={playAgain} />
      ) : (
        <div className="tablero">
          <div onClick={playMove} id="t1">
            {table.t1}
          </div>
          <div onClick={playMove} id="t2">
            {table.t2}
          </div>
          <div onClick={playMove} id="t3">
            {table.t3}
          </div>
          <div onClick={playMove} id="t4">
            {table.t4}
          </div>
          <div onClick={playMove} id="t5">
            {table.t5}
          </div>
          <div onClick={playMove} id="t6">
            {table.t6}
          </div>
          <div onClick={playMove} id="t7">
            {table.t7}
          </div>
          <div onClick={playMove} id="t8">
            {table.t8}
          </div>
          <div onClick={playMove} id="t9">
            {table.t9}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
