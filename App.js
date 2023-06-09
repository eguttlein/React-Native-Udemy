import {LinearGradient} from 'expo-linear-gradient';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Header from './components/Header/Header';
import List from './components/Card/List';
import About from './components/About/About';
import Profile from './components/Card/Profile';
import Contact from './components/Contact/Contact';

import {QueryClient, QueryClientProvider} from 'react-query';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

export default function App() {
  return (
    <LinearGradient colors={['#1e81b0', '#e28743']} style={styles.rootView}>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <Header />
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={List} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Contact" component={Contact} />
          </Stack.Navigator>
        </QueryClientProvider>
      </NavigationContainer>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
  },
});
