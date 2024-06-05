import { useCallback, useState } from "react";

import "./App.css";

class BigObject {
  data = new Uint8Array(1024 * 1024 * 10);
}

function App() {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const bigData = new BigObject(); // This object is created every time the component re-renders

  const incrementA = useCallback(() => {
    setCountA((countA) => countA + 1);
  }, [countA]);

  const incrementB = useCallback(() => {
    setCountB((countB) => countB + 1);
  }, [countB]);

  function incrementBoth() {
    incrementA();
    incrementB();
    console.log(bigData.data.length);
  }

  return (
    <>
      <button onClick={() => incrementA()}>Increment A</button>
      <button onClick={() => incrementB()}>Increment B</button>
      <button onClick={() => incrementBoth()}>Increment Both</button>
      <p>
        A: {countA}, B: {countB}
      </p>
    </>
  );
}

export default App;
