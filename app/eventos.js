import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import { WebView } from "react-native-webview";
import { eventosData } from "../data/eventos";

const { width } = Dimensions.get("window");

export default function Eventos() {
  const renderItem = ({ item }) => {
    const videoId = item.videoUrl.split("v=")[1];

    return (
      <View style={styles.card}>
        <Text style={styles.dia}>{item.dia}</Text>
        <Text style={styles.artista}>{item.artista}</Text>
        <Text style={styles.descricao}>{item.descricao}</Text>
        <WebView
          style={styles.video}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
        />
      </View>
    );
  };

  return (
    <FlatList
      data={eventosData}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  card: {
    marginBottom: 24,
    backgroundColor: "#f1faee",
    padding: 16,
    borderRadius: 10,
    elevation: 2,
  },
  dia: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1d3557",
  },
  artista: {
    fontSize: 16,
    marginTop: 4,
    color: "#e63946",
  },
  descricao: {
    fontSize: 14,
    color: "#555",
    marginBottom: 12,
  },
  video: {
    height: 200,
    width: width - 32,
    borderRadius: 10,
    backgroundColor: "#000",
  },
});
