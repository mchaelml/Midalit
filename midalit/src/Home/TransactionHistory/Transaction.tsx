import React from "react";
import moment from "moment";

import { Box, Text, useTheme } from "../../Theme";

import { DataPoint } from "./Graph/Graph";

interface Props {
  transaction: DataPoint;
}

const Transaction = ({ transaction }: Props) => {
  const theme = useTheme();
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      marginTop="m"
    >
      <Box>
        <Box flexDirection="row" alignItems="center">
          <Box
            backgroundColor={transaction.color}
            height={theme.borderRadii.s * 2}
            width={theme.borderRadii.s * 2}
            borderRadius="s"
          />
          <Text variant="header" fontWeight="600" marginLeft="s">
            #{transaction.id}
          </Text>
        </Box>
        <Text color="darkGrey">
          {`$${transaction.value} - ${moment(transaction.date).format(
            "DD MMMM#, YYYY",
          )}`}
        </Text>
      </Box>
      <Box>
        <Text color="secondary" fontWeight="600">
          See more
        </Text>
      </Box>
    </Box>
  );
};

export default Transaction;
