import { View, Text, StyleSheet } from 'react-native';

export default function ContactScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contacts</Text>

      <Text style={styles.contact}>👤 John Doe – 9876543210</Text>
      <Text style={styles.contact}>👤 Sarah Wilson – 9123456780</Text>
      <Text style={styles.contact}>👤 David Miller – 9988776655</Text>
      <Text style={styles.contact}>👤 Emma Smith – 9090909090</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  contact: { fontSize: 20, marginBottom: 12 },
});
