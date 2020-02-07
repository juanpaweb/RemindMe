import React, { useState } from "react";
import { TabViewNavigation } from "./TabViewNavigation";
import { CalendarMain } from "../calendar/CalendarMain";
import { ManageBills } from "../manage-bills/ManageBills";
import { Settings } from "../settings/Settings";
import { useSelector } from "react-redux";

const renderTab = selectedIndex => {
  if (selectedIndex === 0) {
    return <CalendarMain />;
  } else if (selectedIndex === 1) {
    return <ManageBills />;
  } else {
    return <Settings />;
  }
};

export const TabViewChange = () => {
  const selectedIndex = useSelector(state => state.tabNavigation.selectedTab);

  return (
    <>
      {renderTab(selectedIndex)}
      <TabViewNavigation />
    </>
  );
};
