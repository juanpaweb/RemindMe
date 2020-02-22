import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../redux/actions";
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  Layout
} from "@ui-kitten/components";
import styled from "styled-components";

const Container = styled(Layout)`
  position: absolute;
  bottom: 16px;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const StyledBottomNavigation = styled(BottomNavigation)`
  margin-vertical: 8px;
`;

const StyledBottomNavigationTab = styled(BottomNavigationTab)`
  border-radius: 50px;
  box-shadow: ${props =>
    props.isSelected
      ? "0 3px 13px rgba(51, 102, 255, 0.5)"
      : "0 0 0 rgba(0, 0, 0, 0)"};
  background: ${props => (props.isSelected ? "#3366ff" : "#ffffff")};
  margin: 0 32px;
`;

const StyledIcon = styled(Icon)`
  color: ${props => (props.isSelected ? "#ffffff" : "#3366ff")};
`;

export const TabViewNavigation = () => {
  const dispatch = useDispatch();
  const selectedIndex = useSelector(state => state.tabNavigation.selectedTab);

  useEffect(() => {
    dispatch(allActions.tabNavigationActions.setSelectedTab(0));
  }, []);

  const onSelect = index => {
    dispatch(allActions.tabNavigationActions.setSelectedTab(index));
  };

  const CalendarIcon = () => (
    <StyledIcon
      isSelected={selectedIndex === 0 ? true : false}
      name="calendar"
    />
  );
  const ListIcon = () => (
    <StyledIcon isSelected={selectedIndex === 1 ? true : false} name="list" />
  );
  const SettingsIcon = () => (
    <StyledIcon
      isSelected={selectedIndex === 2 ? true : false}
      name="settings"
    />
  );

  return (
    <Container>
      <StyledBottomNavigation
        selectedIndex={selectedIndex}
        onSelect={index => onSelect(index)}
        appearance="noIndicator"
      >
        <StyledBottomNavigationTab
          isSelected={selectedIndex === 0 ? true : false}
          icon={CalendarIcon}
        />
        <StyledBottomNavigationTab
          isSelected={selectedIndex === 1 ? true : false}
          icon={ListIcon}
        />
        <StyledBottomNavigationTab
          isSelected={selectedIndex === 2 ? true : false}
          icon={SettingsIcon}
        />
      </StyledBottomNavigation>
    </Container>
  );
};
