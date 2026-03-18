import { useState } from "react";
import { TextInput, View, Text, StyleSheet, FlatList } from "react-native";
import Tarefa from "./Tarefa";
import React from "react";
import {Tarefas} from "./Tarefa";




const TextScreen = () => {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState<Tarefas[]>([]);

  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder="Digite uma tarefa"
        onChangeText={setText}
        onEndEditing={() => {
          setTasks([...tasks, { id: Date.now().toString(), text, check: false }]);
          setText("");
          console.log(tasks);
        }}
        autoCapitalize="none"
        autoCorrect={false}
        value={text}
      />
      <FlatList
        data={tasks}
        keyExtractor={(item: Tarefas) => item.id}
        renderItem={({item}) => {
          return(
          <Tarefa tarefa={item} AsChecked={(id:string) => {
            const newTasks = tasks.map((tarefa) =>  
            tarefa.id === id ? { ...tarefa, check: !tarefa.check} : tarefa); 
            
        setTasks(newTasks);
          }}  />
          )
        }}
    
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  textOutput: {
    fontSize: 16,
  },
});
export default TextScreen;
