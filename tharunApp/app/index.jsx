

import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apps</Text>

      <View style={styles.grid}>
        <TouchableOpacity style={[styles.card, { backgroundColor: "#FF6B6B" }]}>
          <Text style={styles.cardText}>Music</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, { backgroundColor: "#4ECDC4" }]}>
          <Text style={styles.cardText}>Gallery</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, { backgroundColor: "#45B7D1" }]}>
          <Text style={styles.cardText}>Videos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, { backgroundColor: "#F7B801" }]}>
          <Text style={styles.cardText}>Notes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, { backgroundColor: "#9B59B6" }]}>
          <Text style={styles.cardText}>Games</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, { backgroundColor: "#1ABC9C" }]}>
          <Text style={styles.cardText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 25,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
  },
  card: {
    width: 150,
    height: 120,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  cardText: {
    fontSize: 22,
    fontWeight: "700",
    color: "#fff",
  },
});
