import React from "react";
import { Layout, Button, Text, Modal, Input } from "@ui-kitten/components";
import { Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../../redux/actions";
import styled from "styled-components";

const SCREEN_WIDTH = Dimensions.get("screen").width;
const SCREEN_HEIGHT = Dimensions.get("screen").height;

const ModalContainer = styled(Layout)`
  width: ${props => props.width}
  height: ${props => props.height}
  padding: 64px 16px 16px 16px;
  align-items: center;
`;

const CloseButton = styled(Button)`
  position: absolute;
  bottom: 32px;
  width: 100%;
  border-radius: 50px;
  box-shadow: 0 3px 13px rgba(51, 102, 255, 0.5);
`;

const InputContainer = styled(Layout)`
  background: #f7f9fc;
  margin-top: 64px;
  padding: 32px;
`;

const StyledInput = styled(Input)`
  width: 100%;
  border-radius: 50px;
  box-shadow: 0 3px 13px rgba(51, 102, 255, 0.5);
`;

const AddBill = () => {
  const dispatch = useDispatch();
  const isAddBillsVisible = useSelector(
    state => state.calendar.isAddBillsVisible
  );

  const renderIsAddBillVisibleModal = () => (
    <ModalContainer level="2" width={SCREEN_WIDTH} height={SCREEN_HEIGHT}>
      <Text category="h1">Add Bill</Text>
      <InputContainer>
        <StyledInput size="medium" placeholder="Bill Name" />
      </InputContainer>
      <CloseButton
        size="medium"
        onPress={() => dispatch(allActions.calendarActions.toggleAddBills())}
      >
        Close
      </CloseButton>
    </ModalContainer>
  );

  return (
    <Modal visible={isAddBillsVisible}>{renderIsAddBillVisibleModal()}</Modal>
  );
};

export default AddBill;
