import React, { useEffect } from "react";
import { Layout, Button, Text } from "@ui-kitten/components";
import { Row } from "../../common/Row";
import { BulletList } from "react-content-loader/native";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../../redux/actions";
import styled from "styled-components";
import AddBill from "./AddBill";

const Container = styled(Layout)`
  height: 100%;
  background: #ffffff;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  box-shadow: 0 -5px 10px #dae0eb;
  padding: 16px;
`;

const AddBillButton = styled(Button)`
  width: 100%;
  border-radius: 50px;
  box-shadow: 0 3px 13px rgba(51, 102, 255, 0.5);
`;

const StyledRow = styled(Row)`
  justify-content: center;
  padding: 32px 0;
`;

const BillsText = styled(Text)`
  color: #b6c1cd;
`;

const BottomContainer = () => {
  const dispatch = useDispatch();
  const isLoadingBills = useSelector(state => state.calendar.isLoadingBills);

  useEffect(() => {
    // Temporary loading animation func for bills on selected day
    setTimeout(() => {
      dispatch(allActions.calendarActions.getBillsForCurrentDay());
    }, 2500);
  }, []);

  return (
    <Container>
      <Row>
        <AddBillButton
          status="primary"
          size="medium"
          onPress={() => dispatch(allActions.calendarActions.toggleAddBills())}
        >
          Add a bill
        </AddBillButton>
        <AddBill />
      </Row>
      <StyledRow>
        {isLoadingBills ? (
          <>
            <BulletList
              width="100%"
              height="275"
              style={{
                position: "absolute",
                top: -25,
                left: 0
              }}
            />
            <BulletList
              width="100%"
              height="275"
              style={{
                position: "absolute",
                top: 165,
                left: 0
              }}
            />
          </>
        ) : (
          <BillsText category="h3">No bills due today</BillsText>
        )}
      </StyledRow>
    </Container>
  );
};

export default BottomContainer;
