import React, { useState } from "react";
import TopContainer from "./top-container/TopContainer";
import BottomContainer from "./bottom-container/BottomContainer";

const CalendarMain = () => {
  const [isDetailsShown, setIsDetailsShown] = useState(false);

  const toggleDetails = () => {
    setIsDetailsShown(!isDetailsShown);
  };

  return (
    <>
      <TopContainer toggleDetails={toggleDetails} />
      {isDetailsShown ? (
        <BottomContainer isDetailsShown={isDetailsShown} />
      ) : null}
    </>
  );
};

export default CalendarMain;
