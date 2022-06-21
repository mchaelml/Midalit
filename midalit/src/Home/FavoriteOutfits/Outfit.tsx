import React, { useState } from "react";

import { Box } from "../../Theme";
import RoundedIcon from "../../Components/RoundedIcon";
import BorderlessTap from "../OutfitIdeas/BorderlessTap";

interface Props {
  outfit: {
    color: string;
    aspectRatio: number;
    id: number;
    selected: boolean;
  };
  width: number;
}

const Outfit = ({ outfit, width }: Props) => {
  const [Selected, setSelected] = useState(false);
  return (
    <BorderlessTap
      onPress={() => {
        setSelected((prev) => !prev);
        outfit.selected = !outfit.selected;
      }}
    >
      <Box
        borderRadius="m"
        marginBottom="m"
        alignItems="flex-end"
        padding="m"
        style={{ backgroundColor: outfit.color }}
        {...{ width }}
        height={width * outfit.aspectRatio}
      >
        {Selected && (
          <RoundedIcon
            name="check"
            color="white"
            size={24}
            backgroundColor="primary"
          />
        )}
      </Box>
    </BorderlessTap>
  );
};

export default Outfit;
