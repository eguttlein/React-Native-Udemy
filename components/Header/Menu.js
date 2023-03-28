import {Link} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';

export default function Menu() {
  return (
    <View style={styles.menuContainer}>
      <Link style={styles.menuItem} to={{screen: 'Home'}}>
        Home
      </Link>
      <Link style={styles.menuItem} to={{screen: 'About'}}>
        About
      </Link>
      <Link style={styles.menuItem} to={{screen: 'Contact'}}>
        Contact
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItem: {
    marginHorizontal: 10,
    color: '#154c79',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
