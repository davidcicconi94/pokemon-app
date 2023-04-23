import { Image, Spacer, Text, useTheme } from "@nextui-org/react";
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
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png"
        alt="imagen.jpg"
        height={60}
        width={60}
      />
      <Text color="red" h2>
        P
      </Text>
      <Text color="white" h3>
        okemón
      </Text>

      <Spacer css={{ flex: 1 }} />
      <Text>Favoritos</Text>
    </div>
  );
};

export default Navbar;
