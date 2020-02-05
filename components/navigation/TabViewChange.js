import React, { useState } from "react";
import { TabViewNavigation } from "./TabViewNavigation";
import { CalendarMain } from "../calendar/CalendarMain";
import { ManageBills } from "../manage-bills/ManageBills";
import { Settings } from "../settings/Settings";

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
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleTabChange = selectedIndex => {
    setSelectedIndex(selectedIndex);
  };

  return (
    <>
      {renderTab(selectedIndex)}
      <TabViewNavigation
        selectedIndex={selectedIndex}
        handleTabChange={handleTabChange}
      />
    </>
  );
};
