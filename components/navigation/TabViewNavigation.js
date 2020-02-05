import React from "react";
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  Layout
} from "@ui-kitten/components";
import styled from "styled-components";

const Container = styled(Layout)`
  position: absolute;
  bottom: 32px;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const StyledBottomNavigation = styled(BottomNavigation)`
  margin-vertical: 8px;
`;

const CalendarIcon = () => <Icon name="calendar" />;
const ListIcon = () => <Icon name="list" />;
const SettingsIcon = () => <Icon name="settings" />;

export const TabViewNavigation = ({ ...props }) => {
  return (
    <Container>
      <StyledBottomNavigation
        selectedIndex={props.selectedIndex}
        onSelect={props.handleTabChange}
      >
        <BottomNavigationTab title="Calendar" icon={CalendarIcon} />
        <BottomNavigationTab title="Manage Bills" icon={ListIcon} />
        <BottomNavigationTab title="Settings" icon={SettingsIcon} />
      </StyledBottomNavigation>
    </Container>
  );
};
