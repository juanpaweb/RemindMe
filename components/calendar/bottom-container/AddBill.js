import React from "react";
import {
  Layout,
  Button,
  Text,
  Modal,
  Input,
  Icon
} from "@ui-kitten/components";
import { Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../../redux/actions";
import styled from "styled-components";

const SCREEN_WIDTH = Dimensions.get("screen").width;
const SCREEN_HEIGHT = Dimensions.get("screen").height;

const InfoIcon = () => <Icon name="info" />;
const CalendarIcon = () => <Icon name="calendar" />;
const DollarSignIcon = () => <Icon name="dollar-sign" />;

const ModalContainer = styled(Layout)`
  width: ${props => props.width}
  height: ${props => props.height}
  padding: 64px 16px 16px 16px;
  align-items: center;
  background: #ffffff;
`;

const CloseButton = styled(Button)`
  position: absolute;
  bottom: 32px;
  width: 100%;
  border-radius: 50px;
  box-shadow: 0 3px 13px rgba(51, 102, 255, 0.5);
`;

const InputContainer = styled(Layout)`
  background: #ffffff;
  margin-top: 58px;
  padding: 32px 0;
`;

const BillDetailsContainer = styled(Layout)`
  margin: 8px;
  width: 100%;
`;

const BillText = styled(Text)`
  margin-left: 8px;
`;

const BillInput = styled(Input)`
  width: 100%;
  border-radius: 50px;
  background: #ffffff;
  box-shadow: 0 3px 13px rgba(182, 193, 205, 0.5);
`;

const AddBill = () => {
  const dispatch = useDispatch();
  const isAddBillsVisible = useSelector(
    state => state.calendar.isAddBillsVisible
  );

  const renderIsAddBillVisibleModal = () => (
    <ModalContainer width={SCREEN_WIDTH} height={SCREEN_HEIGHT}>
      <Text category="h1">Add Bill</Text>
      <InputContainer>
        <BillDetailsContainer>
          <BillText category="h5">Bill Nickname</BillText>
          <BillInput
            size="large"
            placeholder="Ex: Ener-g Inc."
            icon={InfoIcon}
          />
        </BillDetailsContainer>
        <BillDetailsContainer>
          <BillText category="h5">Bill Due Date</BillText>
          <BillInput
            size="large"
            placeholder="Ex: 01/14/2020"
            icon={CalendarIcon}
          />
        </BillDetailsContainer>
        <BillDetailsContainer>
          <BillText category="h5">Bill Amount</BillText>
          <BillInput
            size="large"
            placeholder="Ex: $145.50"
            icon={DollarSignIcon}
          />
        </BillDetailsContainer>
      </InputContainer>
      <CloseButton
        size="large"
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
