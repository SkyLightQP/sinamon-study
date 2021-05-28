import React from "react";
import styled from "styled-components";

interface TextProps {
  readonly color: string;
  readonly onClick?: React.MouseEventHandler;
}

const ColorText = styled.p<{ a: string }>`
  font-weight: bold;
  color: ${(props) => props.a};
  user-select: none;

  &:hover {
    font-weight: normal;
  }
`;

const Text: React.FC<TextProps> = ({ children, color, onClick }) => {
  return (
    <>
      <ColorText a={color} onClick={onClick}>
        글자: {children}
      </ColorText>
    </>
  );
};

export default Text;
