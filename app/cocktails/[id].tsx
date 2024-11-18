import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function CocktailDetailsScreen() {
  const { id } = useLocalSearchParams();

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

  const cocktail = cocktails.find((cocktail) => cocktail.id === id);

  return (
    <View>
      <Text>Details du cocktail {id}</Text>
      <Text>{cocktail?.name}</Text>
    </View>
  );
}
