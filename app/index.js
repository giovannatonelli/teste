import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome, MaterialIcons, Entypo } from '@expo/vector-icons';

export default function HomeScreen() {
  const router = useRouter();

  const handleLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/fachada-arena.jpg')} style={styles.image} />

      <Text style={styles.title}>Food Park Saborama</Text>
      <Text style={styles.description}>
        O melhor espaço gastronômico da cidade. Sabores incríveis, ambiente acolhedor e diversão para toda a família!
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Localização</Text>
        <Text style={styles.info}>Av. Central, 123 - Centro</Text>
        <TouchableOpacity style={styles.iconButton} onPress={() => handleLink('https://maps.google.com?q=Av.+Central,+123')}>
          <Entypo name="location-pin" size={20} color="#e63946" />
          <Text style={styles.iconButtonText}>Ver no Mapa</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contato</Text>
        <TouchableOpacity style={styles.iconButton} onPress={() => handleLink('tel:+5548999999999')}>
          <MaterialIcons name="phone" size={20} color="#e63946" />
          <Text style={styles.iconButtonText}>Ligar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={() => handleLink('https://wa.me/5548999999999')}>
          <FontAwesome name="whatsapp" size={20} color="#25D366" />
          <Text style={styles.iconButtonText}>WhatsApp</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={() => handleLink('mailto:contato@saborama.com')}>
          <MaterialIcons name="email" size={20} color="#e63946" />
          <Text style={styles.iconButtonText}>E-mail</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Redes Sociais</Text>
        <TouchableOpacity style={styles.iconButton} onPress={() => handleLink('https://instagram.com/saborama')}>
          <FontAwesome name="instagram" size={20} color="#C13584" />
          <Text style={styles.iconButtonText}>Instagram</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={() => handleLink('https://saborama.com')}>
          <FontAwesome name="globe" size={20} color="#1d3557" />
          <Text style={styles.iconButtonText}>Website</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.mainButton} onPress={() => router.push('/lojas')}>
        <Text style={styles.mainButtonText}>Ver Lojas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.mainButton} onPress={() => router.push('/eventos')}>
        <Text style={styles.mainButtonText}>Ver Eventos</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 24,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#e63946',
    textAlign: 'center',
    marginBottom: 6,
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
  },
  section: {
    width: '100%',
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1d3557',
    marginBottom: 8,
  },
  info: {
    fontSize: 16,
    color: '#444',
    marginBottom: 8,
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  iconButtonText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
  },
  mainButton: {
    backgroundColor: '#e63946',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 3,
    marginTop: 10,
    marginBottom: 40,
  },
  mainButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});
