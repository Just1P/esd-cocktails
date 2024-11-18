import { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simple Counter</Text>
      <Text style={styles.counter}>{count}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.incrementButton]}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.buttonText}>+ Incrémenter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.decrementButton]}
          onPress={() => setCount(count - 1)}
        >
          <Text style={styles.buttonText}>- Décrémenter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.resetButton]}
          onPress={() => setCount(0)}
        >
          <Text style={styles.buttonText}>Réinitialiser</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  counter: {
    fontSize: 48,
    fontWeight: "bold",
    marginVertical: 20,
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  incrementButton: {
    backgroundColor: "#4caf50",
  },
  decrementButton: {
    backgroundColor: "#f44336",
  },
  resetButton: {
    backgroundColor: "#2196f3",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
