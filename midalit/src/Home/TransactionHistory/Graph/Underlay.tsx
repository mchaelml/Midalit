import React from "react";
import moment from "moment";
import { StyleSheet } from "react-native";

import { Box, Text, useTheme } from "../../../Theme";
import { lerp } from "../../../helpers";

export const MARGIN = "xl";
const ROW_HEIGHT = 16;

interface Props {
  minY: number;
  maxY: number;
  step: number;
  startDate: number;
  numberOfMonths: number;
}

const Underlay = ({ minY, maxY, step, startDate, numberOfMonths }: Props) => {
  const theme = useTheme();
  const minDate = moment(startDate);
  return (
    <Box style={StyleSheet.absoluteFillObject}>
      <Box flex={1} justifyContent="space-between">
        {[1, 0.66, 0.33, 0].map((t) => {
          return (
            <Box
              key={t}
              flexDirection="row"
              alignItems="center"
              height={ROW_HEIGHT}
              style={{
                // eslint-disable-next-line no-nested-ternary
                top: t === 0 ? ROW_HEIGHT / 2 : t === 1 ? -ROW_HEIGHT / 2 : 0,
              }}
            >
              <Text>{Math.round(lerp(minY, maxY, t))}</Text>
              <Box flex={1} height={1} backgroundColor="grey" />
            </Box>
          );
        })}
      </Box>
      <Box
        flexDirection="row"
        marginLeft="l"
        height={theme.spacing.l}
        alignItems="center"
      >
        {new Array(numberOfMonths)
          .fill(0)
          .map((_, i) => minDate.clone().add(i, "month"))
          .map((d, i) => (
            <Box width={step}>
              <Text key={i} textAlign="center">
                {d.format("MMM")}
              </Text>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default Underlay;
