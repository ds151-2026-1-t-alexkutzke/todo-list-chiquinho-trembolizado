import { useState } from "react";
import { TextInput, View, Text, StyleSheet, FlatList } from "react-native";
import Tarefa from "./Tarefa";
import React from "react";

interface Tarefa {
  id: string;
  text: string;
}

const TextScreen = () => {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState<Tarefa[]>([]);
  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder="Digite uma tarefa"
        onChangeText={setText}
        onEndEditing={() => {
          setTasks([...tasks, { id: Date.now().toString(), text }]);
          setText("");
        }}
        autoCapitalize="none"
        autoCorrect={false}
        value={text}
      />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Tarefa text={item.text} />}
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
