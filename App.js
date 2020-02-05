import React, { useEffect, useState } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers";
import {
  ApplicationProvider,
  IconRegistry,
  Layout
} from "@ui-kitten/components";
import { mapping, light as lightTheme } from "@eva-design/eva";
import { TabViewChange } from "./components/navigation/TabViewChange";
import * as Font from "expo-font";
import { FeatherIconsPack } from "./feather-icons";
import styled from "styled-components";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

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
    <Provider store={store}>
      {fontLoaded ? (
        <>
          <IconRegistry icons={FeatherIconsPack} />
          <ApplicationProvider mapping={mapping} theme={lightTheme}>
            <Container>
              <TabViewChange />
            </Container>
          </ApplicationProvider>
        </>
      ) : null}
    </Provider>
  );
};

export default App;
