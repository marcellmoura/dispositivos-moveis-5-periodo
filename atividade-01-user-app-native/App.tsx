import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AboutScreen from './src/screens/AboutScreen';
import UsersScreen from './src/screens/UsersScreen';

export default function App() {
  const [screen, setScreen] = useState('users');

  const showingUsers = screen === 'users';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {showingUsers ? <UsersScreen /> : <AboutScreen />}
      </View>

      <View style={styles.navigation}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => setScreen('users')}
        >
          <Text style={[styles.icon, showingUsers && styles.active]}>●</Text>
          <Text style={[styles.label, showingUsers && styles.active]}>
            Usuários
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tab}
          onPress={() => setScreen('about')}
        >
          <Text style={[styles.icon, !showingUsers && styles.active]}>i</Text>
          <Text style={[styles.label, !showingUsers && styles.active]}>
            Sobre
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F6F8',
  },
  content: {
    flex: 1,
  },
  navigation: {
    height: 72,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 20,
    color: '#64748B',
  },
  label: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 4,
  },
  active: {
    color: '#2563EB',
  },
});