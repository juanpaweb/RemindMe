import React from "react";
import { Layout } from "@ui-kitten/components";
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
  return <Container />;
};

export default BottomContainer;
