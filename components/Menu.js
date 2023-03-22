import {StyleSheet, Text, View} from 'react-native';

export default function Menu() {
  return (
    <View style={styles.menuContainer}>
      <Text style={styles.menuItem}>Home</Text>
      <Text style={styles.menuItem}>About</Text>
      <Text style={styles.menuItem}>Contact</Text>
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
