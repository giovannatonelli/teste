import { ScrollView, Text, Image, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { cardapiosData } from "../../data/cardapios";

export default function DetalheItem() {
  const { itemId } = useLocalSearchParams();

  let itemSelecionado;
  for (const loja of Object.values(cardapiosData)) {
    const encontrado = loja.find(item => item.id === itemId);
    if (encontrado) {
      itemSelecionado = encontrado;
      break;
    }
  }

  if (!itemSelecionado) return <Text style={styles.naoEncontrado}>Item não encontrado.</Text>;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={itemSelecionado.imagem} style={styles.imagem} />
      <Text style={styles.nome}>{itemSelecionado.nome}</Text>
      <Text style={styles.descricao}>{itemSelecionado.descricao}</Text>
      <Text style={styles.quantidade}>{itemSelecionado.quantidade}</Text>
      <Text style={styles.ingredientes}>Ingredientes: {itemSelecionado.ingredientes?.join(", ")}</Text>
      <Text style={styles.preco}>Preço: R$ {itemSelecionado.preco.toFixed(2)}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  imagem: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  nome: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  descricao: {
    fontSize: 16,
    marginBottom: 8,
  },
  quantidade: {
    fontSize: 16,
    marginBottom: 8,
  },
  ingredientes: {
    fontSize: 16,
    marginBottom: 8,
  },
  preco: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2a9d8f",
    marginTop: 16,
  },
  naoEncontrado: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 18,
    color: "#999",
  },
});
