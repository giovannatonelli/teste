import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, ScrollView } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

const lojasData = {
  "1": {
    nome: "Pizza Place",
    imagem: require("../../assets/pizzaplace.png"),
    descricao: "Pizzas artesanais para todos os gostos.",
    telefone: "+5548999999991",
    whatsapp: "+5548999999991",
    instagram: "https://instagram.com/pizzaplace",
    email: "contatopizzaplace@gmail.com",
    delivery: "https://ifood.com/pizzaplace",
    temCardapio: true,
  },
  // outras lojas
};

export default function LojaDetalhes() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const loja = lojasData[id];

  if (!loja) return <Text>Loja não encontrada</Text>;

  return (
    <ScrollView style={styles.container}>
      <Image source={loja.imagem} style={styles.image} />
      <Text style={styles.title}>{loja.nome}</Text>
      <Text style={styles.description}>{loja.descricao}</Text>

      <Text style={styles.sectionTitle}>Contato</Text>
      <TouchableOpacity style={styles.contactButton} onPress={() => Linking.openURL(`tel:${loja.telefone}`)}>
        <MaterialIcons name="phone" size={20} color="#e63946" />
        <Text style={styles.contactText}>Ligar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.contactButton} onPress={() => Linking.openURL(`https://wa.me/${loja.whatsapp}`)}>
        <FontAwesome name="whatsapp" size={20} color="#25D366" />
        <Text style={styles.contactText}>WhatsApp</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.contactButton} onPress={() => Linking.openURL(`mailto: ${loja.email}`)}>
        <FontAwesome name="email" size={20} color="#25D366" />
        <Text style={styles.contactText}>E-mail</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Redes Sociais</Text>
      <TouchableOpacity style={styles.contactButton} onPress={() => Linking.openURL(loja.instagram)}>
        <FontAwesome name="instagram" size={20} color="#C13584" />
        <Text style={styles.contactText}>Instagram</Text>
      </TouchableOpacity>

      {loja.delivery && (
      <TouchableOpacity style={styles.actionButton} onPress={() => Linking.openURL(loja.delivery)}>
        <FontAwesome name="shopping-cart" size={20} color="#fff" />
        <Text style={styles.actionButtonText}>Pedir pelo App</Text>
      </TouchableOpacity>
    )}

    {loja.temCardapio && (
      <TouchableOpacity style={styles.actionButton} onPress={() => router.push(`/cesta?id=${id}`)}>
        <FontAwesome name="cutlery" size={20} color="#fff" />
        <Text style={styles.actionButtonText}>Ver Cardápio</Text>
      </TouchableOpacity>
    )}

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>← Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#e63946",
    marginBottom: 8,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#444",
    marginBottom: 24,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1d3557",
    marginTop: 20,
    marginBottom: 8,
  },
  contactButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  contactText: {
    fontSize: 16,
    marginLeft: 8,
    color: "#333",
  },
  backButton: {
    marginTop: 30,
    alignSelf: "center",
  },
  backButtonText: {
    fontSize: 16,
    color: "#e63946",
    textDecorationLine: "underline",
  },
  
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e63946",
    paddingVertical: 14,
    borderRadius: 10,
    marginVertical: 10,
  },
  
  actionButtonText: {
    fontSize: 16,
    color: "#fff",
    marginLeft: 8,
    fontWeight: "600",
  },
  
});
