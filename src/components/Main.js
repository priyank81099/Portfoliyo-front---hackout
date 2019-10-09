import React from "react";

import { Container, Header } from "semantic-ui-react";

const Main = () => (
  <Container text>
    <Header
      as="h1"
      content="Portfolio"
      inverted
      style={{
        fontSize: "6em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: "1.8em",
        marginLeft: "23%",
        fontFamily: "Comic Sans MS, cursive, sans-serif"
      }}
    />
    <Header
      as="h2"
      content="Where you are shining!!"
      inverted
      style={{
        fontSize: "2em",
        fontWeight: "normal",
        marginTop: "0.6em",
        marginLeft: "27%"
      }}
    />
  </Container>
);

export default Main;
