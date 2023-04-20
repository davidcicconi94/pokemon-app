import { Text, useTheme } from "@nextui-org/react";
import React from "react";

const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100$",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0x 20px",
        backgroundColor: theme?.colors.gray200.value,
      }}
    >
      <Text color="red" h2>
        P
      </Text>
      <Text color="white" h3>
        okemón
      </Text>
    </div>
  );
};

export default Navbar;
