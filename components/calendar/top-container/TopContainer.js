import React, { useState, useEffect } from "react";
import { Layout, Text } from "@ui-kitten/components";
import { Row } from "../../common/Row";
import { Column } from "../../common/Column";
import { CalendarContainer } from "./CalendarContainer";
import moment from "moment";
import styled from "styled-components";

const Container = styled(Layout)`
  height: 50%;
  background: #3366ff;
  padding: 64px 16px 16px 16px;
`;

const CustomLayout = styled(Layout)`
  background: #3366ff;
`;

const DateText = styled(Text)`
  color: #ffffff;
`;

export const TopContainer = () => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    getCurrentMonth();
  });

  const getCurrentMonth = () => {
    const now = new Date();
    const date = `${moment(now).format("ddd")} ${moment(now).format("Do")}`;

    setDate(date);
  };

  return (
    <Container>
      <CustomLayout>
        <Row>
          <Column col={1.5}>
            <Text category="h1">Today, </Text>
          </Column>
          <Column col={3}>
            <DateText category="h1">{date}</DateText>
          </Column>
        </Row>
        <CalendarContainer />
      </CustomLayout>
    </Container>
  );
};
