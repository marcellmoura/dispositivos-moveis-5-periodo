import { StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre</Text>

      <View style={styles.card}>
        <Text style={styles.appName}>User App Native</Text>
        <Text style={styles.text}>
          Aplicativo desenvolvido para a disciplina de Dispositivos Móveis.
        </Text>
        <Text style={styles.text}>Atividade 01</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#F3F6F8',
  },
  title: {
    fontSize: 23,
    fontWeight: '500',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 28,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 20,
  },
  appName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 14,
  },
  text: {
    fontSize: 16,
    color: '#475569',
    marginBottom: 10,
  },
});