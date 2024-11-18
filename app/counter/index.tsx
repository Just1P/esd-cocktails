import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  const handleAddCocktail = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const handleRemoveCocktail = () => {
    const newCount = count - 1;
    if (count > 0) {
      setCount(newCount);
    }
  };

  const handleresetCocktail = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simple Counter</Text>
      <Text style={styles.counter}>{count}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.decrementButton]}
          onPress={handleRemoveCocktail}
        >
          <Text style={styles.buttonText}>- Décrémenter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.resetButton]}
          onPress={handleresetCocktail}
        >
          <Text style={styles.buttonText}>Réinitialiser</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.incrementButton]}
          onPress={handleAddCocktail}
        >
          <Text style={styles.buttonText}>+ Incrémenter</Text>
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
