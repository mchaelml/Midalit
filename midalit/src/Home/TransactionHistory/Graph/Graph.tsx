import React from "react";
import { Dimensions } from "react-native";
import moment from "moment";

import { lerp } from "../../../helpers";
import { useTheme, Box, Theme } from "../../../Theme";

import Underlay from "./Underlay";

const { width: wWidth } = Dimensions.get("window");
const aspectRatio = 195 / 305;

export interface DataPoint {
  date: number;
  value: number;
  color: keyof Theme["colors"];
  id: number;
}

interface Props {
  data: DataPoint[];
  startDate: number;
  numberOfMonths: number;
}

const Graph = ({ data, startDate, numberOfMonths }: Props) => {
  const theme = useTheme();
  const canvasWidth = wWidth - theme.spacing.m * 2;
  const canvasHeight = canvasWidth * aspectRatio;
  const width = canvasWidth - theme.spacing.l;
  const height = canvasHeight - theme.spacing.l;
  const values = data.map((p) => p.value);
  const dates = data.map((p) => p.date);
  const step = width / numberOfMonths;
  const minY = Math.min(...values);
  const maxY = Math.max(...values);
  return (
    <Box paddingBottom="l" paddingLeft="l" marginTop="xl">
      <Underlay {...{ dates, minY, maxY, step, startDate, numberOfMonths }} />
      <Box {...{ width, height }}>
        {data.map((point) => {
          const i = Math.round(
            moment.duration(moment(point.date).diff(startDate)).asMonths(),
          );
          console.log(i);
          return (
            <Box
              key={point.date}
              position="absolute"
              left={i * step}
              bottom={0}
              width={step}
              height={lerp(0, height, point.value / maxY)}
            >
              <Box
                backgroundColor={point.color}
                position="absolute"
                opacity={0.1}
                top={0}
                bottom={0}
                borderTopLeftRadius="m"
                borderTopRightRadius="m"
                left={theme.spacing.m}
                right={theme.spacing.m}
              />
              <Box
                backgroundColor={point.color}
                position="absolute"
                top={0}
                height={32}
                left={theme.spacing.m}
                right={theme.spacing.m}
                borderRadius="m"
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Graph;
