import { View, Text, StyleSheet } from 'react-native';

export default function ProjectsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Projects</Text>
      <Text style={styles.item}>• Portfolio Website</Text>
      <Text style={styles.item}>• Shopping App</Text>
      <Text style={styles.item}>• Weather Finder</Text>
      <Text style={styles.item}>• Task Manager</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  item: { fontSize: 20, marginBottom: 12 },
});
