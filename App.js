import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Container from './frontend/Container';

export default function App() {
  return (
    <View style={styles.container}>
      <Container />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
