import {StyleSheet, Text, View} from 'react-native';

export default function Brand() {
  return (
    <View style={styles.brandContainer}>
      <Text style={styles.brandTitle}>HumahnDB</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  brandContainer: {
    justifyContent: 'center',
    flex: 2,
  },
  brandTitle: {
    color: '#154c79',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
