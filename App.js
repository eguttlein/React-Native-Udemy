import {LinearGradient} from 'expo-linear-gradient';
import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import Header from './components/Header';
import List from './components/List';

export default function App() {
  return (
    <LinearGradient colors={['#1e81b0', '#e28743']} style={styles.rootView}>
      <ImageBackground
        style={styles.rootView}
        source={require('./assets/fondo.png')}
        resizeMode={'cover'}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootView}>
          <Header />
          <List />
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.1,
  },
});
