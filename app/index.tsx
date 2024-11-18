import { useRouter } from "expo-router";
import { Button, Text, View, StyleSheet, ScrollView } from "react-native";

export default function Index() {
  const router = useRouter();

  const handlePress = () => {
    router.push("counter");
  };

  const handlePressList = () => {
    router.push("cocktails");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Bonjour je suis la page d'accueil</Text>
        <Text style={styles.subtitle}>Sous titre</Text>
        <Button title="Le compteur de cocktails" onPress={handlePress}></Button>
        <Button title="Liste des cocktails" onPress={handlePressList}></Button>
        <Text style={styles.description}>
          Un cocktail est une boisson mélangée composée d'au moins deux
          ingrédients, souvent alcoolisés, associés pour créer une saveur
          unique. Il peut inclure des spiritueux (comme le rhum, la vodka ou le
          gin), des jus de fruits, des sirops, des herbes ou des épices. Les
          cocktails sont généralement préparés pour être servis frais, parfois
          avec de la glace, et souvent ornés de garnitures comme des rondelles
          de citron, des feuilles de menthe ou des cerises. Ils sont populaires
          pour leur diversité et leur capacité à s'adapter à tous les goûts et
          occasions.
        </Text>

        <Text style={styles.sectionTitle}>Les meilleurs cocktails</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.cardContainer}
        >
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Mojito</Text>
            <Text style={styles.cardDescription}>
              Un mélange de rhum, menthe fraîche, sucre de canne, citron vert et
              eau gazeuse.
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Margarita</Text>
            <Text style={styles.cardDescription}>
              Une combinaison classique de tequila, triple sec et jus de citron
              vert.
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Cosmopolitan</Text>
            <Text style={styles.cardDescription}>
              Un cocktail sophistiqué avec vodka, triple sec, jus de cranberry
              et citron vert.
            </Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.footer}>
          © {new Date().getFullYear()} Cocktails.co. Tous droits réservés.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 8,
    color: "#666",
    fontWeight: "400",
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 20,
    marginHorizontal: 10,
    color: "#333",
    lineHeight: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 10,
    textAlign: "center",
  },
  cardContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  card: {
    width: 200,
    backgroundColor: "#fff",
    height: 150,
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  cardDescription: {
    fontSize: 14,
    textAlign: "center",
    color: "#555",
  },
  footerContainer: {
    backgroundColor: "#2c3e50",
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  footer: {
    color: "#ecf0f1",
    fontSize: 14,
    textAlign: "center",
  },
});
