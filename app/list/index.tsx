import { router } from "expo-router";
import { StyleSheet, Text, View, FlatList, Image, Button } from "react-native";

const cocktails = [
  {
    id: "1",
    name: "Mojito",
    image:
      "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg",
    description: "A refreshing mint and lime cocktail.",
  },
  {
    id: "2",
    name: "Margarita",
    image:
      "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
    description: "A tangy tequila-based cocktail with lime.",
  },
  {
    id: "3",
    name: "Pina Colada",
    image:
      "https://www.thecocktaildb.com/images/media/drink/cpf4j51504371346.jpg",
    description: "A tropical mix of pineapple, coconut, and rum.",
  },
  {
    id: "4",
    name: "Old Fashioned",
    image:
      "https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg",
    description: "A classic whiskey cocktail with a twist of orange.",
  },
  {
    id: "5",
    name: "Cosmopolitan",
    image:
      "https://www.thecocktaildb.com/images/media/drink/kpsajh1504368362.jpg",
    description: "A sophisticated vodka-based cocktail with cranberry.",
  },
];

export default function App() {
  const handleCocktailDetail = () => {
    router.push("cocktails/1");
  };

  const renderCocktail = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Button title="voir le cocktail" onPress={handleCocktailDetail} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cocktail List</Text>
      <FlatList
        data={cocktails}
        renderItem={renderCocktail}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#333",
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 10,
    overflow: "hidden",
    elevation: 3, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
  info: {
    flex: 1,
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#4CAF50",
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
});
