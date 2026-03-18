import { View, Text } from "react-native";
import { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";

export interface Tarefas {
  id: string,
  text: string,
  check: boolean
}

interface TarefaProps{
  tarefa: Tarefas,
  AsChecked: (id: string) => void
}

const Tarefa = ({ tarefa, AsChecked }: TarefaProps) => {
  const [tasks, setTasks] = useState(false);
  const checked = tarefa.check ? "check-box" : "check-box-outline-blank"
  return (
    <View>
      <MaterialIcons name={checked} size={24} color="black" onPress={() => AsChecked(tarefa.id)} />
      <Text>{tarefa.text}</Text> 
    </View>
  );
};

export default Tarefa;
