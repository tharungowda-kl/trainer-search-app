import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      {/* Profile Picture */}
      <Image 
        source={{ uri: "https://via.placeholder.com/150" }}
        style={styles.profileImage}
      />

      {/* Name */}
      <Text style={styles.label}>Your Name</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Enter your name"
      />

      {/* Bio */}
      <Text style={styles.label}>Bio</Text>
      <TextInput 
        style={[styles.input, styles.bioInput]} 
        placeholder="Tell something about yourself"
        multiline
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#000',
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
  },
  bioInput: {
    height: 80,
  }
});
