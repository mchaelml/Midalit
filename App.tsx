import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { ThemeProvider } from "@shopify/restyle";

// import {HomeStack} from "./navigation";
import Tabbar from "./midalit/tabBar";
// import Main from "./midalit/mainView/Main";
import { AuthenticationNavigator } from "./midalit/src/Authentication";
import { theme } from "./midalit/src/Theme";
import { HomeNavigator } from "./midalit/src/Home";
import { AppRoutes } from "./midalit/src/Components/Navigation";
import Test from "./Test";

//const Tab = createBottomTabNavigator();
const mariner = "#3B5F8F";
const mediumPurple = "#8266D4";
const tomato = "#F95B57";
const mySin = "#F3A646";

const sections: any[] = [
  {
    title: "SUNGLASSES",
    leftColor: mediumPurple,
    rightColor: mariner,
    image: require("./midalit/assets/sunnies.png"),
  },
  {
    title: "FURNITURE",
    leftColor: tomato,
    rightColor: mediumPurple,
    image: require("./midalit/assets/table.png"),
  },
  {
    title: "JEWELRY",
    leftColor: mySin,
    rightColor: tomato,
    image: require("./midalit/assets/earrings.png"),
  },
  {
    title: "HEADWEAR",
    leftColor: "white",
    rightColor: tomato,
    image: require("./midalit/assets/hat.png"),
  },
];

const AppStack = createStackNavigator<AppRoutes>();

const App = () => {
  return (
    // <Tabbar />
    // <ThemeProvider theme={theme}>
    //   <Test />
    // </ThemeProvider>

    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppStack.Navigator headerMode="none" initialRouteName="Home">
          <AppStack.Screen
            name="Authentication"
            component={AuthenticationNavigator}
          />
          <AppStack.Screen name="Home" component={HomeNavigator} />
        </AppStack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
    // <Main {...{sections}} />
  );
};

export default App;
