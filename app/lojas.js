import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";

const lojas = [
  { id: "1", nome: "Pizza Place" },
  { id: "2", nome: "Burger House" },
  { id: "3", nome: "Pasta Time" },
  { id: "4", nome: "Sushi Lovers" },
  { id: "5", nome: "Beverages" },
];

export default function LojasScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lojas Disponíveis</Text>
      <ScrollView contentContainerStyle={styles.scroll}>
        {lojas.map((loja) => (
          <TouchableOpacity
            key={loja.id}
            style={styles.button}
            onPress={() => router.push(`/lojas/${loja.id}`)}
          >
            <Text style={styles.buttonText}>{loja.nome}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 24,
    paddingTop: 60,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#e63946",
    marginBottom: 24,
    textAlign: "center",
  },
  scroll: {
    paddingBottom: 40,
  },
  button: {
    backgroundColor: "#e63946",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "600",
  },
});
