import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { cardapiosData } from "../data/cardapios";

export default function Cesta() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const cardapio = cardapiosData[id];

  if (!cardapio) return <Text style={styles.naoEncontrado}>Cardápio não encontrado.</Text>;

  return (
    <FlatList
      data={cardapio}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => router.push(`/cardapio/${item.id}`)}>
          <View style={styles.card}>
            <Image source={item.imagem} style={styles.imagem} />
            <View style={styles.info}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#f8f9fa",
    borderRadius: 10,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 2,
  },
  imagem: {
    width: 80,
    height: 80,
  },
  info: {
    padding: 10,
    flex: 1,
    justifyContent: "center",
  },
  nome: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1d3557",
  },
  preco: {
    fontSize: 14,
    color: "#457b9d",
    marginTop: 4,
  },
  naoEncontrado: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 18,
    color: "#999",
  },
});
