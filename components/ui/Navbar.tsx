import {
  Button,
  Container,
  Image,
  Link,
  Spacer,
  Text,
  useTheme,
} from "@nextui-org/react";
import React from "react";

import NextLink from "next/link";

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
      <NextLink href="/" passHref>
        <Container display="flex" direction="row">
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png"
            alt="imagen.jpg"
            height={60}
            width={60}
          />
          <Text h2 color="red">
            P
          </Text>
          <Text css={{ marginTop: "12px" }} h3>
            ókemon
          </Text>
        </Container>
      </NextLink>

      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favorites" passHref>
        <Button color="gradient" ghost css={{ marginInline: "30px" }}>
          My Pokemons
        </Button>
      </NextLink>
    </div>
  );
};

export default Navbar;
