import React from "react";
import { ScrollView } from "react-native-gesture-handler";

import { Box, Text } from "../../Theme";
import Header from "../../Components/Header";
import { HomeNavigationProps } from "../../Components/Navigation";

import Graph, { DataPoint } from "./Graph/Graph";
import Transaction from "./Transaction";

const numberOfMonths = 6;
const startDate = new Date("2019-09-01").getTime();

const data: DataPoint[] = [
  {
    date: new Date("2019-10-02").getTime(),
    value: 139.42,
    color: "primary",
    id: 245672,
  },
  {
    date: new Date("2019-12-01").getTime(),
    value: 281.23,
    color: "drawer1",
    id: 245673,
  },
  {
    date: new Date("2020-02-01").getTime(),
    value: 198.54,
    color: "drawer2",
    id: 245674,
  },
];

const TransactionHistory = ({
  navigation,
}: HomeNavigationProps<"TransactionHistory">) => {
  return (
    <Box flex={1} backgroundColor="white">
      <Header
        title="Transaction History"
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "share", onPress: () => true }}
      />
      <Box padding="m">
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Box>
            <Text color="secondary" variant="header" opacity={0.3}>
              TOTAL SPENT
            </Text>
            <Text variant="title1">$619,19</Text>
          </Box>
          <Box backgroundColor="primaryLight" borderRadius="m" padding="s">
            <Text color="primary">All Time</Text>
          </Box>
        </Box>
        <Graph {...{ data, numberOfMonths, startDate }} />
        <ScrollView>
          {data.map((transaction, k) => (
            <Transaction key={k} transaction={transaction} />
          ))}
        </ScrollView>
      </Box>
    </Box>
  );
};

export default TransactionHistory;
