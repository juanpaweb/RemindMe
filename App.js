import React, { useEffect, useState } from "react";
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  AppLoading
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { mapping, light as lightTheme } from "@eva-design/eva";
import CalendarMain from "./components/calendar/CalendarMain";
import * as Font from "expo-font";
import styled from "styled-components";

const Container = styled(Layout)`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  height: 100%;
  width: 100%;
`;

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    loadFont();
  });

  const loadFont = async () => {
    await Font.loadAsync({
      "roboto-light": require("./assets/fonts/Roboto-Light.ttf")
    });

    setFontLoaded(true);
  };

  return (
    <>
      {fontLoaded ? (
        <>
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider mapping={mapping} theme={lightTheme}>
            <Container>
              <CalendarMain />
            </Container>
          </ApplicationProvider>
        </>
      ) : null}
    </>
  );
};

export default App;
