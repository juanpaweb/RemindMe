import React, { useEffect } from "react";
import { Layout, Button, Text, Icon } from "@ui-kitten/components";
import { Row } from "../../common/Row";
import { BulletList } from "react-content-loader/native";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../../redux/actions";
import styled from "styled-components";
import { AddBill } from "./AddBill";

const PlusIcon = () => <Icon name="plus" />;

const Container = styled(Layout)`
  height: 100%;
  background: #ffffff;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  box-shadow: 0 -5px 10px #dae0eb;
  padding: 16px;
`;

const AddBillButton = styled(Button)`
  width: 45px;
  border-radius: 50px;
  box-shadow: 0 3px 13px rgba(51, 102, 255, 0.5);
  align-self: flex-end;
`;

const StyledRow = styled(Row)`
  justify-content: center;
  padding: 32px 0;
`;

const BillsText = styled(Text)`
  color: #b6c1cd;
`;

export const BottomContainer = () => {
  const dispatch = useDispatch();
  const isLoadingBills = useSelector(state => state.calendar.isLoadingBills);

  useEffect(() => {
    dispatch(allActions.calendarActions.loadBillsForDay());
  }, []);

  return (
    <Container>
      <AddBillButton
        status="primary"
        size="medium"
        icon={PlusIcon}
        onPress={() => dispatch(allActions.calendarActions.toggleAddBills())}
      />
      <AddBill />
      <StyledRow>
        {isLoadingBills ? (
          <>
            <BulletList
              width="100%"
              height="275"
              style={{
                position: "absolute",
                top: -45,
                left: 0
              }}
            />
            <BulletList
              width="100%"
              height="275"
              style={{
                position: "absolute",
                top: 142,
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
