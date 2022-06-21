import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { timing, withTransition, useTransition } from "react-native-redash";
import {
  Value,
  block,
  onChange,
  useCode,
  call,
  set,
} from "react-native-reanimated";
import Tab from "./Tab";
import Compass from "./icons/Compass";
import Chat from "./icons/Chat";
import Camera from "./icons/Camera";
import Bell from "./icons/Bell";
import User from "./icons/User";
import Particles from "./Particles";
import Wave from "./Wave";
import { DURATION, ICON_SIZE, PADDING, SEGMENT } from "./icons/Constants";
import { useMemoOne } from "use-memo-one";

const tabs = [
  { icon: <Compass /> },
  { icon: <Chat /> },
  { icon: <Camera /> },
  { icon: <Bell /> },
  { icon: <User /> },
];
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  tabs: {
    flexDirection: "row",
    alignItems: "center",
  },
  tab: {
    width: SEGMENT,
    height: ICON_SIZE + PADDING * 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

const TabBar = () => {
  const active = new Value<number>(0);
  const [number, setNumber] = useState(0);
  const transition = withTransition(active, { duration: DURATION });
  //const transition = useTransition(number,{duration: DURATION});
  const activeTransition = new Value(0);

  useCode(
    () =>
      block([
        onChange(active, set(activeTransition, 0)),
        set(activeTransition, timing({ duration: DURATION })),
      ]),
    [active, activeTransition],
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabs}>
        {tabs.map(({ icon }, index) => {
          return (
            <View key={index} style={styles.tab}>
              <Wave {...{ active, number, index }} />
              <Tab
                onPress={() => {
                  active.setValue(index);
                  //setNumber(index)
                }}
                {...{ number, active, index, transition }}
              >
                {icon}
              </Tab>
              {/* <Weave {...{ active, index }} /> */}
            </View>
          );
        })}
        <Particles {...{ transition, activeTransition, active, number }} />
      </View>
    </SafeAreaView>
  );
};

export default TabBar;
