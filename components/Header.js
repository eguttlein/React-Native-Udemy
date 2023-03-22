import {StyleSheet, View} from 'react-native';
import Brand from './Brand';
import Menu from './Menu';

export default function Header() {
  return (
    <View style={styles.container}>
      <Brand />
      <Menu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#abdbe3',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
