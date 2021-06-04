import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

const App: React.FC = () => {
  const [data, setData] = useState<string>("");

  const loadData = useCallback(() => {
    axios
      .get("http://localhost:8080/session", { withCredentials: true })
      .then((res) => {
        if (res.data) setData(res.data);
      });
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const onButtonClick = async () => {
    await axios.post(
      "http://localhost:8080/session",
      {
        id: "test",
      },
      { withCredentials: true }
    );

    loadData();
  };

  return (
    <>
      <button onClick={onButtonClick}>세션 저장</button>
      <p>{JSON.stringify(data)}</p>
    </>
  );
};

export default App;
