import React from "react";

interface TextProps {
  readonly color: string;
}

const Text: React.FC<TextProps> = ({ children, color }) => {
  return (
    <>
      <p
        style={{
          fontWeight: "bold",
          color,
        }}
      >
        글자: {children}
      </p>
    </>
  );
};

export default Text;
