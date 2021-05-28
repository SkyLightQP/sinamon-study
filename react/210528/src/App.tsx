import React, { useCallback, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { useNum } from "./hooks/useNum";
import Text from "./Text";

const App: React.FC = () => {
  const [num, setNum] = useNum()!!;

  const plus = useMemo(() => num + 1, [num]);

  const addNum = useCallback(() => {
    setNum((prevNum) => prevNum + 1);
    console.log(plus);
    return plus;
  }, [plus, setNum]);

  useEffect(() => {
    const timer = setInterval(() => {
      setNum((prevNum) => prevNum - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [setNum]);

  return (
    <>
      <Text color="blue" onClick={addNum}>
        {num}
      </Text>

      <Link to="/b">B 페이지 이동</Link>
    </>
  );
};

export default App;
