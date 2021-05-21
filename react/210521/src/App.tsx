import React, { useEffect, useState } from "react";

import Text from "./Text";

const App: React.FC = () => {
  const [num, setNum] = useState(0);

  const addNum = () => {
    setNum((prevNum) => prevNum + 1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setNum((prevNum) => prevNum - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <Text color="blue" onClick={addNum}>
        {num}
      </Text>
    </>
  );
};

export default App;
