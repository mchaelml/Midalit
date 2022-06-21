import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { View } from "react-native";

import Category from "./Category";

interface Props {}

const categories = [
  {
    id: "newin",
    title: "New In",
    color: "#FFDDDD",
  },
  {
    id: "summer",
    title: "Summer",
    color: "#BEECC4",
  },
  {
    id: "activewear",
    title: "Active Wear",
    color: "#BFEAF5",
  },
  {
    id: "outlet",
    title: "Outlet",
    color: "#F1E0FF",
  },
  {
    id: "accesories",
    title: "Accesories",
    color: "#FFE8E9",
  },
];

const Categories = (props: Props) => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((c) => (
          <Category key={c.id} category={c} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
