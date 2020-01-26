import React, { useState, useEffect } from "react";
import { Layout, Text } from "@ui-kitten/components";
import { Row } from "../../common/Row";
import { Column } from "../../common/Column";
import CalendarContainer from "./CalendarContainer";
import moment from "moment";
import styled from "styled-components";

const Container = styled(Layout)`
  height: 50%;
  background: #ffffff;
  padding: 64px 16px 16px 16px;
`;

const CustomText = styled(Text)`
  color: #b6c1cd;
`;

const TopContainer = ({ ...props }) => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    getCurrentMonth();
  });

  const getCurrentMonth = () => {
    const now = new Date();
    const date = `${moment(now).format("ddd")} ${moment(now).format("Do")}`;

    setDate(date);
  };

  const toggleDetails = () => {
    props.toggleDetails();
  };

  return (
    <Container>
      <Layout>
        <Row>
          <Column col={1.5}>
            <Text category="h1">Today, </Text>
          </Column>
          <Column col={3}>
            <CustomText category="h1">{date}</CustomText>
          </Column>
        </Row>
        <CalendarContainer toggleDetails={props.toggleDetails} />
      </Layout>
    </Container>
  );
};

export default TopContainer;
