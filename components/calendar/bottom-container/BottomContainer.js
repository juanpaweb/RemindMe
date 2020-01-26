import React from "react";
import { Layout, Text } from "@ui-kitten/components";
import { Row } from "../../common/Row";
import styled from "styled-components";

const Container = styled(Layout)`
  height: 50%;
  background: #ffffff;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  box-shadow: 0 -5px 10px #dae0eb;
  padding: 16px;
`;

const BottomContainer = () => {
  return (
    <Container>
      <Row>
        <Text category="h4">No bills due today</Text>
      </Row>
    </Container>
  );
};

export default BottomContainer;
