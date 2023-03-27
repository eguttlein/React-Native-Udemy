import {StyleSheet, Text, View} from 'react-native';

export default function Card({userInfo}) {
  const {item} = userInfo;
  const {name, username, email, phone, website} = item;

  return (
    <View style={styles.cardContainer}>
      <View style={styles.personalInfo}>
        <Text style={styles.cardItem}>Name:</Text>
        <Text>{name}</Text>
      </View>
      <View style={styles.personalInfo}>
        <Text style={styles.cardItem}>User:</Text>
        <Text>{username}</Text>
      </View>
      <Text style={styles.informationLabel}>Personal Information:</Text>
      <View style={styles.personalInfo}>
        <Text style={styles.cardItem}>Email:</Text>
        <Text>{email}</Text>
      </View>
      <View style={styles.personalInfo}>
        <Text style={styles.cardItem}>Phone:</Text>
        <Text>{phone}</Text>
      </View>
      <View style={styles.personalInfo}>
        <Text style={styles.cardItem}>Website:</Text>
        <Text>{website}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: 20,
    backgroundColor: '#eeeee4',
    opacity: 0.8,
    borderRadius: 12,
    marginVertical: 10,
  },
  personalInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardItem: {
    color: '#154c79',
    fontSize: 15,
  },
  informationLabel: {
    marginTop: 15,
    color: '#154c79',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
