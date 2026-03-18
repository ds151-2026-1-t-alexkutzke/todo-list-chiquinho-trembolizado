import { View, Text } from "react-native";
import { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";

const Tarefa = ({ text }: { text: string }) => {
  return (
    <View>
      <MaterialIcons name="check-box-outline-blank" size={24} color="black" />
      <Text>{text}</Text>
    </View>
  );
};

export default Tarefa;
