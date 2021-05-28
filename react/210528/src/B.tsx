import React from "react";
import { Link } from "react-router-dom";
import { useNum } from "./hooks/useNum";
import Text from "./Text";

const B: React.FC = () => {
  const [num] = useNum()!!;

  return (
    <>
      <Text color="red">{num}</Text>

      <Link to="/">A 페이지 이동</Link>
    </>
  );
};

export default B;
